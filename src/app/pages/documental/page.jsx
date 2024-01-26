"use client";

import { useState } from "react";
import juandocu from "../../../../public/assets/dual-docuemntal.png";
import gorkadocu from "../../../../public/assets/gorka-documental.png";
import edudocu from "../../../../public/assets/eduardo-documental.png";

import Image from "next/image";
import NavbarAside from "../../navbarAside/navbarAside";
import { Instagram, LinkedIn } from "@mui/icons-material";
import MiniNavbar from "@/app/navbar/miniNavbar";

export default function Home() {
  return (
    <div>
      <MiniNavbar></MiniNavbar>
      <NavbarAside></NavbarAside>
      <div className="bg-neutral-800 w-full flex flex-col justify-center items-center content-center">
        <div className=" mt-40 bg-neutral-800 w-4/5 h-[300px] flex flex-col  justify-center items-center content-center ">
          <div className="  left-0 flex justify-center mb-[-150px] w-5/6 md:w-1/2"></div>

          <h1 className="text-4xl text-center text-amber-50 font-bold mb-10">
            LA MUERTE DE JUAN
          </h1>
          <p className="text-amber-50">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
          </p>
        </div>

        <div className="w-screen h-[600px] bg-neutral-900 flex flex-col justify-center items-center content-center">
          <div className="flex flex-col items-center content-center justify-center w-5/6 max-w-[1000px] h-5/6 ">
            <iframe
              className="video w-full h-full"
              src="https://www.youtube.com/embed/ZRS0hYmDy4k"
              allowFullScreen
              autoPlay="true"
              loop="true"
              controls="false"
            />
          </div>
        </div>

        <div className=" mt-40 bg-neutral-800 w-full  flex flex-col  justify-center items-center content-center ">
          <div className="  left-0 flex justify-center mb-[-150px] w-full md:w-1/2"></div>

          <h1 className="text-4xl w-4/5 max-w-[800px] text-center text-amber-50 font-bold pt-10 mb-10">
            ¿QUIENES HACEMOS ESTE PROYECTO?
          </h1>
          <div className=" flex flex-col items-center md:flex-row w-5/6 justify-between">
            <div className="text-amber-50 p-2  ">
              <Image
                src={juandocu}
                alt="Juan"
                className="w-96 h-96 object-cover"
              />
              <p className="text-xl font-bold text-center mt-2"> JUAN DUAL</p>
              <p className="h-14">Superviviente protagonista y poco mas</p>
              <div className="mb-10">
                <a
                  href=" https://www.linkedin.com/in/juan-dual-mateo-b6277695/"
                  target="_blank"
                >
                  <LinkedIn className="h-10 w-10" />
                </a>
                <a href="https://www.instagram.com/dualcillo/" target="_blank">
                  <Instagram className="h-10 w-10" />
                </a>
              </div>
            </div>
            <div className="text-amber-50 p-2 ]">
              <Image
                src={edudocu}
                alt="Juan"
                className="w-96 h-96 object-cover"
              />
              <p className="text-xl font-bold text-center mt-2">
                EDUARDO PÈLACH
              </p>
              <p className="h-14">Camara y todo lo que tenga que ser</p>
              <div className="mb-10">
                <a
                  href="https://www.linkedin.com/in/eduardo-pelach-alonso/"
                  target="_blank"
                >
                  <LinkedIn className="h-10 w-10" />
                </a>
                <a href="https://www.instagram.com/flashnflow/" target="_blank">
                  <Instagram className="h-10 w-10" />
                </a>
              </div>
            </div>
            <div className="text-amber-50 p-2  ">
              <Image
                src={gorkadocu}
                alt="Juan"
                className="w-96 h-96 object-cover"
              />
              <p className="text-xl font-bold text-center mt-2">
                GORKA MARTINEZ
              </p>
              <p className="h-14">Camara y todo lo que tenga que ser</p>
              <div className="mb-10">
                <a
                  href="https://www.linkedin.com/in/gorkamartinez/"
                  target="_blank"
                >
                  <LinkedIn className="h-10 w-10" />
                </a>
                <a href="https://www.instagram.com/gkmph/" target="_blank">
                  <Instagram className="h-10 w-10" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl text-center w-4/5 max-w-[800px]  text-amber-50 font-bold mb-10">
          ¿Como ayudar a este loco proyecto?
        </h1>
        <p className="text-amber-50 w-4/5 max-w-[800px] p-2">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        </p>

        <a
          className="mt-10 flex  rounded-md bg-amber-50 px-6 py-3 text-sm font-semibold text-neutral-800 shadow-sm hover:bg-amber-100 hover:cursor-pointer  mb-10"
          href="/"
        >
          VOLVER
        </a>
      </div>
    </div>
  );
}
