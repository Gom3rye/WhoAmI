import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionData } from '../assets/data/questiondata';

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: 'EI', score: 0 },
    { id: 'SN', score: 0 },
    { id: 'TF', score: 0 },
    { id: 'JP', score: 0 },
  ]);

  const navigate = useNavigate();

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map(
      (s) => (s.id === type ? { id: s.id, score: s.score + no } : s), // 타입이 !=을 경우 객체 유지
    );
    setTotalScore(newScore);
    // 다음 문제로 문제 수 증가
    if (QuestionData.length !== questionNo + 1) {
      // +1을 해주는 이유 : 인덱스는 0부터 시작하니까
      setQuestionNo(questionNo + 1);
    } else {
      // mbti 도출
      const mbti = newScore.reduce(
        (acc, curr) =>
          // 현재 배열 객체의 score가 2보다 크면 앞의 숫자를 따준다. (0,1)-첫번째 글자 계산 (1,2)-두번째 글자 선택
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        '', //초기값을 string으로 입력
      );

      console.log('mbti', mbti);

      // 결과 페이지로 이동
      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
    setQuestionNo(questionNo + 1);
    // if (type === 'EI') {
    //   // 기준 스코어에 더할 값을 계산 (기존의 값 + 배점)
    //   const addScore = totalScore[0].score + no;
    //   // 새로운 객체
    //   const newObject = { id: 'EI', score: addScore };
    //   // splice 라는 js 함수 이용해 새로운 객체를 해당 객체 자리에 넣어줌
    //   totalScore.splice(0, 1, newObject); // 0번째 index의 1번째 요소를 지워주고 newObject를 그자리에 넣어주겠다.
    // } else if (type === 'SN') {
    //   const addScore = totalScore[1].score + no;
    //   const newObject = { id: 'SN', score: addScore };
    //   totalScore.splice(1, 1, newObject);
    // } else if (type === 'TF') {
    //   const addScore = totalScore[2].score + no;
    //   const newObject = { id: 'TF', score: addScore };
    //   totalScore.splice(2, 1, newObject);
    // } else {
    //   const addScore = totalScore[3].score + no;
    //   const newObject = { id: 'JP', score: addScore };
    //   totalScore.splice(3, 1, newObject);
    // }
  };

  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100} // %로 움직이기 때문에 *100 해주기!
        style={{
          marginTop: '70px',
          height: '4%',
        }}
      />
      <Title>{QuestionData[questionNo].title}</Title>
      <ButtonGroup>
        <Button
          onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
          style={{
            width: '40%',
            //minHeight: '250px',
            height: '330px',
            fontSize: '16pt',
          }}
        >
          {QuestionData[questionNo].answera}
        </Button>
        <Button
          onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
          style={{
            width: '40%',
            //minHeight: '250px',
            height: '330px',
            fontSize: '16pt',
          }}
        >
          {QuestionData[questionNo].answerb}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Title = styled.div`
  font-size: 22pt;
  text-align: center;
  font-family: 'DalseoHealingBold';
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-family: 'DalseoHealingBold';
  margin-top: 60px;
  margin-bottom: 60px;
`;
