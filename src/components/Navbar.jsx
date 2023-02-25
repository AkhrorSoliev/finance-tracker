import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
  const { logout } = useLogout()
  const {user} = useAuthContext()
  console.log(user)
  return (
    <div className='bg-emerald-100 py-3 px-8'>
        <div className='max-w-screen-md mx-auto flex items-center justify-between'>
            <Link to="/" className='font-bold text-2xl'>myMoney</Link>
            <nav className='flex gap-3 items-center '>
                {!user &&
                  <>
                  <Link to="/login"><small>Login</small></Link>
                  <Link to="/signup"><small>Signup</small></Link>
                </>}
                {user && <div className='flex'> <span className='mr-1 font-projectFont2 text-xl'>hello,</span> <h5> {user.displayName}</h5></div>}
                {user && 
                <button onClick={logout} className="border-2 px-2 py-1 ml-3 block border-red-400 rounded text-[13px] hover:text-white hover:bg-red-400">Logout</button>}
            </nav>
        </div>
    </div>
  )
}

export default Navbar