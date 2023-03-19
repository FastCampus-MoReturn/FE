import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios, { AxiosProgressEvent } from 'axios';
import Progress from '../components/Progress';

export const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'multipart/form-data',
    enctype: 'multipart/form-data',
  },
});

type Props = {};

type FormValues = {
  test: FormData;
};

const PdfSend = (props: Props) => {
  const controllerRef = useRef(new AbortController());

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({ mode: 'onChange' });
  const [load, setLoad] = useState(0);

  const cancelRequest = () => {
    controllerRef.current.abort();
    setLoad(0);
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    controllerRef.current = new AbortController();

    formData.append('test', data.test[0] as Blob, encodeURIComponent(data.test[0].name));

    const result = await instance
      .post('upload', formData, {
        signal: controllerRef.current.signal,
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (progressEvent?.total === undefined) return;
          const percentage = (progressEvent.loaded * 100) / progressEvent.total;
          setLoad(percentage);
        },
      })
      .catch((err) => {
        return err;
      });
    console.log('result', result);
    return result;
  };
  // onSubmit={handleSubmit(onSubmit)}

  return (
    <div>
      <Progress value={load} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('test')}
          type="file"
          name="test"
          accept="application/pdf, image/png,  image/jpeg , image/bmp"
        />

        <button type="button" disabled={!isSubmitting} onClick={cancelRequest}>
          Cancel
        </button>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PdfSend;
