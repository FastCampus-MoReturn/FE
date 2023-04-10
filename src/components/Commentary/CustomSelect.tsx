import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[]; // Pass the options as an array of objects with 'value' and 'label' properties
  onSelect: (selectedValue: string) => void; // Pass a callback function to handle selected value
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [activeButton, setActiveButton] = useState(null);
  const [toggle, setToggle] = useState(true);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const buttonId = event.target.id;
    setActiveButton(buttonId);
  };

  const handleOptionClick = (optionValue: string) => {
    setSelectedValue(optionValue);
    onSelect(optionValue); // Call the callback function with selected value
  };

  return (
    <CustomBoxWrapper>
      <CustomSelectBox>
        {/* eslint-disable-next-line */}
        <SelectedValue
          onClick={() => {
            setIsOpen(!isOpen);
            setToggle(!toggle);
          }}
        >
          {selectedValue || options[0].label}
          <ToggleBox>
            {toggle ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0008 14.9758C11.8674 14.9758 11.7381 14.9508 11.6128 14.9008C11.4874 14.8508 11.3834 14.7841 11.3008 14.7008L6.70078 10.1008C6.51745 9.91745 6.42578 9.68411 6.42578 9.40078C6.42578 9.11745 6.51745 8.88411 6.70078 8.70078C6.88411 8.51745 7.11745 8.42578 7.40078 8.42578C7.68411 8.42578 7.91745 8.51745 8.10078 8.70078L12.0008 12.6008L15.9008 8.70078C16.0841 8.51745 16.3174 8.42578 16.6008 8.42578C16.8841 8.42578 17.1174 8.51745 17.3008 8.70078C17.4841 8.88411 17.5758 9.11745 17.5758 9.40078C17.5758 9.68411 17.4841 9.91745 17.3008 10.1008L12.7008 14.7008C12.6008 14.8008 12.4924 14.8718 12.3758 14.9138C12.2591 14.9558 12.1341 14.9764 12.0008 14.9758Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9992 9.02422C12.1326 9.02422 12.2619 9.04922 12.3872 9.09922C12.5126 9.14922 12.6166 9.21589 12.6992 9.29922L17.2992 13.8992C17.4826 14.0826 17.5742 14.3159 17.5742 14.5992C17.5742 14.8826 17.4826 15.1159 17.2992 15.2992C17.1159 15.4826 16.8826 15.5742 16.5992 15.5742C16.3159 15.5742 16.0826 15.4826 15.8992 15.2992L11.9992 11.3992L8.09922 15.2992C7.91589 15.4826 7.68255 15.5742 7.39922 15.5742C7.11589 15.5742 6.88255 15.4826 6.69922 15.2992C6.51589 15.1159 6.42422 14.8826 6.42422 14.5992C6.42422 14.3159 6.51589 14.0826 6.69922 13.8992L11.2992 9.29922C11.3992 9.19922 11.5076 9.12822 11.6242 9.08622C11.7409 9.04422 11.8659 9.02355 11.9992 9.02422Z"
                  fill="black"
                />
              </svg>
            )}
          </ToggleBox>
        </SelectedValue>
      </CustomSelectBox>
      {isOpen && (
        <Ul className="options">
          {options.map((option, index) => (
            // eslint-disable-next-line
            <button
              id={`button${index}`}
              key={option.value}
              onClick={() => {
                handleOptionClick(option.value);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                handleButtonClick(event);
              }}
              // eslint-disable-next-line react/no-unknown-property
              css={activeButton === `button${index}` ? ButtonCliked : ButtonNormal}
            >
              {option.label}
            </button>
          ))}
        </Ul>
      )}
    </CustomBoxWrapper>
  );
};

export default CustomSelect;

const CustomBoxWrapper = styled.div`
  z-index: 999;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 126px;
  height: 100%;
`;

const CustomSelectBox = styled.div`
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 2px solid #000000;
`;

const SelectedValue = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
`;

const ButtonCliked = css`
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 48px;
  gap: 10px;
  background: #4258d7;
  border: 0.5px solid #d2d2dc;
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;
`;

const ButtonNormal = css`
  width: 100%;
  height: 100%;
  font-size: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 48px;
  gap: 10px;
  background: #ffffff;
  border: 0.5px solid #d2d2dc;
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;
`;
