import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import BarChart from './BarChart';
import CustomSelect from './CustomSelect';
import { PdfState } from '@/store/pdfSlice';

interface DataItem {
  amount: string;
  buildYear: string;
  eupMyunDongCode: string;
  jibun: string;
  legDong: string;
  serialNumber: string;
  siGunguCode: string;
  tradeAptName: string;
  tradeDay: string;
  tradeExclusiveArea: string;
  tradeMonth: string;
  tradeType: string;
  tradeYear: string;
  tradefloor: string;
}

interface Props {
  propData: {
    amount: string;
    buildYear: string;
    eupMyunDongCode: string;
    jibun: string;
    legDong: string;
    serialNumber: string;
    siGunguCode: string;
    tradeAptName: string;
    tradeDay: string;
    tradeExclusiveArea: string;
    tradeMonth: string;
    tradeType: string;
    tradeYear: string;
    tradefloor: string;
  }[];
  pdfData: PdfState;
}

const ValuationChartContainer = ({ propData, pdfData }: Props) => {
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);

  const handleSelect = (selectedValue: string) => {
    if (selectedValue === '전체') {
      // If "all" option is selected, set filtered data to the entire data array
      setFilteredData(propData);
    } else {
      // Filter data based on selected value
      const filtered = propData.filter((item) => item.tradefloor === selectedValue);
      setFilteredData(filtered);
    }
  };

  const options1 = [{ value: '전체', label: '전체' }];

  const options2 = [{ value: '전체', label: '전체' }];

  const options3 = [{ value: '전체', label: '전체' }];
  return (
    <>
      <ValuationChartCont>
        <div className="valuation-image-text">
          <ChartText>
            <Dot>●</Dot>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <div css={Bold}>실거래가 이미지</div>
          </ChartText>
          {/* <span>최근 실거래가</span> */}
        </div>
        <ColorInfo>
          <MinMaxColor>
            <div>최저</div>
            <ColorBox style={{ background: '#eaedfb' }}> </ColorBox>
            <ColorBox style={{ background: '#CED4F4' }}> </ColorBox>
            <ColorBox style={{ background: '#8D9BEB' }}> </ColorBox>
            <ColorBox style={{ background: '#4258D7' }}> </ColorBox>
            <ColorBox style={{ background: '#1F3094' }}> </ColorBox>
            <div>최고</div>
          </MinMaxColor>
          <TargetColor>
            <ColorBox style={{ background: '#15CDCA' }}> </ColorBox>
            <span>해당 매물</span>
          </TargetColor>
        </ColorInfo>

        <SelectSection>
          <SelectWrapper>
            <SelectText>거래기간 범위 선택</SelectText>
            <CustomSelect options={options1} onSelect={handleSelect} />
          </SelectWrapper>
          <SelectWrapper>
            <SelectText>거래층 선택</SelectText>
            <CustomSelect options={options2} onSelect={handleSelect} />
          </SelectWrapper>
          <SelectWrapper>
            <SelectText>거래면적 선택</SelectText>
            <CustomSelect options={options3} onSelect={handleSelect} />
          </SelectWrapper>
        </SelectSection>
      </ValuationChartCont>
      <BarChart filteredData={filteredData} propData={propData} pdfData={pdfData} />
    </>
  );
};

export default ValuationChartContainer;

export const ChartText = styled.div`
  display: flex;
  margin: 0 0 20px 0;
  line-height: 60px;
  border-bottom: 1px solid #e9e9ed;
  div {
    &:first-child {
      margin-right: 5px;
    }
  }
`;

const ValuationChartCont = styled.div`
  margin-bottom: 100px;
`;

export const Dot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;

const Bold = css`
  font-weight: 800;
`;

const ColorInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 60px;
  div {
    &:last-child {
      margin-right: 50px;
    }
  }
`;

const MinMaxColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const TargetColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const ColorBox = styled.div`
  width: 40px;
  height: 16px;
  border-radius: 4px;
`;

const SelectSection = styled.div`
  background-color: #fff;
  z-index: 999;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const SelectWrapper = styled.div``;
const SelectText = styled.div`
  font-size: 14px;
  color: #767676;
`;
