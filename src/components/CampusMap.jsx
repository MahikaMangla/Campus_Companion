/* import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const CampusMap = () => {
  // Sharda University coordinates
  const center = [28.4322, 77.5000];

  return (
    <MapContainer
      center={center}
      zoom={15}
      style={{ height: "400px", width: "100%", borderRadius: "0.75rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          Sharda University<br />
          Plot No. 32-34, Knowledge Park III,<br />
          Greater Noida, Uttar Pradesh 201310
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default CampusMap; */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import './map.css';

// Fix marker icons issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

const classLocations = [
  { name: "Block-01 - Sharda School of Engineering and Technology", lat: 28.472401, lng: 77.484585},
  { name: "Block-02 - Sharda Admission Division", lat: 28.472878, lng: 77.484505 },
  { name: "Block-03 - Sharda School of Engineering and Technology", lat: 28.472833, lng: 77.483603 },
  { name: "Block-04 - Sharda School of Engineering and Technology", lat: 28.472222, lng: 77.483421 },
  { name: "Block-05 - Sharda School of Dental Science", lat: 28.473651, lng: 77.483836 },
  { name: "Block-07 - Sharda School of Business and Law", lat: 28.471073, lng: 77.481866 },

  { name: "Gate-4", lat: 28.471624, lng: 77.484268 },

  { name: "Dice-Cafe", lat: 28.471656, lng:77.483206 },
  { name: "Sharda Temple", lat: 28.473222, lng: 77.481903},
  { name: "Nescafe", lat: 28.473084, lng: 77.483224},
  { name: "Swami Vivekanand Library, Hackathon Centre, Anand Swaroop Auditorium", lat: 28.472903, lng: 77.479877},
  

  { name: "Kasturba Girls Hostel", lat: 28.472917, lng: 77.482086},
  { name: "Mother Teresa Girls Hostel", lat: 28.472787, lng: 77.482225},
  { name: "Sarojini Girls Hostel", lat: 28.472617, lng: 77.482289},
  { name: "Mandela Hostel", lat: 28.471845, lng: 77.481559},
];

const CampusMap = () => {
  return (
    <div className="map-container">
      <MapContainer center={[28.4731,77.4829]} zoom={16} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {classLocations.map((location, idx) => (
          <Marker key={idx} position={[location.lat, location.lng]}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CampusMap;
