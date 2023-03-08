import { axiosInstance } from "./instance";
import { API_URLS } from "../constants/apiUrls";

export const login = async (data: Object) => {
  const response: Response = await axiosInstance.post(API_URLS.LOGIN, data);
  console.log("로그인 성공");
  return response;
};
