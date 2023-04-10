import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PdfState } from '@/store/pdfSlice';

interface BarChartData {
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
  propData: BarChartData[];
  filteredData: BarChartData[];
  pdfData: PdfState;
}

const BarChart = ({ propData, filteredData, pdfData }: Props) => {
  // State to keep track of the hovered bar index
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  // Calculate the maximum value in the data for scaling the y-axis
  const maxValue = Math.max(...propData.map((barData) => parseInt(barData.amount, 10)));
  const minValue = Math.min(...propData.map((barData) => parseInt(barData.amount, 10)));

  // Function to handle mouse enter event on a bar
  const handleBarMouseEnter = (index: number) => {
    setHoveredBarIndex(index);
  };

  // Function to handle mouse leave event on a bar
  const handleBarMouseLeave = () => {
    setHoveredBarIndex(null);
  };

  const getBackgroundColor = (barData: BarChartData) => {
    if ((parseInt(barData.amount, 10) - minValue) / (maxValue - minValue) >= 0.8) {
      return '#1F3094';
    } else if ((parseInt(barData.amount, 10) - minValue) / (maxValue - minValue) >= 0.6) {
      return '#4258D7';
    } else if ((parseInt(barData.amount, 10) - minValue) / (maxValue - minValue) >= 0.4) {
      return '#8D9BEB';
    } else if ((parseInt(barData.amount, 10) - minValue) / (maxValue - minValue) >= 0.2) {
      return '#CED4F4';
    } else if (barData.tradefloor === pdfData.currentFloor) {
      return '#15CDCA';
    } else {
      return '#eaedfb';
    }
  };

  const getColor = (barData: BarChartData) => {
    if ((parseInt(barData.amount, 10) - minValue) / (maxValue - minValue) >= 0.4) {
      return '#fff';
    } else {
      return '#000';
    }
  };

  return (
    <ChartContainer>
      <ChartContensts>
        <div className="chartLabel">
          {propData.map((barData, index) => (
            // eslint-disable-next-line
            <Label key={index} className="bar-label">
              <div className="floor">{barData.tradefloor}층</div>
              <div className="area" style={{ color: '#999999' }}>{`(${parseInt(
                barData.tradeExclusiveArea,
                10,
              )}㎡)`}</div>
            </Label>
          ))}
        </div>
        <div className="chartImg" style={{ width: '80%' }}>
          {propData.map((barData, index) => (
            <div
              // eslint-disable-next-line
              key={index}
              className="bar-container"
              onMouseEnter={() => handleBarMouseEnter(index)}
              onMouseLeave={handleBarMouseLeave}
              style={{
                height: '30px',
                width: `100%`,
              }}
            >
              {/* Render the bar */}
              <Bar
                className="bar"
                style={{
                  height: '30px',
                  width: `${(parseInt(barData.amount, 10) / maxValue) * 100}%`,
                  backgroundColor: getBackgroundColor(barData),
                  color: getColor(barData),
                }}
              >
                <BarText>{`${parseInt(barData.amount, 10) / 10000}억`}</BarText>
                {hoveredBarIndex === index && (
                  <Tooltip className="tooltip">
                    <TooltipStyle>
                      <div className="floorWithArea" style={{ color: '#171717', display: 'flex' }}>
                        <div className="floor">{barData.tradefloor}층</div>
                        <div className="area">{`(${barData.tradeExclusiveArea}㎡)`}</div>
                      </div>
                      <div className="valueWithDate" style={{ display: 'flex', gap: '10px' }}>
                        <div
                          className="value"
                          style={{ color: '#4258D7', fontSize: '20px', fontWeight: 'bold' }}
                        >{`${parseInt(barData.amount, 10) / 10000}억`}</div>
                        <div className="date" style={{ color: '#767676' }}>
                          2022.05
                        </div>
                      </div>
                    </TooltipStyle>
                  </Tooltip>
                )}
              </Bar>
            </div>
          ))}
        </div>
      </ChartContensts>
    </ChartContainer>
  );
};

export default BarChart;

const ChartContainer = styled.div`
  width: 100%;
  padding: 0 0 100px 0;
`;

const ChartContensts = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const Label = styled.div`
  background: #f5f6fa;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px 5px 5px 0;
  gap: 5px;
  white-space: nowrap;
`;

const Bar = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  position: relative;
  cursor: pointer;
`;

const BarText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 2px;
  cursor: pointer;
`;

const Tooltip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  max-height: 80px;
  position: absolute;
  top: -250%;
  left: 90%;
  background-color: #fff;
  padding: 10px;
  color: #333;
  border: 1px solid #d2d2dc;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
  padding: 10px;
  z-index: 999;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 10%;
    border-top: 10px solid #fff;
    border-right: 10px solid transparent;
  }

  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 9%;
    border-top: 13px solid #d2d2dc;
    border-right: 13px solid transparent;
  }
`;

const TooltipStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  line-height: 150%;
`;
