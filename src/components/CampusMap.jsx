import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const CampusMap = () => {
  // Sharda University coordinates
  const center = {
    lat: 28.4322,
    lng: 77.5000
  };

  const mapStyles = {
    height: "400px",
    width: "100%",
    borderRadius: "0.75rem"
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={center}
        options={{
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9e9e9e" }]
            }
          ]
        }}
      >
        <Marker
          position={center}
          title="Sharda University"
          animation={window.google.maps.Animation.DROP}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default CampusMap; 