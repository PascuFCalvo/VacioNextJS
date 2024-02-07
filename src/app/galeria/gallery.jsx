import Image from "next/image";

import juan1 from "../../../assets/juan1.jpg";
import juan2 from "../../../assets/juan2.jpg";
import juan3 from "../../../assets/juan3.jpg";
import juan4 from "../../../assets/juan4.jpg";
import juan5 from "../../../assets/juan5.jpg";
import juan6 from "../../../assets/juan6.jpg";
import juan7 from "../../../assets/juan7.jpg";
import juan8 from "../../../assets/juan8.jpg";
import juan9 from "../../../assets/juan9.jpg";
import juan10 from "../../../assets/juan10.jpg";
import juan11 from "../../../assets/juan11.jpg";
import juan12 from "../../../assets/juan12.jpg";

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mx-4">
      <div className="grid gap-4">
        <div>
          <Image
            className="rounded-lg object-cover w-full h-full"
            src={juan1}
            alt="juan 1"
          />
        </div>
        <div>
          <Image
            className="rounded-lg object-cover w-full h-full"
            src={juan2}
            alt="juan 2"
          />
        </div>
        <div>
          <Image
            className="rounded-lg object-cover w-full h-full"
            src={juan3}
            alt="juan 3"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="rounded-lg object-cover w-full h-full"
            src={juan4}
            alt="juan 4"
          />
        </div>
        <div>
          <Image
            className="rounded-lg object-cover w-full h-full"
            src={juan5}
            alt="juan 5"
          />
        </div>
        <div>
          <Image
            className="rounded-lg object-cover w-full h-full"
            src={juan6}
            alt="juan 6"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="rounded-lg object-cover w-full h-full"
            src={juan7}
            alt="juan 7"
          />
        </div>
        <div>
          <Image
            className="rounded-lg object-cover w-full h-full"
            src={juan8}
            alt="juan 8"
          />
        </div>
        <div>
          <Image
            className="rounded-lg object-cover w-full h-full"
            src={juan9}
            alt="juan 9"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="rounded-lg object-cover w-full h-full"
            src={juan10}
            alt="juan 10"
          />
        </div>
        <div>
          <Image
            className="rounded-lg object-cover w-full h-full"
            src={juan11}
            alt="juan 11"
          />
        </div>
        <div>
          <Image
            className="rounded-lg object-cover w-full h-full"
            src={juan12}
            alt="juan 12"
          />
        </div>
      </div>
    </div>
  );
}
