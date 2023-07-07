import React from 'react'
import Card from '@/components/card'
import img from '../../../public/a2.jpg'
import web from '../../../public/web.jpg'
import data from '../../../public/data.jpg'
import classes from './page.module.css'

const Job = () => {
        
        const sd = 'We are seeking a talented and experienced Android Application Developer to join our dynamic development team. '
        const wd ='Dive into the dynamic and innovative technology company specializing in web development solutions.'
        const ds ='Collect, analyze, and interpret large and diverse datasets to extract meaningful insights and identify trends, patterns, and correlations.'
return (
 <div className='container w-full pt-11 flex flex-col justify-center'>
    <div className='flex justify-center items-center flex-col w-full text-center '>
        <h1 className='text-4xl'> <b> Browse <span className='text-purple-700'>your dream job</span> </b></h1>
        <div className='w-80 border-purple-700 border-2 mt-2'></div>
        <p className='text-gray-500 space-x-3 pt-4 '>The quickest and most effective way to get hired by top firm
            working in your <br /> career intrest area</p>
    </div>
    <div className={`py-16 px-14 flex space-x-20 items-center justify-center ${classes.col}`} >
            <Card title='SOFTWARE DEVELOPMENT' img={img} links='sd' dec={sd} />
            <Card title='WEB DEVELOPMENT' img={web} links='wd' dec={wd}/>
            <Card title='DATA SCIENTIST' img={data} links='ds' dec={ds}/>
    </div>
    <button className='text-xl text-gray-600 pb-20'> 
  View more</button>
 </div>
)
}

export default Job