import React from 'react'
import Image from 'next/image'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Link from 'next/link';

function Banner() {
  return (
    <div className='2xl:h-[320px] xl:h-[320px] lg:h-[320px] md:h-[320px] bg-[#171717] flex flex-col items-center'>

        <div className='md:hidden lg:hidden xl:hidden mt-[80px]'>
          <em className='text-2xl font-Catamaran'><span className='text-white'>Saida</span><span className='text-[#A0A0A0] font-thin'>Abdullayeva</span></em>
        </div>

        <div className='absolute 2xl:h-[220px] xl:h-[220px] lg:h-[220px] md:h-[220px] h-[150px] w-[200px] flex items-center justify-center 2xl:top-[50px] xl:top-[50px] lg:top-[50px] md:top-[50px] top-[205px]'>
        <Image src='/image 2.png' fill='true' alt='Banner' className=' object-cover'/>

        <div className='relative h-0 w-0 animate-pulse rounded-full mr-[10px] mt-[14px]'>
          <FiberManualRecordIcon className='h-0 w-0 text-transparent'/>
        </div>

        </div>

        <div className='space-y-5 2xl:hidden xl:hidden lg:hidden md:hidden 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-[350px] mb-[100px]'>

          <div className='space-x-5 text-xl font-Catamaran'>
            <Link href='/' className='text-white'>
            Education
            </Link>
            <Link href='/aboutExperience' className='text-white'>
            Experience
            </Link>
            <Link href='/' className='text-white'>
            Philosophy
            </Link>
          </div>

          <div className='space-x-5 ml-8 text-xl font-Catamaran'>
          <Link href='/whatIsCouching' className='text-white'>
            What is Coaching
          </Link>
          <Link href="/contact" className='text-white'>
          Contact
        </Link>
          </div>
          
        </div>

      

    </div>

   
  )
}

export default Banner