# 프로젝트 개요
- React 프로젝트에서 SEO 대응을 위한 최소 작업 대응

## 개발환경
- vite
- react
- react-helmet

## Favicon 세팅 
### 각 파일의 역할
- favicon.ico : 브라우저 상단 타이틀 옆의 아이콘
- android, apple : 즐겨찾기 및 바로가기 아이콘


## SEO 스코어 분석
<img width="600" alt="스크린샷 2024-04-02 오전 10 45 43" src="https://github.com/Junparkk/seo-practice/assets/82128525/5a646eba-caaf-4316-868a-d049c9eb0737">

### 개선점
- Title 및 Meta description 작성하기(Meta 태그에 대한 내용을 다시한번 찾아보기)
- H1 태그 등 html 태그를 적절하게 사용하기
- Helmet을 이용해 동적으로 meta 태그를 주입해 주고 있어 pre-render를 제공하는 netlify를 이용한 배포를 진행함(추후 pre-render에 대해 깊이 고민해보기)

