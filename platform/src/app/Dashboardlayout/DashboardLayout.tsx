import React from 'react'
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return ( 
      <main>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <main className="p-[50px] ">{children}</main>
          </div>
        </div> 
      </main>
    );
  };
  
  export default DashboardLayout;
