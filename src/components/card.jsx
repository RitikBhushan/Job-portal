import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Card = ({title , img,links, dec}) => {
return (
<div className="max-w-xs rounded overflow-hidden shadow-lg ">
    {/* <img className="w-full" src="https://via.placeholder.com/300" alt="Card Image" /> */}
    <Image src={img} />
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
            {dec}
        </p>
    </div>
    <div className="px-6 py-4 pb-6">
        <button className='py-2 px-4 border-2 rounded-3xl border-purple-600 transition-all hover:text-white hover:bg-purple-600'>
          <Link href='./jobdetails' >View jobs</Link>  
        </button>
        
    </div>
</div>
)
}

export default Card