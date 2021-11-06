import React from "react";
import { gql, useQuery } from "@apollo/client";

const readAll = gql`
  query {
    read {
      id
      title
      contents
      author
      category
    }
  }
`;
const Main = () => {
  const { loading, error, data } = useQuery(readAll);
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {data.read.map((post: any) => {
          return (
            <li key={post.id}>
              <p>{`제목 : ${post.title}`}</p>
              <p>{`글쓴이 : ${post.author}`}</p>
              <p>{`카테고리 : ${post.category}`}</p>
              <p>{`내용 : ${post.contents}`}</p>
              <br></br>
            </li>
          );
        })}
      </ul>
      <button>글쓰기</button>
    </div>
  );
};

export default Main;
