import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Shivam</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#skills" className="footer__link">Skills</a>
            </li>

            <li>
                <a href="#portfolio" className="footer__link">Portfolio</a>
            </li>
        </ul>

        <div className="footer__social">

        <a href="https://www.linkedin.com/in/shivam-jain2204/" className="footer__social-link" targrt="_blank">
        <i class="bx bxl-linkedin"></i>
        </a>

        <a href="https://www.instagram.com/shivamchhajed/" className="footer__social-link" targrt="_blank">
        <i class="bx bxl-instagram"></i>
        </a>

        <a href="https://twitter.com/Shivamjain013" className="footer__social-link" targrt="_blank">
        <i class="bx bxl-twitter"></i>
        </a>

        </div>

        <span className="footer__copy">&#169; Shivamjain. All rights reserved</span>


    </div>
   </footer>
  )
}

export default Footer
