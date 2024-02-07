// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import maraton from "../../../public/assets/maraton.jpg";
import sonreir from "../../../public/assets/sonreir.jpg";
import glaciar from "../../../public/assets/glaciar.jpg";

import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function MotivationGallery() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper h-[600px] w-screen "
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <Image
            src={maraton}
            alt="maraton"
            className="min-h-full overflow-hidden object-cover "
          />

          <div
            className="w-full absolute bottom-0 left-0 text-white py-4 px-10 text bg-neutral-800/20"
            data-swiper-parallax="-100"
          >
            <div
              className=" text-center bottom-[176px]  text-2xl font-neutral-900 text-white w-full"
              data-swiper-parallax="-300"
            >
              TERMINAR UN MARATON
            </div>
            <p className="hidden md:block text-balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={sonreir}
            alt="maraton"
            className="min-h-full overflow-hidden object-cover"
          />

          <div
            className="w-full absolute bottom-0 left-0 text-white py-4 px-10 text bg-neutral-800/20"
            data-swiper-parallax="-100"
          >
            <div
              className=" text-center bottom-[176px]  text-2xl font-neutral-900 text-white w-full"
              data-swiper-parallax="-300"
            >
              SONREIR A LA MUERTE
            </div>
            <p className="hidden md:block text-balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={glaciar}
            alt="maraton"
            className="min-h-full overflow-hidden object-cover"
          />

          <div
            className="w-full absolute bottom-0 left-0 text-white py-4 px-10 text bg-neutral-800/20"
            data-swiper-parallax="-100"
          >
            <div
              className=" text-center bottom-[176px]  text-2xl font-neutral-900 text-white w-full"
              data-swiper-parallax="-300"
            >
              UN TRAIL ENTRE GLACIARES? WHY NOT
            </div>
            <p className="hidden md:block text-balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
