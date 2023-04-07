import styled from '@emotion/styled';
import { SetStateAction } from 'react';
import axios from 'axios';
import COLORS from '@/styles/colors';
import check from '@/assets/check_24px.svg';
import PDFSendModule from './PDFSendModule';
import pageImg from '@/assets/page_img.svg';
import arrow from '@/assets/arrow.svg';
import { Pretendard } from '@/styles/DesignSystem';

export const instance = axios.create({
  baseURL: 'https://moreturn.shop/',
  headers: {
    'Content-Type': 'multipart/form-data',

    accept: '*/*',
  },
});

type Props = {
  setStep: React.Dispatch<SetStateAction<number>>;
};

const PDFInput = ({ setStep }: Props) => {
  return (
    <PDFInputForm>
      <PDFInputInfoBox>
        <PDFInputTitle>등기부등본 업로드</PDFInputTitle>

        <InfoBox>
          <WarningBox>
            <img src={check} alt="check" />
            <InfoTextWrap>
              <InfoText>
                등기부등본 사진, 스캔본, 수정본이 아닌{' '}
                <Bold>인터넷 등기소에서 전자로 발급받은 등기부등본 원본 pdf 파일</Bold>인가요?{' '}
              </InfoText>
            </InfoTextWrap>
          </WarningBox>
          <WarningBox>
            <img src={check} alt="check" />
            <InfoTextWrap>
              <InfoText>
                발급 시 <Bold>요약 항목 체크해서 발급</Bold> 받으셨나요?
              </InfoText>
            </InfoTextWrap>
          </WarningBox>
        </InfoBox>
      </PDFInputInfoBox>
      <PDFSendModule setStep={setStep} />
      <Banner>
        <TextBanner>
          <Pretendard size="24px" weight={600}>
            등기부등본이 없으신가요?
          </Pretendard>
          <BlankText
            href="http://www.iros.go.kr/PMainJ.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Pretendard size="18px" weight={400}>
              등기부등본 발급받으러 가기
            </Pretendard>
            <img src={arrow} alt="arrow" />
          </BlankText>
        </TextBanner>
        <img src={pageImg} alt="pageImg" />
      </Banner>
    </PDFInputForm>
  );
};

export default PDFInput;

const PDFInputForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 60px;

  width: 100%;
`;

const PDFInputInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 60px;

  width: 100%;
`;

const PDFInputTitle = styled.h2`
  font-weight: 600;
  font-size: 36px;
  letter-spacing: -0.05em;

  color: #000000;
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
const WarningBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
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

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0px 36px;
  gap: 18px;

  width: 100%;

  background: ${COLORS.PointBG};
  border-radius: 20px;
`;

const TextBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 100%;
`;

const BlankText = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
`;
