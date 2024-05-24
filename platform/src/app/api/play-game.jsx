import { Connection, PublicKey, Transaction, Keypair } from "@solana/web3.js";
import {
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
  createTransferInstruction,
} from "@solana/spl-token";
import dotenv from "dotenv";

dotenv.config();

const connection = new Connection(process.env.SOLANA_RPC_URL, "confirmed");
const bonkTokenMintAddress = new PublicKey(
  "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
);
const gameAuthority = new PublicKey(
  "GzJj5ubCzEbakT6zrcnArnVeNAGBsEkVx6LLkCEMdBvT"
);
const loserAccount = new PublicKey(
  "BYXNFfUKTsWYzoXgZHTKtjBmpbSnwsEQqUz6RyfBKQRm"
);
const gameAuthorityKeypair = Keypair.fromSecretKey(
  new Uint8Array(JSON.parse(process.env.GAME_AUTHORITY_SECRET_KEY))
);

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { userPublicKey, isUserWin, userSignedTx } = req.body;

  if (!userPublicKey || !userSignedTx || typeof isUserWin !== "boolean") {
    return res
      .status(400)
      .send({
        error:
          "User public key, signed transaction, and win status are required",
      });
  }

  const userPubKey = new PublicKey(userPublicKey);

  try {
    const userSignedTransaction = Transaction.from(
      Buffer.from(userSignedTx, "base64")
    );

    const recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
    userSignedTransaction.recentBlockhash = recentBlockhash;

    const userTokenAccount = await getAssociatedTokenAddress(
      bonkTokenMintAddress,
      userPubKey
    );

    const gameAuthorityTokenAccount = await getAssociatedTokenAddress(
      bonkTokenMintAddress,
      gameAuthority
    );

    const stakeInstruction = createTransferInstruction(
      userTokenAccount,
      gameAuthorityTokenAccount,
      userPubKey,
      100 * 10 ** 5
    );

    const transaction = new Transaction().add(stakeInstruction);

    if (isUserWin) {
      const winInstruction = createTransferInstruction(
        gameAuthorityTokenAccount,
        userTokenAccount,
        gameAuthority,
        200 * 10 ** 5
      );
      transaction.add(winInstruction);
    } else {
      const loseInstruction = createTransferInstruction(
        gameAuthorityTokenAccount,
        loserAccount,
        gameAuthority,
        100 * 10 ** 5
      );
      transaction.add(loseInstruction);
    }

    transaction.recentBlockhash = recentBlockhash;
    transaction.feePayer = gameAuthority;
    transaction.partialSign(gameAuthorityKeypair);

    const combinedTransaction = Transaction.from(
      userSignedTransaction.serialize()
    );
    combinedTransaction.add(transaction);

    const serializedTransaction = combinedTransaction.serialize();
    const signature = await connection.sendRawTransaction(
      serializedTransaction
    );
    await connection.confirmTransaction(signature);

    res.send({ success: true, signature });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
