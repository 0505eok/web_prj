import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

interface Ipost {
  id: number;
  name: string;
  title: string;
  content: string;
}

const NewPost = () => {
  const location = useLocation().state as Ipost;
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (location !== null) {
      const { name, title, content } = location;
      setTitle(title);
      setName(name);
      setContent(content);
    }
  }, []);

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <>
      <div>
        제목
        <input type={"text"} value={title} onChange={changeTitle}></input>
      </div>
      <div>
        작성자
        <input type={"text"} value={name} onChange={changeName}></input>
      </div>
      <div>
        내용
        <input type={"text"} value={content} onChange={changeContent}></input>
      </div>
      <Btn
        onClick={() => {
          console.log("저장");
        }}
      >
        저장
      </Btn>
    </>
  );
};

export default NewPost;

const Btn = styled.div`
  width: 50px;
  background-color: gray;
  text-align: center;
`;
