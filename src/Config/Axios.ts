import axios, { AxiosResponse } from 'axios';

const getAxios = async (endpoint: string): Promise<AxiosResponse> => {
  return await axios.get(
    endpoint,
    {
      headers: {
        Accept: 'application/json'
      }
    }
  );
};

const postAxios = async (endpoint: string, data: any): Promise<AxiosResponse> => {
  return await axios.post(
    endpoint,
    data,
    {
      headers: {
        Accept: 'application/json'
      }
    }
  );
};

export {
  getAxios,
  postAxios
};
