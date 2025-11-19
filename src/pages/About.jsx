import { Link } from 'react-router-dom'
import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto px-0'>
      <section className='about-section w-full h-max mt-20 bg-white shadow-lg rounded-md'>
    <div className='about-title text-center'>
      <h1 className='text-3xl font-bold'>About Zaptro</h1>
    </div>

    <div className="about-desc mt-4 p-3 ">
      <p >welcome to <span>Zaptro</span> your one-stop destination for the latest and greatest in electronics, from cutting-edge gadgets to  must-have accessories weare here to power up your tech life with premium products and unbeatable service  you can do to that the figure of speach mohamed magdy salem and i create the website not pick the wrong side</p>
    </div>

      <div className='about-title-item p-4 mt-3'>
        <h2 className='text-red-500 text-2xl font-semibold'>Our Missions</h2>
        <p className='mt-3'>At Zaptro our missions is to make innovative technology accessible to everone we are passionate about connecting people with the tools and tech they need to thrive in a digital world figur of speech what the wrong with people the people was not communicated with hem self please be careful about this so much</p>
      </div>

      <div className='about-title-item p-4 mt-2'>
        <h2 className='text-red-500 text-2xl font-semibold'>Why Choose Zaptro?</h2>

        <ul className='mt-3 list-disc px-7'>
        <li>Top-quality electronic products from trusted brands</li>
        <li>Lighting-fast and secure shipping</li>
        <li>Railable customer support, alwayse ready to help</li>
        <li>Easy returns and hassle-free shopping experience</li>
        </ul>
      </div>

      <div className='about-title-item p-4 mt-2'>
        <h2 className='text-red-500 text-2xl font-semibold'>Our Vision</h2>
        <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus tempora quasi voluptas, voluptatem consequuntur ab accusantium neque ullam ipsa commodi soluta itaque quibusdam sint voluptates delectus vel sit laudantium maiores?</p>
      </div>


      <div className='about-title-item text-center'>
      <h2 className='text-red-500 text-2xl font-semibold'>Join the Zaptro Family</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ratione iste? Doloribus expedita ullam quae tempora animi aliquam reiciendis fuga.<br /> to do that</p>
        <Link to={'/products'}>
        <button className='text-white bg-red-700 px-5 py-2 rounded-lg mb-5 cursor-pointer'>Start Shopping</button>
        </Link>
      </div>

  
    </section>
    </div>

    
  )
}

export default About