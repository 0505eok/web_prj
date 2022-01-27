/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

interface Ipost {
  id: number;
  name: string;
  title: string;
  content: string;
}

const Posts = () => {
  const [postList, setPostList] = useState<Ipost[]>([]);
  const [memberName, setMemberName] = useState("");
  const [findName, setFindName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // 요청 보내서 받아와야함
    // 더미 데이터
    setPostList([
      { id: 0, name: "00", title: "0000", content: "0000000" },
      { id: 1, name: "11", title: "1111", content: "1111111" },
      { id: 2, name: "22", title: "2222", content: "2222222" },
      { id: 3, name: "33", title: "3333", content: "3333333" },
      { id: 4, name: "44", title: "4444", content: "4444444" },
    ]);
  }, []);

  const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberName(e.target.value);
  };

  const findByName = () => {
    setFindName(memberName);
    setMemberName("");
  };

  const findByPost = (post: Ipost) => {
    navigate("/post", { state: post });
  };

  const toUpdate = () => {
    navigate("/newpost");
  };

  return (
    <>
      <BtnContainer>
        <Btn onClick={toUpdate}>글쓰기</Btn>
        <SearchContainer>
          <input type={"text"} value={memberName} onChange={setName}></input>
          <Btn onClick={findByName}> 검색</Btn>
        </SearchContainer>
      </BtnContainer>
      <ul>
        {postList.map((post: Ipost) => {
          if (findName !== "" && post.name !== findName) return null;
          return (
            <li
              key={post.id}
              onClick={() => {
                findByPost(post);
              }}
            >
              <PostElem>
                <div>제목: {post.title}</div>
                <div>작성자: {post.name}</div>
              </PostElem>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Posts;

const PostElem = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;

  &:hover {
    background-color: gray;
    cursor: Pointer;
  }
`;

const Btn = styled.div`
  width: 50px;
  background-color: gray;
  text-align: center;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
