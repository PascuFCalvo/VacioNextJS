import {
  Instagram,
  LinkedIn,
  MusicNote,
  X,
  YouTube,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function MainPage2() {
  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center p-6 bg-neutral-900 text-white">
        <h2 className="text-2xl">
          SIN ESTOMAGO, SIN COLON, SIN RECTO, SIN VESICULA, CASI MUERO 3 VECES
          PORQUE ESTOY{" "}
        </h2>
        <h1 className="text-6xl mt-4 mb-4">VACIO</h1>
        <h2 className="text-2xl">
          GRACIAS AL DEPORTE DE ULTRA DISTANCIA ME SIEMTO MAS VIVO QUE NUNCA
        </h2>
      </div>
      <div className="w-screen flex">
        <div className="h-full w-1/3 min-w-96 flex flex-col min-w-600">
          <div className="relative h-full min-w-600">
            <Link href="https://www.instagram.com/dualcillo/" target="_blank">
              <Image
                src="/../../../assets/retrato.jpg"
                alt="cara"
                width={1066}
                height={1332}
                className="min-w-full"
              />
            </Link>
            <Image
              src="/../../../assets/libro.jpg"
              alt="cara"
              width={1066}
              height={1332}
              className="min-w-full"
            />
            <div className="absolute bottom-0 w-full bg-transparent-app flex flex-row items-center justify-evenly pb-5 pt-5 bg-slate-50/20">
              <Link href="https://www.instagram.com/dualcillo/" target="_blank">
                <Instagram className="text-5xl text-white" />
              </Link>
              <Link href="https://twitter.com/dualcillo" target="_blank">
                <X className="text-5xl text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/juan-dual-mateo-b6277695/"
                target="_blank"
              >
                <LinkedIn className="text-5xl text-white" />
              </Link>
              <Link
                href="https://www.tiktok.com/@dualcillo?lang=es"
                target="_blank"
              >
                <MusicNote className="text-5xl text-white" />
              </Link>
              <Link
                href="https://www.youtube.com/@RunnifeJuanDual"
                target="_blank"
              >
                <YouTube className="text-5xl text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" relative w-2/3 bg-amber-50 flex flex-col items-center content-center justify-center p-10">
          <h1 className="text-m md:text-xl lg:text-2xl text-neutral-900 p-2 md:p-2 lg:p-2">
            <Image
              src="/../../../assets/libro-juan-dual.png"
              alt="cara"
              width={500}
              height={500}
              className="opacity-20 absolute top-0 right-0 mt-10 "
            ></Image>
            Soy Juan y ¡Estoy Vacio por dentro!<br></br>
            Me han quitado lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Soy Juan y ¡Estoy Vacio por
            dentro!<br></br>
            Me han quitado lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <br></br>
          </h1>
          <button className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-2 px-4 border border-emerald-600 rounded mt-10 shadow-md">
            Conoce mi historia
          </button>
        </div>
      </div>
    </>
  );
}
