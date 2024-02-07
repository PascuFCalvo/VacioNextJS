"use client";

import Image from "next/image";
import juanCharla1 from "../../../../public/assets/juanCharla1.jpeg";
import juanCharla2 from "../../../../public/assets/juanCharla2.jpg";
import libro from "../../../../public/assets/ñibro.png";
import marcas from "../../../../public/assets/sponsors.png";
import "./styles.css";

import MotivationGallery from "@/app/components/motivation-gallery";
import Contact from "../contact/page";
import NavbarAside from "@/app/navbarAside/navbarAside";
import Link from "next/link";

export default function Charlas() {
  return (
    <div>
      <NavbarAside />
      <div className="flex flex-col items-center min-h-[1700px] lg:min-h-[1000px] bg-amber-50 ">
        <div className="max-w-[1400px] flex flex-col-reverse lg:flex-row">
          <div className="relative lg:min-w-[500px] w-full  lg:ml-0 lg:mr-0 lg:w-1/2  bg-teal-500 mt-[50px] lg:mt-[100px] max-h-[300px] text-2xl flex flex-col content-center items-center justify-center text-center p-20 ">
            Me dedico a compartir mi historia en todo tipo de lugares. ¿Te
            gustaria escucharla?
            <Image
              src={juanCharla1}
              alt="charlas"
              width={400}
              height={500}
              className="absolute scale-75 md:scale-100 top-[200px]  lg:ml-40  lg:top-[240px]"
            />
          </div>

          <div className="w-full mt-[100px] min-w-[500px] flex flex-col items-center content-center justify-center lg:w-1/2 ">
            <h1 className="text-2xl lg:text-3xl font-bold mt-10 mb-10">
              HABLEMOS DE LA MUERTE
            </h1>
            <div className="px-20 text-xl mt-10 mb-10">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nunc et aliquet lacinia, ligula nisl tincidunt justo,
                ac luctus nunc nunc id lectus.
              </p>
              <p>
                Nullam euismod, nisi et aliquam tincidunt, nunc nisl tincidunt
                justo, ac luctus nunc nunc id lectus. Sed euismod, nunc et
                aliquet lacinia, ligula nisl tincidunt justo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nunc et aliquet lacinia, ligula nisl tincidunt justo,
                ac luctus nunc nunc id lectus.
              </p>
              <p>
                Nullam euismod, nisi et aliquam tincidunt, nunc nisl tincidunt
                justo, ac luctus nunc nunc id lectus. Sed euismod, nunc et
                aliquet lacinia, ligula nisl tincidunt justo.
              </p>
            </div>
            <Link href="mailto:juan.dual.mateo@gmail.com">
              <button
                className="w-48 bg-neutral-900 text-white p-4 hover:scale-110"
                type="button"
              >
                mandame un mail
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center  min-h-[1000px] w-full bg-neutral-900">
        <h1 className="text-white text-3xl font-bold mt-[100px] mb-[50px] md:mb-[200px]">
          ¿Como lo haremos?
        </h1>
        <h2 className="block md:hidden text-yellow-500 text-2xl font-bold mt-2 mb-2">
          <span className="text-white">01</span>
          <span className="text-lg"> Contacta conmigo</span>
        </h2>
        <h2 className="block md:hidden text-yellow-500 text-2xl font-bold mt-2 mb-2">
          <span className="text-white">01</span>
          <span className="text-lg"> Te contesto</span>
        </h2>
        <h2 className="block md:hidden text-yellow-500 text-2xl font-bold mt-2 mb-2">
          <span className="text-white">03</span>
          <span className="text-lg"> Charlamos </span>
        </h2>
        <div className="flex flex-col md:z-0 md:relative">
          <Image
            src={juanCharla2}
            alt="charlas"
            width={500}
            height={600}
            className="mb-[100px]"
          />
          <div className="hidden lg:block absolute top-[-100px] left-[-200px] w-[300px] h-[240px] bg-yellow-500 z-1 px-4">
            <div className="relative">
              <h1 className="absolute text-5xl text-white/50 m-2 z-0">01</h1>
              <h1 className="text-xl font-bold mb-10 text-center mt-2 ">
                Contacta comingo
              </h1>
            </div>

            <p>
              {" "}
              Nullam euismod, nisi et aliquam tincidunt, nunc nisl tincidunt
              justo, ac luctus nunc nunc id lectus. Sed euismod, nunc et aliquet
              lacinia, ligula nisl tincidunt justo.
            </p>
          </div>

          <div className="hidden lg:block  absolute top-[400px] left-[-200px] w-[300px] h-[200px] bg-yellow-500 z-1 px-4">
            <div className="relative">
              <h1 className="absolute text-5xl text-white/50 m-2 z-0">02</h1>
              <h1 className="text-xl font-bold mb-10 text-center mt-2 ">
                Te contesto
              </h1>
            </div>
            <p>
              {" "}
              Nullam euismod, nisi et aliquam tincidunt, nunc nisl tincidunt
              justo, ac luctus nunc nunc id lectus. Sed euismod, nunc et aliquet
              lacinia, ligula nisl tincidunt justo.
            </p>
          </div>

          <div className="hidden lg:block  absolute top-[400px] left-[400px] w-[300px] h-[240px] bg-yellow-500 z-1 px-4">
            <div className="relative">
              <h1 className="absolute text-5xl text-white/50 m-2 z-0">03</h1>
              <h1 className="text-xl font-bold mb-10 text-center mt-2 ">
                Charlamos
              </h1>
            </div>
            <p>
              {" "}
              Nullam euismod, nisi et aliquam tincidunt, nunc nisl tincidunt
              justo, ac luctus nunc nunc id lectus. Sed euismod, nunc et aliquet
              lacinia, ligula nisl tincidunt justo.
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="mt-[-350px] sm:mt-[-200px] md:mt-[-150px] lg:mt-[-50px]">
        <Contact />
      </div>

      <div className="mt-24">
        <MotivationGallery />
      </div>
      <div>
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
    </div>
  );
}
