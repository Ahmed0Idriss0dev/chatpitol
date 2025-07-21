import { UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' w-full py-4 justify-end flex  items-center '>

      
      <div className="flex items-center gap-2.5">
       
        <div className=" bg-amber-400 h-11 w-11 rounded-full">
          <UserButton/>
        </div>
      </div>
    </nav>  )
}

export default Navbar