import React, { useEffect, useRef } from 'react'

const MapView = ({center={lat:28.6139,lang:77.2090},markers=[]}) => {
  const ref=useRef(null);

  useEffect(() => {
    if(!window.google) return;
    const map = new window.google.maps.Map(ref.current, {center, zoom: 10});
    markers.forEach(marker => {
      new window.google.maps.Marker({
        position: { lat: marker.lat, lng: marker.lng },
        map,
        title: marker.title
      });
    });
  
  },[center, markers]);

  return <div ref={ref} className="w-full h-96 rounded-xl border" />
}
export default MapView