import React from "react";
import "./videoStyles.css";
import Navbar from "../navbar/navbar";
import { Twitter } from "@mui/icons-material";

export default function LandinPageSection4() {
  return (
    <>
      <div className="video-wrapper  flex flex-col w-screen  bg-neutral-900">
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
