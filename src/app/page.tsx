/*
 * 
 * Test Page / Homepage
 * 
 */

"use client"; // This is a client component 👈🏽


import Link from 'next/link'
import PageHeader from './_components/pageHeader'
import Button from '../app/_components/button'
import Image from 'next/image'
import { Player, Controls } from '@lottiefiles/react-lottie-player';


export default function Page() {
  return (
    <>
      <div className="bg-default-bg flex justify-center items-center min-h-screen">

       
        <div className="bg-white border-colbert-50 shadow-lg px-12 py-24 rounded-lg md:-mt-[600px]">
        <Player
          className='w-96 mt-24'
          autoplay
          controls
          loop
          speed={1.5}
          src="https://lottie.host/e014732d-296a-4372-867d-d40b43d11530/0ivGY3F4AA.json"
        >
        </Player>
          <div className="btn-group !w-full !flex-col">
            <Link href="/business/documents"><Button label="App Pages" href="business/documents" className='!w-full' size='lg' /></Link>
            <Link href="/signup/signup"><Button label="Signup / Onboarding" className='!w-full' size='lg' /></Link>
          </div>
        </div></div>

    </>

  )
}
