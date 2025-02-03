// import React from 'react'
// import {Link, Routes,Route}from "react-router-dom";
// const Post = () => {
//   return (
//     <div>
//         <li>
//             <Link to="./NewPost">NewPost</Link></li>
//     </div>
//   )
// }

// export default Post

const Post = ({post}) => {
  return (
    <article className="post">
      <h2 >{post.title}</h2>
      <p className="postDate">{post.datetime}</p>
      <p className="postBody">
        {(post.body).length <= 25
          ? post.body
          : `${(post.body).slice(0, 25)}...`}
      </p>
    </article>
  );
}

export default Post