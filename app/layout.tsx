import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://corporate-egh.pages.dev"),
  title: "Interior - 버추얼 스테이징 & 인테리어 디자인",
  description: "전문적인 버추얼 스테이징과 인테리어 디자인 서비스. 10년 이상의 경험으로 공간의 가치를 높입니다.",
  keywords: "버추얼 스테이징, 인테리어 디자인, 공간 디자인, 부동산 스테이징, 실내 디자인",
  alternates: {
    canonical: "https://corporate-egh.pages.dev/corporate/",
  },
  openGraph: {
    title: "Interior - 버추얼 스테이징 & 인테리어 디자인",
    description: "전문적인 버추얼 스테이징과 인테리어 디자인 서비스. 공간의 가치를 높입니다.",
    type: "website",
    url: "https://corporate-egh.pages.dev/corporate/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 독립 도메인 전환(2026-06-08): bdarchive.site 강제 리다이렉트 제거 — corporate-egh.pages.dev 단독 서빙 */}
        {/* GA 제거 (폐기 프로젝트 — 분석 불필요 + Archive GA 오염 방지, 2026-06-07) */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
