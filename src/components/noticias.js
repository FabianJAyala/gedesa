import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import "../components/styles/noticias.css";

import { Pagination, Autoplay } from 'swiper/modules';
import imagen from "../images/premio-gedesa.jpg";

function Noticias() {
    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 768) {
            setSlidesPerView(2);
        }
        else if (window.innerWidth <= 1200){
            setSlidesPerView(3);
        }
        else {
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
    <Container className="noticias-cont" align="center" fluid>
        <h2 className="mb-5">NOTICIAS Y NOVEDADES</h2>
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
        <SwiperSlide>
            <Card>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                <Card.Title>Excellent customer service</Card.Title>
                <Card.Text>
                    Siella makes customer service our #1 priority and our main goal, customer comes first.
                </Card.Text>
                </Card.Body>
            </Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                <Card.Title>Excellent customer service</Card.Title>
                <Card.Text>
                    Siella makes customer service our #1 priority and our main goal, customer comes first.
                </Card.Text>
                </Card.Body>
            </Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                <Card.Title>Excellent customer service</Card.Title>
                <Card.Text>
                    Siella makes customer service our #1 priority and our main goal, customer comes first.
                </Card.Text>
                </Card.Body>
            </Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                <Card.Title>Excellent customer service</Card.Title>
                <Card.Text>
                    Siella makes customer service our #1 priority and our main goal, customer comes first.
                </Card.Text>
                </Card.Body>
            </Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                <Card.Title>Excellent customer service</Card.Title>
                <Card.Text>
                    Siella makes customer service our #1 priority and our main goal, customer comes first.
                </Card.Text>
                </Card.Body>
            </Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                <Card.Title>Excellent customer service</Card.Title>
                <Card.Text>
                    Siella makes customer service our #1 priority and our main goal, customer comes first.
                </Card.Text>
                </Card.Body>
            </Card>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Noticias;