'use client';

import { useState } from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import styles from './page.module.css';

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 실제 구현 시 API 호출로 대체
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('문의가 성공적으로 접수되었습니다. 24시간 이내에 답변드리겠습니다.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: '이메일',
      content: 'info@interior.com',
      description: '24시간 이내 답변',
    },
    {
      icon: '📞',
      title: '전화',
      content: '02-1234-5678',
      description: '평일 09:00 - 18:00',
    },
    {
      icon: '📍',
      title: '주소',
      content: '서울시 강남구 테헤란로 123',
      description: 'Interior Building 5F',
    },
    {
      icon: '🕐',
      title: '영업시간',
      content: '평일 09:00 - 18:00',
      description: '토요일 10:00 - 15:00',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <Image
            src={assetPath('/Main_slider_image_3.jpg')}
            alt="Contact"
            fill
            className={styles.objectCover}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>문의하기</h1>
          <p className={styles.heroDescription}>
            프로젝트에 대해 궁금하신 점이 있으신가요?
            <br />
            언제든 편하게 문의해주세요
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {/* Contact Form */}
            <div>
              <h2 className={styles.formTitle}>무료 상담 신청</h2>
              <p className={styles.formDescription}>
                아래 양식을 작성해주시면 24시간 이내에 답변드리겠습니다.
                긴급한 경우 전화로 문의해주세요.
              </p>

              <form onSubmit={handleSubmit} className={styles.spaceY8}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    이름 <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="홍길동"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    이메일 <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="email@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    연락처 <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="010-1234-5678"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service" className={styles.label}>
                    관심 서비스 <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="">선택해주세요</option>
                    <option value="virtual-staging">버추얼 스테이징</option>
                    <option value="interior-design">인테리어 디자인</option>
                    <option value="space-consulting">공간 컨설팅</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    문의 내용 <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={styles.textarea}
                    placeholder="프로젝트에 대해 자세히 설명해주세요. 공간 크기, 예산, 원하는 스타일 등을 포함하면 더 정확한 상담이 가능합니다."
                  />
                </div>

                {submitMessage && (
                  <div className={styles.successMessage}>
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  {isSubmitting ? '전송 중...' : '무료 상담 신청하기'}
                </button>

                <p className={`${styles.textSm} ${styles.textCenter}`}>
                  개인정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className={styles.infoTitle}>연락처 정보</h2>
              <p className={styles.formDescription}>
                다양한 방법으로 연락하실 수 있습니다. 가장 편한 방법을 선택해주세요.
              </p>

              <div className={`${styles.spaceY6} ${styles.mb8}`}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.infoItem}>
                    <div className={styles.infoContainer}>
                      <div className={styles.infoIconLarge}>{info.icon}</div>
                      <div className={styles.infoTextContent}>
                        <h3>{info.title}</h3>
                        <p>{info.content}</p>
                        <p>{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapContent}>
                  <div className={styles.mapIcon}>🗺️</div>
                  <p>지도 (Google Maps 연동)</p>
                </div>
              </div>

              {/* Social Media */}
              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>소셜 미디어</h3>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>📘</span>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>📷</span>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>💬</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <div className={styles.quickInfoContainer}>
            <div className={styles.quickInfoBox}>
              <h3 className={styles.quickInfoTitle}>
                빠른 응답을 위한 팁
              </h3>
              <ul className={styles.quickInfoList}>
                <li>
                  <span className={styles.checkmark}>✓</span>
                  <span>
                    공간의 크기(평수)와 위치를 알려주시면 더 정확한 견적이 가능합니다
                  </span>
                </li>
                <li>
                  <span className={styles.checkmark}>✓</span>
                  <span>
                    선호하는 스타일이나 참고 이미지가 있다면 함께 공유해주세요
                  </span>
                </li>
                <li>
                  <span className={styles.checkmark}>✓</span>
                  <span>
                    예산 범위를 미리 알려주시면 맞춤 제안이 가능합니다
                  </span>
                </li>
                <li>
                  <span className={styles.checkmark}>✓</span>
                  <span>
                    긴급한 프로젝트의 경우 전화로 먼저 연락주시면 신속히 대응하겠습니다
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
