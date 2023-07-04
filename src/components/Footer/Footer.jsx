import React from 'react'
import web from '../../../public/world-wide-web.png'
import facebook from '../../../public/facebook.png'
import twitter from '../../../public/twitter.png'
import insta from '../../../public/instagram.png'
import youtube from '../../../public/youtube.png'
import Image from 'next/image'
import classes from './footer.module.css'

const Footer = () => {

  const footElement =['About', "Need Help?"]

  return (
    <div className='flex flex-col justify-center w-full items-center '>
      
      <div className={`flex flex-col justify-center w-full items-center space-y-3 ${classes.center}`}>
       
        <h1 className='text-purple-700 text-4xl'>Job<span className='text-orange-500'>hunt</span></h1>
        <h4 className='text-gray-500'>Lorem ipsum dolor sit amet.</h4>
        <div className='w-96 border-purple-700 border-2'></div>
        <button className='text-white bg-orange-600 px-9 py-3 rounded-3xl'>Join us</button>
        <p className='pb-6 text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ullam modi .</p>
      </div>
      <div className='flex flex-col justify-center w-full items-center text-white bg-purple-500 py-5'>
        
        <div className='flex space-x-6 pb-8 '>
          <Image src={facebook} width={33} height={33} />
          <Image src={twitter} width={33} height={33}/>
          <Image src={youtube} width={33} height={33}/>
          <Image src={insta} width={33} height={33}/>
          <Image src={web} width={33} height={33}/>
          
        </div>
        <div className={`flex flex-col justify-center w-full items-center pb-10 ${classes.nullDiv}`}>
          <ul className='flex space-x-10'>
            <li>About</li>
            <li> Need Help?</li>
            <li>Content Guide</li>
            <li>Job</li>
            <li>Privacy</li>
            <li>Term of Use</li>
            <li>Lern</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={`flex flex-col justify-center w-full items-center ${classes.heading}`}>
          <p className='pb-3 text-sm text-gray-200'>Lorem ipsum dolor sit amet.</p>
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, praesentium.</h1>
          <p className='pt-2'>© copy right</p>
        </div>
      </div>
    
    </div>
  )
}

export default Footer






// {
//   navItems.map((navItem, index) => (
//       <div key={index} className={`nav-item-${index} hover:text-lg transition-ease-in-out duration-500 p-7`}>
//           <Link href={`/${navItem}`} className={`relative top-3/4 left-1/4 p-1`}>{navItem}</Link>
//           <Image src={ball} height={30} width={150} />
//       </div>
//   ))
// }