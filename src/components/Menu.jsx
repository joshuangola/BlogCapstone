import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5500/api/posts/?cat=${cat}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h2>Other Posts</h2>
      {posts
        .slice()
        .reverse()
        .slice(0, 4)
        .map((post) => (
          <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h3>{post.title}</h3>
            <button>Read More</button>
          </div>
        ))}
    </div>
  );
};

export default Menu;
