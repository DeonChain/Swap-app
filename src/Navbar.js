import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/" className='navlink'> Home </Link>
      <Link to="/wallet" className='navlink'> Wallet </Link>
      <Link to="/trade" className='navlink'> Trade </Link>
    </div>
  )
}
