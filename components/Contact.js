import React, { useState } from 'react'



function Contact() {
  

  return (
    <div className='xl:mt-20 lg:mt-20 md:mt-20 mt-14 flex flex-col items-center'>
        <em  className='uppercase mb-7 xl:text-[109.07px] lg:text-[109.07px] md:text-[89.07px] text-[39px] font-Catamaran font-[300]'>
        Let's be in touch.
        </em>

        <form className='xl:space-x-4 lg:space-x-4 xl:space-y-0 lg:space-y-0 space-y-5 mb-20 flex xl:flex-row lg:flex-row flex-col items-center'>
          
            <input type="text" placeholder='YOUR FULL NAME' className='flex-grow border-2 border-black p-4 pl-4 font-Catamaran text-sm text-gray-500 w-[315px]'></input>
            <input type="text" placeholder='PHONE NUMBER' className='flex-grow border-2 border-black p-4 pl-4 font-Catamaran text-sm text-gray-500 w-[315px]'></input>
            <button className='bg-[#2E2E2E] border-2 border-black text-white p-[14px] xl:w-[210px] lg:w-[210px] w-[315px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Send Request</button>
        </form>
    </div>
  )


}

export default Contact