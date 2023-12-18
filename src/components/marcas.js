import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import "../components/styles/marcas.css";

import { Pagination, Autoplay } from 'swiper/modules';
import imagen from "../images/logo-voco.png";

function Marcas() {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container className="marcas-cont" align="center" fluid>
      <h2>TRABAJAMOS CON LAS MEJORES MARCAS MUNDIALES</h2>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={imagen} alt="logo voco" /></SwiperSlide>
        <SwiperSlide><img src={imagen} alt="logo voco" /></SwiperSlide>
        <SwiperSlide><img src={imagen} alt="logo voco" /></SwiperSlide>
        <SwiperSlide><img src={imagen} alt="logo voco" /></SwiperSlide>
        <SwiperSlide><img src={imagen} alt="logo voco" /></SwiperSlide>
        <SwiperSlide><img src={imagen} alt="logo voco" /></SwiperSlide>
        <SwiperSlide><img src={imagen} alt="logo voco" /></SwiperSlide>
        <SwiperSlide><img src={imagen} alt="logo voco" /></SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Marcas;