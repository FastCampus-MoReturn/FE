import styled from '@emotion/styled';
import { ChangeEvent, MouseEventHandler, SetStateAction, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios, { AxiosProgressEvent } from 'axios';
import Progress from '@/components/pdf-send/Progress';
import dragPresets from '@/components/pdf-send/step02/dragEvent';
import { useAppDispatch } from '@/store/hooks';
import { PDFAction } from '@/store/pdfSlice';
import { Pretendard } from '@/styles/DesignSystem';
import COLORS from '@/styles/colors';
import upload from '@/assets/file_upload_100px.svg';

export const instance = axios.create({
  baseURL: 'https://moreturn.shop/',
  headers: {
    'Content-Type': 'multipart/form-data',

    accept: '*/*',
  },
});

type FormValues = {
  test: FormData;
};

type Props = {
  setStep: React.Dispatch<SetStateAction<number>>;
};

interface HTMLFileInputElement extends HTMLInputElement {
  files: FileList;
}

const PDFInput = ({ setStep }: Props) => {
  const dispatch = useAppDispatch();
  const controllerRef = useRef(new AbortController());
  const inputRef = useRef<HTMLFileInputElement>(null);
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({ mode: 'onChange' });
  const [progressLoad, setProgressLoad] = useState(0);
  const [ProgressTotal, setProgressTotal] = useState(0);
  const [file, setFile] = useState<File>();
  // 드롭 상태 관리
  const [drag, setDrag] = useState(false);
  const [pdfData, setPdfData] = useState({});

  useEffect(() => {
    console.log('pdfData', pdfData);
  }, [pdfData]);

  const cancelRequest = () => {
    controllerRef.current.abort();
    // 스타일 변경
  };

  const removeFileState = () => {
    setProgressTotal(0);
    setFile(undefined);
    setProgressLoad(0);
    if (inputRef.current) inputRef.current.value = '';
  };

  // 전송 과정( 전송 중임을 인식하기 위해 async 을 선언함 )
  const onSubmit = async () => {
    if (file === undefined) return alert('파일을 넣어주세요');

    // const formData = new FormData();
    const formData = new FormData();
    // 이름 뭘로 해도 body에 formData로 들어가는 것 같다
    controllerRef.current = new AbortController();

    if (file instanceof File)
      formData.append('multipartFile', file as File, encodeURIComponent(file.name));

    const result = await instance
      .post('api/pdfupload', formData, {
        signal: controllerRef.current.signal,
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (progressEvent?.total === undefined) return;
          // const percentage = (progressEvent.loaded * 100) / progressEvent.total;
          setProgressTotal(progressEvent.total);
          setProgressLoad(progressEvent.loaded);
        },
      })
      .catch((err) => {
        return err;
      });
    // eslint-disable-next-line consistent-return
    setPdfData(result.data.data);
    dispatch(PDFAction(result.data.data));
    return result;
  };

  const fileChange = (oneFile: SetStateAction<File>) => {
    if (oneFile instanceof File) {
      removeFileState();
      setFile(oneFile);
    }
    if (oneFile === undefined) removeFileState();
  };

  const isNumber = (value: any) => {
    if (value === null) {
      return false;
      // Number에서 undefined 는 NaN으로 처리 됨
    }

    const dist = Number(value);

    if (Number.isNaN(dist)) {
      return false;
    }
    if (!Number.isFinite(dist)) {
      return false;
    }
    return true;
  };

  const valueToByte = (value: number) => {
    if (value < 1024) return `${value}B`;
    if (value < 1024 * 1024) return `${(value / 1024).toFixed(2)}KB`;
    if (value < 1024 * 1024 * 1024) return `${(value / 1024 / 1024).toFixed(2)}MB`;
    return `${(value / 1024 / 1024 / 1024).toFixed(2)}GB`;
  };

  return (
    <PDFInputForm onSubmit={handleSubmit(onSubmit)}>
      {file ? (
        <PDFLoadBox>
          <Progress value={(progressLoad * 100) / ProgressTotal} />
          <div>
            {valueToByte(progressLoad)}/{valueToByte(ProgressTotal)}
          </div>
          <div>
            progressLoad / ProgressTotal:{' '}
            {isNumber(progressLoad / ProgressTotal)
              ? `${((progressLoad / ProgressTotal) * 100).toFixed(2)}%`
              : '파일을 넣어주세요'}
          </div>
          <button
            type="button"
            onClick={() => {
              cancelRequest();
              removeFileState();
            }}
          >
            x
          </button>
        </PDFLoadBox>
      ) : (
        <PDFInputLoadBox
          drag={drag}
          className={drag ? 'dragging' : ''}
          {...dragPresets(setDrag, fileChange)}
        >
          <img src={upload} alt="upload" />

          <MsgArea>
            <Pretendard size="18px" weight={400} color={COLORS.Font_grey_02}>
              여기로 파일을 드래그하거나 하단에 파일 선택을 통해 등기부등본을 업로드해주세요.
            </Pretendard>
            <Pretendard size="16px" weight={400} color={COLORS.Alert}>
              *단일 PDF 파일만 업로드 가능합니다.
            </Pretendard>
          </MsgArea>
          <PDFInputLabel>
            파일 선택
            <PDFInputComp
              type="file"
              accept="application/pdf"
              ref={inputRef}
              onChange={(e: ChangeEvent<HTMLFileInputElement>) => {
                if (e.target.files.length === 0) return;
                fileChange(e.target.files[0]);
              }}
            />
          </PDFInputLabel>
        </PDFInputLoadBox>
      )}
      <PDFSubmitBtn type="submit" disabled={isSubmitting}>
        <Pretendard size="20px" weight={600} color={COLORS.Font_grey_03}>
          제출하기
        </Pretendard>
      </PDFSubmitBtn>
    </PDFInputForm>
  );
};

export default PDFInput;

const PDFInputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  gap: 60px;
  border-radius: 30px;
  width: 100%;
  background: ${COLORS.BG_100};
`;

type DragBoxProps = {
  drag: boolean;
};

const PDFInputLoadBox = styled.div<DragBoxProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 25px;
  width: 100%;

  background: #ffffff;
  border: 2px dashed ${(props) => (props.drag ? COLORS.Main : COLORS.Line_200)};
  border-radius: 20px;

  ::after {
    content: '';
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: ${COLORS.MainBG};
    transition: opacity 0.25s ease-in-out;
  }
  &.dragging::after {
    content: '업로드할 파일을 여기에 끌어다 놓으세요.';
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.05em;
    color: ${COLORS.Main};
    width: 100%;
    height: 100%;
    background: ${COLORS.MainBG};
    border-radius: 20px;
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
  }
`;

const PDFInputComp = styled.input`
  display: none;
`;

const PDFInputLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 160px;
  height: 48px;
  color: ${COLORS.Main};
  border: 1px solid ${COLORS.Main};
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.05em;
`;

const PDFLoadBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
  width: 100%;

  background: #fff;
  border: 1px solid ${COLORS.BG_100};
  border-radius: 20px;
`;

const MsgArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  width: 100%;
`;

const PDFSubmitBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 0px;
  gap: 10px;

  width: 100%;

  outline: none;
  border: none;

  background: ${COLORS.Disable};
  border-radius: 12px;
`;
