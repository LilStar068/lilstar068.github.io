import React, { FC } from 'react';
import '../styles/About.css'

export const About: FC = () => {
    return (
        <section className="about section" id="about">
            <h1 className="title title_">About</h1>
            <span className="subtitle subtitle_">A little about me</span>
            <div className="container grid">
                <img src="logo.jpg" alt="" className="img" />

                <div className="data">
                    <p className="description">
                        Hi! I'm Urveer Singh or LilStar068. Im a web developer with extensive knowledge and experience in many fields of web development. I have built many impressive projects and am learning app development.
                    </p>
                    <div className="info">
                        <div>
                            <span className="title">05+</span>
                            <span className="text">Years <br /> experience</span>
                        </div>
                        <div>
                            <span className="title">20+</span>
                            <span className="text">Projects <br /> completed</span>
                        </div>
                        <div>
                            <span className="title">10+</span>
                            <span className="text">Happy <br /> customers</span>
                        </div>
                    </div>
                    <div className="buttons">
                        <a href="# " download="" className="button button--flex">
                            Download CV <i className="uil uil-file-download-alt icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}