"use client";

import Navbar from "@/app/navbar/navbar";
import NavbarAside from "@/app/navbarAside/navbarAside";
import Image from "next/image";
import juancocina from "../../../../public/assets/sociales.jpg";
import contar from "../../../../public/assets/historia.png";
import cortada from "../../../../public/assets/juan-cortada.png";

export default function About() {
  return (
    <div className="w-screen  flex-col bg-amber-50 ">
      <Navbar />
      <NavbarAside />
      <div className="w-screen flex flex-col">
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
          <div className="flex flex-col w-3/4 md:w-1/3 justify-evenly">
            <h1 className="text-teal-500 text-2xl font-bold">
              {" "}
              VER 3 VECES MI MUERTE ME HA HECHO QUE VIVA AL MAXIMO
            </h1>
            <p>
              Con 18 años me quitaron el colon y el recto, con 20 el estomago y
              la vesicula y ahora con 30 me dedido a hacer carreras de ultra
              distancia, como lo que quiero y tengo una vida plena
            </p>
            <p>Nunca me han parado y ahora soy mas fuerte </p>
          </div>
        </div>
        <div className="w-screen flex flex-col-reverse items-center content-center md:flex-row">
          <div className="relative  mt-40 bg-teal-400 w-5/6 h-[900px] flex justify-evenly md:w-1/2 md:ml-10 md:mt-20">
            <div className="absolute bottom-[500px] border-8 border-white">
              <Image src={cortada} alt="cortada" width={400} height={400} />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/3 md:px-10">
            <h1 className="text-teal-500 text-2xl font-bold mt-10  ">
              {" "}
              VER 3 VECES MI MUERTE ME HA HECHO QUE VIVA AL MAXIMO
            </h1>
            <p>
              Con 18 años me quitaron el colon y el recto, con 20 el estomago y
              la vesicula y ahora con 30 me dedido a hacer carreras de ultra
              distancia, como lo que quiero y tengo una vida plena
            </p>
            <p>Nunca me han parado y ahora soy mas fuerte </p>
            <p>
              Con 18 años me quitaron el colon y el recto, con 20 el estomago y
              la vesicula y ahora con 30 me dedido a hacer carreras de ultra
              distancia, como lo que quiero y tengo una vida plena
            </p>
            <p>Nunca me han parado y ahora soy mas fuerte </p>
            <p>
              Con 18 años me quitaron el colon y el recto, con 20 el estomago y
              la vesicula y ahora con 30 me dedido a hacer carreras de ultra
              distancia, como lo que quiero y tengo una vida plena
            </p>
            <p>Nunca me han parado y ahora soy mas fuerte </p>
            <p>
              Con 18 años me quitaron el colon y el recto, con 20 el estomago y
              la vesicula y ahora con 30 me dedido a hacer carreras de ultra
              distancia, como lo que quiero y tengo una vida plena
            </p>
            <p>Nunca me han parado y ahora soy mas fuerte </p>
            <p>
              Con 18 años me quitaron el colon y el recto, con 20 el estomago y
              la vesicula y ahora con 30 me dedido a hacer carreras de ultra
              distancia, como lo que quiero y tengo una vida plena
            </p>
            <p>Nunca me han parado y ahora soy mas fuerte </p>
            <p>
              Con 18 años me quitaron el colon y el recto, con 20 el estomago y
              la vesicula y ahora con 30 me dedido a hacer carreras de ultra
              distancia, como lo que quiero y tengo una vida plena
            </p>
            <p>Nunca me han parado y ahora soy mas fuerte </p>
          </div>
        </div>
      </div>
    </div>
  );
}
