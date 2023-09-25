import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function PhilosophyBody() {

  const { t } = useTranslation('common')
  const router = useRouter()

  useEffect(() => {
    router.push(router.pathname, router.asPath, { locale: 'en' });
  }, []);

  return (
    <div>


    <div className='relative 2xl:flex-none xl:flex-none 2xl:items-start xl:items-start flex flex-col items-center 2xl:mt-0 xl:mt-0'>
 
    <img src='/Rectangle 6.png' alt='Banner' className='2xl:absolute xl:absolute relative 2xl:w-[853px] xl:w-[853px] lg:w-[760px] md:w-[653px] sm:w-[653px] w-[310px] 2xl:h-[657px] xl:h-[657px] lg:h-[657px] md:h-[550px] h-[300px] 2xl:left-[345px] xl:left-[345px] 2xl:top-[10px] xl:top-[10px] object-contain'/>  
    
            <div className='2xl:absolute xl:absolute relative 2xl:top-[750px] xl:top-[750px] 2xl:left-[200px] xl:left-[200px] 2xl:mt-0 xl:mt-0 mt-20'>
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200]'>{t('philosFirParFirText')}</p>
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200]'>{t('philosSecParFirText')}</p>
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200] decoration-1 decoration-gray-300'>{t('philosThirdParFirText')}</p>
            </div>  

            <div className='2xl:absolute xl:absolute relative 2xl:top-[1070px] xl:top-[1070px] 2xl:left-[640px] xl:left-[640px] 2xl:mt-0 xl:mt-0 mt-20'>
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200]'>{t("philosFirParSecText")}</p>
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200]'>{t("philosSecParSecText")}</p>
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200] decoration-1 decoration-gray-300'>{t("philosThirdParSecText")}</p>
            </div> 

            <div className='2xl:absolute xl:absolute relative 2xl:top-[1650px] xl:top-[1570px] 2xl:left-[1066px] xl:left-[1066px] 2xl:mt-0 xl:mt-0 mt-20'>
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200]'>{t("philosFirParThirdText")}</p>
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200]'>{t("philosSecParThirdText")}</p>
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200] decoration-1 decoration-gray-300'>{t("philosThirdParThirdText")}</p>
            </div> 
       
        
    </div> 

    </div>
  )
}

export default PhilosophyBody