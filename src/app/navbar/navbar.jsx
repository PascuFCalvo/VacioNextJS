import { PlayArrow } from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

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
          className={`flex items-center border-xsolid border-2 border-white fixed m-5 z-50 h-12 w-12 bg-transparent ${
            isNavbarOpen ? "hidden" : "block"
          }`}
        >
          <Image
            src="/../../../assets/tripa.png"
            alt="hamburguesa"
            width={100}
            height={100}
          />
          <PlayArrow className="text-white text-4xl"></PlayArrow>
        </div>
      </button>

      {/* Navbar */}
      <nav
        className={`fixed flex flex-col lg:flex-row lg:text-left lg:justify-evenly py-8 px-6 bg-neutral-800 shadow lg:items-baseline w-full text-white z-50 ${
          isNavbarOpen ? "block" : "hidden"
        } lg:flex`}
      >
        <div
          className={`lg:flex ${
            isNavbarOpen ? "flex" : "hidden"
          } flex-col lg:flex-row`}
        >
          <a
            href="#quienEsJuanDual"
            className="text-xs   mb-2 lg:mb-0 lg:mr-8"
            onClick={closeNavbar}
          >
            ¿Quien es Juan?
          </a>
          <a
            href="/formBook"
            className="text-xs   mb-2 lg:mb-0 lg:mr-8"
            onClick={closeNavbar}
          >
            LIBRO
          </a>
          <a href="#" className="text-xs   mb-2 lg:mb-0 lg:mr-8">
            RETOS
          </a>
          <a
            href="#"
            className="text-xs hover:cursor-pointer  mb-2 lg:mb-0"
            onClick={closeNavbar}
          >
            CHARLAS
          </a>
        </div>

        {/* "JUAN VACIO" - oculto en dispositivos móviles */}
        <div
          className={`mb-2 lg:mb-0 ${isNavbarOpen ? "hidden" : "block"}`}
          onClick={closeNavbar}
        >
          <a href="/" className="text-2xl  ">
            JUAN VACIO
          </a>
        </div>

        <div
          className={`lg:flex ${
            isNavbarOpen ? "flex" : "hidden"
          } flex-col lg:flex-row`}
        >
          <a
            href="#muerte"
            className="text-xs   mb-2 lg:mb-0 lg:mr-8"
            onClick={closeNavbar}
          >
            DOCUMENTAL
          </a>
          <a
            href="#"
            className="text-xs   mb-2 lg:mb-0 lg:mr-8"
            onClick={closeNavbar}
          >
            MOTIVANDO
          </a>
          <a
            href="#"
            className="text-xs   mb-2 lg:mb-0 lg:mr-8"
            onClick={closeNavbar}
          >
            FAMILIA
          </a>
          <a
            href="#contacto"
            className="text-xs   mb-2 lg:mb-0"
            onClick={closeNavbar}
          >
            CONTACTO
          </a>

          {/* Botón para cerrar la hamburguesa - visible solo en móviles */}
          <button
            className={`text-lg  text-red-500 hover:text-red-700 mt-8 lg:hidden`}
            onClick={closeNavbar}
          >
            Cerrar
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
