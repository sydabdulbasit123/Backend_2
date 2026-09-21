import { useState } from "react";
import { useEffect } from "react";
import Post from "../components/Post";
import Button from "../components/Button";
import axios from "axios";

const Feed = () => {


const [post, setPost] = useState([]);


useEffect(() => {
  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      setPost(res.data.posts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      // Handle error state
    }
  };
  
  fetchPosts();
}, []);


  return (
 <div className="feed">
      {
        post.length > 0 ? (
          post.map((elem) => (
            <Post
              key={elem._id}
              image_Url={elem.image_Url}
              caption={elem.caption}
            />
          ))
        ) : (
          <p>No posts available.</p>
        )
      }
      <Button />
    </div>
  );
};

export default Feed;
