"use client";

import { Children, isValidElement } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const TabsCarousel = ({ children, ...props }: SwiperProps) => {
  const childrenAsSlides = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return <SwiperSlide className="w-auto">{child}</SwiperSlide>;
    }
    return null;
  });

  return (
    <Swiper className="w-full" {...props}>
      {childrenAsSlides}
    </Swiper>
  );
};

export { TabsCarousel };
