import React from "react";
import axios from "axios";
import Delete from "../img/delete.png";

const DeleteButton = ({ postId, afterDelete }) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`http://localhost:5500/api/posts/${postId}`);
      } catch (err) {
        console.log(err);
        alert("Failed to delete the post. Please try again.");
      }
    }
  };

  return <img src={Delete} alt="Delete" onClick={handleDelete} />;
};

export default DeleteButton;
