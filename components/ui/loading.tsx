import React from 'react'

function Loading() {
  return (
    <div className='flex items-center animate-pulse gap-2'>
        <div className="w-4 h-4 rounded-full bg-black/15"></div>
        <div className="w-4 h-4 rounded-full bg-black/15"></div>
        <div className="w-4 h-4 rounded-full bg-black/15"></div>

    </div>
  )
}

export default Loading