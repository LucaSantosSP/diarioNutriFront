import axios from 'axios';

export function createDiarioNutriApi(accessToken) {
  const diarioNutriApi = axios.create({
    baseURL: 'http://192.168.3.36:8080',
  });

  diarioNutriApi.interceptors.request.use(config => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  return diarioNutriApi;
}
