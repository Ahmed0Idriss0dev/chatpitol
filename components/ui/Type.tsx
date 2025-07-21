import React from 'react'

function Type() {
  return (
    <label >
     <input type="radio" hidden className='peer' name="Bottype" id="bot" />
     <div className="w-80 h-20 cursor-pointer rounded-2xl flex justify-center items-center border border-neutral-200 peer-checked:border-chatbot-400"></div>
    </label>
  )
}

export default Type