import Image from "next/image";

export default function MainPage3() {
  return (
    <>
      <div className="relative w-screen max-h-96 overflow-hidden">
        <Image
          src="/../../../assets/yisus2.jpg"
          alt="cara"
          width={2000}
          height={500}
          className="object-cover w-full h-full"
        />
        <div className="absolute right-0 inset-0 w-screen flex flex-col items-end justify-center text-white pr-10">
          <h1 className="text-3xl text-center w-2/3 font-bold">
            Y es que, si alguien como yo, sin tripas, puede disfrutar y
            completar carreras de ultra distancia, ¿de qué no eres capaz tú?
          </h1>
          <h1 className="text-6xl mt-6 font-bold text-center">#NOLOPIENSES</h1>
        </div>
      </div>
    </>
  );
}
