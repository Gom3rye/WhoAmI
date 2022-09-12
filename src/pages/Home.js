import React from 'react';
//css-in-js
import styled from 'styled-components';
import PangImageA from '../assets/캠블로고.jpg';
import PangImageB from '../assets/후엠아이로고.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    // 이전에는 useHistory라는 Hooks를 써서 진행했지만 최근에는 react router dom이 업그레이드 하면서 useNavigate 사용
    navigate('/question');
  };

  return (
    <Wrapper>
      <Header>나랑 잘 맞는 화장품은?</Header>
      <Contents>
        <Title>MBTI를 기반으로 하는 나의 비건 화장품 찾기!</Title>
        <LogoImage>
          <img
            alt="CAMPUS BLOSSOM 로고 사진"
            src={PangImageA}
            width={300}
            height={150}
            style={{
              marginRight: '1.2rem',
              marginTop: '3rem',
              marginBottom: '3rem',
            }}
          />
          x
          <img
            alt="Who Am I 로고 사진"
            src={PangImageB}
            width={350}
            height={100}
            style={{
              marginLeft: '1rem',
            }}
          />
        </LogoImage>
        <Button
          style={{
            fontFamily: 'DalseoHealingBold',
            padding: '30px',
            fontSize: '30px',
          }}
          onClick={handleClickButton}
        >
          테스트 시작하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  font-size: 40pt;
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
  margin-top: 10px;
`;

const Title = styled.div`
  font-size: 30px;
  margin-top: 20px;
  width: 50%;
  text-align: center;
  color: blue;
`;

const LogoImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 100px;
  color: red;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
