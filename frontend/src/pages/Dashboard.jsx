import React, {useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';

const Dashboard = () => {
  const [devices, setDevices] = useState([]);
  const [stats, setStats] = useState({});
  const {user} =useContext(AuthContext);

  useEffect(() => {
    api.getDevices()
      .then(res => setDevices(res.devices))
      .catch(err => console.error("Failed to fetch devices:", err));
      const interval = setInterval(() => {
        const bpm=Math.floor(Math.random() * (100 - 60 + 1)) + 60;
        const systolic=Math.floor(100 + Math.random() * 40);
        const diastolic=Math.floor(60 + Math.random() * 20);
        setStats({
          bpm,
          systolic,
          diastolic,
        });

        if(bpm > 100 || systolic > 140 || diastolic > 90) {
          api.sendAlert({userId: user._id, message: "Health alert triggered!"})
            .then(() => console.log("Alert sent"))  
            .catch(err => console.error("Failed to send alert:", err));
        }
      }, 5000);
    return () => clearInterval(interval);
  }, [user._id]);

  const handlePanic = async() => {
        if(!devices[0]) return alert("No devices connected");
        const deviceId = devices[0]._id;
        const lat=28.6139+(Math.random() - 0.05)/100;
        const lng=77.2090+(Math.random() - 0.05)/100;
        await api.createAlert({
          deviceId,
          deviceType: 'manual',
          lat,
          lng,
          message: "Panic button pressed!"
        })
        .then(() => {
          alert("Panic alert sent!");}
        )
        .catch(err => console.error("Failed to send panic alert:", err));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <HealthStats stats={stats} />
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Devices</h4>
            {devices.length ? devices.map(d=> <div key={d._id} className="p-3 bg-white rounded mb-2 shadow">{d.name} — {d.status}</div>) : <div className="text-sm text-gray-500">No devices</div>}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <EmergencyButton onPanic={handlePanic} />
          <div className="text-sm text-gray-500">Simulated fingerprint verification UI below</div>
          <div className="p-3 bg-white rounded shadow w-full text-center">Fingerprint: <span className="ml-2 font-semibold">Not Verified</span></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard