import React from 'react'
import Image from 'next/image'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Link from 'next/link';

function Banner() {
  return (
    <div className='2xl:h-[320px] xl:h-[320px] lg:h-[320px] md:h-[320px] h-[320px] bg-[#171717] flex flex-col items-center justify-center'>


        <div className='absolute 2xl:h-[220px] xl:h-[220px] lg:h-[220px] md:h-[220px] h-[150px] w-[200px] flex items-center justify-center'>
        <Image src='/image 2.png' fill='true' alt='Banner' className=' object-cover'/>

        <div className='relative h-0 w-0 animate-pulse rounded-full mr-[10px] mt-[14px]'>
          <FiberManualRecordIcon className='h-0 w-0 text-transparent'/>
        </div>

        </div>



      

    </div>

   
  )
}

export default Banner