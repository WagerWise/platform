import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='max-w-[410px] w-full border-r-2 border-[#5a5959]  flex justify-center'>
      <div>
      <Image
                                            src="/logo.png"
                                            width={100}
                                            height={100}
                                            alt=""
                                            priority
                                            className="ml-1 rounded-[40%] my-[50px]"
                                        />

      </div>
     
    </div>
  )
}

export default Sidebar