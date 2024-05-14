import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='h-[90px] border-b-2 border-[#5a5959] items-center justify-between flex lg:px-[55px] px-[15px]'>
        <div className='flex  gap-[40px]'>
            <Link href="/dashboard">
            <div className='w-[110px] bg-[#6e6b6b11] h-[90px] items-center justify-center flex cursor-pointer hover:opacity-[0.5]'>GAME 1</div></Link>
            <Link href="/game2"><div className='w-[110px] bg-[#6e6b6b11] h-[90px] items-center justify-center flex cursor-pointer hover:opacity-[0.5]'>GAME 2</div></Link>
            <Link href="/game3"> <div className='w-[110px] bg-[#6e6b6b11] h-[90px] items-center justify-center flex cursor-pointer hover:opacity-[0.5]'>GAME 3</div></Link>
           
        </div>
        <div className='flex items-center gap-[20px]'>
            <div className='flex flex-col items-center'>
                <span>0.00 Bonk</span>
                <p className='text-[16px] font-bold'>Balance</p>
            </div>
            <div className='text-[16px] font-bold bg-[#33a064] rounded-md py-[10px] w-[100px] flex items-center justify-center cursor-pointer'>Deposit</div>
        </div>
    </div>
  )
}

export default Header