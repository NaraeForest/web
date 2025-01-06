"use client";

import Swiper from 'swiper';
import {
  PropsWithChildren,
  useEffect,
  useRef,
} from 'react';
import {
  Pagination,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function SwiperGroup({ children }: PropsWithChildren) {
  const swiperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (swiperRef.current == null) {
      return;
    }
    const swiper = new Swiper(swiperRef.current, {
      modules: [
        Pagination,
      ],
      pagination: {
        el: '.swiper-pagination',
      },
    });
    return () => {
      if (swiperRef.current == null) {
        return;
      }
      swiper.destroy();
    };
  }, []);
  return (
    <div
      className="swiper"
      ref={swiperRef}
    >
      <div
        className="swiper-wrapper"
      >
        {children}
      </div>
      <div
        className="swiper-pagination"
      />
    </div>
  );
}

export function SwiperSlide({ children }: PropsWithChildren) {
  return (
    <div
      className='swiper-slide'
    >
      {children}
    </div>
  );
}
