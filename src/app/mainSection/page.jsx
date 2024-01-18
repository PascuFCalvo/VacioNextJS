import React from "react";
import "./videoStyles.css";
import Navbar from "../navbar/navbar";
import NavbarAside from "../navbarAside/navbarAside";

export default function LandinPageSection4() {
  return (
    <>
      <div className="video-wrapper  flex flex-col w-screen  bg-neutral-800">
        <Navbar />
        <video
          className="video"
          src={require("../../../public/assets/teaser.mp4")}
          autoPlay
          muted
          loop
        />
      </div>
    </>
  );
}
