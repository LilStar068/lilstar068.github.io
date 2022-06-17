import React, { FC, useState } from 'react';
import '../styles/ScrollUp.css'

export const ScrollUp: FC = () => {
    const [scroll, setScroll] = useState(false);
    window.addEventListener('scroll', () => {
        window.scrollY >= 560
            ? setScroll(true)
            : setScroll(false);
    })


    return (
        <a href="#home" className={scroll ? "scroll-up active" : "scroll-up"} id="scroll-up">
            <i className="uil uil-arrow-up scroll__arrow"></i>
        </a>
    )
}