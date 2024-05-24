import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SupportEngine from "./components2/SupportEngine/page";
import WalletContextProvider from "./components2/wallet/WalletContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WagerWise",
  description: "Bonk Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WalletContextProvider>{children}</WalletContextProvider>
        {/* <SupportEngine /> */}
      </body>
    </html>
  );
}
