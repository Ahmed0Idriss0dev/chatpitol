import { Chatbotdata } from '@/types'
import Link from 'next/link'
import React from 'react'

const BotCard = (data:Chatbotdata) => {
  return (
    <Link  href={`/create/${data.$id}`} className='w-full h-60 border bg-white border-neutral-200 rounded-2xl'>
      <p>{data.name} </p>
      
    </Link>
  )
}

export default BotCard