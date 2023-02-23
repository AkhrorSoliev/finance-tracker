import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-emerald-100 py-3 px-8'>
        <div className='max-w-screen-md mx-auto flex items-center justify-between'>
            <Link to="/" className='font-bold text-2xl'>myMoney</Link>
            <nav className='flex gap-3'>
                <Link to="/login"><small>Login</small></Link>
                <Link to="/signup"><small>Signup</small></Link>
            </nav>
        </div>
    </div>
  )
}

export default Navbar