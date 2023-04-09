import styled from '@emotion/styled';
import { ChangeEvent, MouseEventHandler, SetStateAction, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import axios, { AxiosProgressEvent, AxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';

import Progress from '@/components/pdf-send/step02/Progress';
import dragPresets from '@/components/pdf-send/step02/dragEvent';
import { useAppDispatch } from '@/store/hooks';
import { PDFAction } from '@/store/pdfSlice';
import { Pretendard, mainLargeButton, subLargeButton } from '@/styles/DesignSystem';
import COLORS from '@/styles/colors';
import upload from '@/assets/file_upload_100px.svg';
import pdf72px from '@/assets/pdf_72px.svg';
import cautionIcon from '@/assets/caution_circle_36px.svg';
import closeIcon from '@/assets/close_circle_36px.svg';
import { errorMessage } from '@/apis/auth';
import CheckIcon from '../CheckIcon';

export const instance = axios.create({
  baseURL: 'https://moreturn.shop/',
  headers: {
    'Content-Type': 'multipart/form-data',

    accept: '*/*',
  },
});

const StateIcon = (state: number) => {
  switch (state) {
    case 3:
      return <CheckIcon fill="#15CDCA" size="36" />;
    case 4:
      return <img src={cautionIcon} alt="cautionIcon" />;
    default:
      return <img src={closeIcon} alt="closeIcon" />;
  }
};

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
  const navigate = useNavigate();
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
  // 로드 스테이트
  const [totalCount, setTotalCount] = useState(0);
  const stateMsg = [
    '파일 선택 됨',
    '파일 전송 중...',
    '파일 해석 중...',
    '전송 완료',
    '파일 전송 실패',
  ];
  const loadStateMsg = ['전송 대기', '전송 중...', '파일 해석 중...', '전송 완료', '전송 실패'];

  useEffect(() => {
    if (Object.keys(pdfData).length > 0) {
      setTotalCount(3);
    }
  }, [pdfData]);

  const cancelRequest = () => {
    controllerRef.current.abort();
    // 스타일 변경
  };

  const removeFileState = () => {
    setPdfData({});
    setTotalCount(0);
    setProgressTotal(0);
    setFile(undefined);
    setProgressLoad(0);
    cancelRequest();
    if (inputRef.current) inputRef.current.value = '';
  };

  // 전송 과정( 전송 중임을 인식하기 위해 async 을 선언함 )
  const onSubmit = async () => {
    if (file === undefined) return errorMessage('파일을 넣어주세요');
    setTotalCount(1);

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
          // const percentage = (progressEvent.loaded * 100) / progressEvent.total;
          if (progressEvent?.total === undefined) return;
          setProgressTotal(progressEvent.total);
          setProgressLoad(progressEvent.loaded);
        },
      })
      .catch((err) => {
        if (err.response) {
          // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
          return err.response;
        } else if (err.request) {
          return { data: { success: false, message: `${err.code} : ${err.message}` } };
        } else {
          // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
          errorMessage(err.message);
        }
        return { data: { code: 200, success: false, message: '파일 전송 실패' } };
      });
    // eslint-disable-next-line consistent-return

    if (result.data.success) {
      setPdfData(result.data.data);
      dispatch(PDFAction(result.data.data));
      setTimeout(() => setStep((state) => state + 1), 1000);
    } else {
      setTotalCount(4);
      errorMessage(result.data.message);
    }

    return result;
  };

  const fileChange = (oneFile: SetStateAction<File>) => {
    if (oneFile instanceof File) {
      removeFileState();

      if (oneFile.size > 1024 * 1024 * 10) return errorMessage('파일 용량이 너무 큽니다');
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
    if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)}KB`;
    if (value < 1024 * 1024 * 1024) return `${(value / 1024 / 1024).toFixed(1)}MB`;
    return `${(value / 1024 / 1024 / 1024).toFixed(1)}GB`;
  };

  return (
    <PDFInputForm onSubmit={handleSubmit(onSubmit)}>
      {file ? (
        <LoadingWarp>
          <Between>
            <Pretendard
              size="18px"
              weight={700}
              color={totalCount === 4 ? COLORS.Alert : COLORS.Font_BL}
            >
              {stateMsg[totalCount]}
            </Pretendard>
            <UnderText
              onClick={() => {
                cancelRequest();
                removeFileState();
              }}
              size="16px"
              weight={400}
              color={COLORS.Font_grey_02}
            >
              삭제 및 파일 재선택
            </UnderText>
          </Between>

          <PDFLoadBox>
            <img src={pdf72px} alt="pdf-img" />
            <ProgressWrap>
              <Pretendard size="18px" weight={600}>
                {file.name}
              </Pretendard>
              <Between>
                <Pretendard size="16px" weight={400} color={COLORS.Font_grey_03}>
                  {valueToByte(progressLoad)} of {valueToByte(file.size)}
                  {isNumber(progressLoad / ProgressTotal)
                    ? `(${((progressLoad / ProgressTotal) * 100).toFixed(1)}%)`
                    : '(0%)'}
                </Pretendard>
                <Pretendard size="16px" weight={400} color={COLORS.Font_grey_03}>
                  {loadStateMsg[totalCount]}
                </Pretendard>
              </Between>

              <Progress
                value={(progressLoad * 100) / ProgressTotal}
                setter={setTotalCount}
                count={totalCount}
              />
            </ProgressWrap>
            {StateIcon(totalCount)}
          </PDFLoadBox>
        </LoadingWarp>
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
              *단일 PDF 파일(10MB 이하)만 업로드 가능합니다.
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

                if (e.target.files[0].type !== 'application/pdf') {
                  errorMessage('pdf 파일만 가능합니다');
                  e.target.value = '';
                  return;
                }

                const num = e.target.files[0].size;

                fileChange(e.target.files[0]);
                setProgressTotal(() => num);
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
    z-index: 20;
  }
`;

const PDFInputComp = styled.input`
  display: none;
`;

const PDFInputLabel = styled.label`
  ${subLargeButton}
  font-size: 16px;
  z-index: 10;
  width: 160px;
  height: 48px;
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
  ${mainLargeButton}
`;

const LoadingWarp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

const Between = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const UnderText = styled(Pretendard.withComponent('button'))`
  text-decoration-line: underline;
  background: transparent;
  border: none;
`;

const ProgressWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;
