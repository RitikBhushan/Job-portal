import React from 'react'
import clasess from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
const navItem =['Home','About','Job', 'Service', 'Contact-Us']
return (
<div className={`container flex py-6 ${clasess.mainDiv}`}>
  <div className={`logo w-2/6 ${clasess.logoDiv}`}>
    <Link href='./'>

    <h1 className={`text-4xl px-20 text-purple-700`}><b>Job</b><span className=' text-orange-500'>hunt</span></h1>
    </Link>
  </div>
  <div className={`${clasess.fontAni} flex flex-auto w-96`}>

    {
    navItem.map((navItem) => (
    <ul className=''>
      <Link href={`/${navItem}`}>
      <li className={`${clasess.list} cursor-pointer hover:text-gray-400`}>{navItem}</li>
      </Link>
    </ul>
    ))
    }
    <div className={clasess.nullDiv}>

    <button className='
        px-3 py-1 text-m ml-12 mx-8 border-2 border-purple-700 border-solid rounded-2xl w-28'>
      <Link href='./signin'>Sign In</Link>
    </button>
    <button
      className='text-white text-m px-3 py-1 border-2 border-purple bg-purple-700 border-solid w-28 rounded-2xl'>Register</button>
      </div>
  </div>
</div>
)
}

export default Navbar