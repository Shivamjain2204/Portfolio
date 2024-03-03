import React from 'react';
import "./services.css"
import { useState } from 'react';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
         <h2 className="section__title">Services</h2>
         <span className="section__subtitle">What I Offer</span>

         <div className="services__container container grid">
            <div className="services__content">
                <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">
                    Frontend <br/> Development
                </h3>
                </div>
              
            <span className="services__button" onClick={ ()=> toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Frontend Development</h3>
                    <p className="services__modal-description">Contributing to the overall success of websites and web applications by ensuring the frontend is well-designed, developed, and responsive.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Web Development</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Web Performance Optimization</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Code Reviews and Collaboration</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Frontend Frameworks and Libraries</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Ensures that the frontend of a product is responsive</p>

                        </li>
                    </ul>
                </div>
            </div>
            </div>

            <div className="services__content">
                <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">
                UI/UX <br/> Development
                </h3>
                </div>
              
            

            <span onClick={ ()=> toggleTab(2)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">UI/UX Development</h3>
                    <p className="services__modal-description"> Development in a specialized area of design and development focused on creating exceptional digital experiences for users. </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Usability Testing</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">User-Centered Design</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Frontend Implementation</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Information Architecture</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Wireframing and Prototyping</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

            <div className="services__content">
                <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">
                Mobile Web <br/> Development
                </h3>
                </div>
              
            

            <span onClick={ ()=> toggleTab(3)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Mobile Web Developmentr</h3>
                    <p className="services__modal-description">Contributing in a field of web development that focuses on creating websites and web applications optimized for mobile devices</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Mobile-Specific Features</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Cross-Browser Compatibility</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Mobile Frameworks and Libraries</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Performance Testing and Optimization</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Mobile SEO (Search Engine Optimization)</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
         </div>
    </section>
  )
}

export default Services
