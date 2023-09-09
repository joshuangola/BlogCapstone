import React, { useState, useContext } from "react";
import MyEditor from "../components/MyEditor";
import PostUpload from "../components/PostUpload";
import { AuthContext } from "../components/authContext";
import { Link } from "react-router-dom";

const Write = () => {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImgURL] = useState("");
  const [cat, setCat] = useState("");
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editContainer">
          <textarea
            placeholder="Write your post here!"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows="10"
            cols="50"
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h2>Publish</h2>
          <span>
            <b>Status:</b> Draft
          </span>
          <input
            type="text"
            placeholder="Image URL"
            onChange={(e) => setImgURL(e.target.value)}
          />
          <div className="buttons">
            {/* <button className="draftBtn">Save as draft</button> */}
            <Link to={"/"}>
              <PostUpload
                title={title}
                desc={desc}
                img={img}
                cat={cat}
                userId={currentUser.id}
              />
            </Link>
          </div>
        </div>
        <div className="item">
          <h2>Category</h2>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="cosmere"
              id="cosmere"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cosmere">Cosmere</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="cytoverse"
              id="cytoverse"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cytoverse">Cytoverse</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="thewheeloftime"
              id="theWheelOfTime"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="theWheelOfTime">The Wheel of Time</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="other"
              id="otherSeries"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="otherSeries">Other Series</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
