import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation';





function HeaderContact() {

    const { t } = useTranslation('common');
    
    const [activeAbout, setActiveAbout] = useState(false)

  return (
    <header className='flex items-center mt-10 justify-center'>

<nav className="shrink-0 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex hidden 2xl:ml-[460px] xl:ml-[460px] lg:ml-[300px]">
        

            <div className="relative">
                <button
                    type="button"
                    className="inline-flex items-center justify-center h-full  font-Catamaran text-[19px] font-[500]"
                    onClick={() => setActiveAbout((prev) => !prev)}
                >
                    {t("headerAbout")}
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

        <ul className='ml-2 flex items-center justify-between space-x-4 flex-shrink-0 font-Catamaran text-[19px] font-[500]'>
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

        <div className='2xl:flex xl:flex lg:flex hidden gap-2 2xl:ml-[380px] xl:ml-[380px] lg:ml-[230px]'>
            <Link href='/contact' locale='az' className='uppercase text-black'>
                Az
            </Link>

            <Link  href='/contact' locale='ru' className='uppercase text-black'>
                Ru
            </Link>
            <Link  href='/contact' locale='en' className='uppercase text-black'>
                En
            </Link>
        </div>
        
</nav>
    


    </header>
  )
}

export default HeaderContact