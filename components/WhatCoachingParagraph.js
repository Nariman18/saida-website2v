import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'


function WhatCoachingParagraph() {

        const { t } = useTranslation('common');

        const router = useRouter()

        useEffect(() => {
          router.push(router.pathname, router.asPath, { locale: 'en' });
        }, []);

  return (
    <div className='flex flex-col p-3 mt-5'>

        {/*Chapter I*/}
        <div>


        
        <p className='2xl:px-[183px] xl:px-[183px] lg:px-[95px] md:px-[20px] text-[#848484] px-0 mt-2 font-georgia font-[400] text-lg'>{t('couchFirParFirText')}</p>
       

        
        <p className='2xl:px-[183px] xl:px-[183px] lg:px-[95px] md:px-[20px] text-[#848484] px-0 font-georgia font-[400] text-lg'>{t('couchSecParFirText')}</p>

        </div>

        {/*Chapter II*/}
        <div className='mt-10'>
       

        
        <p className='2xl:px-[183px] xl:px-[183px] lg:px-[95px] md:px-[20px] text-[#848484] px-0 mt-2 font-georgia font-[400] text-lg'>{t('couchFirParSecText')}</p>


        
        <p className='2xl:px-[183px] xl:px-[183px] lg:px-[95px] md:px-[20px] px-0 text-[#848484] font-georgia font-[400] text-lg'>{t('couchSecParSecText')}</p>
        </div>

        {/*Chapter III*/}
        <div className='mt-10'>
        

        
        <p className='2xl:px-[183px] xl:px-[183px] lg:px-[95px] md:px-[20px] text-[#848484] px-0 mt-2 font-georgia font-[400] text-lg'>{t('couchFirParThirdText')}</p>


        
        <p className='2xl:px-[183px] xl:px-[183px] lg:px-[95px] md:px-[20px] text-[#848484] px-0 font-georgia font-[400] text-lg'>{t('couchSecParThirdText')}</p>
        </div>
    </div>
  )
}

export default WhatCoachingParagraph