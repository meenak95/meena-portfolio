import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <div className="nav-logo">
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
              <span className="logo-text">Meena</span>
            </Link>
          </div>

          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeMenu}
              spy={true}
              activeClass="active"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeMenu}
              spy={true}
              activeClass="active"
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeMenu}
              spy={true}
              activeClass="active"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeMenu}
              spy={true}
              activeClass="active"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeMenu}
              spy={true}
              activeClass="active"
            >
              Contact
            </Link>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
