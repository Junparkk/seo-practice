import { Helmet } from "react-helmet";
function Main() {
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta property="og:type" content="website" />
        <meta name="keywords" content="박효준" />
        <meta property="og:title" content="서호주 로드트립" />
        {/* 카드에 표시하고 싶은 제목 */}
        <meta
          property="og:image"
          content="https://i.ytimg.com/vi/ax3g7UiFyk8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBw65Y9akK26AVzDxvEDAwJWC8sTA"
        />
        {/* 카드에 표시하고 싶은 이미지 */}
        <meta
          property="og:url"
          content="https://www.youtube.com/watch?v=ax3g7UiFyk8"
        />
        {/* 표시하고싶은 url주소 */}
        <meta
          property="og:description"
          content="호주 로드트립은 이렇게 해보자"
        />
        {/* 카드에 표시하고 싶은 설명 */}

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="서호주 로드트립" />
        <meta
          property="twitter:description"
          content="서호주 에스페란스로 떠나는 여행"
        />
        <meta
          property="twitter:image"
          content="https://i.ytimg.com/vi/ax3g7UiFyk8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBw65Y9akK26AVzDxvEDAwJWC8sTA"
        />
      </Helmet>
      <div>Main</div>
    </>
  );
}

export default Main;
