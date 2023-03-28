import styled from '@emotion/styled';
import { ChangeEvent, MouseEventHandler, SetStateAction, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios, { AxiosProgressEvent } from 'axios';
import Progress from '@/components/pdf-send/Progress';
import dragPresets from '@/components/pdf-send/dragEvent';

export const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'multipart/form-data',
    enctype: 'multipart/form-data',
  },
});

type FormValues = {
  test: FormData;
};

type Props = {};

const PDFInput = (props: Props) => {
  const controllerRef = useRef(new AbortController());
  const inputRef = useRef<HTMLFileInputElement>(null);
  const {
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

  // 전송 과정( 전송 중임을 인식하기 위해 async 을 선언함 )
  const onSubmit = async () => {
    if (file === undefined) return;
    const formData = new FormData();
    controllerRef.current = new AbortController();

    if (file instanceof File) formData.append('frm', file as File, encodeURIComponent(file.name));

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
    // eslint-disable-next-line consistent-return
    return result;
  };

  const fileChange = (oneFile: SetStateAction<File | undefined>) => {
    setLoad(0);
    if (oneFile instanceof File) setFile(oneFile);
    if (oneFile === undefined) setFile(undefined);
  };

  interface HTMLFileInputElement extends HTMLInputElement {
    files: FileList;
  }

  return (
    <Globalbody>
      <PDFInputForm onSubmit={handleSubmit(onSubmit)}>
        <PDFInputInfoBox>
          <PDFInputTitle>등기부등본 파일 업로드하기</PDFInputTitle>
          <PDFInputMsg>*PDF 파일만 업로드 가능합니다.</PDFInputMsg>
          <Progress value={load} />
          <PDFInputButton
            type="button"
            disabled={isSubmitting}
            color="#8a8a8a"
            onClick={() => {
              setLoad(0);
              setFile(undefined);
            }}
          >
            <NotoSansMedium color="#fff">리셋</NotoSansMedium>
          </PDFInputButton>
        </PDFInputInfoBox>
        <PDFInputBox>
          <PDFInputLabel>
            <PDFInputComp
              type="file"
              accept="application/pdf"
              ref={inputRef}
              onChange={(e: ChangeEvent<HTMLFileInputElement>) => {
                if (e.target.files.length === 0) return;
                fileChange(e.target.files[0]);
              }}
            />
            {file ? file.name : '선택되지 않음'}
            {file ? (
              <DeleteButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  fileChange(undefined);
                }}
              >
                <NotoSansMedium size="14px" color="#fff">
                  삭제
                </NotoSansMedium>
              </DeleteButton>
            ) : null}
          </PDFInputLabel>
          <PDFInputButton
            type="button"
            disabled={isSubmitting}
            color="#8a8a8a"
            onClick={() => {
              if (inputRef.current === null) return;
              inputRef.current.click();
            }}
          >
            <NotoSansMedium color="#fff">파일 선택</NotoSansMedium>
          </PDFInputButton>
          <PDFInputButton type="submit" disabled={isSubmitting}>
            <NotoSansMedium color="#fff">파일 제출</NotoSansMedium>
          </PDFInputButton>
        </PDFInputBox>
      </PDFInputForm>
    </Globalbody>
  );
};

export default PDFInput;

const Globalbody = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 64px;

  width: 100%;
  max-width: 1240px;
`;

const PDFInputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 64px 80px;

  width: 100%;
  height: 520px;

  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 5px #e6e6e6;
  border-radius: 20px;

  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

const PDFInputInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const PDFInputTitle = styled.h2`
  font-family: 'Noto Sans KR Bold';

  font-weight: 700;
  font-size: 32px;
  letter-spacing: -0.05em;

  color: #000000;
`;

const PDFInputMsg = styled.p`
  font-family: 'Noto Sans KR Medium';
  font-size: 16px;
  letter-spacing: -0.05em;

  color: #ec5f59;
`;

type Text = {
  size?: string;
  color?: string;
};

const NotoSansMedium = styled.span<Text>`
  font-family: 'Noto Sans KR Medium';
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => props.color || '#000'};
  letter-spacing: -0.05em;
`;

const PDFInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 0px;
  gap: 32px;
`;

const PDFInputComp = styled.input`
  display: none;
`;

const PDFInputLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 40px;
  gap: 16px;

  flex-grow: 4;
  height: 64px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 5px #e6e6e6;
  border-radius: 20px;
`;

type ColorButton = {
  color?: string;
};
const PDFInputButton = styled.button<ColorButton>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  flex-grow: 1;
  height: 64px;
  padding: 0px 16px;
  background: ${(props) => props.color || '#1c2379'};
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 5px #e6e6e6;
  border-radius: 20px;

  // 임시
  color: #fff;
`;

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 36px;

  background: #ec5f59;
  border-radius: 20px;
  border: none;
  outline: none;
`;
