import styled from '@emotion/styled';
import { ChangeEvent, MouseEventHandler, SetStateAction, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios, { AxiosProgressEvent } from 'axios';
import Progress from '@/components/pdf-send/Progress';
import dragPresets from '@/components/pdf-send/step02/dragEvent';
import { useAppDispatch } from '@/store/hooks';
import { PDFAction } from '@/store/pdfSlice';
import COLORS from '@/styles/colors';

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
  const navigate = useNavigate();
  // 전송 과정( 전송 중임을 인식하기 위해 async 을 선언함 )

  return (
    <PDFIntro>
      <PDFInputTitle>등기부등본 발급 확인</PDFInputTitle>
      <InfoBox>
        <InfoTitle>
          <i>icon</i>등기부등본 발급 전 다음 내용을 반드시 지켜주세요.
        </InfoTitle>
        <InfoTextWrap>
          <InfoText>반드시 인터넷 등기소에서 발급된 </InfoText>
          <Bold>&quot;요약 포함&quot; 등기부등본 pdf 파일</Bold>
          <InfoText>
            을 업로드 합니다. <br />이 외의 스캔본, 수정한 등기부등본을 업로드 시 파일을 정상적으로
            읽어올 수 없습니다.
          </InfoText>
        </InfoTextWrap>
        <InfoTextWrap>
          <InfoText>등기부등본 해석에 </InfoText>
          <Bold>요약 항목이 포함되어 발급 된 PDF가 사용 됩니다</Bold>
        </InfoTextWrap>
      </InfoBox>
      <StepWarp>
        <StepTitle>위 사항들을 모두 충족한 등기부등본을 발급받으셨나요?</StepTitle>
        <ButtonWrap>
          <PreviousButton
            href="http://www.iros.go.kr/PMainJ.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            아니요(발급 사이트로 이동)
          </PreviousButton>
          <NextButton onClick={() => setStep((state) => state + 1)}>네(다음으로 이동)</NextButton>
        </ButtonWrap>
      </StepWarp>
    </PDFIntro>
  );
};

export default PDFInput;

const PDFIntro = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 60px;

  width: 100%;
`;

const PDFInputTitle = styled.span`
  font-weight: 600;
  font-size: 36px;
  letter-spacing: -0.05em;
  color: ${COLORS.Font_BL};
`;

const StepTitle = styled(PDFInputTitle)`
  font-size: 24px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 20px;

  width: 100%;

  background: ${COLORS.AlertBG};
  border-radius: 30px;
`;

const InfoTitle = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  width: 100%;

  border-radius: 30px;
  font-weight: 600;
  font-size: 24px;
  color: ${COLORS.Alert};
`;

const InfoTextWrap = styled.div`
  display: inline;
`;
const InfoText = styled.span`
  font-size: 18px;
  color: ${COLORS.Font_BL};
`;

const Bold = styled(InfoText)`
  font-weight: 700;
`;

const StepWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 40px;

  width: 100%;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 0px;
  gap: 20px;
`;

const PreviousButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 50%;
  height: 72px;

  background: ${COLORS.MainBG};
  border: 1px solid ${COLORS.Main};
  border-radius: 12px;

  // font
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.05em;

  color: ${COLORS.Main};
`;

const NextButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 72px;

  background: ${COLORS.Main};
  border: none;
  outline: none;
  border-radius: 12px;

  // font
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.05em;

  color: #fff;
`;
