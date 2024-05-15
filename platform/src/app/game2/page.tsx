import React from "react";
import DashboardLayout from "../Dashboardlayout/DashboardLayout";

const page = () => {
  return (
    <DashboardLayout>
      <main>
        <section>
          <div className="flex items-center justify-center w-full hover:scale-80 duration-300">
            <div className="flex items-center justify-center w-60 h-56 bg-cover  bg-no-repeat bg-[url('https://res.cloudinary.com/dtfvdjvyr/image/upload/v1715775396/amico_pctqsg.png')] bg-center hover:border-primary duration-300 "></div>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
};

export default page;
