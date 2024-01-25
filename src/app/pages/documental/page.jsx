"use client";

import { useState } from "react";
import juandocu from "../../../../public/assets/dual-docuemntal.png";
import gorkadocu from "../../../../public/assets/gorka-documental.png";
import edudocu from "../../../../public/assets/eduardo-documental.png";

import Image from "next/image";
import NavbarAside from "../../navbarAside/navbarAside";
import YoutubeEmbed from "@/app/components/YoutubeEmbed";
import { Instagram, LinkedIn } from "@mui/icons-material";
import MiniNavbar from "@/app/navbar/miniNavbar";

export default function Home() {
  const [grayscale, setGrayscale] = useState(true);

  return (
    <div>
      <MiniNavbar></MiniNavbar>
      <NavbarAside></NavbarAside>
      <div className="bg-neutral-800 w-full flex flex-col justify-center items-center content-center">
        <div className=" mt-40 bg-neutral-800 w-4/5 h-[300px] flex flex-col  justify-center items-center content-center ">
          <div className="  left-0 flex justify-center mb-[-150px] w-5/6 md:w-1/2"></div>

          <h1 className="text-4xl text-center text-amber-50 font-bold mb-10">
            VACIO
          </h1>
          <p className="text-amber-50">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue
          </p>
        </div>

        <div className="w-full bg-neutral-900 flex flex-col justify-center items-center py-5 ">
          <YoutubeEmbed className="max-w-5/6 " embedId="ZRS0hYmDy4k" />
        </div>
        <div className=" mt-40 bg-neutral-800 w-full  flex flex-col  justify-center items-center content-center ">
          <div className="  left-0 flex justify-center mb-[-150px] w-full md:w-1/2"></div>

          <h1 className="text-4xl text-center text-amber-50 font-bold mb-10">
            ¿QUIENES HACEMOS ESTE PROYECTO?
          </h1>
          <div className=" flex flex-col items-center md:flex-row w-5/6 justify-between">
            <div className="text-amber-50 p-2  ">
              <Image
                src={juandocu}
                alt="Juan"
                className="w-96 h-96 object-cover"
              />
              <p className="text-xl font-bold text-center"> JUAN DUAL</p>
              <p className="h-14">Superviviente protagonista y poco mas</p>
              <div className="mb-10">
                <LinkedIn />
                <Instagram />
              </div>
            </div>
            <div className="text-amber-50 p-2 ]">
              <Image
                src={edudocu}
                alt="Juan"
                className="w-96 h-96 object-cover"
              />
              <p className="text-xl font-bold text-center">EDUARDO PÈLACH</p>
              <p className="h-14">Camara y todo lo que tenga que ser</p>
              <div className="mb-10">
                <LinkedIn />
                <Instagram />
              </div>
            </div>
            <div className="text-amber-50 p-2  ">
              <Image
                src={gorkadocu}
                alt="Juan"
                className="w-96 h-96 object-cover"
              />
              <p className="text-xl font-bold text-center">GORKA MARTINEZ</p>
              <p className="h-14">Camara y todo lo que tenga que ser</p>
              <div className="mb-10">
                <LinkedIn />
                <Instagram />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl text-center text-amber-50 font-bold mb-10">
          ¿Como ayudar a este loco proyecto?
        </h1>
        <p className="text-amber-50 max-w-[800px] p-4">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue
        </p>

        <a
          className="mt-40 flex  rounded-md bg-neutral-800 px-3.5 py-5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 hover:cursor-pointer  mb-10"
          href="/"
        >
          VOLVER
        </a>
      </div>
    </div>
  );
}
