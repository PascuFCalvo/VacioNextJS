import React, { useRef, useState } from "react";
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

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
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
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className="relative">
          <Image src={maraton} alt="maraton" height={600} width={1000} />
          <div
            className="absolute text-center bottom-[176px] p-2 text-2xl font-black text-white w-full bg-neutral-800/20"
            data-swiper-parallax="-300"
          >
            TERMINAR UN MARATON 
          </div>

          <div
            className="absolute bottom-0 left-0 text-white p-10 text bg-neutral-800/20"
            data-swiper-parallax="-100"
          >
            <p>
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
          <div className="title" data-swiper-parallax="-300">
            <Image src={sonreir} alt="maraton" />
            Slide 2
          </div>
          <div
            className="absolute text-center bottom-[176px] p-2 text-2xl font-black text-white w-full bg-neutral-800/20"
            data-swiper-parallax="-300"
          >
            PODER SONREIR A LA MUERTE Y SEGUIR
          </div>

          <div
            className="absolute bottom-0 left-0 text-white p-10 text bg-neutral-800/20"
            data-swiper-parallax="-100"
          >
            <p>
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
          <div className="title" data-swiper-parallax="-300">
            <Image src={glaciar} alt="maraton" />
            Slide 3
          </div>
          <div
            className="absolute text-center bottom-[176px] p-2 text-2xl font-black text-white w-full bg-neutral-800/20"
            data-swiper-parallax="-300"
          >
            ¿UN ULTRATRAIL POR GLACIARES? POR QUE NO
          </div>

          <div
            className="absolute bottom-0 left-0 text-white p-10 text bg-neutral-800/20"
            data-swiper-parallax="-100"
          >
            <p>
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
