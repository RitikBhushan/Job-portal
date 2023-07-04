
import Image from 'next/image'
import SignIn from './signin/page'
import Hero from '@/components/Home/Hero'

export default function Home() {
  return (
   <div className={`container`}>
      <Hero/>
      {/* <SignIn/> */}
   </div>
  )
}
