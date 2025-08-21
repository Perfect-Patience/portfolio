import React from 'react'
import github from '../assets/gitHubIcon.png';
import linkedIn from '../assets/linkedInIcon.png';

function Contact() {
  return (
    <section id="contact" className='py-20 px-5' style={{backgroundColor: "oklch(0.25 0.1 282.21)"}}>
      <div className='max-w-[1200px] mx-auto flex lg:flex-row flex-col items-center gap-4'>
        <div className=' lg:w-1/2 mx-auto  flex flex-col gap-8 md:w-[80%] '>
        <h4 className='text-5xl text-white'>Get in touch </h4>
        <p className='text-slate-200 text-xl lg:w-[80%]'>Whether you have a project in mind, a question, or just want to say hi, I’d love to hear from you. </p> <p className='text-xl text-slate-200'>Fill out the form or drop me a direct <a href='mailto:patiencedah@gmail.com' style={{color: 'rgb(100, 255, 218)'}}>email ✉️</a></p>
        
        <p className='text-slate-200 text-xl lg:w-[80%]'>You can also connect with me professionally on <a  target="_blank" href='https://www.linkedin.com/in/perfect-patience-dah' className='socials-link'> <img className="inline w-8" src={linkedIn} alt='linkedIn icon'/> LinkedIn</a> or checkout my work on <img className="inline w-8" src={github} alt="github icon"/> <a target="_blank" href='https://github.com/Perfect-Patience' className='socials-link'>GitHub</a></p>
        </div>

        <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col mt-6 text-lg gap-5 lg:w-1/2 md:w-[80%] text-white'>

    <input type="hidden" name="access_key" value="5f48e7be-ef56-413b-81fa-a2bbbbd9a0d5"/>

    <div className='w-full flex flex-wrap gap-4 '>
      <input  className='flex-1 border-2 border-slate-500  bg-slate-600 outline-0 rounded-full h-12 px-5' type="text" name="name" placeholder='name' required />
    <input className='flex-1 border-2 border-slate-500  bg-slate-600  outline-0 rounded-full h-12 px-5 ' type="email" name="email" placeholder='email' required/>
    </div>
    <input className='w-full border-2 border-slate-500 bg-slate-600 outline-0 rounded-full h-12 px-5' type="text" name="subject" placeholder='subject' required/>
    <textarea className='w-full border-2 border-slate-500 bg-slate-600 outline-0 rounded-2xl px-5 pt-5'  rows={7} name="message" required placeholder='message'></textarea>
    <button type="submit" className=' rounded-md h-12'>Send</button>

</form>
      </div>
    </section>
  )
}

export default Contact