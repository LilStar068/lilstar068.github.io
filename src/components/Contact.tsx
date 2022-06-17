import React, { FC } from 'react';
import '../styles/Contact.css';

export const Contact: FC = () => {
    return (
        <section className="contact section" id="contact">
            <h1 className="title title_">Contact Me</h1>
            <span className="subtitle subtitle_">get in touch with me</span>

            <div className="container container grid">
                <div id="info-container">
                    <div className="info">
                        <i className="uil uil-discord icon"></i>

                        <div>
                            <h3 className="title">Discord</h3>
                            <span className="subtitle">LilStar068#6960</span>
                        </div>
                    </div>

                    <div className="info">
                        <i className="uil uil-envelope-alt icon"></i>

                        <div>
                            <h3 className="title">Email</h3>
                            <span className="subtitle">lilstar068@gmail.com</span>
                        </div>
                    </div>

                    <div className="info">
                        <i className="uil uil-map-marker icon"></i>

                        <div>
                            <h3 className="title">Location</h3>
                            <span className="subtitle">Pune, Maharashtra - India</span>
                        </div>
                    </div>
                </div>

                <form className="form grid">
                    <div className="inputs grid">
                        <div className="content">
                            <label htmlFor="" className="label">Name</label>
                            <input type="text" className="input" placeholder="Enter your name" />
                        </div>
                        <div className="content">
                            <label htmlFor="" className="label">Email</label>
                            <input type="email" className="input" placeholder="Enter your email" />
                        </div>
                    </div>
                    <div className="content">
                        <label htmlFor="" className="label">Message</label>
                        <textarea rows={10} className="input" placeholder="Message"></textarea>
                    </div>

                    <div>
                        <a href="#contact-me" className="button button--flex">
                            Send Message <i className="uil uil-message icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}