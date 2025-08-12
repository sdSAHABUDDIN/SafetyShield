import React from 'react'

const AlertCard = ({alert}) => {
  return (
   <div className="p-4 bg-white rounded-lg shadow mb-3">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold">{alert.type.toUpperCase()}</div>
          <div className="text-xs text-gray-500">{new Date(alert.createdAt).toLocaleString()}</div>
        </div>
        <div className="text-sm text-danger">{alert.resolved ? 'Resolved' : 'Active'}</div>
      </div>
      <div className="mt-2 text-sm text-gray-600">{alert.message}</div>
    </div>
  )
}

export default AlertCard