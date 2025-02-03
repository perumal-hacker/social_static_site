import { useParams } from "react-router-dom";
import Feed from "./Feed";

const MyPosts = ({ posts }) => {
  const { id } = useParams();
  const myPosts = posts.filter(post => post.id === parseInt(id));

  return (
    <main className="Home">
      {myPosts.length ? (
        <Feed posts={myPosts} className="feed" />
      ) : (
        <p style={{ marginTop: "2rem" }}>No Posts</p>
      )}
    </main>
  );
};

export default MyPosts;
