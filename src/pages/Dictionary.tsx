import styled from '@emotion/styled';
import { RiArrowDownSLine } from 'react-icons/ri';

const Dictionary = () => {
  return (
    <Container>
      <h2>부동산 용어 해설 가이드</h2>

      <SearchForm>
        <ConsonantButton>
          <p>국문</p>
          <div>
            <button type="button">ㄱ</button>
            <button type="button">ㄴ</button>
            <button type="button">ㄷ</button>
            <button type="button">ㄹ</button>
            <button type="button">ㅁ</button>
            <button type="button">ㅂ</button>
            <button type="button">ㅅ</button>
            <button type="button">ㅇ</button>
            <button type="button">ㅈ</button>
            <button type="button">ㅊ</button>
            <button type="button">ㅋ</button>
            <button type="button">ㅌ</button>
            <button type="button">ㅍ</button>
            <button type="button">ㅎ</button>
          </div>
        </ConsonantButton>

        <SearchInput>
          <p>단어로 검색</p>
          <div>
            <input type="text" />
            <button type="button">검색</button>
          </div>
        </SearchInput>
      </SearchForm>

      <ListupWrap>
        <p>
          내 등기부 서류의 내용에 있는 단어에 대한 해설이 있으니, 비교하시면서 확인해 보실 수
          있어요.
        </p>

        <ul>
          <li>
            <button type="button">등기부등본 구성</button>
            <div>
              <p>표제부,갑구,을구</p>
            </div>
          </li>
          <li>
            <button type="button">
              표제부
              <RiArrowDownSLine />
            </button>
            <div>
              <p>해당 부동산의 지번,지목,구조,면적 등의 현황을 보여줘요.</p>
            </div>
          </li>
          <li>
            <button type="button">
              갑구
              <RiArrowDownSLine />
            </button>
            <div>
              <p>해당 부동산의 소유가 누구이며, 그동안 누구의 소유였는지 보여줘요.</p>
            </div>
          </li>
          <li>
            <button type="button">
              을구
              <RiArrowDownSLine />
            </button>
            <div>
              <p>소유권 이외에 해당 부동산을담보로 설정된 이력사항을 보여줘요.</p>
            </div>
          </li>
        </ul>
      </ListupWrap>

      {/* 갑구 안내문구 */}
      <Announcement>
        <strong>나중에 위험한 상황에 처할 수도 있어요</strong>
        <h3>📌 갑구에 이런 단어가 보인다면 반드시 체크해보세요!</h3>

        <p>
          등기부등본에 경매 개시 결정, 임차권등기명령 등이 적혀 있다면 거래하지 않으시는 쪽을
          추천해요 문제가 생기더라도 &quot;넌 알고도 들어갔잖아&ldquo;라며 법적인 보호를 받기가 쉽지
          않기 때문이에요
        </p>

        <ul>
          <li>
            <p>가등기</p>
            <p>
              집이 벅적으로 넘어갈 예정으로 즉, 법적인 집 주인이 바뀔 수 있다라는 말이에요 소유권이
              어떻게 누구로 바뀌는 것인지 정확하게 확인 하셔야 하고, 직거래는 위험할 수 있어요.
            </p>
          </li>
          <li>
            <p className="long-word">경매개시결정</p>
            <p>
              집주인이 돈을 갚지 못해, 집에 대한 경매가 시작되고 있다는 뜻이예요. 집이 경매로 진행
              중이니 위험할 수 있어요.
            </p>
          </li>
          <li>
            <p className="long-word">임차권등기명령</p>
            <p>
              앞서 집을 빌린 세입자가 집주인에게 보증금을 돌려받지 못한 사례가 있다는 걸 말하므로,
              사실 관계를 정확히 파악하는 것이 중요해요. 세입자가 집주인에게 보증금을 떼먹힌
              상황사실 관계 파악이 중요하지만 위험할 수 있으니 주의해주세요.
            </p>
          </li>
          <li>
            <p>신탁</p>
            <p>
              집 주인이 형식적인 부동산 소유권을 신탁회사에 넘긴 후 대출을 받은 것을 뜻해요.
              신탁회사의 동의 없이 계약 했다가 집이 경매나 공매로 넘어가면 보증금을 돌려 받는 순위가
              밀려날 수 있으니 주의해주세요.
            </p>
          </li>
          <li>
            <p>가처분</p>
            <p>
              가처분이란 다툼이 있는 권리관계에 대해 현상변경을 하지 못하도록 하거나 임시의 지위를
              정하도록 하는 것을 말해요. 말소기준권리 보다 먼저 설정된 가처분 등기가 있다면
              낙찰자에게 인수되므로 낙찰 받지 않는 것이 좋아요.
            </p>
          </li>
          <li>
            <p>가압류</p>
            <p>
              가압류는 금전채권 보전을 위한 것으로서 그 대상 재산을 경매 등으로 현금화하여 채권을
              회수하기 위한 것이예요.
            </p>
          </li>
          <li>
            <p>압류</p>
            <p>
              압류는 개인의 특정한 재산을 국가권력에 기하여 개인이 마음대로 팔거나 주는 행위를
              못하도록 상제하는것을 말해요. 등본에 압류 & 가압류가 찍혀있다면 그만큼 집주인이
              경제적으로 어려운 상황이니 주의해주세요.
            </p>
          </li>
        </ul>
        <p className="check-word">
          <i />
          단, 위의 내용이 있지만 붉은색으로 삭제 처리가 되어 있다면 현재는 해결이 되었다는 의미이니
          걱정하지 않으셔도 됩니다 :&#41;{' '}
        </p>
      </Announcement>
      {/* 을구 안내문구 */}
      <Announcement>
        <strong>나중에 위험한 상황에 처할 수도 있어요</strong>
        <h3>을구에 이런 단어가 보인다면 반드시 체크해보세요!</h3>

        <p>
          등기부등본에 저당권, 전세권 등이 적혀있다면 한번 더 확인해보시는 것을 추천해요. 만약
          을구에 아무런 정보가 없다면 해당 부동산을 담보로 잡은 채무가 없다는 의미이니 안심하세요.
        </p>

        <ul>
          <li className="list-type">
            <div>
              <p>가등기</p>
              <p>근저당권</p>
            </div>
            <div>
              <ul>
                <li>
                  <p>경매 입찰</p>
                  <p>저당권이나 근저당권은 경매로 인해 말소되며, 낙찰자에게 인수되지 않아요.</p>
                </li>
                <li>
                  <p>일반 매수인</p>
                  <p>매도인과 근저당권 말소 또는 대출 승계를 합의해야해요.</p>
                </li>
                <li>
                  <p>임차인</p>
                  <p>
                    임대인에게 근저당권 말소를 요구, 또는 말소하지 않을 경우 건물 시세의 70~80%에서
                    채권최고액을 공제하여 남는 금액이 얼마나 되는지를 판단해보여야해요
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <p>전세권</p>
            <p>
              말소기준권리 보다 먼저 설정된 경우 매수인에게 인수되는 것이 원칙이나, 전세권자가
              경매신청을 하거나 배당요구를 했다면 전세권은 말소돼요. 또한, 전세권이 말소기준권리
              보다 늦게 설정된 경우 매수인에게 인수되지 않고 말소됩니다.
            </p>
          </li>
          <li>
            <p>임차권</p>
            <p>
              임차권은 당사자 간의 합의나 단독 신청에 의한 법원의 명령으로 등기가 되기도 해요.
              임차권은 등기되지 않은 채권인 상태에서 주택임대차보호법이나 상가건물임대차보호법에
              의한 대항요건 등을 구비하면 물권적 효력을 부여 받아요. 즉, 임차권은 등기 여부와 관계
              없이 대항요건을 구비하면 대항력을 취득하고 거기에 확정일자를 받으면 우선변제권을{' '}
              취득하는 것 이예요.
            </p>
          </li>
        </ul>
        <div className="check-list">
          <strong>
            임차권 중 아래의 권리는 인수되므로 경매에 참가를 하신다면 아래의 사항에 주의하셔야 하며,
            매수인은 임대차승계를 고려하여 매매대금을 결정 하셔야 하니 꼭 체크해주세요!
          </strong>
          <ul>
            <li>경매시 낙찰자에게 임차권이 인수되는 경우</li>
            <li>대항력만 갖춘 임차권</li>
            <li>대항력과 우선변제권을 갖춘 임차인이 배당요구를 하지 않은 경우</li>
            <li>배당요구를 했으나 보증금을 전액 변제 받지 못한 임차권</li>
            <li>
              임차인은 자신이 대항력을 확보할 수 있는지, <br /> 대항력은 안되더라도 우선변제권은
              확보할 수 있는지 점검하여 전/월세 계약 실행
            </li>
          </ul>
        </div>
        <p className="check-word">
          <i />
          단, 위의 내용이 있지만 붉은색으로 삭제 처리가 되어 있다면 현재는 해결이 되었다는 의미이니
          걱정하지 않으셔도 됩니다 &#58;&#41;
        </p>
      </Announcement>
    </Container>
  );
};

