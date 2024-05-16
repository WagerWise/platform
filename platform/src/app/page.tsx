import Image from "next/image";

import { DashboardLayout } from "./components2/Layout";
export default function Home() {
  return (
    <main className="">
      <DashboardLayout>
        <main className="flex items-center justify-center h-[100vh] flex-col">
          <Image
            src="/logo.png"
            width={150}
            height={150}
            alt="Twitter White"
            priority
            className="ml-1"
          />

          <div className="max-w-[800px]">
            <h1 className="text-[36px] font-bold">WagerWise</h1>
            <h1>
              The Bonk Gaming Platform revolutionizes the gaming industry by
              offering a unique opportunity for gamers to earn Bonk tokens, a
              Solana-based cryptocurrency, simply by playing their favorite
              games. This presentation introduces the concept, highlighting its
              benefits and the problems it aims to solve.
            </h1>
            <p>Where Fun Meets Fortune</p>
            <div className="text-[24px] font-bold my-[30px] flex items-center justify-center">
              Join the waitlist
            </div>
            <input
              type="text"
              className="rounded-[6px] h-[50px] w-full pl-[20px] text-[#000]"
              placeholder="name@gmail.com"
            />

            <div className=" text-[20px] rounded-[6px] my-[15px] h-[40px] w-full bg-[#111] text-[#fff] items-center justify-center cursor-pointer font-bold flex hover:text-[#111] hover:bg-[#fdfe00] transition duration-300 ease-in ">
              Submit
            </div>
          </div>
        </main>
      </DashboardLayout>
    </main>
  );
}
