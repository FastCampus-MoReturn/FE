/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from '@emotion/styled';
import { HiCheck } from 'react-icons/hi';

type checkListType = {
  checkList: string[];
};

const CheckList = (props: checkListType) => {
  return (
    <List>
      {props.checkList.map((item: string) => {
        return (
          <li key={`check-${item}`}>
            <span>
              <HiCheck className="white" />
            </span>
            {item}
          </li>
        );
      })}
    </List>
  );
};

export default CheckList;

const List = styled.ul`
  margin: 20px 0 36px;
  display: flex;
  gap: 20px;
  padding: 20px;
  width: fit-content;
  border-radius: 12px;
  background-color: #eaedf8;
  li {
    display: flex;
    align-items: center;
    color: #4258d7;
    span {
      display: inline-flex;
      margin-right: 6px;
      align-items: center;
      justify-content: center;
      min-width: 24px;
      min-height: 24px;
      border-radius: 9999px;
      background-color: #4258d7;
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
