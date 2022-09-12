import React from 'react';
import Button from 'react-bootstrap/Button';

const { Kakao } = window; //카카오 sdk 함수는 이 코드가 있어야 인식할 수 있다.

const KakaoShareButton = ({ data }) => {
  const url = 'https://whoami-campusblossom.netlify.app/';
  const resultUrl = window.location.href;

  React.useEffect(() => {
    //컴포넌트를 접근한 시점에 권한 요청
    Kakao.cleanup(); // 여러번 인증 피하기 위해 진입했을 때 cleanup
    Kakao.init('b857aae3a90344f342952f775ee67df6');
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '나랑 잘 맞는 화장품 결과',
        description: `나의 비건 화장품은 ${data.name}입니다.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Button
      onClick={shareKakao}
      style={{
        fontFamily: 'DalseoHealingBold',
        padding: '10px',
        fontSize: '20px',
        marginTop: '2rem',
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
      }}
    >
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;
