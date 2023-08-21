import React, {useState} from 'react'
import "./header.css";

const Header = () => {
    /* Toggle Menu */
    const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
       <nav className="nav container">
        <a href="index.html" className="nav__logo">Shivam</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu" }>
            <ul className="nav__list grid">
                <li className="nav__item">
                    <a href="#home" className="nav__link active-link">
                        <i className="uil uil-estate nav__link"></i> Home
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#about" className="nav__link">
                        <i className="uil uil-user nav__link"></i> About
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#skills" className="nav__link">
                        <i className="uil uil-file-alt nav__link"></i> Skills
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#services" className="nav__link">
                        <i className="uil uil-briefcase-alt nav__link"></i> Services
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                        <i className="uil uil-scenery nav__link"></i> Portfolio
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#contact" className="nav__link">
                        <i className="uil uil-message nav__link"></i> Contact
                    </a>
                </li>
            </ul>

            <i class="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>
        </div>
            <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
            <i class="uil uil-apps"></i>
            </div>
       </nav>

    </header>
  
  )
}

export default Header
