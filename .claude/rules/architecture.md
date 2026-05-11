---
name: 아키텍처 & 스타일링
description: 디렉토리 구조, 의존성 규칙, 컴포넌트 작성 규칙, 스타일링 규칙
type: project
---

## 디렉토리 역할

| 디렉토리 | 역할 |
|---|---|
| `src/app/` | Next.js 라우팅 전용. 각 `page.tsx`는 screen 하나만 import. |
| `src/screens/` | 페이지 전체 컨텐츠. sections와 components를 조합하고, 페이지 전용의 짧은 블록은 직접 포함할 수 있음. |
| `src/sections/` | 재사용되거나 독립성이 큰 대형 블록 (Hero, Services, Team 등). |
| `src/components/layout/` | 공통 레이아웃 (Header, Footer). |
| `src/components/ui/` | 원자 단위 재사용 UI (Button, SectionTitle). |

## 의존성 방향

```
app → screens → sections → components
           └──────────────> components
```

`components`는 `screens`나 `sections`를 import해선 안 된다.

## Screen vs Section 기준

- 여러 페이지에서 재사용되거나, 페이지 밖에서도 이름 붙여 설명할 수 있는 독립 블록은 `src/sections/`로 분리한다.
- 페이지 하나에서만 쓰이고 짧은 블록은 `src/screens/` 안에 유지한다.
- 단순히 `<section>` 태그를 쓴다는 이유만으로 파일을 분리하지 않는다.
- 분리 기준은 재사용성, 독립성, 파일 가독성이다. 파일 수를 늘리는 목적의 분리는 피한다.

## 컴포넌트 규칙

- Props: 로컬 `interface`로 정의. `defaultProps` 사용 금지 — TypeScript 구조분해 기본값 사용.
- 기본적으로 Server Component. 훅이 필요할 때만 `"use client"` 추가.
- 정적 데이터(텍스트, 아이콘, 목록)는 해당 블록을 소유한 screen 또는 section 파일 안에 위치.
- 새 원자 컴포넌트 생성 전 기존 `components/ui/` 재사용 여부 먼저 확인.
- 파일당 default export 하나. 파일명과 export명 일치.

## 스타일링

- Tailwind CSS v4, `@tailwindcss/postcss` 사용. `tailwind.config.js` 없음.
- 모든 디자인 토큰은 `src/app/globals.css`의 `@theme {}` 블록에서 정의.
- 커스텀 토큰: `primary`, `secondary`, `gray`, `deep-gray`, `light-gray`, `black`, `red`, `deep-red`, `light-red`, 브레이크포인트 `tablet` / `desktop`.
- Tailwind 유틸리티 클래스만 사용. 동적 값(예: `style={{ width: \`${pct}%\` }}`)이 아니면 inline `style` prop 금지.
- 새 색상 → `globals.css`의 `@theme {}`에 추가. 하드코딩 hex 금지.
- 반응형: 모바일 퍼스트. 순서: 기본 → `tablet:` → `desktop:`.
