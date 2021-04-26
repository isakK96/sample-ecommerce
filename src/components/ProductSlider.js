import React from "react";
// Import Swiper React components
import SwiperCore, {
  Pagination,
  Navigation,
  A11y,
  Autoplay,
  Lazy,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Pagination, Navigation, A11y, Autoplay, Lazy]);

export function FeaturedProducts() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ disableOnInteraction: false, delay: 5000 }}
      loop={true}
      lazy={true}
      pagination={{ clickable: true }}
      className="w-screen lg:w-6/12 mb-20"
    >
      <SwiperSlide>
        <div className="bg-slider1 bg-no-repeat bg-left lg:bg-right h-96 max-h-96 w-full">
          <div className="h-96">
            <div className="pl-4 pt-10 pr-2 lg:pl-24 lg:pt-24 flex items-start flex-col">
              <h2 className="text-brown text-4xl mb-2 lg:text-4xl">
                Day Cream
              </h2>
              <p className="text-black text-opacity-70 text-lg lg:w-4/12 lg:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                nisi aut vitae.
              </p>
              <button
                className="font-bold border border-brown
                                  p-4 mt-5 uppercase
                                  hover:bg-white transition ease-linear duration-75
                                text-brown focus:outline-none"
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export function MainSlider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ disableOnInteraction: false, delay: 5000 }}
      loop={true}
      lazy={true}
      pagination
      className=""
    >
      <SwiperSlide>
        <div className="h-screen relative bg-heroimage2 bg-cover bg-no-repeat bg-bottom mb-12">
          <div className="h-screen bg-cover bg-black bg-opacity-30">
            <div className="pt-5">
              <h1 className="text-gray-200 font-heading font-bold text-6xl pt-20 pl-2 lg:pl-40 lg:pt-40 lg:text-7xl">
                All <span className="text-green-300">natural</span> and
                <span className="text-blue-200"> cruelty free</span> products.
              </h1>
              <p className="text-white pl-2 pt-2 mr-3 font-semibold lg:pl-40 lg:w-1/3 lg:text-2xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                explicabo illum natus placeat dignissimos quidem aperiam
                repellat vitae quos est blanditiis, magni officia. Porro sint
                accusantium nihil, impedit deserunt provident?
              </p>
              <a href="/#products">
                <button
                  className="ml-4 text-white uppercase border bg-opacity-30 rounded-full border-opacity-40 lg:float-none
                                p-4 mt-8 mr-8 lg:ml-40 lg:mt-20 lg:text-2xl lg:p-6 focus:outline-none
                                hover:bg-black transition ease-linear duration-150 hover:bg-opacity-75"
                >
                  Browse
                </button>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-screen bg-heroimage bg-cover bg-bottom mb-12">
          <div className="h-screen bg-cover bg-black bg-opacity-30">
            <h1 className="text-white font-heading font-bold text-6xl pt-20 pl-2 lg:pl-40 lg:pt-40 lg:text-7xl">
              Header
              <br />
              text
            </h1>
            <p className="text-white pl-2 pt-2 mr-3 font-semibold lg:pl-40 lg:w-1/3 lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              nisi aut vitae, illo at, sunt tempora accusantium eveniet fugit
              repellendus aperiam odio, quis recusandae laboriosam hic
              asperiores neque voluptas delectus?
            </p>
            <button
              className="ml-4 text-white uppercase border bg-opacity-30 rounded-full border-opacity-40 lg:float-none
              p-4 mt-8 mr-8 lg:ml-40 lg:mt-20 lg:text-2xl lg:p-6 focus:outline-none
              hover:bg-black transition ease-linear duration-150 hover:bg-opacity-75"
            >
              Read More
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
