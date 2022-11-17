import axios, {AxiosResponse} from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL})
axiosService.interceptors.request.use((config) => {
  config.headers = {
    'X-RapidAPI-Key': 'f0b79f9bc0mshfeeceb3620cd3f4p1c1874jsn8509735419b2'
  }
  return config
})

export type AxiosService<T> = Promise<AxiosResponse>

export {axiosService}