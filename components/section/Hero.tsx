import React from 'react'

const Hero = () => {
  return (
    <div className='whitespace justify-center gap-2.5 min-h-[60dvh] items-center flex-col flex'>
        <div className="text-center flex justify-center items-center flex-col gap-1.5">
        <span className='text-sm  border border-neutral-200/10 rounded-full p-2'> 💬 Build your custom ai chatbot No coding needs 💬</span>
        <h1 className='text-6xl title'>Build AI Chatbots <br /> That Work Like Pros.</h1>
        <p className='opacity-75'>Automate customer support, sales, and lead generation with intelligent <br /> chatbots tailored to your business—no coding needed.</p>

        </div>
        <button className='button w-60 bg-chatbot-600 text-white '>Build your Chatbot</button>
    </div>
  )
}

export default Hero