import React from 'react'

const FeatureCard = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center">icone</div>
        <div>
          <h3 className="font-semibold">title</h3>
          <p className='text-sm text-gray-500'> desc </p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard