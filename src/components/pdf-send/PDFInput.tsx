import styled from '@emotion/styled';

type Props = {};

const PDFInput = (props: Props) => {
  return (
    <Globalbody>
      <PDFInputForm>
        <PDFInputInfoBox>
          <PDFInputTitle>등기부등본 파일 업로드하기</PDFInputTitle>
          <PDFInputMsg>*PDF 파일만 업로드 가능합니다.</PDFInputMsg>
        </PDFInputInfoBox>
        <PDFInputBox>
          <PDFInputLabel>
            <PDFInputComp type="file" />
            xxxxx
            <DeleteButton>
              <NotoSansMedium size="14px" color="#fff">
                삭제
              </NotoSansMedium>
            </DeleteButton>
          </PDFInputLabel>
          <PDFInputButton>
            <NotoSansMedium color="#fff">파일 선택</NotoSansMedium>
          </PDFInputButton>
          <PDFInputButton>
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

const PDFInputForm = styled.div`
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

const PDFInputButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  flex-grow: 1;
  height: 64px;
  padding: 0px 16px;
  background: #1c2379;
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
