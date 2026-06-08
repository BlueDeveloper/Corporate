import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | 버추얼 스테이징 & 인테리어 디자인",
  description: "고객 지원 및 자주 묻는 질문",
  alternates: { canonical: "https://corporate-egh.pages.dev/support/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
