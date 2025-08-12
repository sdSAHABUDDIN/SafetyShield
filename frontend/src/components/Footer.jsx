import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
         © {new Date().getFullYear()} SafetyShield — Built with ❤️
      </div>
    </footer>
  )
}

export default Footer