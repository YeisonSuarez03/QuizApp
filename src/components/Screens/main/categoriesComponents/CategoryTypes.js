import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import '../../../../assets/swipercss/swiper-bundle.css';
import SwiperCore, { Navigation} from 'swiper';

import { CategoryCard } from './CategoryCard';
SwiperCore.use([Navigation]);

export const CategoryTypes = ({title, categoryArray}) => {
    return (
        <div className="categories__card my-3">
                <div className="categories__category-type">
                    <h3 className="px-3">{title}</h3>
                    <hr />
                </div>
                <Swiper
                     observer={true}
                     observeParents={true}
                    navigation
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        1100: {
                            slidesPerView: 3,
                            spaceBetween: 0
                        },
                        1500: {
                            slidesPerView: 4,
                            spaceBetween: 0
                        },
                        2000: {
                            slidesPerView: 5,
                            spaceBetween: 0
                        }
                    }}
                >

                
           {
               categoryArray.map(category => (
                   <SwiperSlide>
                        <CategoryCard key={category.categoryId} {...category} />
                   </SwiperSlide>
               ))
           }

                </Swiper>
            </div>
    )
}
