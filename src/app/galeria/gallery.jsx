/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

export default function Gallery() {
  // Array de objetos con la información de cada imagen
  const images = [
    { src: "../../../assets/juan1.jpg", alt: "Juan 1" },
    { src: "../../../assets/juan2.jpg", alt: "Juan 2" },
    { src: "../../../assets/juan3.jpg", alt: "Juan 3" },
    { src: "../../../assets/juan4.jpg", alt: "Juan 4" },
    { src: "../../../assets/juan5.jpg", alt: "Juan 5" },
    { src: "../../../assets/juan6.jpg", alt: "Juan 6" },
    { src: "../../../assets/juan7.jpg", alt: "Juan 7" },
    { src: "../../../assets/juan8.jpg", alt: "Juan 8" },
    { src: "../../../assets/juan9.jpg", alt: "Juan 9" },
    { src: "../../../assets/juan10.jpg", alt: "Juan 10" },
    { src: "../../../assets/juan11.jpg", alt: "Juan 11" },
    { src: "../../../assets/juan12.jpg", alt: "Juan 12" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="rounded-lg object-cover w-full h-full "
            src={image.src}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
}
