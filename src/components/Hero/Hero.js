import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-text"
          >
            <h3 className="hero-greeting">Hello, I'm</h3>
            <h1 className="hero-name">Meena Davin</h1>
            <div className="hero-title">
              <ReactTyped
                strings={[
                  'Full Stack Developer',
                  'UI/UX Designer',
                  'Problem Solver',
                  'Tech Enthusiast'
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </div>
            <p className="hero-description">
              Passionate about creating innovative digital solutions and bringing ideas to life through code.
              Specialized in modern web technologies and always eager to learn and grow.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/MeenaDavin" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/meena-davin" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/meena_davin" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="mailto:meena.davin@example.com" className="social-icon">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-image"
          >
            <div className="hero-image-wrapper">
              <div className="hero-image-bg"></div>
              <img 
                src="https://via.placeholder.com/400x400/667eea/ffffff?text=MD" 
                alt="Meena Davin" 
                className="profile-image"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="scroll-indicator"
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
