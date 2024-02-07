import React, { Suspense } from "react";
import Navbar from "../components/Navbar";

export default function MainPage() {
  return (
    <div className="relative h-screen overflow-hidden bg-neutral-900">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <video
          className="w-full h-auto min-w-full min-h-[350px] md:max-h-screen md:min-h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={require("../../../public/assets/teaser3.mp4")}
          autoPlay
          muted
          loop
          controls
        />
      </Suspense>
    </div>
  );
}
