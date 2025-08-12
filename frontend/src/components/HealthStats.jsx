import React from 'react'

const HealthStats = ({stats}) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h4 className="font-semibold">Health Stats</h4>
      <div className="mt-2 grid grid-cols-3 gap-2 text-center">
        <div>
          <div className="text-2xl font-bold">{stats?.bpm ?? '--'}</div>
          <div className="text-xs text-gray-500">BPM</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{stats?.systolic ?? '--'}</div>
          <div className="text-xs text-gray-500">Systolic</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{stats?.diastolic ?? '--'}</div>
          <div className="text-xs text-gray-500">Diastolic</div>
        </div>
      </div>
    </div>
  )
}

export default HealthStats