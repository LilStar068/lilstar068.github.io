import React, { FC } from 'react'
import '../styles/Footer.css'

export const Footer: FC = () => (
    <footer className="footer">
        <div className="bg">
            <div className="container grid">
                <div>
                    <div className="title">LilStar068</div>
                    <span className="subtitle">High experience in frontend, backend, UI/UX design and producing quality work.</span>
                </div>
                <ul className="links">
                    <li>
                        <a href="#services" className="link">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="link">Contact</a>
                    </li>
                </ul>

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
            </div>

            <p className="copy">© LilStar068. All Rights Reserved</p>
        </div>
    </footer>
)