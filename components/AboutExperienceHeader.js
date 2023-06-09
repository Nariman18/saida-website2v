import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Image from 'next/image'
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';



const MenuItems = ({ active, showMenu }) => {
    const router = useRouter();

    const [activeAbout, setActiveAbout] = useState(false);
    const { t } = useTranslation('common');
    
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
                      {t("headerAbout")}
                      {!activeAbout ? 
                          
                          <ExpandMoreIcon className='relative w-5 h-7'/>
                       :  
                          <KeyboardArrowUpIcon className='relative w-5 h-7'/>
                      }
                           
                      
                  </button>
  
                  {activeAbout && <div className="relative z-10 origin-top-right transition duration-500 ease-in-out"> 
                      <ul className="flex flex-col mt-2 space-y-2 transition duration-500 ease-out">
                          <li><Link
                              onClick={showMenu}
                              href="/aboutExperience"
                              className="flex flex-shrink-0 flex-row text-lg text-white font-thin"
                          >
                              {t("aboutEducation")}
                          </Link></li>
                          <li><Link
                              onClick={showMenu}
                              href="/philosophy"
                              className="flex flex-shrink-0 text-lg text-white font-thin"
                          >
                              {t("aboutPhilosophy")}
                          </Link></li>
                      </ul>
                  </div> }
  
              </div>
  
  
         
        </li>
        <li className=' font-Catamaran text-2xl font-[400] text-white'>
          <Link onClick={showMenu} href="/whatIsCouching">
          {t('headerCouch')}
          </Link>
        </li>
  
        <li className=' font-Catamaran text-2xl font-[400] text-white'>
          <Link onClick={showMenu} href="/contact">
          {t('headerContact')}
          </Link>
        </li>
      

        <div className='absolute top-[350px] space-x-4'>
            <Link onClick={showMenu} href='/aboutExperience' locale='az' className='uppercase text-white'>
                Az
            </Link>

            <Link onClick={showMenu} href='/aboutExperience' locale='ru' className='uppercase text-white'>
                Ru
            </Link>
            <Link onClick={showMenu} href='/aboutExperience' locale='en' className='uppercase text-white'>
                En
            </Link>
      </div>
       
      </ul>

     
      
      
    );
  };  


function AboutExperienceHeader() {

    const [activeAbout, setActiveAbout] = useState(false);
    const { t } = useTranslation('common');
    
    const showAbout = () => {
        setActiveAbout(!activeAbout)
    }

    

    const [active, setActive] = useState(false);
    
    const showMenu = () => {
        setActive(!active);
    }
 

  return (
    <header className='flex items-center justify-between'>
        
        <div className='flex flex-shrink-0 relative h-[95px] w-[99px] mt-1 2xl:ml-[150px] xl:ml-[100px] lg:ml-[40px] ml-0'>
            <Link href='/'>
            <Image src='/image 5.png' fill='true' className='object-contain'/>
            </Link>
        </div>
       
        <nav className="xl:flex-shrink-0 lg:flex-shrink-0 items-center justify-center xl:flex ml-[190px] lg:flex hidden">
           
            <div className="relative">
                <button
                    type="button"
                    className="inline-flex items-center justify-center h-full  font-Catamaran text-[20px] font-[500]"
                    onClick={showAbout}
                >
                    {t("headerAbout")}
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
                            {t("aboutEducation")}
                        </Link>
                      
                        <Link
                            href="/philosophy"
                            className="flex flex-shrink-0 text-sm text-gray-500"
                        >
                           {t("aboutPhilosophy")}
                        </Link>
                    </div>
                </div> }

            </div>

        <ul className='ml-2 flex space-x-4 flex-shrink-0 font-Catamaran text-[20px] font-[500]'>
            <li>
        <Link href="/whatIsCouching">
          {t('headerCouch')}
        </Link>
            </li>

            <li>
        <Link href="/contact">
          {t('headerContact')}
        </Link>
            </li>
        </ul>

        
        </nav>

        <div className='2xl:flex xl:flex lg:flex hidden gap-2 ml-[180px]'>
             <Link href='/aboutExperience' locale='az' className='uppercase'>
                Az
            </Link>

            <Link href='/aboutExperience' locale='ru' className='uppercase'>
                Ru
            </Link>
            <Link href='/aboutExperience' locale='en' className='uppercase'>
                En
            </Link>
        </div>
        
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