/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';
import styled from '@emotion/styled';
import { Navigate } from 'react-router-dom';
import PDFComp from '@/components/pdf-send/step02/PDFComp';

import Step01 from '@/components/pdf-send/step01/PDFInputIntro';
import Step02 from '@/components/pdf-send/step02/PDFSendModule';
import StepProgress from '@/components/pdf-send/StepProgress';
import COLORS from '@/styles/colors';
import CheckIcon from '@/components/pdf-send/CheckIcon';
import { Pretendard } from '@/styles/DesignSystem';

type Props = {};

const PdfStep = (props: Props) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const StepComp = () => {
    switch (step) {
      case 0:
        return <Step01 setStep={setStep} />;
      case 1:
        return <PDFComp setStep={setStep} />;
      case 2:
        return <Navigate to="/commentary" />;
      default:
        return <Navigate to="/" />;
    }
  };

  const stepIf = (value: number) => {
    if (step >= value) {
      return COLORS.Main;
    }
    return COLORS.BG_200;
  };
  const stepTextIf = (value: number) => {
    if (step >= value) {
      return COLORS.Main;
    }
    return COLORS.Font_grey_03;
  };

  return (
    <Globally>
      <AllstepWrapper>
        <StepProgress value={step} />
        <SizeFixComp>
          <CheckIcon fill={stepIf(0)} size="36" />
          <NowarpText size="20px" weight={400} color={stepTextIf(0)}>
            등기부등본 발급 확인
          </NowarpText>
        </SizeFixComp>
        <SizeFixComp>
          <CheckIcon fill={stepIf(1)} size="36" />
          <NowarpText size="20px" weight={400} color={stepTextIf(1)}>
            등기부등본 업로드
          </NowarpText>
        </SizeFixComp>
        <SizeFixComp>
          <CheckIcon fill={stepIf(2)} size="36" />
          <NowarpText size="20px" weight={400} color={stepTextIf(2)}>
            등기부등본 해석
          </NowarpText>
        </SizeFixComp>
      </AllstepWrapper>
      {StepComp()}
    </Globally>
  );
};

export default PdfStep;

const Globally = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0px;

  width: 100%;
  max-width: 860px;
  gap: 100px;
`;

const AllstepWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
  padding: 0px;
  width: 100%;
`;

const SizeFixComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 6px;
  flex-wrap: nowrap;
  flex: 0;

  overflow: unset;
  width: 36px;
  height: 36px;
`;

const NowarpText = styled(Pretendard)`
  white-space: nowrap;
`;
