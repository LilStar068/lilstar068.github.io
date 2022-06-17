import React, { FC } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/Portfolio.css'

export const Portfolio: FC = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h1 className="title title_">Portfolio</h1>
            <span className="subtitle subtitle_">My projects</span>
            <Swiper
                className="container swiper"
                modules={[Navigation, Pagination]}
                cssMode={true}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
            >
                <div className="swiper-wrapper">
                    <SwiperSlide className="content grid swiper-slide">
                        <img src="logo.jpg" alt="Portfolio" className="img" />

                        <div className="data">
                            <h3 className="title">Modern Website</h3>
                            <p className="description">Website Adaptable to all devices from small - big.</p>
                            <a href="/projects/modern-website" className="button button--flex button--small">
                                Know More <i className="uil uil-arrow-right icon"></i>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="content grid swiper-slide">
                        <img src="prefill.png" alt="Portfolio" className="img" />

                        <div className="data">
                            <h3 className="title">Modern Website</h3>
                            <p className="description">Website Adaptable to all devices from small - big.</p>
                            <a href="/projects/modern-website" className="button button--flex button--small">
                                Know More <i className="uil uil-arrow-right icon"></i>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="content grid swiper-slide">
                        <img src="logo.jpg" alt="Portfolio" className="img" />

                        <div className="data">
                            <h3 className="title">Modern Website</h3>
                            <p className="description">Website Adaptable to all devices from small - big.</p>
                            <a href="/projects/modern-website" className="button button--flex button--small">
                                Know More <i className="uil uil-arrow-right icon"></i>
                            </a>
                        </div>
                    </SwiperSlide>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
        </section>
    )
}