import React, { FC } from 'react'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Exprience'
import { Footer } from '../components/Footer'
import { Home } from '../components/Home'
import { Navbar } from '../components/Navbar'
import { Portfolio } from '../components/Portfolio'
import { ScrollUp } from '../components/ScrollUp'
import { Skills } from '../components/Skills'

export const Landing: FC = () => {
    setTimeout(() => {
        const sections = document.querySelectorAll('section[id]')

        function scrollActive() {
            const scrollY = window.pageYOffset

            sections.forEach((current: any) => {
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50;

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('#nav-menu a[href*=' + current.id + ']')!.classList.add('active-link')
                } else {
                    document.querySelector('#nav-menu a[href*=' + current.id + ']')!.classList.remove('active-link')
                }
            })
        }

        window.addEventListener('scroll', scrollActive)
    }, 1000)
    return (
        <div className="page">
            <Navbar />
            <main className="main">
                <Home />
                <About />
                <Skills />
                <Experience />
                <Portfolio />
                <Contact />
                <ScrollUp />
            </main>
            <Footer />
        </div>
    )
}