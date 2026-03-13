import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import styles from './Footer.module.css';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: '회사소개', href: '/about' },
      { name: '서비스', href: '/business' },
    ],
    info: [
      { name: 'FAQ', href: '/support' },
      { name: '문의하기', href: '/contact' },
    ],
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <div className={styles.companyTitle}>
              <Image
                src={assetPath('/logo.png')}
                alt="Interior Logo"
                width={36}
                height={36}
                className={styles.logoImage}
              />
              <h3>Interior</h3>
            </div>
            <p>공간의 가치를 높이는 전문 인테리어 디자인</p>
            <p>버추얼 스테이징부터 실제 인테리어까지, 10년 이상의 경험으로 최상의 결과를 제공합니다.</p>
          </div>

          {/* Quick Links */}
          <div className={styles.quickLinks}>
            <h4>빠른 링크</h4>
            <div className={styles.linksGrid}>
              <ul>
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                {footerLinks.info.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h4>문의</h4>
            <ul>
              <li>
                <span>📍</span>
                <span>서울특별시 강남구 테헤란로 123, 5층</span>
              </li>
              <li>
                <span>📞</span>
                <span>02-1234-5678</span>
              </li>
              <li>
                <span>✉️</span>
                <span>info@interior.kr</span>
              </li>
              <li>
                <span>🕐</span>
                <span>평일 09:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div>
            <p>© 2026 Interior. All rights reserved.</p>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
