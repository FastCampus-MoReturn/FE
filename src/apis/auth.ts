import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

interface LoginProps {
  email: string;
}

export const login = async (data: LoginProps) => {
  const response: Response = await axiosInstance.post(API_URLS.LOGIN, data);
  console.log('로그인 성공');
  return response;
};
