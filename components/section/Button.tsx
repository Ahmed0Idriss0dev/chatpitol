import React from 'react'
interface data{
    label:string ,
    src:string
}
const Button = ({label ,icons}:ButtonLinks) => {
  return (
    <button className=' button w-full flex items-center gap-2 px-2 h-11 border border-neutral-200 '>{icons} {label} </button>
  )
}

export default Button