// Home.jsx
import React from "react";
import "../../css/Home.css";
import Portrait from "../../images/portrait.png";
import BlueLocationPin from "../../images/blueLocationPin.png";
import WavingBlueHand from "../../images/wavingBlueEmoji.png";

export default function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <div className="text-content">
          <h1 className="header">
            Front-End Web Developer{" "}
            <img
              className="waving-hand"
              src={WavingBlueHand}
              alt="Waving Hand"
            />
          </h1>
          <p className="intro-text">
            Hi, I am Diogo Sousa, a passionate front-end web developer based in
            Oldbury, England.{" "}
            <img
              src={BlueLocationPin}
              alt="Location Pin"
              className="location-pin"
            />
          </p>
        </div>
        <img className="profile-image" src={Portrait} alt="Profile" />
      </div>
    </div>
  );
}
