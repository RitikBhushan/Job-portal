import React from 'react'
import Image from 'next/image'
import img from '../../../public/front img.png'
import Section1 from './Section1'
import Link from 'next/link'
import classes from './hero.module.css'


const Hero = () => {
return (
<>
    <div className={`container ${classes.sectionContainer}`}>

        <div className={`flex h-screen ${classes.mainDiv}`}>
            <div className='flex-1 h-full'>
                <div className={`flex justify-center text-center mt-40 ${classes.textDiv}`}>
                    <h1 className='text-6xl'> <b> Search,Apply & </b> <br /> Get Your <span
                            className='text-purple-700'>Dream Job </span> </h1>
                </div>
                <div className={`flex justify-center ${classes.buttonDiv}`}>
                    <Link href='./Job'> <button
                        className='text-white bg-purple-700 text-2xl py-2 px-6 mt-16 rounded-2xl hover:bg-white hover:border-2  hover:text-purple-700 hover:border-purple-700  '>Browse
                        Jods</button></Link>
                </div>
            </div>
            <div className={`flex-1 ${classes.nullDiv}`}>
                <Image className='w-96 mt-20 ml-48' src={img} />
            </div>
        </div>
        <Section1 />
    </div>
</>
)
}

export default Hero