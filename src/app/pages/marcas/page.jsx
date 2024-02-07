"use client ";

import Image from "next/image";
import "./styles.css";
import marcas from "../../../../public/assets/logo-alargados.png";
import NavbarAside from "@/app/navbarAside/navbarAside";

import Contact from "../contact/page";

export default function Marcas() {
  return (
    <div className="bg-amber-50 h-[1200px] md:h-screen">
      <NavbarAside />
      <div className="bg-amber-50 w-full flex flex-col content-center items-center ">
        <Image
          src={marcas}
          alt="marcas"
          width={400}
          height={600}
          className="mt-[200px]"
        />
      </div>
      <div className="mt-[-40px]">
        <Contact />
      </div>
    </div>
  );
}
