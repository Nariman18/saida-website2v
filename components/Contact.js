import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ResultError = () => {
  <div>
    <p>Error. The message has not been sent.</p>
  </div>
}
 

const Result = () => {
  return (
  <div>
  <p>The message has been sent.</p>
</div>
  )  
} 

function Contact() {
  const [error, setError] = useState(false)
  
  const [result, showResult] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE, process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE, form.current, process.env.NEXT_PUBLIC_EMAIL_JS_USER)
      .then((result) => {

        console.log(result.text)
        console.log('message was sent')
        showResult(true)
        
      }, (error) => {

          setError(true);
          alert(error.text)

      });
      form.current.reset()
  };

  setTimeout(() => {
    showResult(false)
  }, 3000)

  return (
    <div className='xl:mt-20 lg:mt-20 md:mt-20 mt-14 flex flex-col items-center'>
        <em  className='uppercase mb-7 2xl:text-[108.07px] xl:text-[108.07px] lg:text-[108.07px] md:text-[49.07px] text-[36.99px] font-Catamaran font-[300]'>
        Let's be in touch.
        </em>

        <form ref={form} onSubmit={sendEmail} className='xl:space-x-4 lg:space-x-4 xl:space-y-0 lg:space-y-0 space-y-5 mb-20 flex xl:flex-row lg:flex-row flex-col items-center'>
          
            <input required name='user_name' type="text" placeholder='YOUR FULL NAME' className='flex-grow border-2 border-black p-4 pl-4 font-Catamaran text-sm text-gray-500 w-[315px]'></input>
            <input required name='user_phone' type="text" placeholder='PHONE NUMBER' className='flex-grow border-2 border-black p-4 pl-4 font-Catamaran text-sm text-gray-500 w-[315px]'></input>
            <button value='Send' type='submit' className='bg-[#2E2E2E] border-2 border-black text-white p-[14px] xl:w-[210px] lg:w-[210px] w-[315px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Send Request</button>
            
        </form>
        <div className='absolute text-red-500 2xl:mt-[245px] xl:mt-[245px] lg:mt-[245px] md:mt-[370px] 2xl:ml-[660px] xl:ml-[660px] lg:ml-[660px] mt-[290px]'>{result ? <Result /> : null}</div>
        <div className='absolute text-red-500 2xl:mt-[245px] xl:mt-[245px] lg:mt-[245px] md:mt-[370px] 2xl:ml-[660px] xl:ml-[660px] lg:ml-[660px] mt-[290px]'>{error ? <ResultError /> : null}</div>
    </div>
  )


}

export default Contact