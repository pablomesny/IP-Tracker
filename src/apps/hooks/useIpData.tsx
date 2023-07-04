import { useEffect, useState } from 'react';
import { IPData } from '../interfaces/IPData';
import { getIpData } from '../services/getIpData';

export const useIpData = () => {

  const [ ipData, setIpData ] = useState<IPData | null>(null);
  const [ ipAddress, setIpAddress ] = useState<string>('');

  console.log({ipData});

  useEffect(() => {
    const getIpDataFromApi = async () => {
      const data = await getIpData( ipAddress );
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
