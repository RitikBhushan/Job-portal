import React from 'react'
import login from '../../../public/login.jpg'
import Image from 'next/image'
import Link from 'next/link'
import classes from './page.module.css'

const register = () => {
  return (
    <div className=' flex h-screen'>
      <div className='flex-1 pt-20'>
      
    <div className={`flex justify-center pl-48 ${classes.pad}`}>
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-14">Register <span className='text-purple-700'>now</span></h1>
        <form>

        <div className="mb-3 ">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Username
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="username"
              type="name"
              placeholder="Enter your Username"
            />
          </div>
          
          <div className="mb-3 ">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-10">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Confirm password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            LogIn
          </button>
          <h3 className='pt-8'>Already have an account?<span className='hover:text-gray-600'> <Link href='./signin'>Login here</Link> </span> </h3>
        </form>
        </div>
    </div>
      </div>
      <div className={`flex-1 flex justify-center items-center ${classes.nullDiv}`}>
        <Image src={login} width={470} height={470} />
      </div>
    </div>
  )
}

export default register
