"use client";
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
} from 'swiper/modules';
import {
  PropsWithChildren,
  useEffect,
} from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type SwiperListProps = {
  className?: string,
};
export function SwiperList({ className, children }: PropsWithChildren<SwiperListProps>) {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination',
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);
  return (
    <div
      className={`swiper ${className}`}
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

type SwiperItemProps = {

};
export function SwiperItem({ children }: PropsWithChildren<SwiperItemProps>) {
  return (
    <div
      className="swiper-slide"
    >
      {children}
    </div>
  );
}
