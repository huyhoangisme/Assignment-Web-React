import React, { useState } from 'react';
import { Swagger } from 'styles/swiper';
import type { Swiper as SwiperProps } from 'swiper';
import { Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Swiper } from 'swiper/react';

interface CarouselProps {
  children: React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  slidesPerGroup?: number;
  pagination?: any;
  navigation?: boolean;
  isThumb?: boolean;
}
const Carousel = ({ children, slidesPerView, spaceBetween, slidesPerGroup, navigation, isThumb }: CarouselProps) => {
  const [activeThumb, setActiveThumb] = useState<SwiperProps | null>(null);

  return (
    <Swagger>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        slidesPerGroup={slidesPerGroup}
        navigation={navigation || false}
        thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        className="product-images-slider"
      >
        {children}
      </Swiper>
      {isThumb && (
        <Swiper
          onSwiper={setActiveThumb}
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          watchSlidesProgress={true}
          className="product-images-slider-thumb"
        >
          {children}
        </Swiper>
      )}
    </Swagger>
  );
};
export default Carousel;
