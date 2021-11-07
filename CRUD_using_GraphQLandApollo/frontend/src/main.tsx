/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

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

const DeletePost = gql`
  mutation Mutation($id: Int) {
    delete(id: $id) {
      id
      title
      contents
      author
      category
    }
  }
`;

const Main = () => {
  const { loading, error, data, refetch } = useQuery(readAll);
  const [deletePost] = useMutation(DeletePost, {
    onCompleted: (data) => {
      refetch();
      alert(`${data.delete[0].title}이(가) 삭제되었습니다.`);
    },
  });
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  const Delete: any = (id: any) => {
    deletePost({ variables: { id: id } });
  };

  return (
    <div>
      <ul style={{ listStyle: "none", overflow: "auto", maxHeight: "700px" }}>
        {data.read.map((post: any) => {
          return (
            <li key={post.id}>
              <p>{`제목 : ${post.title}`}</p>
              <p>{`글쓴이 : ${post.author}`}</p>
              <p>{`카테고리 : ${post.category}`}</p>
              <p>{`내용 : ${post.contents}`}</p>
              <button>수정</button>
              <button
                onClick={function () {
                  Delete(post.id);
                }}
              >
                삭제
              </button>
              <br></br>
              <span>--------------------------------------</span>
            </li>
          );
        })}
      </ul>
      <button>글쓰기</button>
    </div>
  );
};

export default Main;
