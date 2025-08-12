import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const {user,logout} = useState(true);
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to='/' className="text-xl font-semibold text-primary">
          SafetyShield</Link>
          <span className="text-sm text-gray-500 hidden md:inline">Personal safety wearable</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/how" className="text-gray-700 hover:text-primary">How It Works</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
          {user ? (
            <>
            <Link to="/dashboard" className="px-3 py-1 rounded bg-primary text-white">Dashboard</Link>
            <button onClick={logout} className="px-3 py-1 rounded border">Logout</button>
            </>
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-primary">Login</Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar