import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { AuthContext } from "./authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=cosmere">
            <h5>Cosmere</h5>
          </Link>
          <Link className="link" to="/?cat=cytoverse">
            <h5>Cytoverse</h5>
          </Link>
          <Link className="link" to="/?cat=thewheeloftime">
            <h5>The Wheel of Time</h5>
          </Link>
          <Link className="link" to="/?cat=other">
            <h5>Other Series</h5>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={() => logout()}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
