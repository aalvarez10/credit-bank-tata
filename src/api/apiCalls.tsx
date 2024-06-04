import axios from 'axios';

const baseURL: string =
  'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products';

const apiCalls = axios.create({ baseURL });

apiCalls.interceptors.request.use(config => {
  config.headers['authorId'] = '10071994';
  return config;
});


export default apiCalls;