import React from "react";
import "./sidebar.css";
import { Container, Col } from "react-bootstrap";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
            src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
            alt=""
          />
          <p>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse.Sunt eu ut nostrud id quis proident.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarlist">
            <li className="sidebarlistItem">Life</li>
            <li className="sidebarlistItem">Sport</li>
            <li className="sidebarlistItem">Tech</li>
            <li className="sidebarlistItem">Music</li>
            <li className="sidebarlistItem">Cinema</li>
            <li className="sidebarlistItem">Style</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-instagram"></i>

            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
