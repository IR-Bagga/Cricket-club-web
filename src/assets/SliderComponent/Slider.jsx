import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectFade } from 'swiper/modules';
export const Slider = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        modules={[Autoplay ,Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
        spaceBetween={0}
        effect='flip'
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src="/image/shoes.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/shoes-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/shoes-3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/shoes.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
