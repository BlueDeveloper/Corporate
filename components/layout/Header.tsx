'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: '서비스', href: '/business' },
    { name: '회사소개', href: '/about' },
    { name: 'FAQ', href: '/support' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logo}>
              <Image
                src={assetPath('/logo.png')}
                alt="Interior Logo"
                width={40}
                height={40}
                className={styles.logoImage}
              />
              <span className={styles.logoText}>Interior</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.desktopNav}>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Link - Desktop Only */}
          <div className={styles.contactLink}>
            <Link
              href="/contact"
              className="nav-link"
            >
              문의하기
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 토글"
          >
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.rotate45 : ''}`} />
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.opacity0 : ''}`} />
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.rotateNeg45 : ''}`} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
