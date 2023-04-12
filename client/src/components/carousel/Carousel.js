import SwiperCore, { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import carousel from "./../../img/Carousel_1.png";
import "./style.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel, Keyboard]);

const slides = [
  {
    id: 1,
    img: carousel,
    title: 'The best technologies\nfor the best consumers',
    button: 'View All',
  },
  {
    id: 2,
    img: carousel,
    title: 'The best technologies\nfor the best consumers',
    button: 'View All',
  },
  {
    id: 3,
    img: carousel,
    title: 'The best technologies\nfor the best consumers',
    button: 'View All',
  },
];

function Carousel() {
  return (
    <section className="carousel">
      <Swiper
        className="swiper-container swiper-container-1"
        navigation={{
          nextEl: ".swiper-button-next-1",
          prevEl: ".swiper-button-prev-1",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        mousewheel={true}
        keyboard={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="swiper-slide swiper-slide-1">
              <img src={slide.img} alt="carousel__image" className="carousel__image" />
              <div className="slide__text">
                <h1 className="carousel-title">
                  {slide.title}
                </h1>
                <button className="carousel-button">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev swiper-button-prev-1"></div>
      <div className="swiper-button-next swiper-button-next-1"></div>
    </section>
  );
}

export default Carousel;