import React, { useState } from 'react';
import BarChart from './BarChart';
import CustomSelect from './CustomSelect';

interface DataItem {
  name: string;
  value: number;
}

const ValuationImage = () => {
  const idata = [
    { name: '1층', value: 10 },
    { name: '2층', value: 20 },
    // Add more data here
  ];
  const [data, setData] = useState<DataItem[]>(idata);
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);

  const handleSelect = (selectedValue: string) => {
    if (selectedValue === '전체') {
      // If "all" option is selected, set filtered data to the entire data array
      setFilteredData(data);
    } else {
      // Filter data based on selected value
      const filtered = data.filter((item) => item.name === selectedValue);
      setFilteredData(filtered);
    }
  };

  const options = [
    { value: '1층', label: '1층' },
    { value: '2층', label: '2층' },
    { value: '전체', label: '전체' },
  ];
  return (
    <>
      <div className="valuation-image-text">
        <span>
          <span>*</span>
          <span>실거래가 이미지</span>
        </span>
        <span>최근 실거래가</span>
      </div>
      <hr />
      <div className="color-section">
        <div className="min-max-color">
          <span>최저</span>
          <div className="color-1"> </div>
          <div className="color-2"> </div>
          <div className="color-3"> </div>
          <div className="color-4"> </div>
          <div className="color-5"> </div>
          <span>최고</span>
        </div>
        <div className="target-color">
          <div className="target-1"> </div>
          <span>해당 매물</span>
        </div>
      </div>
      <div className="select-section">
        <CustomSelect options={options} onSelect={handleSelect} />
      </div>
      <BarChart data={filteredData} />
    </>
  );
};

export default ValuationImage;
