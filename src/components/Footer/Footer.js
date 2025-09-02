import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Meena Davin</h3>
            <p>Full Stack Developer & UI/UX Designer</p>
            <p>Building digital experiences that make a difference.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Apps</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Consulting</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/MeenaDavin" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/meena-davin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/meena_davin" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="mailto:meena.davin@example.com">
                <FaEnvelope />
              </a>
            </div>
            <p className="footer-email">meena.davin@example.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Meena Davin. All rights reserved.
          </p>
          <p>
            Made with <FaHeart className="heart-icon" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
