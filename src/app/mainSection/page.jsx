import Navbar from "../navbar/navbar";

export default function LandinPageSection4() {
  return (
    <>
      <div className="relative h-screen overflow-hidden bg-neutral-900">
        <Navbar />
        <video
          className="w-full h-auto min-h-[350px] md:min-w-full md:min-h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={require("../../../public/assets/teaser3.mp4")}
          autoPlay
          muted
          loop
        />
      </div>
    </>
  );
}
