import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Image from 'next/image'

function Header() {

    const [activeAbout, setActiveAbout] = useState(false);



  return (

    <header className='flex items-center mt-10 justify-center'>

<nav className="shrink-0 items-center justify-center inline-flex">
        

            <div className="relative">
                <button
                    type="button"
                    className="inline-flex items-center justify-center h-full  font-Catamaran text-[19px] font-[500]"
                    onClick={() => setActiveAbout((prev) => !prev)}
                >
                    About
                    {!activeAbout ? (
                        
                        <img src='/svg/arrow-down.svg' className='relative w-5 h-4'></img>
                        
                    ) : (
                        <img src='/svg/arrow-up.svg'  className='relative w-5 h-7'></img>
                    )}
                         
                    
                </button>

                {activeAbout && <div className="absolute z-10 origin-top-right">
                    <div className="flex space-x-8 mt-2">
                        <Link
                            href="#"
                            className="flex flex-shrink-0 flex-row text-sm text-gray-500"
                        >
                            Education
                        </Link>
                        <Link
                            href="/aboutExperience"
                            className="flex flex-shrink-0 text-sm text-gray-500"
                        >
                            Experience
                        </Link>
                        <Link
                            href="#"
                            className="flex flex-shrink-0 text-sm text-gray-500"
                        >
                            Philosophy
                        </Link>
                    </div>
                </div> }

            </div>

        <ul className='ml-2 flex space-x-4 flex-shrink-0 font-Catamaran text-[19px] font-[500]'>
            <li>
        <Link href="/whatIsCouching">
          What is Coaching
        </Link>
            </li>

            <li>
        <Link href="/contact">
          Contact
        </Link>
            </li>
        </ul>
</nav>
    
<div className='absolute hidden top-[443px] h-[470px] w-[330px] 2xl:h-[470px] xl:h-[470px] lg:h-[450px] md:h-[400px] sm:h-[300px] 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex sm:inline-flex 2xl:w-[1200px] xl:w-[1200px] lg:w-[900px] md:w-[700px] sm:w-[550px]'>

<Image src='/Rectangle 10.png' fill='true' alt='Banner' className='object-cover' />

</div>


<div className='absolute top-[443px] w-[320px] h-[350px] 2xl:hidden xl:hidden lg:hidden sm:hidden'>
    <Image src='/Rectangle 12.png' alt='Banner' fill={true} className='object-cover'/>
</div>

    </header>
  )
}

export default Header