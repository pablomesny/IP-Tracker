import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const CustomMarker = new Icon({
  iconUrl: '/icons/icon-location.svg',
  iconSize: [40, 45]
});

export const Map = () => {
  return (
    <main>
      <MapContainer 
        style={{ width: '100vw', height: 'calc(100vh - 208px)' }}
        center={[51.505, -0.09]} 
        zoom={17} 
        scrollWheelZoom
        
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[51.505, -0.09]} icon={ CustomMarker }>
          <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
};
