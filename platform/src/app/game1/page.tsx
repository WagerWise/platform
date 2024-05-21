"use client";
import React, { useState } from "react";
// import DashboardLayout from '../Dashboardlayout/DashboardLayout'
import { DashboardLayout } from "../components2/Layout";
const page = () => {
  const [computerChoice, setComputerChoice] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerPoints, setComputerPoints] = useState(0);
  const [playerPoints, setPlayerPoints] = useState(0);

  const choices = ["STONE", "PAPER", "SCISSORS"];

  const playSound = () => {
    const audio = new Audio(`/happy-pop.mp3`);
    audio.play();
  };
  const handleChoice = (playerSelection) => {
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(playerSelection);
    setComputerChoice(randomChoice);

    if (playerSelection === "STONE") {
      if (randomChoice === "PAPER") {
        setComputerPoints((prev) => prev + 1);
      } else if (randomChoice === "SCISSORS") {
        setPlayerPoints((prev) => prev + 1);
      }
    } else if (playerSelection === "PAPER") {
      if (randomChoice === "SCISSORS") {
        setComputerPoints((prev) => prev + 1);
      } else if (randomChoice === "STONE") {
        setPlayerPoints((prev) => prev + 1);
      }
    } else {
      if (randomChoice === "STONE") {
        setComputerPoints((prev) => prev + 1);
      } else if (randomChoice === "PAPER") {
        setPlayerPoints((prev) => prev + 1);
      }
    }
  };
  return (
    <DashboardLayout>
      <div className="contain w-full mt-10">
        <center>
          <div className="images ml-4">
            <div
              className={`computer ${computerChoice ? "shakeComputer" : ""}`}
            >
              <img
                src={`/${computerChoice}Computer.png`}
                alt="Computer Choice"
              />
            </div>
            <div className={`player ${playerChoice ? "shakePlayer" : ""}`}>
              <img src={`/${playerChoice}Player.png`} alt="Player Choice" />
            </div>
          </div>
        </center>
        <div className="points">
          BONKBOT <span className="computerPoints">{computerPoints}</span> /
          <span className="playerPoints">{playerPoints}</span> PLAYER
        </div>
        <center>
          <div className="options">
            <button onClick={() => handleChoice("STONE")} type="button">
              STONE
            </button>
            <button onClick={() => handleChoice("PAPER")} type="button">
              PAPER
            </button>
            <button onClick={() => handleChoice("SCISSORS")} type="button">
              SCISSORS
            </button>
          </div>
        </center>
      </div>
    </DashboardLayout>
  );
};

export default page;
