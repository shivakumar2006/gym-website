import React from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetina,
    iconUrl: icon,
    shadowUrl: shadow,
})

const Map = () => {
  // Exact decimal coordinates converted from DMS
  const position = [28.4657071,77.0592135];

  const googleMapsUrl = `https://www.google.com/maps?q=${position[0]},${position[1]}`;

  return (
    <div className='w-full'>
    <div className='w-full h-96 rounded-xl overflow-hidden shadow-md'>
      <MapContainer center={position} zoom={16} scrollWheelZoom={false} className='w-full h-full z-0'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <Marker position={position}>
          <Popup>
            The Fitness Factory GYM <br /> 28.475639° N, 77.040861° E
          </Popup>
        </Marker>
      </MapContainer>
    </div>

    {/* Link below the map */}
      <p className='text-center mt-4 text-sm text-white'>
        If you want to see location on Google Maps then click{' '}
        <a
          href={googleMapsUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 underline hover:text-blue-800'
        >
          Google Maps here
        </a>.
      </p>
      </div>
  );
};

export default Map;