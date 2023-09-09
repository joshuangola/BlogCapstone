import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5500/api/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  // console.log(posts);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

// const posts = [
//   {
//     id: 1,
//     title: "The Way of Kings - Journey into Roshar",
//     desc: "Dive deep into the world of Roshar, where storms ravage the surface and magic is drawn from stormlight. Follow Kaladin, Shallan, and Dalinar as they navigate politics, war, and ancient mysteries.",
//     img: "https://b1512865.smushcdn.com/1512865/wp-content/uploads/2019/11/Way-of-Kings.jpg?lossy=1&strip=1&webp=1",
//   },
//   {
//     id: 2,
//     title: "Mistborn: The Final Empire - A World Without Hope",
//     desc: "In a world where ash falls from the sky and mist dominates the night, Vin discovers she has rare Allomantic powers. Join her and a band of rebels as they attempt to overthrow the immortal Lord Ruler.",
//     img: "https://b1512865.smushcdn.com/1512865/wp-content/uploads/2019/11/Way-of-Kings.jpg?lossy=1&strip=1&webp=1",
//   },
//   {
//     id: 3,
//     title: "Words of Radiance - Secrets Unveiled",
//     desc: "The sequel to 'The Way of Kings', this tome delves deeper into the lives of our heroes. With the return of the Voidbringers, Roshar's inhabitants must unite or face extinction.",
//     img: "https://b1512865.smushcdn.com/1512865/wp-content/uploads/2019/11/Way-of-Kings.jpg?lossy=1&strip=1&webp=1",
//   },
//   {
//     id: 4,
//     title: "Elantris: The City of the Gods",
//     desc: "Once a city of unparalleled beauty, Elantris now houses the damned. When Prince Raoden is cursed, he's determined to uncover the city's secrets and restore its former glory.",
//     img: "https://b1512865.smushcdn.com/1512865/wp-content/uploads/2019/11/Way-of-Kings.jpg?lossy=1&strip=1&webp=1",
//   },
//   {
//     id: 5,
//     title: "Warbreaker: Magic of Breath and Color",
//     desc: "In a world where magic is drawn from Breath, and color signifies power, two sisters navigate politics, intrigue, and ancient mysteries to prevent an impending war.",
//     img: "https://b1512865.smushcdn.com/1512865/wp-content/uploads/2019/11/Way-of-Kings.jpg?lossy=1&strip=1&webp=1",
//   },
// ];
