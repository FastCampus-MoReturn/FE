import styled from '@emotion/styled';

interface Type {
  type: number;
}

const ToggleInfo = ({ type }: Type) => {
  console.log(type);
  return (
    <>
      {type === 1 && (
        <ToggleTableWrap>
          <table>
            <thead>
              <tr>
                <th colSpan={5}>
                  <span>&#91; 표 제 부 &#93;</span> &#40; 1동의 건물의 표시 &#41;
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>표 시 번 호</td>
                <td>접 수</td>
                <td>소재지번,건물명칭 및 번호</td>
                <td>건 물 내 역</td>
                <td>등기원인 및 기타사항</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan={4}>&#40; 대 지 권 의 표 시 &#41;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>표 시 번 호</td>
                <td>대 지 권 종 류</td>
                <td>대 지 권 비 율</td>
                <td>등기원인 및 기타사항</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan={5}>( 대지권의 목적인 토지의 표시 )</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>표 시 번 호</td>
                <td>소 재 지 번</td>
                <td>지 목</td>
                <td>면 적</td>
                <td>등기원인 및 기타사항</td>
              </tr>
            </tbody>
          </table>

          <ul>
            <li>
              <span>&#183;</span> 표시번호 : 등기한 순서를 숫자로 표시
            </li>
            <li>
              <span>&#183;</span> 접수 : 등기신청서를 접수한 날자를 표시
            </li>
            <li className="sub-info">
              <span>&#183;</span> 소재지번 및 건물번호 : 건물이 위치하고 있는 토지의 지번 및 건물의
              명칭,건물번호를 표시{' '}
            </li>
            <li>
              <span>&#183;</span> 건물내역 : 구조,지붕,층수,용도,면적 순으로 표시
            </li>
            <li>
              <span>&#183;</span> 등기원인 및 기타사항 : 표제부에 관한 등기원인 및 행정구역
              명칭,지번 변경 등의 사항을 표시
            </li>
            <li>
              <span>&#183;</span> 대지권 종류 : 전유세대의 지분에 해당하는 토지(대지권)의 대상이
              되는 권리 표시
            </li>
            <li>
              <span>&#183;</span> 대지권 비율 : 1동 건물이 속한 전체 토지 둥 해당 전유부분이
              차지하는 지분비율을 표시
            </li>
            <li>
              <span>&#183;</span> 지목 : 토지의 사용목적을 표시 &#8251;
              대지,공장용지,학교용지,도로,하천,공원 등
            </li>
            <li>
              <span>&#183;</span> 면적 : 토지의 전체면적을 표시 &#8251; 등기부의 면적은 ㎡로
              표시,평으로 환산하려면 3.3으로 나누면 됨
            </li>
          </ul>
        </ToggleTableWrap>
      )}
      {type === 2 && (
        <ToggleTableWrap>
          <table>
            <thead>
              <tr>
                <th colSpan={5}>
                  <span>&#91; 갑 구 &#93;</span> &#40; 소유권에 관한 사항 &#41;
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>표 시 번 호</td>
                <td>등 기 목 적</td>
                <td>접 수</td>
                <td>등 기 원 인</td>
                <td>권리자 및 기타사항</td>
              </tr>
            </tbody>
          </table>

          <ul>
            <li>
              <span>&#183;</span> 순위번호 : 등기한 순서를 숫자로 표시. 이 란에 기재된 순위번호에
              의하여 갑구 사항란의 권리간에 우선순위 정해짐
            </li>
            <li>
              <span>&#183;</span> 등기목적 : 등기의 내용 또는 종류 표시
              <span className="caption">예&#41;소유권보존,소유권이전,가압류 등</span>
            </li>
            <li>
              <span>&#183;</span> 접수 : 등기신청서를 접수한 날짜와 신청서를 접수하면서 부여한
              접수번호 표시
            </li>
            <li>
              <span>&#183;</span> 등기원인 : 등기의 원인 및 원인 일자를 표시
              <span className="caption">예&#41;매매,설정계약,해지 등</span>
            </li>
            <li>
              <span>&#183;</span> 권리자 및 기타사항 : 부동산의 권리자 및 기타 권리 사항을 표시
              <span className="caption">
                예&#41;소유권 이전의 경우 거래가액 또는 매매 목록 번호 기재
              </span>
            </li>
          </ul>
        </ToggleTableWrap>
      )}
      {type === 3 && (
        <ToggleTableWrap>
          <table>
            <thead>
              <tr>
                <th colSpan={5}>
                  <span>&#91; 을 구 &#93;</span> &#40; 소유권 이외의 권리에 관한 사항 &#41;
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>순 위 번 호</td>
                <td>등 기 목 적</td>
                <td>접 수</td>
                <td>등 기 원 인</td>
                <td>등기원인 및 기타사항</td>
              </tr>
            </tbody>
          </table>

          <ul>
            <li>
              <span>&#183;</span> 순위번호 : 등기한 순서를 숫자로 표시. 이 란에 기재된 순위번호에
              의하여 갑구 사항란의 권리간에 우선순위 정해짐
            </li>
            <li>
              <span>&#183;</span> 등기목적 : 등기의 내용 또는 종류 표시{' '}
              <span className="caption">예&#41;근저당권,전세권설정,지역권설정 등</span>
            </li>
            <li>
              <span>&#183;</span> 접수 : 등기신청서를 접수한 날짜와 신청서를 접수하면서 부여한
              접수번호 표시
            </li>
            <li>
              <span>&#183;</span> 등기원인 : 등기의 원인 및 원인 일자를 표시
              <span className="caption">예&#41;매매,설정계약,해지 등</span>
            </li>
            <li>
              <span>&#183;</span> 권리자 및 기타사항 : 부동산의 권리자 및 기타 권리 사항을 표시
              <span className="caption">
                예&#41;근저당권설정의 경우 채권 최고액,채무자,근저당권자 등이 기재
              </span>
            </li>
          </ul>
        </ToggleTableWrap>
      )}
    </>
  );
};

const ToggleTableWrap = styled.div`
  padding-left: 0 !important;
  margin-top: 20px;

  table {
    width: 100%;
    border: 1px solid #171717;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Nanum Myeongjo';
  }

  table:first-of-type th {
    padding-left: 50px;
    text-align: start;

    span {
      margin-right: 60px;
    }
  }

  th {
    background-color: #f5f6fa;
    height: 50px;
    vertical-align: middle;
    border: 1px solid #171717;

    span {
      font-size: 26px;
      font-weight: 600;
    }
  }

  td {
    height: 50px;
    vertical-align: middle;
    border: 1px solid #171717;
  }

  ul {
    display: block;
    line-height: 150%;

    li {
      display: block;
      font-size: 18px;
      color: #171717;
      position: relative;

      span {
        margin-right: 10px;
      }

      .caption {
        margin-right: 0 !important;
        margin-left: 10px;
        font-size: 16px;
        color: #999;
      }
    }

    .sub-info {
      padding-bottom: 30px;

      &:after {
        content: '※ 건물명칭 및 건물번호가 기재되어 있지 않은 경우도 있음.';
        display: block;
        position: absolute;
        left: 170px;
        top: 30px;
        color: #999;
        font-size: 16px;
      }
    }
  }
`;

export default ToggleInfo;
