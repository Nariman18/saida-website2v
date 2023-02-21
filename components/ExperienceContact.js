import React from 'react'

function ExperienceContact() {
  return (
    <div className='flex flex-col items-center 2xl:mt-52 xl:mt-52 mt-20'>
        <em className='uppercase mb-5 xl:text-[109.07px] lg:text-[109.07px] md:text-[39px] text-[37px] font-Catamaran 2xl:font-[100] xl:font-[100] font-[400]'>
        Let's be in touch.
        </em>

        <form className='xl:space-x-4 lg:space-x-4 xl:space-y-0 lg:space-y-0 space-y-5 mb-10 flex xl:flex-row lg:flex-row flex-col items-center'>
          
            <input type="text" placeholder='YOUR FULL NAME' className='border-2 border-black p-4 pl-4 font-Catamaran font-[300] text-sm text-gray-700 w-[317px]'></input>
            <input type="text" placeholder='PHONE NUMBER' className='border-2 border-black p-4 pl-4 font-Catamaran font-[300] text-sm text-gray-700 w-[317px]'></input>
            <button className='bg-[#2E2E2E] border-2 border-black text-white p-[14px] xl:w-[228px] lg:w-[228px] w-[320px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Send Request</button>

        </form>
    </div>
  )
}

export default ExperienceContact