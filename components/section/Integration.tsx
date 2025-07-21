import React from 'react'

const Integration = () => {
  return (
    <div className='whitespace flex relative justify-center flex-col gap-3 min-h-[60dvh] items-center '>
        <div className="text-center">
            <h1 className='text-2xl title'>Integration</h1>
            <p>nice and simple  Integration</p>
        </div>
        <textarea lang='js' readOnly className='opacity-20  -rotate-3 -z-30 border-t right-44 border-neutral-300/20  outline-0  absolute resize-none w-96 h-40 rounded-2xl p-6' name="" value={`             <script src="http://localhost:3000/chatbot.js" chatbot-id="dksd"></script>`} id=""></textarea>

        <textarea lang='js' readOnly className='opacity-20  rotate-3 -z-30 border-t left-44 border-neutral-300/20  outline-0  absolute resize-none w-96 h-40 rounded-2xl p-6' name="" value={`             <script src="http://localhost:3000/chatbot.js" chatbot-id="dksd"></script>`} id=""></textarea>
        <textarea  readOnly className='bg-neutral-900 text-white border-t border-neutral-300/20  outline-0 resize-none w-96 h-40 rounded-2xl p-6' name="" value={`             <script src="http://localhost:3000/chatbot.js" chatbot-id="dksd"></script>`} id=""></textarea>
    </div>
  )
}

export default Integration