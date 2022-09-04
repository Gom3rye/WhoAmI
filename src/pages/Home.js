import React from 'react';
//css-in-js
import styled from 'styled-components';
import PangImage from '../assets/푸루립밤2.JPG';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <Wrapper>
      <Header>비건 화장품 판결기</Header>
      <Contents>
        <Title>나에게 맞는 화장품은?</Title>
        <LogoImage>
          <img
            src={PangImage}
            className="round-circle"
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 화장품 찾기!</Desc>
        <Button>테스트 시작하기</Button>
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
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
