import {
  Instagram,
  LinkedIn,
  MusicNote,
  X,
  YouTube,
} from "@mui/icons-material";

export default function Contact() {
  return (
    <div
      id="contacto"
      className="text-white mt-10 pb-10 w-full text-center bg-neutral-900 "
    >
      <h1 className="pt-10 m-2 font-neutral-900">
        Si quieres contactar conmigo:
      </h1>
      <h1 className="m-2">soy@juanvacio.com</h1>
      <h1 className="m-2">juan.dual.mateo@gmail.com</h1>
      <br></br>
      <Instagram className=" text-xl text-white m-2" />
      @dualcillo<br></br>
      <X className=" text-xl text-white m-2" />
      @dualcillo<br></br>
      <LinkedIn className=" text-xl text-white m-2" />
      Juan Dual Mateo<br></br>
      <MusicNote className=" text-xl text-white m-2" />
      @dualcillo<br></br>
      <YouTube className=" text-xl text-white m-2" />
      @RunnifeJuanDual<br></br>
    </div>
  );
}
