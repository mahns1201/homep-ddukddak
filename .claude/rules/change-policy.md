---
name: 변경 & 리뷰 정책
description: 기능 추가 절차 및 코드 리뷰 기준
type: project
---

## 새 페이지 추가

1. `src/screens/[Name]Screen.tsx` 생성 — sections/components 조합. 페이지 전용의 짧은 블록은 screen 내부에 둘 수 있음.
2. `src/app/[route]/page.tsx` 생성 — screen import만.
3. 필요 시 `src/components/layout/Header.tsx`에 nav 링크 추가.

## 새 섹션 또는 컴포넌트 추가

- 섹션 → `src/sections/[Name]Section.tsx`
- UI 컴포넌트 → `src/components/ui/[Name].tsx`
- 섹션은 재사용되거나 독립성이 큰 대형 블록일 때만 생성.
- 페이지 하나에서만 쓰이는 짧은 블록은 screen 내부 유지.
- 변형이 필요한 경우에만 props 사용. section 내부에서 API 호출 금지.

## 리뷰 체크리스트

- [ ] `app/page.tsx`에 screen import 외 다른 코드 없음.
- [ ] 의존성 방향 준수 — 상위 레이어 import 없음.
- [ ] 페이지 전용 블록을 불필요하게 section 파일로 분리하지 않음.
- [ ] 훅 사용 시 `"use client"` 추가됨.
- [ ] 이미지는 `next/image`, 내부 링크는 `next/link` 사용.
- [ ] 하드코딩 색상 없음 — `globals.css` 토큰 사용.
- [ ] `yarn format`과 `yarn build` 정상 통과.
