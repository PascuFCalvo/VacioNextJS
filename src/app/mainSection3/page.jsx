import Image from "next/image";
import yisus from "../../../public/assets/yisus2.jpg";

export default function MainPage3() {
  return (
    <>
      <section className="bg-cover bg-center min-h-96 relative w-screen min-h-500 overflow-hidden">
        <Image
          src={yisus}
          alt="cara"
          layout="fill"
          objectFit="cover"
          id="retos"
        />
        <div className="absolute right-0 inset-0 w-screen flex flex-col items-end justify-center text-white pr-10 mr">
          <h1 className="lg:text-3xl text-center w-2/3 font-bold mr-10">
            Y es que, si alguien como yo, sin tripas, puede disfrutar y
            completar carreras de ultra distancia, ¿de qué no eres capaz tú?
          </h1>
          <h1 className="lg:text-6xl md:text-4xl sm:text-2xl mt-6 font-bold text-center mr-10">
            #NOLOPIENSES
          </h1>
        </div>
      </section>
    </>
  );
}
