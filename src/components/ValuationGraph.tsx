import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface Props {
  data: { name: string; value: number }[];
}

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: { value?: string };
}

const CustomTick: React.FC<CustomTickProps> = (props) => {
  const { x = 0, y = 0, payload = { value: '' } } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={-100} y={-50} width={100} height={100} fill="#fff" stroke="#ccc" />
      <text x={0} y={0} dy={4} textAnchor="middle" fill="#666">
        {payload.value}
      </text>
    </g>
  );
};

const ValuationGraph = ({ data }: Props) => {
  return (
    <>
      <div className="select-section">
        <div className="period-wrapper">
          <span>거래기간 범위 선택</span>
          <select
            name=""
            id=""
            className="period"
            // value={filterValue}
            // onChange={handleFilterChange}
          >
            <option value="">1개월</option>
            <option value="">3개월</option>
            <option value="">6개월</option>
            <option value="">9개월</option>
            <option value="">12개월</option>
          </select>
        </div>
        <div className="flooer-wrapper">
          <span>거래층 선택</span>
          <select name="" id="" className="period">
            <option value="all">전체</option>
            {/* <option value={}>{}</option> */}
          </select>
        </div>
        <div className="area-wrapper">
          <span>거래면적 선택</span>
          <select name="" id="" className="period">
            {/* <option value={}>{}</option> */}
          </select>
        </div>
      </div>
      <ResponsiveContainer width="80%" height={200}>
        <BarChart
          data={data}
          layout="vertical"
          width={200}
          height={100}
          margin={{
            top: 70,
            right: 70,
            bottom: 70,
            left: 70,
          }}
        >
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis type="category" axisLine={false} tick={<CustomTick />} dataKey="name" />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" width="50%" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ValuationGraph;

CustomTick.defaultProps = {
  x: 0,
  y: 0,
  payload: { value: '알 수 없음' },
};
