'use client'
import { CreateBot } from '@/client/curd'
import React, { use, useState } from 'react'
import Type from '../ui/Type'

const Create = () => {
const [loading , setLoading] = useState<Boolean>(false)
 async function hendelForm(e:React.FormEvent<HTMLFormElement>){
     
          e.preventDefault()
          setLoading(true)
          const formdata = new FormData(e.currentTarget)
          const chatbotName = formdata.get('name') as string
          const Promt = formdata.get('prompt') as string 
          const firstMessage = formdata.get('message') as string
          
          const data:CustomData={
                customPrompt:Promt ,
                name:chatbotName ,
                firstMessage ,
                userId:''
                
          }
          try {
              const res =  await fetch('/api/chatbot',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                } ,
                body:JSON.stringify({data})
              })
              const e  = await res.json()
              setLoading(false)

              console.log(e)
          } catch (error) {
             console.log(error)
          }
  }
  return (
    <div className='bg-white rounded-2xl border border-neutral-200 p-4'>
        <h1 className='text-2xl'>Create your chatbot</h1>
        <form onSubmit={hendelForm} className='flex flex-col gap-3' >
            <label htmlFor="">What your ai cat for</label>
            <div className="flex py-3.5 items-center gap-2">
                <Type/>
                <Type/>
                <Type/>

            </div>
            <div className="label">
                <label htmlFor="">Name</label>
                <input className='input' type="text" name='name' placeholder='chatbot '/>
            </div>
             <div className="label">
                <label htmlFor="">first message</label>
                <input className='input' type="text" name='message' placeholder='message'/>
            </div>
             <div className="label">
                <label htmlFor="">Prompt</label>
                <textarea className='input h-36 resize-none py-2' name='prompt' placeholder='chatbot Prompt'/>
            </div>
            <button disabled={loading as boolean} style={{opacity:loading ? .5 :1}} className='button rounded-2xl bg-chatbot-500 text-white'>Create</button>
        </form>

    </div>
  )
}

export default Create