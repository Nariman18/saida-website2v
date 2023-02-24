import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Image from 'next/image'





function HeaderContact() {
    
    const [activeAbout, setActiveAbout] = useState(false)

  return (
    <header className='items-center mt-10 justify-center'>

<nav className="shrink-0 items-center justify-center xl:inline-flex lg:inline-flex md:inline-flex hidden">
        

            <div className="relative">
                <button
                    type="button"
                    className="inline-flex items-center justify-center h-full  font-Catamaran text-[19px] font-[500]"
                    onClick={() => setActiveAbout((prev) => !prev)}
                >
                    About
                    {!activeAbout ? (
                        
                        <img src='/svg/arrow-down.svg' fill className='relative w-5 h-4'></img>
                        
                    ) : (
                        <img src='/svg/arrow-up.svg' fill className='relative w-5 h-7'></img>
                    )}
                         
                    
                </button>

                {activeAbout && <div className="absolute z-10 origin-top-right">
                    <div className="flex space-x-6 mt-2">
                        <Link
                            href="/aboutExperience"
                            className="flex flex-shrink-0 flex-row text-sm text-gray-500"
                        >
                            Education & Experience
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
    


    </header>
  )
}

export default HeaderContact