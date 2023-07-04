'use client'
import login from '../../../public/login.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import classes from './page.module.css'

import { useRouter } from 'next/navigation'

const SignIn = () => {

const router = useRouter();

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')


const handleValueChange = (e) => {
setUsername(e.target.value);
};
const handlePassChange = (e) => {
setPassword(e.target.value);
};
const handleLogin =()=>{
if(username==="abc@gmail.com"&&password==="123456"){
router.push('/about')
}
}


return (
<div className=' flex h-screen'>
  <div className='flex-1 pt-20'>

    <div className={`flex justify-center pl-48 ${classes.pad}`}>
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-14">login <span className='text-purple-700'>now</span></h1>




        <form>

          <div className="mb-7 ">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              type="email" onChange={handleValueChange} value={username} placeholder="Enter your email" />
          </div>
          <div className="mb-10">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="password" value={password} onChange={handlePassChange} type="password"
              placeholder="Enter your password" />
          </div>
          <button onSubmit={handleLogin}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            <Link href={'./'}>
            LogIn</Link>
          </button>
          <h3 className='pt-8'>Dont have an account?<span className='hover:text-gray-600'>
              <Link href='./register'>Register now</Link>
            </span> </h3>
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

export default SignIn