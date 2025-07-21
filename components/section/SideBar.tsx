import React from 'react'
import Logo from '../ui/Logo'
import Button from './Button'
import { ButtonLinks } from '../hepler'

const SideBar = () => {
  return (
<div className="w-full h-full border-r bg-chatbot-50/10  border-neutral-200">
        <div className="p-2">

        <Logo/>

        </div>
        <div className="p-4 flex flex-col gap-1.5">
          {ButtonLinks.map(({icons ,label}, i)=>(
            <Button key={i} label={label} icons={icons} />

          ))}
        
        </div>
       </div>  )
}

export default SideBar