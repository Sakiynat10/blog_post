import { Pagination } from "antd";
import { Fragment } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const HomePopularBlog = () => {
  return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        rewind={true}
        loop={true}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slides-category">
          <div className="card">
            <div className="card-image">
              <img src="/blog-1.png" alt="card-img" />
            </div>
            <div className="card-content">
              <div className="content-highlight">
                <p>
                  By <span className="highlight-subtitle-blue">James West</span>
                </p>
                <span>|</span>
                <p>May 23, 2022</p>
              </div>
              <h2>
                A UX Case Study Creating a Studious Environment for Students:{" "}
              </h2>
              <p className="subtitle">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slides-category">
          <div className="card">
            <div className="card-image">
              <img src="/blog-2.png" alt="card-img" />
            </div>
            <div className="card-content">
              <div className="content-highlight">
                <p>
                  By <span className="highlight-subtitle-blue">James West</span>
                </p>
                <span>|</span>
                <p>May 23, 2022</p>
              </div>
              <h2>
                A UX Case Study Creating a Studious Environment for Students:{" "}
              </h2>
              <p className="subtitle">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slides-category">
          <div className="card">
            <div className="card-image">
              <img src="/blog-3.png" alt="card-img" />
            </div>
            <div className="card-content">
              <div className="content-highlight">
                <p>
                  By <span className="highlight-subtitle-blue">James West</span>
                </p>
                <span>|</span>
                <p>May 23, 2022</p>
              </div>
              <h2>
                A UX Case Study Creating a Studious Environment for Students:{" "}
              </h2>
              <p className="subtitle">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  );
};

export default HomePopularBlog;
