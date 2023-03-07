import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
  return (
  <div className='text-red-500'>
  <p>Your message has been sent.</p>
</div>
  )  
} 

function PhilosophyContact() {

  const [result, showResult] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE, process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE, form.current, process.env.NEXT_PUBLIC_EMAIL_JS_USER)
      .then((result) => {

          console.log(result.text);
        console.log('message was sent')
        showResult(true)

      }, (error) => {
          alert(error.text)
      });
      
      form.current.reset()
    
  };

  setTimeout(() => {
    showResult(false)
  }, 3000)



  return (
    <div className='flex flex-col items-center 2xl:mt-[1690px] xl:mt-[1690px] mt-28'>
        <em className='uppercase mb-5 xl:text-[109.07px] lg:text-[109.07px] md:text-[39px] text-[37px] font-Catamaran 2xl:font-[100] xl:font-[100] font-[400]'>
        Let's be in touch.
        </em>

        <form ref={form} onSubmit={sendEmail} className='2xl:space-x-4 xl:space-x-4 lg:space-x-4 xl:space-y-0 lg:space-y-0 space-y-5 flex 2xl:flex-row xl:flex-row lg:flex-row flex-col items-center'>
          
            <input required name='user_name' type="text" placeholder='YOUR FULL NAME' className='border-2 border-black p-4 pl-4 font-Catamaran font-[300] text-sm text-gray-700 w-[317px]'></input>
            <input required name='user_phone' type="text" placeholder='PHONE NUMBER' className='border-2 border-black p-4 pl-4 font-Catamaran font-[300] text-sm text-gray-700 w-[317px]'></input>
            <button value='Send' className='bg-[#2E2E2E] border-2 border-black text-white p-[14px] xl:w-[228px] lg:w-[228px] w-[320px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Send Request</button>
           
        </form>
        <div className='absolute text-red-500 2xl:mt-[245px] xl:mt-[245px] lg:mt-[245px] 2xl:ml-[660px] xl:ml-[660px] lg:ml-[660px] mt-[286px]'>{result ? <Result/> : null}</div>
    </div>
  )
}

export default PhilosophyContact