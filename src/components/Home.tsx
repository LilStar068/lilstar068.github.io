import React, { FC } from 'react';
import '../styles/Home.css'

export const Home: FC = () => {
    return (
        <section className="home section" id="home">
            <div className="container grid">
                <div className="content grid">
                    <div className="socials">
                        <a href="https://github.com/LilStar068" target="_github" className="social">
                            <i className="uil uil-github-alt"></i>
                        </a>

                        <a href="https://twitter.com/LilStar068" target="_twitter" className="social">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                        <a href="https://discord.com/users/696650928907878440" target="_discord" className="social">
                            <i className="uil uil-discord"></i>
                        </a>
                    </div>

                    <div className="image">
                        <svg className="blob" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 187">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547          130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775          97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666          0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346          165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403          129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028          -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                <image className="prefill" x='12' y='18' href="prefill.png" />
                            </g>
                        </svg>
                    </div>

                    <div className="data">
                        <h1 className="title">Hi! I'm Urveer Singh AKA LilStar068</h1>
                        <h3 className="subtitle">Frontend Developer</h3>
                        <p className="description">High experience in frontend, backend, UI/UX design and producing quality work.</p>
                        <a href="#contact" className="button button--flex">
                            Contact <i className="uil uil-envelope-upload icon"></i>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}