import { useEffect, useState } from 'react';
import { IPData } from '../interfaces/IPData';
import { getIpData } from '../services/getIpData';

export const useIpData = () => {

  const [ ipData, setIpData ] = useState<IPData | null>(null);
  const [ ipAddress, setIpAddress ] = useState<string>('');
  const [ errorMessage, setErrorMessage ] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const getIpDataFromApi = async () => {
      try {
        setIsLoading(true);
        const data = await getIpData( ipAddress, signal );
        setIpData(data);  
      } catch (error) {
        if( error instanceof Error) {
          setErrorMessage(error.message as string);
        }
      } finally {
        setIsLoading(false);
      }
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
    isLoading,
    errorMessage,
    handleChangeIpAddress
  };
};
