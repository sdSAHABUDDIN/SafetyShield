import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import AlertCard from '../components/AlertCard'

export default function AlertsHistory(){
  const [alerts, setAlerts] = useState([]);
  useEffect(()=>{ api.getAlerts().then(setAlerts).catch(()=>{}); }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Emergency Alerts</h2>
      {alerts.length ? alerts.map(a => <AlertCard key={a._id} alert={a} />) : <div className="text-sm text-gray-500">No alerts yet</div>}
    </div>
  )
}