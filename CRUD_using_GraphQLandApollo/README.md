# Apollo server와 client를 이용한 CRUD 게시판 만들기

## 백엔드

- typescript 사용
- express-generator 사용 안함
- apollo-server-express를 활용하여 미들웨어로 사용함
- 주석 부분은 읽기, 쓰기, 업데이트, 삭제 부분을 모두 분리한 경우에 사용하는 코드
- 테이블이 하나이므로 타입도 하나만 존재하기 때문에 통합된 코드로 수정함
- 데이터베이스는 ncloud의 db와 연결되어 있음
- 쿼리문 중 변수를 직접 사용한 부분 '?'를 활용한 쿼리로 수정해야함

## 프론트엔드

- typescript 사용
- 가장 간단한 CRUD 기능만 구현
- 검색 조건 설정 등 추가 기능 구현하면 좋음
- 구조 아직 미반영, 리팩토링 필요
- 디자인적 요소 고려 안함

## 실행 방법

- 우선 백엔드 실행
  - yarn start 명령어를 통해 실행
  - 4000번 포트에서 동작
- 프론트엔드 실행
  - yarn start 명령어를 통해 실행
  - 3000번 포트에서 동작
