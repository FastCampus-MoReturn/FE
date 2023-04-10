import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast, ToastOptions } from 'react-toastify';
import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

interface LoginProps {
  email: string;
}

// TOASTMODAL OPTIONS
const toastOptions: ToastOptions = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 2000,
  hideProgressBar: true,
  draggable: false,
  pauseOnFocusLoss: true,
  closeButton: false,
};

export const error = async () => {
  try {
    const res = await axios.get('test');

    return res;
  } catch (err) {
    return toast.error('잘못된 파일 형식입니다 PDF형식만 업로드 가능합니다.', { ...toastOptions });
  }
};

export const errorMessage = (message: string) => {
  return toast.error(message, toastOptions);
};
