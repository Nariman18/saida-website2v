import React from 'react'
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

function ExperienceParagraphs() {

  const { t } = useTranslation('common');
  const router = useRouter()

  useEffect(() => {
    router.push(router.pathname, router.asPath, { locale: 'en' });
  }, []);
  
  return (
    <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3'>
        <div className='inline-block 2xl:mt-[90px] xl:mt-[90px] lg:mt-[90px] mt-[100px] 2xl:ml-[100px] xl:ml-[100px] lg:ml-[40px]'>
            <p className=' text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200]'>{t('firDescFirPar')}</p>
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200]'>{t('firDescSecPar')}</p>
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200]  decoration-1 decoration-gray-300'>{t('firDescThirdPar')}</p>
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200]  decoration-1 decoration-gray-300'>{t('firDescFourthPar')}</p>

        </div>

        <div className=' 2xl:mt-[630px] xl:mt-[630px] mt-[100px] lg:mt-[630px] 2xl:ml-[150px] xl:ml-[150px] lg:ml-[40px]'>
            
            
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200]'>


            {t('secDescPar')}</p>
           
        </div>

        <div className='2xl:mt-[940px] xl:mt-[940px] lg:mt-[940px] mt-[100px] 2xl:ml-[150px] xl:ml-[150px] lg:ml-[35px]'>

        <p className='hidden 2xl:inline-flex xl:inline-flex lg:inline-flex text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200] decoration-1 decoration-gray-300'>{t('thirdDescFirPar')}</p>

        

<p className='md:hidden text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200] decoration-1 decoration-gray-300'>{t('thirdDescFirPar')}</p>

            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200]'>{t('thirdDescSecPar')}</p>
            <p className='text-[#848484] text-left w-[310px] text-[16px] font-georgia font-[200]'>{t('thirdDescThirdPar')}</p>


           
        </div>
    </div>
  )
}

export default ExperienceParagraphs