import {
  Instagram,
  LinkedIn,
  MusicNote,
  X,
  YouTube,
} from "@mui/icons-material";
import Link from "next/link";

import "./transition.css";

export default function NavbarAside() {
  return (
    <div className="fixed top-0 h-screen right-0 bg-neutral-100/20 flex flex-col items-center justify-center pb-5 pt-5 z-50">
      <Link href="https://www.instagram.com/dualcillo/" target="_blank">
        <Instagram className="social-icon text-3xl text-neutral-900 m-2 hover:text-5xl hover: " />
      </Link>
      <Link href="https://twitter.com/dualcillo" target="_blank">
        <X className="social-icon text-3xl text-neutral-900 m-2 hover:text-5xl" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/juan-dual-mateo-b6277695/"
        target="_blank"
      >
        <LinkedIn className="social-icon text-3xl text-neutral-900 m-2 hover:text-5xl" />
      </Link>
      <Link href="https://www.tiktok.com/@dualcillo?lang=es" target="_blank">
        <MusicNote className="social-icon text-3xl text-neutral-900 m-2 hover:text-5xl" />
      </Link>
      <Link href="https://www.youtube.com/@RunnifeJuanDual" target="_blank">
        <YouTube className="social-icon text-3xl text-neutral-900 m-2 hover:text-5xl" />
      </Link>
    </div>
  );
}
