import { GetbydocId } from '@/client/curd'
import Room from '@/components/section/Room'
import Hello from '@/components/ui/Hello'
import InputForm from '@/components/ui/InputForm'
import Message from '@/components/ui/Message'
import { Chatbotdata } from '@/types'
import Image from 'next/image'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
  const {id} =params
  const data:Chatbotdata = await GetbydocId(id)
  console.log(data)
  return (
    <div className='w-full h-dvh  '>
        <div className="w-full flex justify-between flex-col h-full bg-white text-black">
          <div className="w-full flex items-center h-20 px-3 border-b border-neutral-200  gap-2 ">
            <Image width={200} height={200} src='/icons/Chatbot.svg' alt='ai logo' className='w-12 h-12 bg-neutral-300 rounded-full'  />
            <div className="py-3">
            <h1 className='text- '>{data.name} </h1>
            <p className='text-sm opacity-80'>chatpilot</p>
            </div>
          </div>
          <Room {...data} />
          <div className="p-3 border-t border-neutral-200">

          <InputForm {...data} />
          </div>
        </div>
    </div>
  )
}

export default page