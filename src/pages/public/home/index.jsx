import { Fragment, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BsChevronDoubleDown } from "react-icons/bs";

import "swiper/css/pagination";

import "./index.scss";
import request from "../../../service/request";
import HomeCategory from "../../../components/cards/home-category";
import { Link } from "react-router-dom";
import Loading from "../../../components/loading/loading-over";
import getImageURL from "../../../utils/get-image-url";
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [latestData, setLatestData] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      try {
        setLoading(true);
        const {
          data: { data },
        } = await request("category");
        setData(data);

        const {data: res } = await request("post/lastone");
        setLatestData(res);
      } finally {
        setLoading(false);
      }
    };
    getCategory();
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <section 
        id="home"
        style={{
          backgroundImage: `url(${getImageURL(latestData?.photo)})`
        }}
        >
          <div className="home-content container">
            <p className="subtitle">
              Posted on{" "}
              <span className="bold-subtitle">{latestData?.category.name}</span>
            </p>
            <h1>{latestData?.title}</h1>
            <div className="content-highlight">
              <p>
                By{" "}
                <span className="highlight-subtitle">
                  {latestData?.user.first_name} {latestData?.user.last_name}
                </span>
              </p>
              <span>|</span>
              <p>
                May <span>{latestData?.updatedAt.split("-")[1]}</span>,{" "}
                {latestData?.updatedAt.split("-")[0]}
              </p>
            </div>
            <p className="title">{latestData?.description}</p>
            <a href="4">Read More</a>
          </div>
          <a href="#blogs" className="down-arrow">
            <BsChevronDoubleDown className="down-img" color="orange" />
          </a>
          <div className="overlay"></div>
        </section>
      )}
      <section id="blogs">
        <div className="blogs-content container">
          <h3>Popular blogs</h3>
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
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
            className="mySwiper blog-cards"
          >
            <SwiperSlide className="card">
              <div className="card-image">
                <img src="/blog-1.png" alt="card-img" />
              </div>
              <div className="card-content">
                <div className="content-highlight">
                  <p>
                    By{" "}
                    <span className="highlight-subtitle-blue">James West</span>
                  </p>
                  <span>|</span>
                  <p>May 23, 2022</p>
                </div>
                <h2>
                  A UX Case Study Creating a Studious Environment for Students:{" "}
                </h2>
                <p className="subtitle">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-image">
                  <img src="/blog-2.png" alt="card-img" />
                </div>
                <div className="card-content">
                  <div className="content-highlight">
                    <p>
                      By{" "}
                      <span className="highlight-subtitle-blue">
                        James West
                      </span>
                    </p>
                    <span>|</span>
                    <p>May 23, 2022</p>
                  </div>
                  <h2>
                    A UX Case Study Creating a Studious Environment for
                    Students:{" "}
                  </h2>
                  <p className="subtitle">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-image">
                  <img src="/blog-3.png" alt="card-img" />
                </div>
                <div className="card-content">
                  <div className="content-highlight">
                    <p>
                      By{" "}
                      <span className="highlight-subtitle-blue">
                        James West
                      </span>
                    </p>
                    <span>|</span>
                    <p>May 23, 2022</p>
                  </div>
                  <h2>
                    A UX Case Study Creating a Studious Environment for
                    Students:{" "}
                  </h2>
                  <p className="subtitle">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-image">
                  <img src="/blog-1.png" alt="card-img" />
                </div>
                <div className="card-content">
                  <div className="content-highlight">
                    <p>
                      By{" "}
                      <span className="highlight-subtitle-blue">
                        James West
                      </span>
                    </p>
                    <span>|</span>
                    <p>May 23, 2022</p>
                  </div>
                  <h2>
                    A UX Case Study Creating a Studious Environment for
                    Students:{" "}
                  </h2>
                  <p className="subtitle">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-image">
                  <img src="/blog-2.png" alt="card-img" />
                </div>
                <div className="card-content">
                  <div className="content-highlight">
                    <p>
                      By{" "}
                      <span className="highlight-subtitle-blue">
                        James West
                      </span>
                    </p>
                    <span>|</span>
                    <p>May 23, 2022</p>
                  </div>
                  <h2>
                    A UX Case Study Creating a Studious Environment for
                    Students:{" "}
                  </h2>
                  <p className="subtitle">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-image">
                  <img src="/blog-3.png" alt="card-img" />
                </div>
                <div className="card-content">
                  <div className="content-highlight">
                    <p>
                      By{" "}
                      <span className="highlight-subtitle-blue">
                        James West
                      </span>
                    </p>
                    <span>|</span>
                    <p>May 23, 2022</p>
                  </div>
                  <h2>
                    A UX Case Study Creating a Studious Environment for
                    Students:{" "}
                  </h2>
                  <p className="subtitle">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>{" "}
          <span className="line"></span>
        </div>
      </section>
      <section id="category">
        <div className="category-content container">
          <h3>Choose A Category</h3>
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
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
            {data?.map((category, i) => (
              <SwiperSlide key={i} className="slides-category">
                <Link to="category/${_id}">
                  <HomeCategory {...category} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
