'use client'
import { useChatStore } from '@/store'
import { Chatbotdata } from '@/types'
import React, { useEffect, useRef } from 'react'
import Message from '../ui/Message'
import Loading from '../ui/loading'

const Room = (data:Chatbotdata) => {
    const {messages ,loading} = useChatStore()
    const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
   <div  className="w-full h-full flex flex-col gap-2 p-2 overflow-y-auto scroll-m-0 bg-white">
         
          <Message content={data.firstMessage} sender='bot' />
          {messages.map(({content ,sender}  , i)=>(
                      <Message key={i} content={content} sender={sender} />

          ))}
          {loading && <Loading/>}
                <div ref={bottomRef} />
          </div>
  )
}

export default Room