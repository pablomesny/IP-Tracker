import { IP_API_KEY } from '../constants/constants';
import { IPData } from '../interfaces/IPData';

export const getIpData = async (ip: string, signal: AbortSignal): Promise<IPData> => {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${IP_API_KEY}&ipAddress=${ip}`,
    { signal }
  );
  const data = await res.json();
  return data;
};
