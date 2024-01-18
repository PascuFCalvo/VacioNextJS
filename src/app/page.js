import Gallery from "./galeria/Gallery";
import MainPage from "./mainSection/page";
import MainPage2 from "./mainSection2/page";
import MainPage3 from "./mainSection3/page";

export default function Home() {
  return (
    <>
      <header className="bg-neutral-900"></header>
      <main className="bg-neutral-900">
        <MainPage />
        <MainPage2 />
        <MainPage3 />
        <Gallery />
      </main>
    </>
  );
}
