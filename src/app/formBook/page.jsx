"use client";

import { useState } from "react";
import juan from "../../../public/assets/juan13.jpg";
import Navbar from "../navbar/navbar";
import Image from "next/image";
import NavbarAside from "../navbarAside/navbarAside";

export default function Home() {
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
      <Navbar></Navbar>
      <NavbarAside></NavbarAside>
      <div className="bg-teal-500 w-full flex flex-col justify-center items-center content-center">
        <main
          className={`flex flex-col items-center md:w-1/2 w-4/5 min-h-screen `}
        >
          <div className="relative flex flex-col gap-4 ">
            <div className="flex flex-col place-items-center gap-4">
              <h1 className={`mt-40 text-center text-3xl text-white`}>
                Rellena el formulario y me pondre en contacto contigo para
                hacertelo llegar :){" "}
              </h1>
              <h1 className="text-white mt-10 text-center">
                O puedes mandarme un mail a{" "}
                <span className="text-black font-bold">soy@juanvacio.com </span>{" "}
                y te llegara igual!
              </h1>
            </div>
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
                className="rounded-md bg-teal-200 px-3.5 py-2.5 text-black    text-sm "
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
                className="rounded-md bg-teal-200 px-3.5 py-2.5 text-black   text-sm "
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
                className="rounded-md bg-teal-200 px-3.5 py-2.5 text-black   text-sm "
                placeholder="Tu mensaje, dedicatoria, lo que quieras!"
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="mt-10 flex justify-center rounded-md bg-black px-3.5 py-5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
              >
                {loading ? (
                  <div
                    style={{
                      borderTopColor: "transparent",
                    }}
                    className="h-4 border-2 border-white border-solid rounded-full animate-spin"
                  ></div>
                ) : (
                  "Submit"
                )}
              </button>
              <h1 className="text-lg text-start mb-10">
                <span className="font-bold text-3xl">15,95€</span> + gastos de
                envio
              </h1>
            </form>
          </div>
          <div>
            <Image
              src={juan}
              alt="Picture of the author"
              width={2000}
              className="mb-10"
            />
          </div>
          <a
            className="mt-2 flex  rounded-md bg-black px-3.5 py-5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 hover:cursor-pointer mb-10"
            href="/"
          >
            VOLVER
          </a>
        </main>
      </div>
    </div>
  );
}
