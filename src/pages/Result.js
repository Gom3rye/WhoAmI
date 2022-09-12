import React from 'react';
//css-in-js
import styled from 'styled-components';
// import PangImage from '../assets/푸루립밤2.JPG';
import Button from 'react-bootstrap/Button';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';
import KakaoShareButton from '../components/KakaoShareButton';

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti'); //? 뒤에 있는 값이 mbti니 해당 key값을 입력해주면 된다.
  // 최종적으로 도출한 결과 객체
  const [resultData, setResultData] = React.useState({});

  React.useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  console.log(resultData);
  return (
    <Wrapper>
      <Header>과거의 나는...</Header>
      <Contents>
        <Title>{resultData.nameR}</Title>
        <LogoImage>
          <img
            alt="결과 사진"
            src={resultData.imageR}
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>{resultData.desc}</Desc>
        <LogoImage>
          <img
            alt="제품 사진"
            src={resultData.imageP}
            className="rounded-circle"
            width={250}
            height={250}
            style={{ marginTop: '40px', marginBottom: '50px' }}
          />
        </LogoImage>
        <Desc>
          내 안의 잼민이와 찰떡궁합인 화장품은{' '}
          <span style={{ fontSize: '20pt', color: 'blue' }}>
            {resultData.nameP}
          </span>
          입니다.
        </Desc>
        <Buttons>
          <Button
            style={{
              fontFamily: 'DalseoHealingBold',
              padding: '10px',
              fontSize: '20px',
              marginTop: '2rem',
              marginLeft: '0.5rem',
              marginRight: '0.5rem',
            }}
            onClick={() => navigate('/')}
          >
            테스트 다시하기
          </Button>
          <KakaoShareButton data={resultData} />
        </Buttons>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  font-size: 25pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'DalseoHealingBold';
  margin-top: 20px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'DalseoHealingBold';
`;

const Title = styled.div`
  font-size: 30pt;
  color: blue;
`;

const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Desc = styled.div`
  font-size: 20pt;
  width: 90%;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
