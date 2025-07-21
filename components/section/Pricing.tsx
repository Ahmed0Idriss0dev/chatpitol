import React from 'react'

export default function Pricing() {
  return (
 <div className='whitespace flex justify-center flex-col gap-3  min-h-[60dvh] items-center '>
        <div className="text-center">
            <h1 className='text-2xl title'>Pricing</h1>
            <p className='opacity-80'>nice and simple  Integration</p>
        </div>
        <div className="w-70 h-96 bg-chatbot-600 p-3 flex justify-start items-center gap-2 flex-col rounded-2xl">
            <h1 className='text-2xl '>15/Month</h1>
            <div className="text-center">
            <p>Get full access</p>
            <p>3 full custom ai chatbots</p>

            </div>
                    <button className='button w-full bg-white border-0 text-black  '>subscribe</button>

        </div>
    </div>  )
}
