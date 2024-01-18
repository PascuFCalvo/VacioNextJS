import { PlayArrow } from "@mui/icons-material";
import React, { useState } from "react";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <div>
      {/* Botón hamburguesa para dispositivos móviles */}
      <button
        className="block lg:hidden"
        onClick={() => setNavbarOpen(!isNavbarOpen)}
      >
        <div
          className={`flex items-center border-solid border-2 border-white fixed m-5 z-50 h-12 w-12 bg-transparent ${
            isNavbarOpen ? "hidden" : "block"
          }`}
        >
          <img src="/../../../assets/tripa.jpeg" alt="hamburguesa" />
          <PlayArrow className="text-white text-4xl"></PlayArrow>
        </div>
      </button>

      {/* Navbar */}
      <nav
        className={`fixed flex flex-col lg:flex-row lg:text-left lg:justify-evenly py-4 px-6 bg-neutral-800 shadow lg:items-baseline w-full text-white z-50 ${
          isNavbarOpen ? "block" : "hidden"
        } lg:flex`}
      >
        <div
          className={`lg:flex ${
            isNavbarOpen ? "flex" : "hidden"
          } flex-col lg:flex-row`}
        >
          <a href="#" className="text-lg   mb-2 lg:mb-0 lg:mr-4">
            ¿Quien es Juan?
          </a>
          <a href="#" className="text-lg   mb-2 lg:mb-0 lg:mr-4">
            LIBRO
          </a>
          <a href="#" className="text-lg   mb-2 lg:mb-0 lg:mr-4">
            RETOS
          </a>
          <a href="#" className="text-lg   mb-2 lg:mb-0">
            CHARLAS
          </a>
        </div>

        {/* "JUAN VACIO" - oculto en dispositivos móviles */}
        <div className={`mb-2 lg:mb-0 ${isNavbarOpen ? "hidden" : "block"}`}>
          <a href="#" className="text-4xl  ">
            JUAN VACIO
          </a>
        </div>

        <div
          className={`lg:flex ${
            isNavbarOpen ? "flex" : "hidden"
          } flex-col lg:flex-row`}
        >
          <a href="#" className="text-lg   mb-2 lg:mb-0 lg:mr-4">
            DOCUMENTAL
          </a>
          <a href="#" className="text-lg   mb-2 lg:mb-0 lg:mr-4">
            MOTIVANDO
          </a>
          <a href="#" className="text-lg   mb-2 lg:mb-0 lg:mr-4">
            FAMILIA
          </a>
          <a href="#" className="text-lg   mb-2 lg:mb-0">
            CONTACTO
          </a>

          {/* Botón para cerrar la hamburguesa - visible solo en móviles */}
          <button
            className={`text-lg  text-red-500 hover:text-red-700 mt-4 lg:hidden`}
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
