import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Image from 'next/image'
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
  
          `flex flex-col fixed z-10 inset-0 xl:hidden lg:hidden items-end bg-black space-y-5 p-4  ${ active ? "-translate-x-0" : "translate-x-full"} transition-all duration-500 ease-in-out`}
        
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
                              href="/aboutExperience"
                              className="flex flex-shrink-0 flex-row text-lg text-white font-thin"
                          >
                              Education & Experience
                          </Link></li>
                          <li><Link
                              href="/philosophy"
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


function AboutExperienceHeader() {

    const [activeAbout, setActiveAbout] = useState(false);
    
    const showAbout = () => {
        setActiveAbout(!activeAbout)
    }

    const [active, setActive] = useState(false);
    
    const showMenu = () => {
        setActive(!active);
    }
 

  return (
    <header className='flex items-center justify-between'>
        
        <div className='flex flex-shrink-0 relative h-[95px] w-[99px] mt-1 2xl:ml-[85px] xl:ml-[85px] lg:ml-[85px] ml-0'>
            <Link href='/'>
            <Image src='/image 5.png' fill='true' className='object-contain'/>
            </Link>
        </div>
       
        <nav className="xl:flex-shrink-0 lg:flex-shrink-0 items-center justify-center xl:flex lg:flex hidden 2xl:mr-[180px] xl:mr-[180px] mr-32">
           
            <div className="relative">
                <button
                    type="button"
                    className="inline-flex items-center justify-center h-full  font-Catamaran text-[20px] font-[500]"
                    onClick={showAbout}
                >
                    About
                    {!activeAbout ? (
                        
                        <img src='/svg/arrow-down.svg' className='relative w-5 h-4'></img>
                        
                    ) : (
                        <img src='/svg/arrow-up.svg'  className='relative w-5 h-7'></img>
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
                            href="/philosophy"
                            className="flex flex-shrink-0 text-sm text-gray-500"
                        >
                            Philosophy
                        </Link>
                    </div>
                </div> }

            </div>

        <ul className='ml-2 flex space-x-4 flex-shrink-0 font-Catamaran text-[20px] font-[500]'>
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
        
        <div>
        <MenuItems showMenu={showMenu} active={active}/>
 
        <div className='relative h-8 w-10 flex xl:hidden lg:hidden 2xl:ml-[500px] xl:ml-[500px] mr-3'>
          <Image onClick={showMenu} src='/svg/menu-outline.svg' alt='Banner' fill='true' className=' object-cover cursor-pointer'/>
        </div>
        
        </div>

    </header>
  )
}

export default AboutExperienceHeader