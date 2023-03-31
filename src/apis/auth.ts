import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'react-toastify';
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

export const error = async () => {
  try {
    const res = await axios.get('test');

    return res;
  } catch (err) {
    return toast.error(`${err}`);
  }
};
