import { Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Post from "./Post";
import Footer from "./Footer";
import NewPost from "./NewPost";  // ✅ Importing properly
import Nav from "./Nav";
import Header from "./Header";
import Missing from "./Missing";
import React from "react";
import MyPosts from "./MyPosts"
import { format } from "date-fns";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Tesla",
      datetime: "June 21, 2023 12:33:21 AM",
      body: "This is extracted from Tesla news",
    },
    {
      id: 2,
      title: "Hindu",
      datetime: "June 21, 2023 12:33:21 AM",
      body: "This is extracted from Hindu news",
    },
    {
      id: 3,
      title: "Thinathandhi",
      datetime: "June 21, 2023 12:33:21 AM",
      body: "This is extracted from Thinathandhi news",
    },
  ]);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy hh:mm a"); // ✅ Correct datetime format
    const newPost = { id, title: postTitle, datetime, body: postBody };
    setPosts([...posts, newPost]);
    setPostTitle("");
    setPostBody("");
  };

  return (
    <div className="app">
      <Header title="Viral Vibes" />
      <Nav search={search} setSearch={setSearch} />
      
      {/* ✅ Ensure there's a way to navigate to NewPost */}
      

      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route path="/About" element={<About />} />
        <Route path="/mypost/:id" element={<MyPosts posts={posts} />} />
        <Route
          path="/NewPost"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
