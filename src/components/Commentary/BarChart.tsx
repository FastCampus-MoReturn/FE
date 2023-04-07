import React, { useState } from 'react';
import styled from '@emotion/styled';

interface BarChartData {
  name: string; // Label for the bar
  value: number; // Value for the bar
}

interface BarChartProps {
  data: BarChartData[]; // Data for the chart
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  // State to keep track of the hovered bar index
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  // Calculate the maximum value in the data for scaling the y-axis
  const maxValue = Math.max(...data.map((barData) => barData.value));

  // Function to handle mouse enter event on a bar
  const handleBarMouseEnter = (index: number) => {
    setHoveredBarIndex(index);
  };

  // Function to handle mouse leave event on a bar
  const handleBarMouseLeave = () => {
    setHoveredBarIndex(null);
  };
  return (
    <ChartContainer>
      <ChartContensts>
        <div className="chartLab">
          {data.map((barData, index) => (
            // eslint-disable-next-line
            <Label key={index} className="bar-label">
              <span className="floor">{barData.name}</span>
              <span className="area">{`(${barData.value}㎡)`}</span>
            </Label>
          ))}
        </div>
        <div className="charImg">
          {data.map((barData, index) => (
            <div
              // eslint-disable-next-line
              key={index}
              className="bar-container"
              onMouseEnter={() => handleBarMouseEnter(index)}
              onMouseLeave={handleBarMouseLeave}
              style={{
                height: '30px',
                width: `400px`,
              }}
            >
              {/* Render the bar */}
              <Bar
                className="bar"
                style={{
                  height: '30px',
                  width: `${(barData.value / maxValue) * 100}%`,
                  background: 'red',
                  position: 'relative',
                }}
              >
                <BarText>{`${barData.value}억`}</BarText>
                {hoveredBarIndex === index && (
                  <Tooltip className="tooltip">
                    <div className="floorWithArea">
                      <span className="floor">22층</span>
                      <span className="area">{`(${barData.value}㎡)`}</span>
                    </div>
                    <div className="valueWithDate">
                      <span className="value">{`${barData.value}억`}</span>
                      <span className="date">2022.05</span>
                    </div>
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
  width: 400px;
  height: 300px;
`;

const ChartContensts = styled.div`
  display: flex;
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  background-color: #fff;
  border: 3px solid blue;
  border-radius: 5px;
  margin: 2px;
`;

const Bar = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  border-radius: 5px;
  margin: 2px;
  padding-right: 10px;
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
  width: 150px;
  height: 60px;
  max-height: 80px;
  position: absolute;
  top: -250%;
  left: 90%;
  background-color: #fff;
  display: inline-block;
  padding: 10px;
  color: #333;
  border-radius: 6px;
  font-size: 14px;

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
    border-top: 13px solid blue;
    border-right: 13px solid transparent;
  }
`;
