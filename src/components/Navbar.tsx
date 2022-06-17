import React, { FC, useState } from 'react'
import '../styles/Navbar.css'

export const Navbar: FC = () => {
    const [menu, setMenu] = useState(false);
    const [header, setHeader] = useState(false);

    setTimeout(() => {
        const themeButton = document.getElementById('theme-button')
        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')
        const darkTheme = 'dark-theme'
        const iconTheme = 'uil-sun'

        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
        const getCurrentIcon = () => themeButton!.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

        if (selectedTheme) {
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
            themeButton!.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
        }



        const setTheme = () => {
            document.body.classList.toggle(darkTheme)
            themeButton!.classList.toggle(iconTheme)
            localStorage.setItem('selected-theme', getCurrentTheme())
            localStorage.setItem('selected-icon', getCurrentIcon())
        }

        themeButton!.addEventListener('click', setTheme)
    }, 1000)

    window.addEventListener('scroll', () => {
        window.scrollY >= 100
            ? setHeader(true)
            : setHeader(false);
    })

    const toggleMenu = () => setMenu(!menu)
    const closeMenu = () => setMenu(false)

    return (
        <header className={header ? "header_ scroll-header" : "header_"} id="header">
            <nav className="nav container">
                <a href="#home" className="logo">LilStar068</a>
                <div className={menu ? "menu active" : "menu"} id="nav-menu">
                    <ul className="list grid">
                        <li className="item" onClick={closeMenu}>
                            <a href="#home" className="link active-link">
                                <i className="uil uil-estate icon"></i> <span className="text">home</span>
                            </a>
                        </li>
                        <li className="item" onClick={closeMenu}>
                            <a href="#about" className="link">
                                <i className="uil uil-user icon"></i> <span className="text">about</span>
                            </a>
                        </li>
                        <li className="item" onClick={closeMenu}>
                            <a href="#skills" className="link">
                                <i className="uil uil-file-alt icon"></i> <span className="text">skills</span>
                            </a>
                        </li>
                        <li className="item" onClick={closeMenu}>
                            <a href="#experience" className="link">
                                <i className="uil uil-briefcase-alt icon"></i> <span className="text">experience</span>
                            </a>
                        </li>
                        <li className="item" onClick={closeMenu}>
                            <a href="#portfolio" className="link">
                                <i className="uil uil-scenery icon"></i> <span className="text">portfolio</span>
                            </a>
                        </li>
                        <li className="item" onClick={closeMenu}>
                            <a href="#contact" className="link">
                                <i className="uil uil-envelope-upload icon"></i> <span className="text">contact</span>
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times close" onClick={closeMenu}></i>
                </div>
                <div className="buttons">
                    <i className="uil uil-moon change-theme" id="theme-button"></i>
                    <div className="toggle" id="nav-toggle">
                        <i className="uil uil-apps" onClick={toggleMenu}></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}