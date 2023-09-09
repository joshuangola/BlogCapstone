import React from "react";
import axios from "axios";

const PostUploader = ({ title, desc, img, cat, userId, onSuccess }) => {
  const handleUpload = async () => {
    try {
      const response = await axios.post("http://localhost:5500/api/posts", {
        title,
        desc,
        img,
        cat,
        user_id: userId,
      });
      onSuccess(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button className="updateBtn" onClick={handleUpload}>
      Post
    </button>
  );
};

export default PostUploader;
