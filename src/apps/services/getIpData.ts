const API_KEY = process.env.REACT_APP_IP_API_KEY;

export const getIpData = async (ip: string) => {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?${API_KEY}=at_w8nq8rfDSZBlND9WA1XJL5Q2YaFcV&ipAddress=${ip}`
  );
  return res.json();
};
