import React from 'react';
import Item from '../item/Item';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

export default function ItemCarousel({list}) {
  return (
     <>
        <div className='ml-32 mt-4'>
            <span className='ml-8 mt-4 my-4 text-2xl text-white font-bold uppercase'>{list.title}</span>
            <div className='mt-4 mb-8'>
                <Swiper slidesPerView={5} spaceBetween={100} slidesPerGroup={2} loop={true} loopFillGroupWithBlank={true} navigation={true} className="px-4">
                    {
                        list.content.map((item) => (
                            <SwiperSlide><Item item={item}/></SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    </>
    );
}
