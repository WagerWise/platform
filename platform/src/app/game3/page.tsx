"use client";
import { React, useEffect, useState } from "react";
import { DashboardLayout } from "../components2/Layout";

const page = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      setShowPopup(true);
      playSound();
      handleSpin();
      setTimeout(() => {
        setShowPopup(false);
        setTimeLeft(10);
      });
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const playSound = () => {
    const audio = new Audio(`/happy-pop.mp3`);
    audio.play();
  };
  const [number, setNumber] = useState(Math.ceil(Math.random() * 1000));

  const handleSpin = () => {
    setNumber(number + Math.ceil(Math.random() * 1000));
  };

  return (
    <DashboardLayout>
      {" "}
      <div className="items-center justify-center">
        <div
          className="line rounded-xl"
          style={{ width: `${(timeLeft / 10) * 100}%` }}
        ></div>
        <div className="flex items-center  mb-2 text-2xl gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
            className="text-primary"
          >
            <path
              fill="currentColor"
              d="M208 96a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-12-24a12 12 0 1 0-12-12a12 12 0 0 0 12 12m28.66 56a8 8 0 0 0-8.63 7.31A88.12 88.12 0 1 1 120.66 40a8 8 0 0 0-1.32-16A104.12 104.12 0 1 0 232 136.66a8 8 0 0 0-7.34-8.66M128 56a72 72 0 1 1-72 72a72.08 72.08 0 0 1 72-72m-8 72a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-40V80a8 8 0 0 0-16 0Zm40-80a12 12 0 1 0-12-12a12 12 0 0 0 12 12"
            />
          </svg>
          0:{timeLeft}
        </div>
        {showPopup && <div className="popup">Let's go!</div>}
      </div>
      <section className="flex flex-row mt-3 gap-3">
        <div className="flex border border-[#222830] w-3/5 h-full">
          <div className="SpinApp ml-5">
            <button id="spin" onClick={handleSpin}>
              🐕
            </button>
            <span className="arrow"></span>
            <div
              className="container"
              style={{ transform: `rotate(${number}deg)` }}
            >
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
              <div className="four"></div>
              <div className="five"></div>
              <div className="six"></div>
              <div className="seven"></div>
              <div className="eight"></div>
            </div>
          </div>
        </div>
        <div className="bg-[#222830] w-2/5 h-56"></div>
      </section>
    </DashboardLayout>
  );
};

export default page;
