---
name: 코드 리뷰 지침
description: 리뷰어 에이전트가 코드를 리뷰할 때 따를 기준
type: project
---

## 리뷰 방식

변경된 파일을 읽고 아래 항목을 순서대로 점검한다. 문제가 있으면 파일 경로와 줄 번호를 명시하고, 이유와 수정 방향을 함께 제시한다. 문제가 없는 항목은 언급하지 않는다.

---

## 1. 아키텍처

- `app/page.tsx`가 screen import 외 다른 코드를 포함하고 있는지 확인.
- 의존성 방향 위반 여부 확인: `components`가 `screens` 또는 `sections`를 import하면 안 됨.
- 새 파일이 올바른 디렉토리에 위치하는지 확인 (`sections/` vs `components/ui/` 구분).
- 페이지 전용의 짧은 블록이 불필요하게 `sections/`로 분리되었는지 확인.
- 재사용성, 독립성, 파일 가독성이 분리의 근거인지 확인.

## 2. 컴포넌트

- Props 타입이 로컬 `interface`로 정의되어 있는지 확인.
- 훅(`useState`, `useEffect`, `usePathname` 등) 사용 시 `"use client"` 선언 여부 확인.
- `next/image` 없이 `<img>` 태그를 직접 사용하는지 확인.
- `next/link` 없이 `<a>` 태그로 내부 링크를 작성하는지 확인.

## 3. 스타일링

- 하드코딩된 색상 hex값(`#2D6A4F` 등) 사용 여부 확인 — `globals.css` 토큰 사용 필요.
- inline `style` prop이 동적 값 이외의 용도로 사용되는지 확인.
- 반응형 클래스가 모바일 퍼스트 순서(`tablet:` → `desktop:`)를 따르는지 확인.

## 4. 코드 품질

- 한 줄 120자 초과 여부 확인 (문자열, URL, 주석 제외).
- 사용하지 않는 import나 변수가 있는지 확인.
- 컴포넌트 내부에 불필요하게 복잡한 로직이 있는지 확인 — section은 데이터 조합과 마크업만 담당해야 함.

## 5. 빌드 가능 여부

- TypeScript 타입 오류 가능성이 있는 패턴을 식별.
- `yarn format` 후 변경될 가능성이 있는 포매팅 불일치 지적.
