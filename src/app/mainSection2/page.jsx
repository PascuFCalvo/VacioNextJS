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
        <h2 className="text-2xl">
          SIN ESTOMAGO, SIN COLON, SIN RECTO, SIN VESICULA, CASI MUERO 3 VECES
          PORQUE ESTOY{" "}
        </h2>
        <h1 className="text-6xl mt-4 mb-4">VACIO</h1>
        <h2 className="text-2xl">
          GRACIAS AL DEPORTE DE ULTRA DISTANCIA ME SIEMTO MAS VIVO QUE NUNCA
        </h2>
      </div>
      <div className="w-screen flex flex-col md:flex-row">
        <div className=" bg-cover bg-center h-full w-1/3 min-w-96 ">
          <div className="relative h-full min-w-600 flex ">
            <Link href="https://www.instagram.com/dualcillo/" target="_blank">
              <Image
                src="/../../../assets/retrato.jpg"
                alt="cara"
                width={1066}
                height={1332}
                className="min-w-full"
              />
            </Link>

            <div className="absolute bottom-0 w-full bg-transparent-app flex flex-row items-center justify-evenly pb-5 pt-5 bg-slate-50/20">
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
        <div className="relative w-full  bg-amber-50 flex flex-col items-center justify-center p-10">
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
          <button className=" text-3xl bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-4 px-6 border  rounded mt-10  z-10">
            CONOCE MI HISTORIA
          </button>
        </div>
      </div>
      <div className="relateive bg-emerald-400 w-screen flex flex-col md:flex-row justify-around  items-center">
        <Link
          href="./formBook/"
          className="text-amber-50 text-4xl md:text-6xl  font-bold hover:text-black hover:cursor-pointer"
        >
          HAZTE CON MI LIBRO
        </Link>
        <Image
          src="/../../../assets/portada-libro.jpg"
          alt="cara"
          width={1066}
          height={1332}
          className="w-96 mt-10 mb-10"
        />
      </div>
    </>
  );
}
