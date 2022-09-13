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

  // 배열로 설명글 넘겨주기
  //const listItem = resultData.desc.map((desc) => <li>{desc}</li>);
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

        <span style={{ fontSize: '22pt', color: 'blue', marginBottom: '10px' }}>
          나는 이런 어린이였어요!
        </span>
        <Desc>
          {resultData.desc && resultData.desc.map((desc) => <li>{desc}</li>)}
        </Desc>
        <span
          style={{
            fontSize: '20pt',
            color: 'blue',
            marginTop: '15px',
            textAlign: 'center',
            width: '90vw',
          }}
        >
          과거의 나로 돌아가고 싶다면?
        </span>
        <LogoImage>
          <img
            alt="제품 사진"
            src={resultData.imageP}
            className="rounded-circle"
            width={250}
            height={250}
            style={{ marginTop: '20px', marginBottom: '50px' }}
          />
        </LogoImage>
        <Desc style={{ textAlign: 'center' }}>
          내 안의 잼민이와 찰떡궁합인 화장품{' '}
          <span style={{ fontSize: '20pt', color: '#4ec7a9' }}>
            {resultData.nameP}
          </span>
          을 스스로에게 선물해보세요!
        </Desc>
        <Button
          style={{
            padding: '10px',
            fontSize: '20px',
            marginTop: '2rem',
            marginLeft: '0.5rem',
            marginRight: '0.5rem',
            width: '60%',
          }}
          onClick={() => {
            window.open('https://campusblossom.com/product/', '_blank');
          }}
        >
          제품 사러가기
        </Button>
        <Buttons>
          <Button
            style={{
              fontFamily: 'DalseoHealingBold',
              padding: '10px',
              fontSize: '13pt',
              marginTop: '1rem',
              marginLeft: '0.5rem',
              marginRight: '0.5rem',
              justifyContent: 'space-around',
              backgroundColor: '#4ec7a9',
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
  width: 100vw;
`;

const Header = styled.div`
  font-size: 23pt;
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
  font-size: 25pt;
  color: #4ec7a9;
  text-align: center;
`;

const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Desc = styled.div`
  font-size: 20pt;
  width: 90%;
  text-align: start;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
