import Link from 'next/link'
import React from 'react'
import Logo from '../ui/Logo'

const Nav = () => {
  return (
    <nav className='whitespace py-4 justify-between flex  items-center '>

      <Logo/>
      <ul className='flex items-center gap-2.5'>
        <li><a href="">Demo</a></li>
        <li><a href="">Intergration</a></li>
        <li><a href="">Pricing</a></li>
      </ul>
      <div className="flex items-center gap-2.5">
        <Link href='/sign-up' >
            <button className='button bg-chatbot-600 text-white '>Join us</button>

        </Link>
        <Link href='/sign-in' >
            <button className='button border border-neutral-200 '>Get started</button>

        </Link>

      </div>
    </nav>
  )
}

export default Nav