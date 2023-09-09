import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Edit from "../img/edit.png";
import DeleteButton from "../components/DeleteButton";
import axios from "axios";
import { AuthContext } from "../components/authContext";

const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5500/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);
  // console.log(post.users);
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          <div className="info">
            <h3>{post.users?.username || "Unknown"}</h3>
          </div>
          {currentUser?.id === post.user_id && (
            <div className="edit">
              <Link to={`/write?edit=${postId}`}>
                <img src={Edit} alt="" />
              </Link>
              <Link to={"/"}>
                <DeleteButton postId={postId} />
              </Link>
            </div>
          )}
        </div>
        <h2>{post.title}</h2>
        <p>{post.desc}</p>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
