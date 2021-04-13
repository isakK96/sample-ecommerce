import React from "react";
// Import Swiper React components
import SwiperCore, { Pagination, A11y, Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Pagination, A11y, Autoplay, Lazy]);

export default () => {
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
      className="w-screen lg:w-6/12"
    >
      <SwiperSlide>
        <div className="bg-slider1 bg-no-repeat bg-left lg:bg-right h-96 max-h-96 w-full">
          <div className="bg-black h-96 bg-opacity-60">
            <div className="pl-4 pt-10 pr-2 lg:pl-24 lg:pt-24 flex items-start flex-col">
              <h2 className="text-white text-3xl mb-2 lg:text-4xl">
                Day Cream
              </h2>
              <p className="text-white text-lg lg:w-4/12 lg:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                nisi aut vitae.
              </p>
              <button
                className="font-bold border
                                  p-4 mt-5 uppercase
                                  transition ease-linear duration-75
                                text-white focus:outline-none"
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
