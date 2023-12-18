import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import "../components/styles/diferencia.css";

import { Autoplay, EffectCube } from 'swiper/modules';

import imagen from "../images/diferencias.png";

function Diferencia() {
  return (
    <Container className="mt-5 mb-5" align="center">
        <h2 className="mb-5">COMO NOS DIFERENCIAMOS</h2>
        <div className="difer-cont">
            <Row className="g-0">
                <Col xl={3} lg={6} xs={12}>
                    <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, EffectCube]}
                        className="mySwiper"
                        >
                        <SwiperSlide>
                        <img src={imagen} alt="diferencias" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="square-slide">
                                <div className="title">76 AÑOS DE EXPERIENCIA</div>
                                <div className="text">
                                    Desde 1947 presentes en el mercado Boliviano, brindando productos de calidad, con certificaciones y registros sanitarios al ámbito profesional de la salud.
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Col>
                <Col xl={3} lg={6} xs={12}>
                    <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, EffectCube]}
                        className="mySwiper"
                        >
                        <SwiperSlide>
                            <div className="square-slide">
                                <div className="title">76 AÑOS DE EXPERIENCIA</div>
                                <div className="text">
                                    Desde 1947 presentes en el mercado Boliviano, brindando productos de calidad, con certificaciones y registros sanitarios al ámbito profesional de la salud.
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={imagen} alt="diferencias" />
                        </SwiperSlide>
                    </Swiper>
                </Col>
                <Col xl={3} lg={6} xs={12}>
                    <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, EffectCube]}
                        className="mySwiper"
                        >
                        <SwiperSlide>
                        <img src={imagen} alt="diferencias" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="square-slide">
                                <div className="title">76 AÑOS DE EXPERIENCIA</div>
                                <div className="text">
                                    Desde 1947 presentes en el mercado Boliviano, brindando productos de calidad, con certificaciones y registros sanitarios al ámbito profesional de la salud.
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Col>
                <Col xl={3} lg={6} xs={12}>
                    <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, EffectCube]}
                        className="mySwiper"
                        >
                        <SwiperSlide>
                            <div className="square-slide">
                                <div className="title">76 AÑOS DE EXPERIENCIA</div>
                                <div className="text">
                                    Desde 1947 presentes en el mercado Boliviano, brindando productos de calidad, con certificaciones y registros sanitarios al ámbito profesional de la salud.
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={imagen} alt="diferencias" />
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>
        </div>
    </Container>
  );
}

export default Diferencia;
