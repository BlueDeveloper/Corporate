import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | 버추얼 스테이징 & 인테리어 디자인",
  description: "10년 이상의 경험과 노하우로 공간의 가치를 높이는 인테리어 디자인 전문가 소개",
  alternates: { canonical: "https://corporate-egh.pages.dev/about/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
