'use client';

import Image from 'next/image';
import Link from 'next/link';
import commonStyles from '../common.module.css';
import styles from './page.module.css';
import { assetPath } from '@/lib/assetPath';

export default function CompanyPage() {
  const values = [
    {
      title: '전문성',
      description: '10년 이상의 경험과 노하우로 최상의 결과를 보장합니다',
      icon: '⭐',
    },
    {
      title: '신뢰성',
      description: '약속한 기한과 품질을 지키는 것이 우리의 원칙입니다',
      icon: '🤝',
    },
    {
      title: '창의성',
      description: '고객의 니즈를 넘어서는 창의적인 솔루션을 제공합니다',
      icon: '💡',
    },
    {
      title: '소통',
      description: '고객과의 긴밀한 소통으로 만족도 높은 결과를 만듭니다',
      icon: '💬',
    },
  ];

  const team = [
    {
      name: '김지수',
      role: '대표 디자이너',
      description: '홍익대학교 건축학과 졸업, 15년 경력의 인테리어 전문가',
      image: assetPath('/Review_2.jpg'),
    },
    {
      name: '박민준',
      role: '수석 디자이너',
      description: '상업 공간 전문, 100+ 프로젝트 수행',
      image: assetPath('/Review_3.jpg'),
    },
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Interior 설립',
      description: '작은 스튜디오에서 시작한 인테리어 디자인 서비스',
    },
    {
      year: '2017',
      title: '버추얼 스테이징 서비스 시작',
      description: '국내 최초 전문 버추얼 스테이징 서비스 제공',
    },
    {
      year: '2020',
      title: '100+ 프로젝트 달성',
      description: '누적 고객 100명 돌파 및 팀 확장',
    },
    {
      year: '2024',
      title: '업계 리딩 기업',
      description: '500+ 프로젝트 완료, 고객 만족도 98% 달성',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={commonStyles.heroSection}>
        <div className={commonStyles.heroOverlay}>
          <Image
            src={assetPath('/Main_slider_image_2.jpg')}
            alt="About"
            fill
            className={styles.objectCover}
          />
        </div>
        <div className={commonStyles.heroContent}>
          <h1 className={commonStyles.heroTitle}>회사소개</h1>
          <p className={commonStyles.heroDescription}>
            공간의 가치를 높이는
            <br />
            전문 인테리어 디자인 파트너
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className={commonStyles.section}>
        <div className={commonStyles.container}>
          <div className={`${commonStyles.grid} ${commonStyles.grid2} ${styles.gap12} ${styles.itemsCenter}`}>
            <div>
              <h2 className={commonStyles.heading}>
                Interior는
                <br />
                <span className={styles.highlight}>다릅니다</span>
              </h2>
              <p className={styles.textDescription}>
                2014년 설립 이후, Interior는 500개 이상의 프로젝트를
                성공적으로 완료하며 대한민국 인테리어 디자인 업계를 선도해왔습니다.
              </p>
              <p className={`${styles.textGray} ${styles.mb6}`}>
                우리는 단순히 공간을 꾸미는 것을 넘어, 고객의 라이프스타일과
                비즈니스 목표를 이해하고 이를 공간에 구현합니다. 버추얼 스테이징부터
                전체 인테리어 디자인까지, 최고의 전문성과 창의성으로 고객의 기대를
                뛰어넘는 결과를 제공합니다.
              </p>
              <p className={styles.textGray}>
                10년 이상의 경험, 98%의 고객 만족도, 그리고 수많은 성공 사례가
                우리의 전문성을 증명합니다.
              </p>
            </div>

            <div className={styles.imageWrapper}>
              <Image
                src={assetPath('/Our_advantages_background_image.jpg')}
                alt="About Us"
                fill
                className={`${styles.objectCover} ${styles.roundedLg} ${styles.shadowXl}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`${commonStyles.section} ${commonStyles.sectionGray}`}>
        <div className={commonStyles.container}>
          <div className={`${commonStyles.textCenter} ${commonStyles.mb12}`}>
            <h2 className={commonStyles.heading}>우리의 가치</h2>
            <p className={commonStyles.subheading}>
              Interior가 추구하는 핵심 가치
            </p>
          </div>

          <div className={`${commonStyles.grid} ${commonStyles.grid4} ${commonStyles.maxW6xl} ${commonStyles.mxAuto}`}>
            {values.map((value, index) => (
              <div key={index} className={commonStyles.card}>
                <div className={styles.icon}>{value.icon}</div>
                <h3 className={styles.cardTitle}>{value.title}</h3>
                <p className={styles.cardDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={commonStyles.section}>
        <div className={commonStyles.container}>
          <div className={`${commonStyles.textCenter} ${commonStyles.mb12}`}>
            <h2 className={commonStyles.heading}>우리의 여정</h2>
            <p className={commonStyles.subheading}>
              함께 성장해온 Interior의 역사
            </p>
          </div>

          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`${styles.timelineItem} ${index % 2 === 1 ? styles.timelineItemReverse : ''}`}
              >
                <div className={styles.timelineContent}>
                  {index % 2 === 0 && (
                    <>
                      <div className={styles.timelineYear}>{item.year}</div>
                      <h3 className={styles.timelineTitle}>{item.title}</h3>
                      <p className={styles.timelineDescription}>{item.description}</p>
                    </>
                  )}
                </div>

                <div className={styles.timelineCenter}>
                  <div className={styles.timelineDot}></div>
                  {index < timeline.length - 1 && (
                    <div className={styles.timelineLine}></div>
                  )}
                </div>

                <div className={styles.timelineContentLeft}>
                  {index % 2 === 1 && (
                    <>
                      <div className={styles.timelineYear}>{item.year}</div>
                      <h3 className={styles.timelineTitle}>{item.title}</h3>
                      <p className={styles.timelineDescription}>{item.description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`${commonStyles.section} ${commonStyles.sectionGray}`}>
        <div className={commonStyles.container}>
          <div className={`${commonStyles.textCenter} ${commonStyles.mb12}`}>
            <h2 className={commonStyles.heading}>우리 팀</h2>
            <p className={commonStyles.subheading}>
              전문성과 열정으로 최고의 결과를 만들어냅니다
            </p>
          </div>

          <div className={`${commonStyles.grid} ${commonStyles.grid2} ${commonStyles.maxW4xl} ${commonStyles.mxAuto}`}>
            {team.map((member, index) => (
              <div key={index} className={commonStyles.card}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={styles.objectCover}
                  />
                </div>
                <div className={styles.teamCardContent}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamDescription}>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${commonStyles.section} ${commonStyles.ctaSection}`}>
        <div className={commonStyles.container}>
          <div className={`${commonStyles.maxW4xl} ${commonStyles.mxAuto} ${commonStyles.textCenter}`}>
            <h2 className={commonStyles.heading} style={{color: 'white'}}>
              함께 시작하실 준비가 되셨나요?
            </h2>
            <p className={`${commonStyles.subheading} ${commonStyles.mb8}`} style={{color: 'white', opacity: 0.9}}>
              10년의 경험과 전문성으로 당신의 공간을 특별하게 만들어드립니다
            </p>
            <Link
              href="/contact"
              className="btn btn-primary btn-large"
              style={{display: 'inline-flex', alignItems: 'center'}}
            >
              프로젝트 상담하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
