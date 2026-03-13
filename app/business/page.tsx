'use client';

import Image from 'next/image';
import Link from 'next/link';
import commonStyles from '../common.module.css';
import styles from './page.module.css';
import { assetPath } from '@/lib/assetPath';

export default function ServicesPage() {
  const services = [
    {
      title: '버추얼 스테이징',
      subtitle: 'Virtual Staging',
      description: '빈 공간을 매력적인 인테리어로 변환하여 부동산 리스팅의 가치를 극대화합니다.',
      image: assetPath('/Portfolio_virtual_staging.jpg'),
      features: [
        '24-48시간 내 빠른 작업 완료',
        '무제한 수정 (프리미엄 플랜)',
        '다양한 스타일 제공 (모던, 클래식, 미니멀 등)',
        '고해상도 이미지 제공',
        '부동산 사진 보정 포함',
      ],
      details: '빈 공간의 사진만 있으면 전문적인 가구 배치와 인테리어 스타일링을 통해 잠재 구매자의 상상력을 자극하는 매력적인 공간으로 변환합니다. 실제 스테이징 비용의 10% 이하로 동일한 효과를 얻을 수 있습니다.',
    },
    {
      title: '인테리어 디자인',
      subtitle: 'Interior Design',
      description: '주거 공간부터 상업 공간까지, 고객의 라이프스타일과 비즈니스에 맞춘 맞춤형 디자인을 제공합니다.',
      image: assetPath('/Frame-8-1.jpg'),
      features: [
        '현장 방문 및 정밀 측정',
        '3D 렌더링 시각화',
        '맞춤형 디자인 제안서',
        '시공 관리 및 감리',
        '가구 및 소품 큐레이션',
      ],
      details: '10년 이상의 경험을 바탕으로 공간의 특성과 고객의 니즈를 완벽하게 반영한 디자인을 제공합니다. 주거 공간(아파트, 빌라, 주택), 상업 공간(사무실, 카페, 레스토랑) 모두 가능합니다.',
    },
    {
      title: '공간 컨설팅',
      subtitle: 'Space Consulting',
      description: '효율적인 공간 활용과 스타일링 제안으로 공간의 잠재력을 극대화합니다.',
      image: assetPath('/Frame-8.jpg'),
      features: [
        '공간 활용도 분석',
        '맞춤형 개선 방안 제시',
        '예산별 단계적 리모델링 계획',
        '스타일링 및 컬러 컨설팅',
        '온라인 상담 가능',
      ],
      details: '큰 비용을 들이지 않고도 공간을 효율적으로 개선할 수 있는 방법을 제안합니다. 전문가의 눈으로 공간의 문제점을 파악하고 실용적인 해결책을 제시합니다.',
    },
  ];

  const process = [
    {
      step: '01',
      title: '문의 및 상담',
      description: '프로젝트 내용과 요구사항을 상담합니다.',
    },
    {
      step: '02',
      title: '견적 및 제안',
      description: '상세한 견적과 작업 일정을 제안합니다.',
    },
    {
      step: '03',
      title: '디자인 작업',
      description: '전문가가 맞춤형 디자인 작업을 진행합니다.',
    },
    {
      step: '04',
      title: '수정 및 보완',
      description: '고객 피드백을 반영하여 완성도를 높입니다.',
    },
    {
      step: '05',
      title: '최종 납품',
      description: '고해상도 결과물을 제공합니다.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={commonStyles.heroSection}>
        <div className={commonStyles.heroOverlay}>
          <Image
            src={assetPath('/Main_slider_image_1.jpg')}
            alt="Services"
            fill
            className={styles.objectCover}
          />
        </div>
        <div className={commonStyles.heroContent}>
          <h1 className={commonStyles.heroTitle}>서비스</h1>
          <p className={commonStyles.heroDescription}>
            전문적이고 완성도 높은 인테리어 솔루션으로
            <br />
            공간의 가치를 극대화합니다
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className={commonStyles.section}>
        <div className={commonStyles.container}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceDetail}>
              <div className={index % 2 === 1 ? styles.order2 : ''}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={styles.objectCover}
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? styles.order1 : ''}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                <p className={styles.serviceDescription}>{service.description}</p>
                <p className={styles.serviceDetails}>{service.details}</p>

                <div className={styles.featuresSection}>
                  <h3 className={styles.featuresTitle}>주요 특징</h3>
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className={styles.checkmark}>✓</span>
                        <span className={styles.featureText}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link href="/contact" className="btn btn-primary" style={{display: 'inline-flex', alignItems: 'center'}}>
                    무료 견적 받기
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className={`${commonStyles.section} ${commonStyles.sectionGray}`}>
        <div className={commonStyles.container}>
          <div className={`${commonStyles.textCenter} ${commonStyles.mb12}`}>
            <h2 className={commonStyles.heading}>작업 프로세스</h2>
            <p className={commonStyles.subheading}>
              체계적인 5단계 프로세스로 완벽한 결과를 보장합니다
            </p>
          </div>

          <div className={styles.processGrid}>
            {process.map((item, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepCircle}>{item.step}</div>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={commonStyles.section}>
        <div className={commonStyles.container}>
          <div className={`${commonStyles.maxW4xl} ${commonStyles.mxAuto} ${styles.ctaBg}`}>
            <h2 className={styles.ctaTitle}>프로젝트를 시작할 준비가 되셨나요?</h2>
            <p className={styles.ctaSubtitle}>전문가 상담을 통해 최적의 솔루션을 찾아보세요</p>
            <div className={styles.flexCenter}>
              <Link
                href="/contact"
                className="btn btn-primary btn-large"
                style={{ backgroundColor: 'white', color: '#1f2937', display: 'inline-flex', alignItems: 'center' }}
              >
                무료 견적 받기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
