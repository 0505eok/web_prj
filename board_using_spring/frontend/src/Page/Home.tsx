import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/members">멤버 목록 보기</Link>
        </li>
        <li>
          <Link to="/posts">게시물 보기</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
