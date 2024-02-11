import React from 'react';
import "./portfolio.css"
import { useState } from 'react';

const Portfolio = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="portfolio">
         <h2 className="section__title">Portfolio</h2>
         <span className="section__subtitle">Most Recent Work</span>

         <div className="services__container container grid">
            <div className="services__content">
                <div>
                {/* <i className="uil uil-web-grid services__icon"></i> */}
                <i class="uil uil-browser services__icon"></i>
                <h3 className="services__title">
                    Frontend <br/> Projects
                </h3>
                </div>
              
            <span className="services__button" onClick={ ()=> toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Frontend Projects</h3>
            
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Currency Convertor</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Blog App</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Snake Game</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Mini Context</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Music Player</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Calculator</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Gym Website</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Flipkart Clone</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Tribute Page</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

            <div className="services__content">
                <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">
                UI/UX <br/> Design
                </h3>
                </div>
              
            

            <span onClick={ ()=> toggleTab(2)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">UI/UX Design</h3>
    
                    <ul className="services__modal-services grid">

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Form Builder Redesign</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">E-Commerce Website Design</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Mobile App for Fitness Tracking</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Gym Website Design</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Flipkart Clone</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Music App Design</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

            <div className="services__content">
                <div>
                {/* <i className="uil uil-edit services__icon"></i> */}
                <i class="uil uil-react services__icon"></i>
                <h3 className="services__title">
                MERN Stack <br/> Projects
                </h3>
                </div>
              
            

            <span onClick={ ()=> toggleTab(3)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">MERN Stack Projects</h3>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Blog App</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Message Board</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Todo List</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Notepad</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Password Generator</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Theme Switcher</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Text Editor</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Portfolio</p>
                        </li>

                        {/* <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Mobile SEO (Search Engine Optimization)</p>
                        </li> */}
                    </ul>
                </div>
            </div>
            </div>
         </div>
    </section>
  )
}

export default Portfolio;