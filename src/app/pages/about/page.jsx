"use client";

import "./styles.css";
import NavbarAside from "@/app/navbarAside/navbarAside";
import Image from "next/image";
import juancocina from "../../../../public/assets/sociales.jpg";
import libro from "../../../../public/assets/ñibro.png";
import marcas from "../../../../public/assets/sponsors.png";
import charlas from "../../../../public/assets/charlas.png";
import contar from "../../../../public/assets/historia.png";
import cortada from "../../../../public/assets/juan-cortada.png";
import MotivationGallery from "@/app/components/motivation-gallery";
import Contact from "../contact/page";
import Navbar from "@/app/components/Navbar";

export default function About() {
  return (
    <div className="w-screen flex-col bg-amber-50 ">
      <Navbar />
      <NavbarAside />
      <div className=" w-full flex flex-col content-center justify-center items-center">
        <div className="mt-40  w-screen flex flex-col justify-center items-center content-center md:flex-row-reverse  md:justify-evenly ">
          <div className=" relative mb-20 w-3/4 md:w-1/3 ">
            <Image
              alt={"contar"}
              src={contar}
              width={300}
              height={500}
              className="absolute bottom-2/3"
            />
            <Image
              alt={"cocina"}
              src={juancocina}
              width={700}
              height={700}
              className="border-8 border-white"
            />
          </div>
          <div className="flex flex-col  w-3/4 md:w-1/3 justify-evenly">
            <h1 className="text-teal-500 text-2xl font-bold mb-10 text-balance">
              {" "}
              VER 3 VECES MI MUERTE ME HA HECHO QUE VIVA AL MAXIMO
            </h1>
            <p className="text-balance">
              Con 18 años me quitaron el colon y el recto, con 20 el estomago y
              la vesicula y ahora con 30 me dedido a hacer carreras de ultra
              distancia, como lo que quiero y tengo una vida plena
            </p>
            <p className="text-balance">
              Nunca me han parado y ahora soy mas fuerte{" "}
            </p>
          </div>
        </div>
        <div className="w-screen flex flex-col-reverse justify-center content-center items-center md:items-start md:justify-evenly md:content-center md:flex-row">
          <div className="relative  mt-40 bg-teal-600 max-w-[800px] w-5/6 h-[900px] flex justify-evenly md:w-1/2 md:ml-10 md:mt-20">
            <div className="absolute bottom-[600px] md:bottom-[500px] border-8 border-white max-w-[400px]">
              <Image src={cortada} alt="cortada" width={400} height={400} />
            </div>
            <h1 className="absolute bottom-1/3 w-4/5 text-4xl text-center motivacion text-balance">
              Dicen que soy un ejemplo de superacion, supongo que sera por esto
            </h1>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/3 md:px-10 max-h-[700px] overflow-hidden">
            <h1 className="text-teal-500 text-2xl font-bold mt-10 mb-10 text-balance ">
              VER 3 VECES MI MUERTE ME HA HECHO QUE VIVA AL MAXIMO
            </h1>
            <p className="text-balance">
              Con 18 años me quitaron el colon y el recto, con 20 el estomago y
              la vesicula y ahora con 30 me dedido a hacer carreras de ultra
              distancia, como lo que quiero y tengo una vida plena
            </p>
            <p className="text-balance">
              Nunca me han parado y ahora soy mas fuerte{" "}
            </p>
            <p className="text-balance">
              Con 18 años me quitaron el colon y el recto, con 20 el estomago y
              la vesicula y ahora con 30 me dedido a hacer carreras de ultra
              distancia, como lo que quiero y tengo una vida plena
            </p>
            <p className="text-balance">
              Nunca me han parado y ahora soy mas fuerte{" "}
            </p>
            <p className="text-balance">
              Con 18 años me quitaron el colon y el recto, con 20 el estomago y
              la vesicula y ahora con 30 me dedido a hacer carreras de ultra
              distancia, como lo que quiero y tengo una vida plena
            </p>
            <p className="text-balance">
              Nunca me han parado y ahora soy mas fuerte{" "}
            </p>
            <p className="text-balance">
              Con 18 años me quitaron el colon y el recto, con 20 el estomago y
              la vesicula y ahora con 30 me dedido a hacer carreras de ultra
              distancia, como lo que quiero y tengo una vida plena
            </p>
            <p className="text-balance">
              Nunca me han parado y ahora soy mas fuerte{" "}
            </p>
            <p className="text-balance">
              Con 18 años me quitaron el colon y el recto, con 20 el estomago y
              la vesicula y ahora con 30 me dedido a hacer carreras de ultra
              distancia, como lo que quiero y tengo una vida plena
            </p>
          </div>
        </div>
        <MotivationGallery />

        <div>
          <h1 className="pt-10  motivacion text-5xl text-center mb-10">
            HAGAMOS DE ESTO UN MUNDO MEJOR
          </h1>
          <div className="flex flex-col items-center content-center justify-center md:flex-row">
            <div className="relative flex flex-col text-center text-xl font-bold">
              <a href="/formBook">
                <Image
                  src={libro}
                  alt="libro"
                  width={400}
                  height={400}
                  className="border-8 border-white m-2 hover:opacity-50"
                />
                LIBRO
              </a>
            </div>
            <div className="relative flex flex-col text-center text-xl font-bold">
              <a href="/pages/charlas">
                <Image
                  src={charlas}
                  alt="charlas"
                  width={400}
                  height={400}
                  className="border-8 border-white m-2 hover:opacity-50"
                />
                CHARLAS
              </a>
            </div>
            <div className="relative flex flex-col text-center text-xl font-bold">
              <a href="/pages/marcas">
                <Image
                  src={marcas}
                  alt="marcas"
                  width={400}
                  height={400}
                  className="border-8 border-white m-2 hover:opacity-50"
                />
                MARCAS
              </a>
            </div>
          </div>
          <h1 className="motivacion text-5xl md:text-8xl text-center mt-10 mb-10 ">
            NOLOPIENSES
          </h1>
        </div>
        <Contact />
        <a
          className=" rounded-md bg-neutral-900 px-3.5 py-5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 hover:cursor-pointer m-10 "
          href="/"
        >
          VOLVER
        </a>
      </div>
    </div>
  );
}
