import React from 'react';
//css-in-js
import styled from 'styled-components';
import PangImage from '../assets/놀이터.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
//import { Mobile, PC } from '.././components/MediaQuery';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    // 이전에는 useHistory라는 Hooks를 써서 진행했지만 최근에는 react router dom이 업그레이드 하면서 useNavigate 사용
    navigate('/question');
  };

  return (
    <Wrapper>
      <Header>나의 잼민이 MBTI 테스트</Header>
      <Contents>
        <LogoImage>
          <img
            alt="잼민이 토끼 사진"
            src={PangImage}
            width={'350'}
            height={'350'}
          />
        </LogoImage>
        <Title>
          초등학생 시절에 나는 어떤 잼민이었을까요? 그때를 떠올려봐요!
        </Title>
        <Button
          style={{
            fontFamily: 'DalseoHealingBold',
            padding: '15px',
            fontSize: '20px',
            width: '70%',
            marginTop: '30px',
          }}
          onClick={handleClickButton}
        >
          테스트 시작하기
        </Button>
        <Desc>EWHA_WHO AM I X CAMPUS BLOSSOM</Desc>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  flex-direction: column;
  font-family: 'DalseoHealingBold';
`;

const Header = styled.div`
  font-size: 23pt;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Contents = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  width: 80%;
  text-align: center;
  //font-family: 'DalseoHealingBold';
`;

const LogoImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  transform: translateY(200%);
  color: #a0a0a0;
  //margin-top: 90px;
`;
