# GraphQL을 활용한 프론트-백 통신(Apollo 사용 x)

- 사용 라이브러리 : express-graphql, graphql, axios
- typescript 사용
- express-generator, cra 사용

## 백엔드

- json-server의 데이터를 요청하여 반환해주는 graphql api 작성

## 프론트엔드

- fetch를 통한 요청 방식
- axios를 통한 요청 방식

## 실행 방법

1. `json-server --watch db.json --port 3001` 명령어를 통해 json-server 3001포트에서 가동
2. 프론트엔드에서 `yarn run build`를 통해 빌드
3. 백엔드에서 `yarn start:dev`를 통해 서버 실행

## 추가할 부분

- put, delete 등의 mutation 처리
- 문자열을 활용한 방식이 아닌 객체를 활용한 방식(주석부분, 동작x)
