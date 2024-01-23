import {
  Instagram,
  LinkedIn,
  MusicNote,
  X,
  YouTube,
} from "@mui/icons-material";

export default function Contact() {
  return (
    <div id="contacto" className="text-white mt-10 pb-10 w-full text-center  ">
      <h1 className="m-2 font-black">Si quieres contactar conmigo:</h1>
      <h1 className="m-2">soy@juanvacio.com</h1>
      <h1 className="m-2">juan.dual.mateo@gmail.com</h1>
      <br></br>
      <Instagram className=" text-3xl text-white m-2" />
      @dualcillo<br></br>
      <X className=" text-3xl text-white m-2" />
      @dualcillo<br></br>
      <LinkedIn className=" text-3xl text-white m-2" />
      Juan Dual Mateo<br></br>
      <MusicNote className=" text-3xl text-white m-2" />
      @dualcillo<br></br>
      <YouTube className=" text-3xl text-white m-2" />
      @RunnifeJuanDual<br></br>
    </div>
  );
}
