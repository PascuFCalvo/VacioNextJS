"use client ";

import Image from "next/image";
import "./styles.css";
import marcas from "../../../../public/assets/logo-alargados.png";
import MiniNavbar from "@/app/navbar/miniNavbar";
import NavbarAside from "@/app/navbarAside/navbarAside";

export default function Marcas() {
  return (
    <div className="bg-amber-50 h-[1200px] md:h-screen">
      <MiniNavbar />
      <NavbarAside />
      <div className="w-full flex flex-col content-center items-center ">
        <Image
          src={marcas}
          alt="marcas"
          width={400}
          height={500}
          className="mt-[200px]"
        />
      </div>
    </div>
  );
}
