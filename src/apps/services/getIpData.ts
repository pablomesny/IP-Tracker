import { IP_API_KEY } from '../constants/constants';

export const getIpData = async (ip: string) => {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${IP_API_KEY}&ipAddress=${ip}`
  );
  const data = await res.json();
  return data;
};
