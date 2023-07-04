import React from 'react'
import sectionImg from '../../../public/section img.png'
import Image from 'next/image'
import classes from './section1.module.css'
const Section1 = () => {

return (
<div className={`container w-full h-screen mb-16 flex flex-col justify-center ${classes.mainDiv}`}>
    <div className={`flex justify-center items-center flex-col w-full text-center ${classes.introDiv}`}>
        <h1 className='text-4xl'> <b> Hired in <span className='text-purple-700'>4 Quick Easy Steps</span> </b></h1>
        <div className='w-80 border-purple-700 border-2 mt-2'></div>
        <p className='text-gray-500 space-x-3 pt-4 '>The quickest and most effective way to get hired by top firm
            working in your <br /> career intrest area</p>
    </div>
    <div className='flex mt-16'>
        <div className={`flex-1 ${classes.nullDiv}`}>
            <h1 className='text-5xl relative top-72 pl-3  text-white'>
                <b>Step 01</b>
            </h1>
            <Image className='w-11/12 pt-12' src={sectionImg} />
        </div>
        <div className='flex-1 p-20'>
            <div className={`flex flex-col justify-center items-center w-full ${classes.stepDiv}`}>
                <h1 className='text-7xl'>First <span className='text-purple-700'>Step</span> </h1>
                <div className='w-48 border-purple-700 border-2 mt-2'></div>
                <p className='pt-10 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                    debitis quae culpa ex vero in odit quod earum reprehenderit consequatur.
                    Nesciunt dolorum et sed exercitationem alias assumenda, numquam minus vel quasi blanditiis?</p>
                <button className='mt-10 border-2 border-purple-700 py-2 px-5 rounded-2xl'>Read more</button>
            </div>
        </div>
    </div>

<div className={`${classes.moveDiv} flex justify-center`}>

<button className='text-xl text-gray-500 pt-9 hover:text-black'>view more</button>
</div>

</div>
)
}

export default Section1










{/* <div className='container w-full h-screen '>
    <div className='flex justify-center items-center flex-col w-full text-center '>
        <h1 className='text-4xl'> <b> Hired in <span className='text-purple-700'>4 Quick Easy Steps</span> </b></h1>
        <div className='w-96 border-purple-700 border-2 mt-2'></div>
        <p className='text-gray-500 space-x-3 pt-4 '>The quickest and most effective way to get hired by top firm
            working in your <br /> career intrest area</p>
    </div>
    <div className='flex mt-16'>
        <div className='flex-1'>

            <h1 className='text-5xl relative top-72 pl-3  text-white'>
                <b>STEP 01</b>
            </h1>
            <Image className='w-11/12 pt-12' src={sectionImg} />
        </div>
        <div className='flex-1 p-20'>
            <div className='flex flex-col justify-center items-center w-full'>
                <h1 className='text-7xl'>First <span className='text-purple-700'>Step</span> </h1>
                <div className='w-48 border-purple-700 border-2 mt-2'></div>
                <p className='pt-10 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                    debitis quae culpa ex vero in odit quod earum reprehenderit consequatur.
                    Nesciunt dolorum et sed exercitationem alias assumenda, numquam minus vel quasi blanditiis?</p>
                <button className='mt-10 border-2 border-purple-700 py-2 px-5 rounded-2xl'>Read more</button>
            </div>
        </div>
    </div>
</div> */}