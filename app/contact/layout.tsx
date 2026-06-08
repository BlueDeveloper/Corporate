import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | 버추얼 스테이징 & 인테리어 디자인",
  description: "프로젝트 상담 및 견적 문의. 24시간 이내 답변 드립니다.",
  alternates: { canonical: "https://corporate-egh.pages.dev/contact/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
