import axios from 'axios';

export function createDiarioNutriApi(accessToken) {
  const diarioNutriApi = axios.create({
<<<<<<< HEAD
    baseURL: 'http://10.66.41.195:8080',
=======
    baseURL: 'http://192.168.3.36:8080',
>>>>>>> 4963ff3a96c9150943d24f9478693679518d656c
  });

  diarioNutriApi.interceptors.request.use(config => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  return diarioNutriApi;
}
