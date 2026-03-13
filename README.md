# archive-corporate

기업 소개 사이트 템플릿

## 기술 스택

- Next.js 16 (App Router, Static Export)
- React 19
- TypeScript 5
- CSS Modules

## 로컬 개발

```bash
npm install
npm run dev     # http://localhost:3002
npm run build   # out/ 디렉토리로 정적 빌드
```

## 배포

main 브랜치 push 시 Cloudflare Pages 자동 배포.

| 항목 | 값 |
|------|-----|
| 빌드 명령어 | npm install --legacy-peer-deps && npm run build |
| 출력 디렉토리 | out |
| 도메인 | archive-corporate.pages.dev |

## 페이지 구조

- / → 홈
- /about/ → 회사 소개
- /business/ → 사업 영역
- /contact/ → 연락처
- /support/ → 고객 지원
