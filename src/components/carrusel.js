import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles/carrusel.css';
import imagen from "../images/imagencarrusel.jpg";

export default function Carrusel() {
  return (
    <div className="carrusel">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        initialSlide="3"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imagen} alt="imagen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagen} alt="imagen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagen} alt="imagen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagen} alt="imagen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagen} alt="imagen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagen} alt="imagen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagen} alt="imagen" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
