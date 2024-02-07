"use client";

import { ArrowBack, PlayArrow } from "@mui/icons-material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import tripa from "../../../public/assets/tripa.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();
  const [mainPage, setMainPage] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setMainPage(true);
    } else {
      setMainPage(false);
    }
  }, [pathname]);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <div>
      <button
        className="block lg:hidden"
        onClick={() => setNavbarOpen(!isNavbarOpen)}
      >
        <div
          className={`flex items-center border-xsolid border-2 border-white fixed m-5 z-50 h-12 w-12  bg-neutral-500/30 ${
            isNavbarOpen ? "hidden" : "block"
          }`}
        >
          <Image src={tripa} alt="hamburguesa" width={100} height={100} />
          <PlayArrow className="text-white text-4xl"></PlayArrow>
        </div>
      </button>

      <nav
        className={`fixed flex flex-col lg:flex-row lg:text-left lg:justify-evenly py-4 px-6 bg-neutral-800/70 w-full sm:w-full shadow lg:items-baseline  text-white  z-50 ${
          isNavbarOpen ? "block" : "hidden"
        } lg:flex`}
      >
        <div
          className={`lg:flex ${
            isNavbarOpen ? "flex" : "hidden"
          } flex-col items-center lg:flex-row`}
        >
          <a
            href={mainPage ? "#juan" : "/pages/about"}
            className="text-s   mb-5 lg:mb-1 lg:mr-8 hover:text-teal-500"
            onClick={closeNavbar}
          >
            ¿Quien es Juan?
          </a>
          <a
            href={mainPage ? "#libro" : "/pages/formBook"}
            className="text-xs   mb-5 lg:mb-0 lg:mr-8 hover:text-teal-500"
            onClick={closeNavbar}
          >
            LIBRO
          </a>
          <a
            href="#retos"
            className="text-xs   mb-5 lg:mb-0 lg:mr-8 hover:text-teal-500"
          >
            RETOS
          </a>
          <a
            href={mainPage ? "#charlas" : "/pages/charlas"}
            className="text-xs hover:cursor-pointer  mb-5 lg:mb-0 hover:text-teal-500"
            onClick={closeNavbar}
          >
            CHARLAS
          </a>
        </div>

        <div
          className={`mb-5 lg:mb-0 ${isNavbarOpen ? "hidden" : "block"}`}
          onClick={closeNavbar}
        >
          <a href="/" className="text-2xl hover:text-teal-500 ">
            JUAN VACIO
          </a>
        </div>

        <div
          className={`lg:flex ${
            isNavbarOpen ? "flex" : "hidden"
          } flex-col items-center lg:flex-row`}
        >
          <a
            href={mainPage ? "/pages/documental" : "/pages/documental"}
            className="text-xs   mb-5 lg:mb-0 lg:mr-8 hover:text-teal-500"
            onClick={closeNavbar}
          >
            DOCUMENTAL
          </a>

          <a
            href="#"
            className="text-xs   mb-5 lg:mb-0 lg:mr-8 hover:text-teal-500"
            onClick={closeNavbar}
          >
            FAMILIA
          </a>
          <a
            href="#contacto"
            className="text-xs   mb-5 lg:mb-0 hover:text-teal-500"
            onClick={closeNavbar}
          >
            CONTACTO
          </a>

          {/* Botón para cerrar la hamburguesa - visible solo en móviles */}
          <button
            className={`text-2xl  text-red-500 hover:text-red-700 mt-8 lg:hidden`}
            onClick={closeNavbar}
          >
            <ArrowBack />
          </button>
        </div>
      </nav>
    </div>
  );
}
