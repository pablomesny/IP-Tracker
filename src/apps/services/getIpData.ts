
const API_KEY = process.env.IP_DATA_APIKEY;

const getIpData = ( ip: string ) => {
    return fetch(`https://geo.ipify.org/api/v2/country,city?${ IP_DATA_APIKEY }=at_w8nq8rfDSZBlND9WA1XJL5Q2YaFcV&ipAddress=${ ip }`)
}

https://geo.ipify.org/api/v2/country,city?apiKey=at_w8nq8rfDSZBlND9WA1XJL5Q2YaFcV&ipAddress=8.8.8.8

2393818
