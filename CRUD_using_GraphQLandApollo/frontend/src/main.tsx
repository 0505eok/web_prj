/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

const readAll = gql`
  query Query {
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

const CreatePost = gql`
  mutation Mutation(
    $title: String
    $contents: String
    $author: String
    $category: String
  ) {
    create(
      title: $title
      contents: $contents
      author: $author
      category: $category
    ) {
      title
      contents
      author
      category
    }
  }
`;

const UpdatePost = gql`
  mutation Mutation(
    $id: Int
    $title: String
    $contents: String
    $author: String
    $category: String
  ) {
    update(
      id: $id
      title: $title
      contents: $contents
      author: $author
      category: $category
    ) {
      id
      title
      contents
      author
      category
    }
  }
`;

const Modal = (props: any) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const Title = (e: any) => {
    setTitle(e.target.value);
  };
  const Author = (e: any) => {
    setAuthor(e.target.value);
  };
  const Category = (e: any) => {
    setCategory(e.target.value);
  };
  const Contents = (e: any) => {
    setContents(e.target.value);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        display: "flex",
        backgroundColor: "gray",
        width: "1000px",
        height: "1000px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "350px",
          width: "200px",
          backgroundColor: "white",
        }}
      >
        <div>
          <p>제목</p>
          <input onChange={Title}></input>
        </div>
        <div>
          <p>글쓴이</p>
          <input onChange={Author}></input>
        </div>
        <div>
          <p>카테고리</p>
          <input onChange={Category}></input>
        </div>
        <div>
          <p>내용</p>
          <textarea onChange={Contents}></textarea>
        </div>
        <button
          onClick={function () {
            if (!props.id) {
              props.createpost(title, author, category, contents);
            } else {
              props.updatepost(props.id, title, author, category, contents);
            }
            props.isModal(-1);
          }}
        >
          제출
        </button>
      </div>
    </div>
  );
};

const Main = () => {
  const { loading, error, data, refetch } = useQuery(readAll);
  const [modal, setModal] = useState<number>(-1);

  const [deletePost] = useMutation(DeletePost, {
    onCompleted: (data) => {
      refetch();
      alert(`${data.delete[0].title}이(가) 삭제되었습니다.`);
    },
  });

  const [createPost] = useMutation(CreatePost, {
    onCompleted: () => {
      refetch();
      alert("게시물이 등록되었습니다.");
    },
  });

  const [updatePost] = useMutation(UpdatePost, {
    onCompleted: (data) => {
      refetch();
      alert("게시물이 수정되었습니다.");
    },
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  const Delete: any = (id: any) => {
    deletePost({ variables: { id: id } });
  };

  const Create: any = (
    title: string,
    author: string,
    category: string,
    contents: string
  ) => {
    createPost({
      variables: {
        title: title,
        author: author,
        category: category,
        contents: contents,
      },
    });
  };

  const Update: any = (
    id: number,
    title: string,
    author: string,
    category: string,
    contents: string
  ) => {
    updatePost({
      variables: {
        id: id,
        title: title,
        author: author,
        category: category,
        contents: contents,
      },
    });
  };

  if (modal === -1) {
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
                <button
                  onClick={function () {
                    setModal(post.id);
                  }}
                >
                  수정
                </button>
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
        <button
          onClick={function () {
            setModal(-2);
          }}
        >
          글쓰기
        </button>
      </div>
    );
  } else if (modal === -2) {
    return (
      <div>
        <Modal createpost={Create} isModal={setModal}></Modal>
      </div>
    );
  } else {
    return (
      <div>
        <Modal updatepost={Update} isModal={setModal} id={modal}></Modal>
      </div>
    );
  }
};

export default Main;
