import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Members from "./Page/Members";
import NewPost from "./Page/NewPost";
import Post from "./Page/Post";
import Posts from "./Page/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post" element={<Post />} />
        <Route path="/newpost" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
