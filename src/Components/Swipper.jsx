import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "../data.json"
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const Swipper = () => {
    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {data.team.map((person, index) => (
                    <SwiperSlide
                        key={index}
                        className="basis-full sm:basis-1/2 lg:basis-1/4 px-2 md:px-4"
                    >
                        <div className="bg-[#2C2C2C] text-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] border border-transparent hover:border-blue-600">
                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-full h-56 sm:h-60 md:h-64 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-yellow-400 flex items-center gap-2 text-sm mb-2">
                                    <span role="img" aria-label="gear">⚙️</span> {person.experience} yillik tajriba
                                </p>
                                <h3 className="text-lg sm:text-xl font-bold mb-1">{person.name}</h3>
                                <p className="text-sm text-gray-300 line-clamp-3">{person.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Swipper
