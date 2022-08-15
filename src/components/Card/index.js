import React from "react";
import "./Card.css";

import BackgroundImg from "../../images/mike-scheid-xoYPV4oVQJI-unsplash.jpg";
import ProfileImg from "../../images/profile_pic_chase.jpeg";

import "boxicons";

function Card() {
  return (
    <div className="card">
      <img
        className="background-img"
        src={BackgroundImg}
        alt="card background"
      />
      <div className="content">
        <img className="profile-pic" src={ProfileImg} alt="Users profile" />
        <div className="profile-pic-backdrop" />
        <div className="name">
          <h2>Chase Jones</h2>
          <h5>@chaseJones</h5>
        </div>
        <p className="aboutme">
          I am a current Full Stack Developer Student at NC State University. I
          enjoy spending time with my family and friends, CODING, playing guitar
          and Hunting.
        </p>
        <div className="social-links">
          <a href="https://github.com/jonescha1">
            <box-icon type="logo" name="github"></box-icon>
          </a>
          <a href="https://www.facebook.com/chase.jones.9465">
            <box-icon type="logo" name="facebook"></box-icon>
          </a>
          <a href="https://www.linkedin.com/in/chase-jones-b0a163223/">
            <box-icon name="linkedin-square" type="logo"></box-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
