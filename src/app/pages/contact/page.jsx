import {
  Instagram,
  LinkedIn,
  MusicNote,
  X,
  YouTube,
} from "@mui/icons-material";
import Link from "next/link";

export default function Contact() {
  return (
    <div
      id="contacto"
      className="text-white  mt-10 pb-10 w-full text-center bg-neutral-900 "
    >
      <h1 className="pt-10 m-2 font-neutral-900">
        Si quieres contactar conmigo:
      </h1>
      <h1 className="m-2">soy@juanvacio.com</h1>
      <h1 className="m-2">juan.dual.mateo@gmail.com</h1>
      <br></br>
      <Link
        href="https://www.instagram.com/dualcillo/"
        target="blank"
        className="hover:text-white/50"
      >
        <Instagram className=" text-xl text-white m-2" />
        @dualcillo<br></br>
      </Link>
      <Link
        href="https://www.x.com/dualcillo/"
        target="blank"
        className="hover:text-white/50"
      >
        <X className=" text-xl text-white m-2" />
        @dualcillo<br></br>
      </Link>
      <Link
        href="https://www.linkedin.com/in/juan-dual-mateo-b6277695/"
        target="blank"
        className="hover:text-white/50"
      >
        <LinkedIn className=" text-xl text-white m-2" />
        Juan Dual Mateo<br></br>
      </Link>
      <Link
        href="https://www.tiktok.com/@dualcillo/"
        target="blank"
        className="hover:text-white/50"
      >
        <MusicNote className=" text-xl text-white m-2" />
        @dualcillo<br></br>
      </Link>
      <Link
        href="https://www.youtube.com/@RunnifeJuanDual"
        target="blank"
        className="hover:text-white/50"
      >
        <YouTube className=" text-xl text-white m-2" />
        @RunnifeJuanDual<br></br>
      </Link>
    </div>
  );
}
