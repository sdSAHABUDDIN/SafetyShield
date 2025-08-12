import React from 'react'

const Setting = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="bg-white p-6 rounded shadow">
        <div className="mb-4">Privacy: toggle location sharing (UI only)</div>
        <div className="mb-4">Emergency contacts: add / remove (UI only)</div>
      </div>
    </div>
  )
}

export default Setting