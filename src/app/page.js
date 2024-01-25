"use client";

import Gallery from "./galeria/gallery";
import MainPage from "./mainSection/page";
import MainPage2 from "./mainSection2/page";
import MainPage3 from "./mainSection3/page";
import NavbarAside from "./navbarAside/navbarAside";
import Contact from "./pages/contact/page";
import Muerte from "./pages/muerte/page";

export default function Home() {
  return (
    <>
      <header className="bg-neutral-900"></header>
      <main className="bg-neutral-900">
        <MainPage />
        <MainPage2 />
        <MainPage3 />
        <NavbarAside />
        <Gallery />
        <Contact />
        {/* <Muerte /> */}
      </main>
    </>
  );
}
