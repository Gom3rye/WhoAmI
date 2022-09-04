import React from 'react';
//css-in-js
import styled from 'styled-components';
// import PangImage from '../assets/푸루립밤2.JPG';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';

const Result = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header>비건 화장품 판결기</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img
            src={ResultData[0].image}
            className="round-circle"
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>
          내 안의 잼민이와 찰떡궁합인 화장품은 {ResultData[0].name}입니다.
        </Desc>
        <Button
          style={{ fontFamily: 'DalseoHealingBold' }}
          onClick={() => navigate('/')}
        >
          테스트 다시하기
        </Button>
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
