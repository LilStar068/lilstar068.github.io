import React, { FC, useState } from 'react';
import '../styles/Skills.css'

export const Skills: FC = () => {
    const [SC1, SSC1] = useState(true);
    const [SC2, SSC2] = useState(false);
    const [SC3, SSC3] = useState(false);

    const closeAll = () => {
        SSC2(false);
        SSC3(false);
        SSC1(false);
    }

    const openSC1 = () => {
        if (SC1) {
            closeAll();
        } else {
            SSC2(false);
            SSC3(false);
            SSC1(true);
        }
    }

    const openSC2 = () => {
        if (SC2) {
            closeAll();
        } else {
            SSC2(true);
            SSC3(false);
            SSC1(false);
        }
    }

    const openSC3 = () => {
        if (SC3) {
            closeAll();
        } else {
            SSC2(false);
            SSC3(true);
            SSC1(false);
        }
    }

    return (
        <section className="skills section" id="skills">
            <h1 className="title title_">Skills</h1>
            <span className="subtitle subtitle_">My level of skills in development.</span>

            <div className="container container grid">
                <div>
                    <div className={SC1 ? "content skills-content open" : "content skills-content close"}>
                        <div className="header" onClick={openSC1}>
                            <i className="uil uil-desktop icon"></i>
                            <div>
                                <h1 className="title">Frontend Skills</h1>
                                <span className="skills_subtitle">5+ Years Of Experience</span>
                            </div>

                            <i className="uil uil-angle-down arrow"></i>
                        </div>

                        <div className="list grid">
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">HTML</h3>
                                    <span className="number">90%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_html"></span>
                                </div>
                            </div>
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">CSS</h3>
                                    <span className="number">75%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_css"></span>
                                </div>
                            </div>
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">React.JS</h3>
                                    <span className="number">60%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_rjs"></span>
                                </div>
                            </div>
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">Next.JS</h3>
                                    <span className="number">45%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_njs"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={SC2 ? "content skills-content open" : "content skills-content close"}>
                        <div className="header" onClick={openSC2}>
                            <i className="uil uil-server icon"></i>
                            <div>
                                <h1 className="title">Backend Skills</h1>
                                <span className="skills_subtitle">3+ Years Of Experience</span>
                            </div>

                            <i className="uil uil-angle-down arrow"></i>
                        </div>

                        <div className="list grid">
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">Javascript</h3>
                                    <span className="number">70%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_js"></span>
                                </div>
                            </div>
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">Node.JS</h3>
                                    <span className="number">50%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_nodejs"></span>
                                </div>
                            </div>
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">Typescript</h3>
                                    <span className="number">55%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_ts"></span>
                                </div>
                            </div>
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">Python</h3>
                                    <span className="number">90%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_py"></span>
                                </div>
                            </div>
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">Django</h3>
                                    <span className="number">20%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_django"></span>
                                </div>
                            </div>
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">Firebase</h3>
                                    <span className="number">20%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_fb"></span>
                                </div>
                            </div>
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">PHP</h3>
                                    <span className="number">15%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_php"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={SC3 ? "content skills-content open" : "content skills-content close"}>
                        <div className="header" onClick={openSC3}>
                            <i className="uil uil-brush-alt icon"></i>
                            <div>
                                <h1 className="title">Designing</h1>
                                <span className="skills_subtitle">3+ Years Of Experience</span>
                            </div>

                            <i className="uil uil-angle-down arrow"></i>
                        </div>

                        <div className="list grid">
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">Figma</h3>
                                    <span className="number">80%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_figma"></span>
                                </div>
                            </div>
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">Photoshop</h3>
                                    <span className="number">40%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_ps"></span>
                                </div>
                            </div>
                            <div className="data">
                                <div className="titles">
                                    <h3 className="name">Blender</h3>
                                    <span className="number">10%</span>
                                </div>
                                <div className="bar">
                                    <span className="percentage skills_blender"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
