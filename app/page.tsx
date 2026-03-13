'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './page.module.css';
import { assetPath } from '@/lib/assetPath';

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      image: assetPath('/Main_slider_image_1.jpg'),
      title: '버추얼 스테이징',
      subtitle: '눈길을 사로잡는 리스팅의 비밀',
      description: '전문적인 가상 스테이징으로 공간의 가능성을 보여주세요',
    },
    {
      image: assetPath('/Main_slider_image_2.jpg'),
      title: '공간의 변화',
      subtitle: '당신의 공간을 특별하게',
      description: '최고의 실내 디자인으로 가치를 높이세요',
    },
    {
      image: assetPath('/Main_slider_image_3.jpg'),
      title: '전문 디자인',
      subtitle: '완벽한 인테리어 솔루션',
      description: '10년 이상의 경험과 노하우로 완성합니다',
    },
  ];

  const services = [
    {
      title: '버추얼 스테이징',
      description: '빈 공간을 매력적인 인테리어로 변환합니다. 부동산 리스팅의 가치를 높이는 전문적인 가상 스테이징 서비스를 제공합니다.',
      image: assetPath('/Portfolio_virtual_staging.jpg'),
      link: '/business',
    },
    {
      title: '인테리어 디자인',
      description: '주거 공간부터 상업 공간까지, 고객의 라이프스타일과 비즈니스에 맞춘 맞춤형 인테리어 디자인을 제공합니다.',
      image: assetPath('/Frame-8-1.jpg'),
      link: '/business',
    },
    {
      title: '공간 컨설팅',
      description: '효율적인 공간 활용과 스타일링 제안. 전문가의 눈으로 공간의 잠재력을 극대화합니다.',
      image: assetPath('/Frame-8.jpg'),
      link: '/business',
    },
  ];

  const advantages = [
    {
      title: '10년 이상의 경험',
      description: '축적된 노하우와 전문성으로 최상의 결과를 보장합니다',
      icon: '⭐',
    },
    {
      title: '빠른 작업',
      description: '24-48시간 내 고품질 결과물을 제공합니다',
      icon: '⚡',
    },
    {
      title: '합리적인 가격',
      description: '경쟁력 있는 가격으로 프리미엄 서비스를 경험하세요',
      icon: '💎',
    },
  ];

  return (
    <>
      {/* Hero Carousel Section */}
      <section className={styles.heroCarousel}>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.heroSlide} ${activeSlide === index ? styles.active : ''}`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className={styles.heroImage}
              priority={index === 0}
            />
            <div className={styles.heroOverlay} />
            <div className={styles.container}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>{slide.title}</h1>
                <p className={styles.heroSubtitle}>{slide.subtitle}</p>
                <p className={styles.heroDescription}>{slide.description}</p>
                <Link href="/contact" className="btn btn-primary btn-large">
                  변화를 확인하세요
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className={styles.carouselControls}>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`${styles.carouselDot} ${activeSlide === index ? styles.active : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`슬라이드 ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.textCenter} ${styles.mb12}`}>
            <h2 className={styles.heading}>우리의 접근 방식</h2>
            <p className={styles.subheading}>
              Before & After로 확인하는 놀라운 변화
            </p>
          </div>

          <div className={`${styles.grid} ${styles.grid2} ${styles.maxW5xl} ${styles.mxAuto}`}>
            <div className={styles.beforeAfterCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={assetPath('/Video_cover_before.jpg')}
                  alt="Before"
                  fill
                  className={`${styles.objectCover} ${styles.roundedLg}`}
                />
              </div>
              <div className={`${styles.textCenter} ${styles.mt4}`}>
                <span className={styles.labelBefore}>BEFORE</span>
              </div>
            </div>

            <div className={styles.beforeAfterCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={assetPath('/Video_cover_after.jpg')}
                  alt="After"
                  fill
                  className={`${styles.objectCover} ${styles.roundedLg}`}
                />
              </div>
              <div className={`${styles.textCenter} ${styles.mt4}`}>
                <span className={styles.labelAfter}>AFTER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className={styles.advantagesSection}>
        <div className={styles.advantagesBackground}>
          <Image
            src={assetPath('/Our_advantages_background_image.jpg')}
            alt="Background"
            fill
            className={styles.objectCover}
          />
          <div className={styles.advantagesOverlay} />
        </div>

        <div className={`${styles.container} ${styles.relativeZ10}`}>
          <div className={`${styles.textCenter} ${styles.mb12}`}>
            <h2 className={`${styles.heading} ${styles.textWhite}`}>우리의 강점</h2>
            <p className={styles.opacityWhite90}>
              차별화된 경쟁력으로 최고의 결과를 제공합니다
            </p>
          </div>

          <div className={`${styles.grid} ${styles.grid3}`}>
            {advantages.map((advantage, index) => (
              <div key={index} className={styles.advantageCard}>
                <div className={styles.iconLarge}>{advantage.icon}</div>
                <h3 className={styles.cardTitle}>{advantage.title}</h3>
                <p className={styles.cardDescription}>{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Services Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.textCenter} ${styles.mb12}`}>
            <h2 className={styles.heading}>포트폴리오</h2>
            <p className={styles.subheading}>
              전문적이고 완성도 높은 인테리어 디자인
            </p>
          </div>

          <div className={`${styles.grid} ${styles.grid3} ${styles.maxW6xl} ${styles.mxAuto}`}>
            {services.map((service, index) => (
              <div key={index} className={styles.portfolioCard}>
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={styles.objectCover}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardContentTitle}>{service.title}</h3>
                  <p className={styles.cardContentDescription}>{service.description}</p>
                  <Link href={service.link} className={styles.viewMoreLink}>
                    더 보기 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <div className={`${styles.ctaMaxW4xl} ${styles.mxAuto} ${styles.textCenter}`}>
            <h2 className={styles.ctaHeading}>
              프로젝트를 시작할 준비가 되셨나요?
            </h2>
            <p className={styles.ctaSubheading}>
              지금 바로 문의하시고 전문가 상담을 받아보세요.
              <br />
              24시간 이내에 답변 드립니다.
            </p>
            <div className={styles.flexCenter}>
              <Link
                href="/contact"
                className="btn btn-primary btn-large"
                style={{ minWidth: '200px', display: 'inline-flex', alignItems: 'center' }}
              >
                무료 견적 받기
              </Link>
            </div>
            <p className={styles.ctaFooter}>
              평일 09:00 - 18:00 | 토요일 10:00 - 15:00 | 일요일/공휴일 휴무
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
