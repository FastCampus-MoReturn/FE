/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';
import styled from '@emotion/styled';
import { Navigate } from 'react-router-dom';
import PDFComp from '@/components/pdf-send/step02/PDFComp';

import Step01 from '@/components/pdf-send/step01/PDFInputIntro';
import Step02 from '@/components/pdf-send/step02/PDFSendModule';

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
        return <Navigate to="/pdf-send" />;
      default:
        return <Step02 setStep={setStep} />;
    }
  };
  return (
    <Globally>
      <div>
        <button type="button" onClick={prevStep}>
          이전
        </button>
        <button type="button" onClick={nextStep}>
          다음
        </button>
      </div>
      <div>step: {step}</div>
      {StepComp()}
    </Globally>
  );
};

export default PdfStep;

const Globally = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  width: 100%;
  max-width: 860px;
  gap: 100px;
`;
