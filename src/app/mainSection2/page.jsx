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
import { Button } from "@mui/material";

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
          <div className="relative h-full min-w-600 flex mb-10 lg:mb-0">
            <Link href="https://www.instagram.com/dualcillo/" target="_blank">
              <div className="flex flex-row">
                <Image
                  src="/../../../assets/retrato.jpg"
                  alt="cara"
                  width={1066}
                  height={1332}
                />
              </div>
            </Link>

            <div className="absolute bottom-0 w-full bg-transparent-app flex flex-row items-center justify-evenly pb-5 pt-5 bg-neutral-50/20">
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
              src="/../../../assets/libro-juan-dual.png"
              alt="cara"
              width={500}
              height={500}
              className="opacity-20 absolute  h-full w-auto top-0 right-0  z-0 "
            ></Image>
            <p className="mb-2">¡Hola! Soy Juan y ¡estoy Vacío por dentro!</p>

            <p className="mb-2">
              Así, como lees. Me han quitado, a lo largo de los años, el
              estómago, el colon, el recto y la vesícula biliar.
            </p>

            <p className="mb-2">
              Casi me muero en varias ocasiones por complicaciones en las
              cirugías pero, a pesar de todo, he ido sobreviviendo y adivina
              qué: gracias al deporte de ultra distancia me siento más vivo que
              nunca.
            </p>

            <p className="mb-2">Acompañame a mis saraos y te cuento mas!</p>
          </h1>
          <a href="pages/about">
            <button className=" text-3xl bg-teal-500 hover:bg-teal-500 text-white font-bold py-4 px-6 border  rounded mt-10  z-10">
              CONOCE MI HISTORIA
            </button>
          </a>
        </div>
      </div>
      <Link
        id="section1"
        href="./formBook/"
        className="relateive bg-teal-500 hover:bg-teal-300 w-screen flex flex-col md:flex-row justify-around  items-center z-50 hover:text-black text-amber-50"
      >
        <p
          href="./formBook/"
          className="ml-4 mt-10  text-4xl md:text-6xl md:mt-0 font-bold  hover:cursor-pointer"
        >
          HAZTE CON MI LIBRO
        </p>
        <Image
          src="/../../../assets/portada-libro.jpg"
          alt="cara"
          width={1066}
          height={1332}
          className="w-96 mt-10 mb-10"
        />
      </Link>
    </>
  );
}
