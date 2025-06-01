import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
      <nav className='navbar'>
          <Link href='/'>
              <div className='flex items-center gap-2.5 cursor-pointer'>
                  <img src="/images/logo.sv" alt="logo" width={46} height={44}/>
              </div>
      </Link>
      <div className='flex items-center gap-8 '>
        <p>Home</p>
        <p>My Journey</p>
        <p>Sign in</p>
      </div>
    </nav>
  )
}

export default navbar