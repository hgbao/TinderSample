import apisauce from 'apisauce';
import { ApiConfig } from '@config';

const api = apisauce.create({
  baseURL: ApiConfig.hostName,
  timeout: 30000
});

export const fetchGet = (path, params) => {
  return api.get(`/api/${ApiConfig.apiVersion}${path}`, { params });
};

export const fetchPost = (path, params) => {
  return api.post(`/api/${ApiConfig.apiVersion}${path}`, { params });
};
