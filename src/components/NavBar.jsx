import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={styles.navBar}>
      <Link to="/" className={styles.logo}>BlogApp</Link>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>
      <button
        className={styles.hamburger}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu} ref={mobileMenuRef}>
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/blog" onClick={toggleMobileMenu}>Blog</Link>
          <Link to="/about" onClick={toggleMobileMenu}>About</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
