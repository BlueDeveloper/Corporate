'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { assetPath } from '@/lib/assetPath';
import styles from './page.module.css';

export default function FAQPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'service', name: '서비스' },
    { id: 'process', name: '진행 과정' },
    { id: 'technical', name: '기술/품질' },
  ];

  const faqs = [
    {
      category: 'service',
      question: '버추얼 스테이징과 일반 인테리어 디자인의 차이는 무엇인가요?',
      answer:
        '버추얼 스테이징은 빈 공간의 사진에 디지털로 가구와 소품을 배치하여 완성된 인테리어를 시각화하는 서비스입니다. 주로 부동산 판매나 임대를 위해 사용되며, 실제 가구를 배치하는 것보다 훨씬 저렴하고 빠릅니다. 반면 일반 인테리어 디자인은 실제 공간의 설계부터 시공, 가구 배치까지 전체 과정을 포함합니다.',
    },
    {
      category: 'service',
      question: '어떤 스타일의 디자인이 가능한가요?',
      answer:
        '모던, 클래식, 미니멀, 스칸디나비안, 인더스트리얼, 내추럴 등 다양한 스타일의 디자인이 가능합니다. 고객의 선호도와 공간의 특성에 맞춰 맞춤형 스타일을 제안해드립니다. 포트폴리오 페이지에서 다양한 스타일 사례를 확인하실 수 있습니다.',
    },
    {
      category: 'service',
      question: '주거 공간만 가능한가요? 상업 공간도 가능한가요?',
      answer:
        '주거 공간(아파트, 빌라, 주택, 오피스텔)과 상업 공간(사무실, 카페, 레스토랑, 매장) 모두 가능합니다. 각 공간의 특성과 목적에 맞는 전문적인 디자인을 제공합니다.',
    },
    {
      category: 'process',
      question: '작업 기간은 얼마나 걸리나요?',
      answer:
        '버추얼 스테이징은 48시간 이내에 초안을 제공합니다. 인테리어 디자인은 프로젝트 규모에 따라 다르며, 일반적으로 설계 단계는 2~4주, 시공까지 포함하면 2~3개월 소요됩니다.',
    },
    {
      category: 'process',
      question: '수정은 몇 번까지 가능한가요?',
      answer:
        '고객님의 만족도를 최우선으로 생각하여 만족하실 때까지 수정 작업을 진행합니다. 프로젝트 규모와 요구사항에 따라 수정 횟수가 달라질 수 있으며, 상담 시 자세히 안내해드립니다.',
    },
    {
      category: 'process',
      question: '프로젝트 진행 과정은 어떻게 되나요?',
      answer:
        '1) 문의 및 상담: 프로젝트 내용과 요구사항 파악, 2) 견적 및 제안: 상세 견적과 일정 제안, 3) 디자인 작업: 전문가의 맞춤형 작업 진행, 4) 수정 및 보완: 고객 피드백 반영, 5) 최종 납품: 고해상도 결과물 제공. 각 단계마다 고객과 긴밀히 소통하며 진행합니다.',
    },
    {
      category: 'process',
      question: '현장 방문이 필수인가요?',
      answer:
        '버추얼 스테이징과 공간 컨설팅은 사진만으로도 작업이 가능합니다. 인테리어 디자인의 경우 정확한 설계를 위해 현장 방문이 권장되지만, 원격으로도 진행 가능합니다. 상황에 따라 유연하게 대응해드립니다.',
    },
    {
      category: 'technical',
      question: '어떤 이미지 형식으로 제공되나요?',
      answer:
        'JPG, PNG 형식으로 제공되며, 고해상도(최소 3000px) 이미지를 기본으로 제공합니다. 추가 요청 시 다른 형식이나 해상도로도 제공 가능합니다.',
    },
    {
      category: 'technical',
      question: '제공된 이미지의 저작권은 어떻게 되나요?',
      answer:
        '프로젝트 완료 후 고객에게 결과물에 대한 사용권을 제공합니다. 단, 포트폴리오 및 마케팅 목적으로 당사가 사용할 수 있는 권리는 보유합니다. 완전한 저작권 양도가 필요한 경우 별도 협의가 가능합니다.',
    },
    {
      category: 'technical',
      question: '품질을 보장하나요?',
      answer:
        '10년 이상의 경력과 500개 이상의 성공 프로젝트 경험을 바탕으로 최고 품질을 보장합니다. 98%의 고객 만족도가 우리의 전문성을 증명합니다. 만족하실 때까지 수정 작업을 진행합니다.',
    },
  ];

  const filteredFaqs =
    activeCategory === 'all'
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const contactMethods = [
    {
      icon: '📧',
      title: '이메일',
      content: 'info@interior.kr',
      description: '24시간 이내 답변',
    },
    {
      icon: '📞',
      title: '전화',
      content: '02-1234-5678',
      description: '평일 09:00 - 18:00',
    },
    {
      icon: '💬',
      title: '카카오톡',
      content: '@interior',
      description: '실시간 상담 가능',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <Image
            src={assetPath('/Our_advantages_background_image.jpg')}
            alt="FAQ"
            fill
            className={styles.objectCover}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>자주 묻는 질문</h1>
          <p className={styles.heroDescription}>
            궁금하신 점을 빠르게 해결하세요
            <br />
            원하는 답변을 찾지 못하셨다면 언제든 문의해주세요
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.categoriesContainer}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`${styles.categoryButton} ${
                  activeCategory === category.id ? styles.active : ''
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className={styles.faqList}>
            {filteredFaqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.faqButton}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <div className={styles.faqButtonContent}>
                    <div className={styles.qIcon}>
                      <span>Q</span>
                    </div>
                    <span className={styles.faqQuestion}>
                      {faq.question}
                    </span>
                  </div>
                  <span className={`${styles.faqArrow} ${activeFaq === index ? styles.rotate : ''}`}>
                    ↓
                  </span>
                </button>
                {activeFaq === index && (
                  <div className={styles.faqAnswer}>
                    <div className={styles.faqAnswerContent}>
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className={styles.emptyState}>
              해당 카테고리에 FAQ가 없습니다.
            </div>
          )}
        </div>
      </section>

      {/* Contact Methods */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <div className={`${styles.textCenter} ${styles.mb12}`}>
            <h2 className={styles.heading}>찾는 답변이 없으신가요?</h2>
            <p className={styles.subheading}>
              언제든 편하게 문의해주세요. 친절하게 답변해드리겠습니다.
            </p>
          </div>

          <div className={`${styles.contactMethods} ${styles.grid3}`}>
            {contactMethods.map((method, index) => (
              <div key={index} className={styles.contactCard}>
                <div className={styles.contactIcon}>{method.icon}</div>
                <h3 className={styles.contactTitle}>{method.title}</h3>
                <p className={styles.contactContent}>
                  {method.content}
                </p>
                <p className={styles.contactDescription}>{method.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.textCenter}>
            <Link
              href="/contact"
              className="btn btn-primary btn-large"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.maxW4xl}>
            <div className={styles.quickLinksContainer}>
              <h2 className={styles.quickLinksTitle}>바로가기</h2>
              <div className={`${styles.quickLinksGrid} ${styles.maxW2xl}`}>
                <Link
                  href="/business"
                  className={styles.quickLink}
                >
                  <div className={styles.quickLinkIcon}>💼</div>
                  <h3 className={styles.quickLinkTitle}>서비스 안내</h3>
                  <p className={styles.quickLinkDescription}>
                    제공하는 서비스 자세히 보기
                  </p>
                </Link>

                <Link
                  href="/about"
                  className={styles.quickLink}
                >
                  <div className={styles.quickLinkIcon}>🏢</div>
                  <h3 className={styles.quickLinkTitle}>회사소개</h3>
                  <p className={styles.quickLinkDescription}>
                    Interior 알아보기
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
