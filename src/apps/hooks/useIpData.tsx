import { useEffect, useState } from 'react';
import { IPData } from '../interfaces/IPData';
import { getIpData } from '../services/getIpData';

export const useIpData = () => {

  const [ ipData, setIpData ] = useState<IPData | null>(null);
  const [ ipAddress, setIpAddress ] = useState<string>('');
  
  useEffect(() => {
    const getIpDataFromApi = async () => {
      const data = await getIpData( ipAddress );
      
      if( !ipAddress ) setIpAddress( data.ip );
      setIpData(data);
    };

    getIpDataFromApi();
  }, [ipAddress]);

  const handleChangeIpAddress = ( ipAddress: string ): void => {
    if( ipAddress ) {
      setIpAddress( ipAddress );
    }
  };

  return {
    ipData,
    handleChangeIpAddress
  };
};
