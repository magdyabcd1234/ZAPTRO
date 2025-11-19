import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen flex justify-center items-center">
      <div className='contact-form bg-white/10 p-50 rounded-2xl border-b-blue-50 shadow-2xl w-full max-w-5xl px-4 mt-20 mb-20'>
        
        <div className='contact-title  text-center mb-5 '>
          <h1 className='text-white text-3xl font-semibold'>
            Get in Touch with <span className='text-red-500'>Zaptro</span>
          </h1>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
          
          <div className='flex-1 text-center md:text-left'>
            <h2 className='text-white text-2xl mb-2'>Contact info</h2> 
            <p className='text-white mb-4'>
              Have a question or need support? We are here to help you with your electronics journey
            </p>

            <div className='social-contact flex flex-col gap-2 px-3'>
              <span className='text-white'>Address: 123 Tech Lane, Kolkat, India</span>
              <span className='text-white'>Email: support@zaptro.com</span>
              <span className='text-white'>Phone: +91 98765 43210</span>
            </div>
          </div>

          <div className=' flex flex-1 flex-col  text-white  p-6 rounded text-center'>
            
              <label htmlFor="" className='text-start'>Your Name</label>
              <input type="text" placeholder='John Deo' className='rounded px-2 py-2'/>
              
              <label htmlFor="" className='text-start mt-6'>Email Address</label>
              <input type="text" placeholder='John Deo' className='rounded px-2 py-2'/>

              <label htmlFor="" className='text-start mt-3'>Your Message</label>
              <textarea name="" id="" className='bg-white/10 py-1 px-1 rounded-md border-white' rows={5} placeholder='Type your message...'></textarea>

              <button className='mt-3 bg-fuchsia-400 py-2 rounded-md'>Send Message</button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact





















