import { FC, useState, useEffect } from 'react';
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

  const [ currentPosition, setCurrentPosition ] = useState<LatLngExpression | null>(null);

  const position = ipData ? [ipData.location.lat, ipData.location.lng] : [51.505, -0.09];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition([latitude, longitude] as LatLngExpression);
    });
  }, []);

  return (
    <main>
      <MapContainer 
        style={{ width: '100vw', height: 'calc(100vh - 208px)' }}
        center={currentPosition ?? position as LatLngExpression} 
        zoom={17} 
        scrollWheelZoom
        
      >
        <TileLayer
          url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
        />
        <ChangeMapView coords={currentPosition ?? position as LatLngExpression} />
        <Marker position={currentPosition ?? position as LatLngExpression} icon={ CustomMarker } />
      </MapContainer>
    </main>
  );
};
