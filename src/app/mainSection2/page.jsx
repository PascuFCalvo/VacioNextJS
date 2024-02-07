"use client ";
import {
  Instagram,
  LinkedIn,
  MusicNote,
  X,
  YouTube,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import "./transition.css";
import retrato from "../../../public/assets/retrato.jpg";
import libro from "../../../public/assets/libro-juan-dual.png";
import portada from "../../../public/assets/librogris.png";

export default function MainPage2() {
  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center p-6 bg-neutral-900 text-white">
        <h2 className="text-2xl text-center mt-10 pl-5 pr-5">
          SIN ESTOMAGO, SIN COLON, SIN RECTO, SIN VESICULA, CASI MUERO 3 VECES
          PORQUE ESTOY{" "}
        </h2>
        <h1 className="text-6xl mt-4 mb-4">VACIO</h1>
        <h2 className="text-2xl text-center mb-10 pl-5 pr-5">
          GRACIAS AL DEPORTE DE ULTRA DISTANCIA ME SIENTO MAS VIVO QUE NUNCA
        </h2>
      </div>
      <div className=" w-screen flex flex-col justify-center items-center lg:flex-row lg:mb-0 ">
        <div className=" max-w-[440px]">
          <div className="mb-0 relative h-full min-w-600 flex ">
            <Link href="https://www.instagram.com/dualcillo/" target="_blank">
              <div className="flex flex-row">
                <Image src={retrato} alt="cara" width={1066} height={1332} />
              </div>
            </Link>

            <div className="absolute bottom-0 w-full bg-transparent-app flex flex-row items-center justify-evenly pb-5 pt-5 bg-neutral-50/20 z-1">
              <Link href="https://www.instagram.com/dualcillo/" target="_blank">
                <Instagram className="social-icon text-5xl text-white" />
              </Link>
              <Link href="https://twitter.com/dualcillo" target="_blank">
                <X className="social-icon text-5xl text-white " />
              </Link>
              <Link
                href="https://www.linkedin.com/in/juan-dual-mateo-b6277695/"
                target="_blank"
              >
                <LinkedIn className="social-icon text-5xl text-white" />
              </Link>
              <Link
                href="https://www.tiktok.com/@dualcillo?lang=es"
                target="_blank"
              >
                <MusicNote className="social-icon text-5xl text-white" />
              </Link>
              <Link
                href="https://www.youtube.com/@RunnifeJuanDual"
                target="_blank"
              >
                <YouTube className="social-icon text-5xl text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div
          id="quienEsJuanDual"
          className="relative w-full h-[550px]  bg-amber-50 flex flex-col items-center justify-center pl-10 pr-10"
        >
          <h1 className="max-w-[700px] first:text-m md:text-m lg:text-xl text-neutral-900 p-2 md:p-2 lg:p-2">
            <Image
              src={libro}
              alt="cara"
              width={500}
              height={500}
              id="juan"
              className=" opacity-20 absolute  h-full w-auto top-0 right-0  z-0 "
            ></Image>
            <p className=" mt-10 mb-2 text-pretty ">
              ¡Hola! Soy Juan y ¡estoy Vacío por dentro!
            </p>

            <p className="mb-2 text-pretty">
              Así, como lees. Me han quitado, a lo largo de los años, el
              estómago, el colon, el recto y la vesícula biliar.
            </p>

            <p className="mb-2 text-pretty">
              Casi me muero en varias ocasiones por complicaciones en las
              cirugías pero, a pesar de todo, he ido sobreviviendo y adivina
              qué: gracias al deporte de ultra distancia me siento más vivo que
              nunca.
            </p>

            <p className="mb-2 text-pretty">
              Acompañame a mis saraos y te cuento mas!
            </p>
          </h1>
          <a className="z-10" href="pages/about">
            <button className=" text-3xl bg-teal-600 hover:bg-teal-400 text-white font-bold py-4 px-6 border  rounded mt-10  z-1 hover:text-neutral-900 mb-10">
              CONOCE MI HISTORIA
            </button>
          </a>
        </div>
      </div>
      <div
        id="libro"
        href="./formBook/"
        className="bg-gradient-to-r from-neutral-800 to-neutral-600 w-screen flex flex-col items-center content-center justify-center 
         md:flex-row md:justify-around   z-50  text-amber-50"
      >
        <section className="ml-10 mr-20 max-w-[500px]">
          <p
            href="./formBook/"
            className="mt-10 mb-10  text-2xl md:text-2xl md:mt-0 font-bold  hover:cursor-pointer text-balance"
          >
            VACIO UN LIBRO QUE INSPIRA
          </p>
          <p className="text-balance">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          </p>
          <a className="z-10" href="/pages/formBook">
            <button className=" text-3xl bg-teal-600 hover:bg-teal-400 text-white font-bold py-4 px-6   rounded mt-10  z-1 hover:text-neutral-900 mb-10">
              CONSIGUELO AQUI
            </button>
          </a>
        </section>
        {/* comentario para hacer commit y pushear */}

        <Image
          src={portada}
          alt="cara"
          width={1066}
          height={1332}
          className="w-[500px]  mb-10 mt-10"
        />
      </div>
    </>
  );
}
