import { useEffect, useState } from 'react';
import { IPData } from '../interfaces/IPData';
import { getIpData } from '../services/getIpData';

export const useIpData = () => {

  const [ ipData, setIpData ] = useState<IPData | null>(null);
  const [ ipAddress, setIpAddress ] = useState<string>('');
  
  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const getIpDataFromApi = async () => {
      const data = await getIpData( ipAddress, signal );
      
      if( !ipAddress ) setIpAddress( data.ip );
      setIpData(data);
    };

    getIpDataFromApi();

    return () => {
      abortController.abort();
    };
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
