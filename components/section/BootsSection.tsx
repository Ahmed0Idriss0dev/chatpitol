import React from 'react'
import BotCard from '../ui/BotCard'
import { getByUserId } from '@/client/curd'
import { Chatbotdata } from '@/types'

const BootsSection = async () => {
  const data = await getByUserId()
  const documents = data.documents as Chatbotdata[]
  console.log(data)
  return (
    <div className='w-full gap-2.5 grid grid-cols-4'>
        {documents.map((data , i)=>(
          <BotCard key={i} {...data} />

        ))}

    </div>
  )
}

export default BootsSection