import React, { FC } from 'react';
import '../styles/Experience.css';

export const Experience: FC = () => {
    return (
        <section className="experience section" id="experience">
            <h1 className="title title_">Experience</h1>
            <span className="subtitle subtitle_">My experience in development</span>

            <div className="container">
                <div className="content">
                    <div className="tabs">
                        <div className="tab">
                            <i className="uil uil-globe icon"></i>
                            <div className="data">
                                <h1 className="title">Web Development</h1>
                                {/* <span className="subtitle"> */}
                                    <i className="uil uil-calendar-alt calender"></i> 2020 - 2022
                                {/* </span> */}
                            </div>
                        </div>
                        
                        <div className="tab">
                            <i className="uil uil-globe icon"></i>
                            <div className="data">
                                <h1 className="title">Web Development</h1>
                                {/* <span className="subtitle"> */}
                                    <i className="uil uil-calendar-alt calender"></i> 2020 - 2022
                                {/* </span> */}
                            </div>
                        </div>
                        
                        <div className="tab">
                            <i className="uil uil-globe icon"></i>
                            <div className="data">
                                <h1 className="title">Web Development</h1>
                                {/* <span className="subtitle"> */}
                                    <i className="uil uil-calendar-alt calender"></i> 2020 - 2022
                                {/* </span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}