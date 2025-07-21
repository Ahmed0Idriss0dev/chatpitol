'use client'
import { useChatStore } from '@/store'
import { Chatbotdata } from '@/types'
import { Send } from 'lucide-react'
import React from 'react'

const InputForm = (data:Chatbotdata) => {
  const {addMessage ,setLoading ,messages} =useChatStore()
  async  function handelform(e:React.FormEvent<HTMLFormElement>){
     e.preventDefault()
     setLoading()
     const formdata = new FormData(e.currentTarget)
     const prompt = formdata.get('text') as string
     addMessage({
      content:prompt ,
      sender:'user'
     })
     const system = data.customPrompt ;
      const res =  await fetch('/api/ai',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                } ,
                body:JSON.stringify({prompt , system , messages })
              })
      const responseData = await res.json()
           setLoading()

       addMessage({
      content:responseData.text ,
      sender:'bot'
     })
  }
  return (
    <form onSubmit={handelform} className='w-full flex  justify-between items-center  h-20  rounded-2xl p-1.5'>
      <textarea  placeholder='Ask ai' className='w-full h-full resize-none outline-0 p-2.5' name="text" id=""></textarea>
      <button className='button w-16 flex justify-center items-center  border-0 '>
          <Send/>
      </button>
    </form>
  )
}

export default InputForm