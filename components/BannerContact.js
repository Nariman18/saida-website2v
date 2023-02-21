import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Image from 'next/image'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const MenuItems = ({ active, showMenu }) => {

  const [activeAbout, setActiveAbout] = useState(false);
  
  const showAbout = () => {
      setActiveAbout(!activeAbout)
  }

  return (
    <ul
      className={ 

        `flex flex-col fixed z-10 inset-0 xl:hidden lg:hidden md:hidden items-end bg-black space-y-5 p-4  ${ active ? "-translate-x-0" : "translate-x-full"} transition-all duration-500 ease-in-out`}
      
    >
      <img onClick={showMenu} src='svg/white line.png' fill='true' className="cursor-pointer h-[30x] w-[40px] text-white mb-5 mt-[13px] mr-2" />
      <li className=' text-white'>
        

        <div className="relative">
                <button
                    type="button"
                    className={`inline-flex items-center justify-center h-full  font-Catamaran text-2xl font-[400]`}
                    onClick={showAbout}
                >
                    About
                    {!activeAbout ? 
                        
                        <ExpandMoreIcon className='relative w-5 h-7'/>
                     :  
                        <KeyboardArrowUpIcon className='relative w-5 h-7'/>
                    }
                         
                    
                </button>

                {activeAbout && <div className="relative z-10 origin-top-right transition duration-500 ease-in-out"> 
                    <ul className="flex flex-col mt-2 space-y-2 transition duration-500 ease-out">
                        <li><Link
                            href="/"
                            className="flex flex-shrink-0 flex-row text-lg text-white font-thin"
                        >
                            Education
                        </Link></li>
                        <li><Link
                            href="/aboutExperience"
                            className="flex flex-shrink-0 text-lg text-white font-thin"
                        >
                            Experience
                        </Link></li>
                        <li><Link
                            href="/"
                            className="flex flex-shrink-0 text-lg text-white font-thin"
                        >
                            Philosophy
                        </Link></li>
                    </ul>
                </div> }

            </div>


       
      </li>
      <li className=' font-Catamaran text-2xl font-[400] text-white'>
        <Link href="/whatIsCouching">
        What is Coaching
        </Link>
      </li>

      <li className=' font-Catamaran text-2xl font-[400] text-white'>
        <Link href="/contact">
          Contact
        </Link>
      </li>
    
     
    </ul>
    
  );
};

function BannerContact() {
  
  
  const [active, setActive] = useState(false);

  const showMenu = () => {
      setActive(!active);
    };

  return (
    <div>

    <div className='relative xl:h-[320px] lg:h-[320px] md:h-[320px] sm:h-[320px] bg-[#171717] xl:flex lg:flex md:flex hidden flex-col items-center justify-center'>

        <div className='absolute xl:h-[220px] lg:h-[220px] md:h-[220px] h-[270px] w-[200px] flex items-center justify-center xl:mt-0 lg:mt-0 md:mt-0 sm:mt-60'>
        <Image src='/image 2.png' fill='true' alt='Banner' className=' object-cover'/>

        <div className='relative h-0 w-0 animate-pulse rounded-full mr-[10px] mt-[14px]'>
          <FiberManualRecordIcon className='h-0 w-0 text-transparent'/>
        </div>

        </div>

    </div>

      <nav className='flex items-center justify-between xl:hidden lg:hidden md:hidden mt-3'>  
        <MenuItems showMenu={showMenu} active={active}/>

        <Link href='/'>

        <Image href='/' src='/image 3.png' alt='Logo' width='76' height='73'  className=' object-cover ml-3 cursor-pointer'/>
        
        </Link>
        
        <div className='relative h-8 w-10 mr-6'>
          <Image onClick={showMenu} src='/svg/menu-outline.svg' alt='Banner' fill='true' className=' object-cover cursor-pointer'/>
        </div>
        
     </nav> 

    </div>

   
  )
}

export default BannerContact