import { Header } from '../header';
import { Map } from '../map/Map';
import { useIpData } from '../../hooks/useIpData';
import { Toast } from '../toast';

export const IPTrackerLayout = () => {

  const { ipData, errorMessage, isLoading, handleChangeIpAddress } = useIpData();

  return (
    <>
      <div className='max-h-screen'>
        <Header ipData={ ipData } handleChangeIpAddress={ handleChangeIpAddress } isLoading={ isLoading } />
        <Map ipData={ ipData } />
      </div>

      {
        errorMessage && 
          <Toast message={ errorMessage } type='error' />
      }
    </>
  );
};