export default Dictionary;

const Container = styled.main`
  width: 1240px;
  margin: 0 auto;
  line-height: 1.5;
  letter-spacing: -0.05em;
  word-break: keep-all;
  padding: 260px 0 200px;

  h2 {
    text-align: center;
    font-size: 36px;
    font-weight: 600;
    color: #171717;
    margin-bottom: 60px;
  }
`;

const SearchForm = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: #f5f6fa;
  padding: 40px 130px;
`;

const ConsonantButton = styled.div`
  p {
    font-size: 24px;
    font-weight: 600;
    color: #505050;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 40px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    font-size: 24px;
    background-color: #fff;
    color: #171717;
    border: 1px solid #d2d2dc;
  }
`;

const SearchInput = styled.div`
  p {
    font-weight: 600;
    font-size: 24px;
    color: #505050;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  input {
    width: 828px;
    heigth: 50px;
    border: 1px solid #d2d2dc;
    border-radius: 10px;
    background-color: #fff;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 50px;
    border-radius: 10px;
    background-color: #4258d7;
    border: none;
    font-size: 20px;
    color: #fff;
  }
`;

const ListupWrap = styled.div`
  border: 1px solid #e9e9ed;
  border-radius: 20px;
  padding: 40px;
  margin-top: 105px;

  & > p {
    padding-left: 40px;
    position: relative;
    font-size: 20px;
    color: #999;
    margin-bottom: 60px;

    &:before {
      content: '';
      display: block;
      width: 30px;
      height: 30px;
      border: 8px solid #999;
      border-radius: 50%;
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;

    li {
      display: flex;
      position: relative;
      color: #171717;

      button {
        display: flex;
        align-items: center;
        width: 88px;
        font-size: 24px;
        font-weight: 600;
        background: none;
        border: none;
        padding: 0;
        color: #171717;

        &:first-child {
          width: auto;
        }

        svg {
          margin-left: 4px;
        }
      }

      div {
        position: absolute;
        left: 210px;
        top: 50%;
        font-size: 24px;
        transform: translateY(-50%);
      }
    }
  }
`;

const Announcement = styled.div`
  width: 1160px;
  margin: 90px auto;

  & > strong {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 35px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 0 17px 0 17px;
    background-color: #ffb300;
    color: #fff;
    margin-bottom: 40px;
  }

  & > p {
    font-size: 24px;
    font-weight: 600;
    color: #425bd7;
    margin: 20px 0 60px;
  }

  .check-word {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 20px;
    background-color: #fff3f3;
    font-size: 22px;
    font-weight: 400;
    color: #1d1d1d;
    margin-bottom: 170px !important;

    i {
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #ff5252;
      margin-right: 20px;
    }
  }

  .check-list {
    padding: 40px 45px;
    background-color: #f5f6fa;
    border-radius: 20px;
    margin: -20px 0 80px 210px;

    strong {
      font-size: 18px;
      font-weight: bold;
    }

    ul {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      gap: 10px;
      font-size: 20px;
      color: #171717;
    }
  }

  h3 {
    font-size: 30px;
    font-weight: 600;
    color: #171717;
    padding-bottom: 25px;
    border-bottom: 1px solid #171717;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 80px;

    & > li {
      display: flex;
      align-items: center;
      position: relative;
      padding-left: 205px;

      & > p:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 104px;
        height: 56px;
        background-color: #ffb300;
        border-radius: 10px;
        font-size: 24px;
        font-weight: 600;
        color: #171717;
        position: absolute;
        left: 0;
      }

      & > p:last-child {
        font-size: 20px;
        color: #171717;
      }
    }

    .long-word {
      width: 173px !important;
    }

    .list-type {
      display: flex;
      align-items: center;

      div:first-child {
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);

        p {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 104px;
          height: 56px;
          background-color: #ffb300;
          border-radius: 10px;
          font-size: 24px;
          font-weight: 600;
          color: #171717;
        }
      }

      div:last-child {
        ul {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;

          li {
            display: flex;
            align-items: center;
            padding-left: 130px;

            p:first-child {
              font-size: 20px;
              font-weight: 600;
              position: absolute;
              left: 0;
              color: #171717;
            }

            p:last-child {
              font-size: 20px;
              color: #171717;
            }
          }
        }
      }
    }
  }
`;
