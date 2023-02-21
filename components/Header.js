import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Image from 'next/image'

function Header() {

    const [activeAbout, setActiveAbout] = useState(false);



  return (

    <header className='flex items-center mt-10 justify-center'>

<nav className="shrink-0 items-center justify-center xl:inline-flex lg:inline-flex md:inline-flex hidden">
        

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
          What is Couching
        </Link>
            </li>

            <li>
        <Link href="/contact">
          Contact
        </Link>
            </li>
        </ul>
</nav>
    
<div className='absolute  top-[443px] h-[460px] xl:w-[1200px] lg:w-[900px] md:w-[700px] xl:inline-flex lg:inline-flex md:inline-flex hidden'>

<Image src='/Rectangle 10.png' fill='true' alt='Banner' className='object-cover' />

</div>

    </header>
  )
}

export default Header