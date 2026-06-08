import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business | 버추얼 스테이징 & 인테리어 디자인",
  description: "버추얼 스테이징, 인테리어 디자인, 공간 컨설팅 등 제공 서비스 안내",
  alternates: { canonical: "https://corporate-egh.pages.dev/business/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
