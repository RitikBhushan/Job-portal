import Link from 'next/link'
import React from 'react'
import classes from './page.module.css'

const Job = () => {
    const location=['Bengaluru, karnataka',  'Jaipur, Rajasthan','Noida,UP']

return (
<div className='container w-full pt-11 flex flex-col justify-center'>
    <div className='flex justify-center items-center flex-col w-full text-center '>
        <h1 className='text-4xl'> <b> Lorem <span className='text-purple-700'>ametsh sit amet.</span> </b></h1>
        <div className='w-80 border-purple-700 border-2 mt-2'></div>
        <p className='text-gray-500 space-x-3 pt-4 '>The quickest and most effective way to get hired by top firm
            working in your <br /> career intrest area</p>
    </div>
    <div className={`flex justify-center  p-20 ${classes.maindiv}`}>
    {
                location.map((location,i)=>(
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            

                
            <div className="px-6 py-4">
                <div className="font-bold text-xl text-purple-700 mb-2">Software Engineer</div>
                <h2 className='pb-3'>Zuge Electric Pvt Ltd <br />{location}</h2>
                <div className='flex'>
                    <div className=' py-1 text-sm bg-gray-300 m-1'> ₹50,000- ₹1,00,000 a month</div>
                    <div className='py-1 bg-gray-300'> Full-time</div>
                </div>
                <p className="text-gray-500 text-base pt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                </p>
                <button>more...</button>
            </div>
           
            <div className="px-6 py-4 pb-6">

                <button
                    className='py-2 px-4 border-2 rounded-3xl border-purple-600 transition-all hover:text-white hover:bg-purple-600'>
                   <Link href='./apply'>Apply now</Link> 
                </button>

            </div>
        </div>
                ))
        }
    </div>
</div>
)
}

export default Job