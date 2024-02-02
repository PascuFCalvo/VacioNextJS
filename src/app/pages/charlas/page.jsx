import Image from "next/image";
import juanCharla1 from "../../../../public/assets/juanCharla1.jpeg";
import Navbar from "@/app/navbar/navbar";

export default function Charlas() {
  return (
    <div className="flex flex-col h-screen bg-amber-50 ">
      <Navbar />
      <div className="max-w-[1000px]">
        <div className="relative min-w-[700px] w-1/2  bg-teal-500 my-[300px]   text-2xl flex flex-col content-center items-center justify-center text-center p-20 ">
          Me dedico a compartir mi historia en todo tipo de lugares. ¿Te
          gustaria escucharla?
          <Image
            src={juanCharla1}
            alt="charlas"
            width={400}
            height={500}
            className="absolute left-[250px] top-[200px]"
          />
        </div>

        <div></div>
      </div>

      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
