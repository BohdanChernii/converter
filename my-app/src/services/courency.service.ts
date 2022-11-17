import {axiosService} from "./axios.service";
import {baseURL} from "../configs";

const courencyService = {
  get: () => axiosService.get(baseURL)
}
export {courencyService}