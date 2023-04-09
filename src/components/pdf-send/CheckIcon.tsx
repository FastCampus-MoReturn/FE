import styled from '@emotion/styled';

type Props = {
  fill: string;
  size: string;
};

const CheckIcon = ({ fill, size }: Props) => {
  return (
    <SvgIndex
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34 18C34 9.16344 26.8366 2 18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18Z"
        fill={fill}
      />
      <path
        d="M25 13.5L16 22.5L11 17.5"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIndex>
  );
};

export default CheckIcon;

const SvgIndex = styled.svg`
  position: relative;
  flex-shrink: 0;

  path {
    transition: fill 0.3s ease-in-out;
  }
`;
