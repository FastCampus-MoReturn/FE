import { ChangeEvent, MouseEventHandler, SetStateAction, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios, { AxiosProgressEvent } from 'axios';
import styled from '@emotion/styled';
import Progress from '../components/pdf-send/Progress';
import dragPresets from '../components/pdf-send/step02/dragEvent';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { PDFAction } from '@/store/pdfSlice';

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
  const pdfData = useAppSelector((state) => state.pdf);
  useEffect(() => {
    console.log('state pdf', pdfData);
    return () => {
      console.log("I'm unmounting.");
    };
  }, [pdfData]);

  const controllerRef = useRef(new AbortController());
  const inputRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({ mode: 'onChange' });
  const [load, setLoad] = useState(0);
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState<File>();

  const cancelRequest = () => {
    controllerRef.current.abort();
    setLoad(0);
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    controllerRef.current = new AbortController();
    console.log('File', file);

    if (file instanceof File)
      formData.append('multipartFile', file as File, encodeURIComponent(file.name));

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

  const fileChange = (list: SetStateAction<File>) => {
    if (list instanceof File) setFile(list);
  };

  interface HTMLFileInputElement extends HTMLInputElement {
    files: FileList;
  }

  return (
    <div>
      <Progress value={load} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          파일 선택
          <InputButton
            {...register('test')}
            type="file"
            accept="application/pdf"
            ref={inputRef}
            onClick={(e) => {
              console.log(e);
            }}
            onChange={(e: ChangeEvent<HTMLFileInputElement>) => {
              if (e.target.files.length === 0) return;
              console.log('바꼈어영', e.target.files);
              setFile(e.target.files[0]);
            }}
          />
        </Label>

        <button type="button" disabled={!isSubmitting} onClick={cancelRequest}>
          Cancel
        </button>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
      <div>
        <div>선택된 파일 : {file ? file.name : '선택되지 않음'}</div>
      </div>
      <DropZone drag={drag} {...dragPresets(setDrag, fileChange)}>
        드래그 하세요
      </DropZone>
    </div>
  );
};

export default PdfSend;

type DropZoneProps = {
  drag: boolean;
};
const DropZone = styled.div<DropZoneProps>`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border: 1px solid ${(props) => (props.drag ? 'red' : 'black')};
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: #eee;
  }
`;

const InputButton = styled.input`
  display: none;
`;
