import { FC } from 'react';
import { Icon, LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { IPData } from '../../interfaces/IPData';

interface Props {
  ipData: IPData | null;
}

const CustomMarker = new Icon({
  iconUrl: '/icons/icon-location.svg',
  iconSize: [40, 45]
});

const ChangeMapView = ({ coords }: { coords: LatLngExpression }) => {
  const map = useMap();
  map.setView(coords, map.getZoom());
  return null;
};

export const Map: FC<Props> = ({ ipData }) => {

  const position: LatLngExpression = ipData ? [ipData.location.lat, ipData.location.lng] : [51.505, -0.09];

  return (
    <main>
      <MapContainer 
        style={{ width: '100vw', height: 'calc(100vh - 208px)' }}
        center={position} 
        zoom={17} 
        scrollWheelZoom
        
      >
        <TileLayer
          url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
        />
        <ChangeMapView coords={position} />
        <Marker position={position} icon={ CustomMarker } />
      </MapContainer>
    </main>
  );
};
