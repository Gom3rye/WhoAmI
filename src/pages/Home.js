import React from 'react';
//css-in-js
import styled from 'styled-components';
import PangImage from '../assets/캠블_후엠아이_로.jpg';
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
      <Header>비건 화장품 판결기</Header>
      <Contents>
        <Title>나에게 맞는 화장품은?</Title>
        <LogoImage>
          <img
            alt="CAMPUS BLOSSOM X Who Am I 로고 사진"
            src={PangImage}
            className="round-circle"
            width={1000}
            height={250}
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 화장품 찾기!</Desc>
        <Button
          style={{ fontFamily: 'DalseoHealingBold' }}
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
  margin-top: 40px;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
`;
