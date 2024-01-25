"use client";

import { useState } from "react";
import librogris from "../../../public/assets/librogris.png";
import Navbar from "../navbar/navbar";
import Image from "next/image";
import NavbarAside from "../navbarAside/navbarAside";
import MiniNavbar from "../navbar/miniNavbar";

export default function Documental() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (name === "" || email === "") {
      setLoading(false);
      alert("Please enter both name & email id");
      return false;
    }

    try {
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data) {
            alert(`Gracias por tu interes ${name}! Enseguida te contesto!`);
            setName("");
            setEmail("");
          } else {
            alert("Lo siento! Intenta otra vez.");
          }
        });
    } catch (error) {
      setLoading(false);
      alert("Ooops! Algo raro a pasado, intenta otra vez.");
    }
    return true;
  };

  return (
    <div>
      <MiniNavbar></MiniNavbar>
      <NavbarAside></NavbarAside>
      <div className="bg-amber-50 w-full flex flex-col justify-center items-center content-center">
        <div className=" mt-10 bg-amber-50 w-full h-[600px] flex flex-col-reverse md:flex-row  justify-center items-center content-center ">
          <div className="  left-0 flex justify-center mb-[-150px] w-5/6 md:w-1/2">
            <Image
              src={librogris}
              alt="libro"
              width={500}
              height={500}
              className="border-8 border-amber-50 z-10 mt-10"
            />
          </div>
          <div className="text-xs md:text-sm  right-0 w-5/6 md:w-1/2 px-2 md:px-20 max-h-[500px] overflow-hidden">
            <h1 className="text-4xl text-center text-teal-500 font-bold mb-10">
              VACIO
            </h1>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue
            </p>
          </div>
        </div>
        <div className="w-screen h-auto  bg-teal-500 flex content-center items-center justify-center md:justify-evenly">
          <div className="relative flex flex-col ustify-center content-center items-center md:flex-row gap-4 ">
            <div className="flex flex-col justify-center content-center items-center  gap-4 w-5/6 md:w-1/2 md:px-20">
              <h1 className={`mt-40 text-3xl text-white`}>
                Rellena el formulario y me pondre en contacto contigo para
                hacertelo llegar :){" "}
              </h1>
              <h1 className="text-white mt-10 text-center md:mb-10">
                O puedes mandarme un mail a{" "}
                <span className="text-neutral-900 font-bold">
                  soy@juanvacio.com{" "}
                </span>{" "}
                y te llegara igual!
              </h1>
            </div>
            <div className=" w-5/6 md:w-1/2 md:px-20 md:mt-10">
              <form
                className="mt-6 flex flex-col w-full  gap-4 z-10"
                onSubmit={handleSubmit}
              >
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  className="rounded-md bg-teal-200 px-3.5 py-2.5 text-neutral-900    text-sm "
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  className="rounded-md bg-teal-200 px-3.5 py-2.5 text-neutral-900   text-sm "
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  id="message"
                  name="message"
                  type="message"
                  autoComplete="message"
                  required
                  value={message}
                  className="rounded-md bg-teal-200 px-3.5 py-2.5 text-neutral-900   text-sm "
                  placeholder="Tu mensaje, dedicatoria, lo que quieras!"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  type="submit"
                  className="mt-10 flex justify-center rounded-md bg-neutral-900 px-3.5 py-5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
                >
                  {loading ? (
                    <div
                      style={{
                        borderTopColor: "transparent",
                      }}
                      className="h-4 border-2 border-white border-solid rounded-full animate-spin"
                    ></div>
                  ) : (
                    "Enviar"
                  )}
                </button>
                <h1 className="text-lg text-start mb-10">
                  <span className="font-bold text-3xl">15,95€</span> + gastos de
                  envio
                </h1>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 w-full h-auto flex flex-col items-center ">
          <h1 className="text-2xl font-semibold m-4">
            PREGUNTAS Y DUDAS FRECUENTES
          </h1>
          <div className=" flex flex-col md:flex-row mt-1">
            <div className="dropdown inline-block relative h-auto  md:mb-0">
              <h1 className="bg-neutral-800 text-white font-semibold py-2 px-4 m-0 inline-flex items-center mr-10 ">
                <span className="mr-1 w-[300px] text-xs ">
                  ¿Como se que he hecho bien la reserva?
                </span>
              </h1>

              <a className="  py-2  block w-[320px]  ">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
              </a>
            </div>
            <div className="dropdown inline-block relative h-auto  md:mb-0">
              <h1 className="bg-neutral-800 text-white font-semibold py-2 px-4 m-0 inline-flex items-center mr-10 ">
                <span className="mr-1 w-[300px] text-xs ">
                  ¿Como se que he hecho bien la reserva?
                </span>
              </h1>

              <a className="  py-2  block w-[320px]  ">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
              </a>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row mt-1">
            <div className="dropdown inline-block relative h-auto  md:mb-0">
              <h1 className="bg-neutral-800 text-white font-semibold py-2 px-4 m-0 inline-flex items-center mr-10 ">
                <span className="mr-1 w-[300px] text-xs ">
                  ¿Como se que he hecho bien la reserva?
                </span>
              </h1>

              <a className="  py-2  block w-[320px]  ">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
              </a>
            </div>
            <div className="dropdown inline-block relative h-auto  md:mb-0">
              <h1 className="bg-neutral-800 text-white font-semibold py-2 px-4 m-0 inline-flex items-center mr-10 ">
                <span className="mr-1 w-[300px] text-xs ">
                  ¿Como se que he hecho bien la reserva?
                </span>
              </h1>

              <a className="  py-2  block w-[320px]  ">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
              </a>
            </div>
          </div>
          <a
            className="mt-2 flex  rounded-md bg-neutral-800 px-3.5 py-5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 hover:cursor-pointer mb-10"
            href="/"
          >
            VOLVER
          </a>
        </div>
      </div>
    </div>
  );
}