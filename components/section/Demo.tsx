import Image from 'next/image'
import React from 'react'

const Demo = () => {
  return (
    <div className='justify-center whitespace items-center flex flex-col gap-3'>
         <h1 className='title text-2xl'>How its looks like</h1>
         <p className=' opacity-90'>this a nice application for build ai chatbot for your websie</p>
         <Image src='/images/Demo.png' width={1000} height={1000} className='rounded-3xl border-8  border-neutral-900/10 ' alt='demo'/>
    </div>
  )
}

export default Demo