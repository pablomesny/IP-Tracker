import { Header } from '../header';
import { Map } from '../map/Map';
import { useIpData } from '../../hooks/useIpData';

export const IPTrackerLayout = () => {

  const { ipData, handleChangeIpAddress } = useIpData();

  return (
    <div className='max-h-screen'>
      <Header ipData={ ipData } handleChangeIpAddress={ handleChangeIpAddress } />
      <Map ipData={ ipData } />
    </div>
  );
};
