# sample-template

Next.js App Router 기반의 정적 웹사이트 템플릿입니다. 현재는 Horizon 디지털 에이전시 사이트 예시로 구성되어 있으며, 정적 export 결과물은 `out/`에 생성됩니다.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint 9 + Next core web vitals rules
- Prettier 3, formatting is run separately from ESLint
- Yarn 1

## Requirements

`.tool-versions` 기준:

```sh
nodejs 24.13.1
```

## Getting Started

```sh
yarn install
yarn dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## Scripts

```sh
yarn dev      # Next 개발 서버 실행
yarn build    # 정적 export 빌드, out/ 생성
yarn start    # out/ 정적 산출물 로컬 preview
yarn lint     # src 대상 ESLint 검사
yarn format   # Prettier 포맷 적용
```

현재 `next.config.ts`는 `output: "export"`를 사용합니다. 배포 산출물은 `out/`이며, `yarn start`는 `serve out`으로 빌드된 정적 파일을 로컬에서 preview합니다. `.next/`, `out/`, `dist/`는 저장소에 포함하지 않습니다.

## Project Structure

```text
src/app/                 Next.js 라우팅 전용
src/screens/             페이지 전체 조립, 페이지 전용의 짧은 블록 포함 가능
src/sections/            재사용되거나 독립성이 큰 대형 화면 블록
src/components/layout/   Header, Footer 같은 공통 레이아웃
src/components/ui/       Button, SectionTitle 같은 원자 UI
src/app/globals.css      Tailwind import, theme token, global reset
public/                  정적 에셋
```

의존성 방향:

```text
app -> screens -> sections -> components
             \-> components
```

`components`는 `screens`나 `sections`를 import하지 않습니다.

Screen과 section의 분리 기준:

- 여러 페이지에서 재사용되거나 독립성이 큰 블록은 `sections/`로 분리합니다.
- 페이지 하나에서만 쓰이고 짧은 블록은 screen 내부에 둡니다.
- 단순히 `<section>` 태그를 사용한다는 이유만으로 파일을 나누지 않습니다.

## Styling

Tailwind CSS v4를 사용하며 별도 `tailwind.config.js`는 없습니다. 디자인 토큰은 `src/app/globals.css`의 `@theme` 블록에서 관리합니다.

주요 규칙:

- 색상은 `@theme` 토큰을 사용합니다.
- 새 색상이 필요하면 `globals.css`에 토큰을 추가합니다.
- 반응형은 모바일 퍼스트로 작성합니다.
- 브레이크포인트 순서는 기본값, `tablet:`, `desktop:`입니다.
- 정적 스타일에는 inline `style` prop을 사용하지 않습니다.

## Routing

각 route의 `page.tsx`는 대응하는 screen 하나만 import합니다.

```text
src/app/page.tsx             -> HomeScreen
src/app/about/page.tsx       -> AboutScreen
src/app/services/page.tsx    -> ServicesScreen
src/app/contact/page.tsx     -> ContactScreen
```

## Contact Form

Contact form은 정적 export와 호환되도록 서버 전송 대신 `mailto:`를 사용합니다. 사용자가 `Send Message`를 누르면 입력한 이름, 이메일, 메시지를 메일 본문으로 구성해 기본 메일 앱을 엽니다.

## Quality Checks

변경 후 아래 명령을 기준으로 확인합니다.

```sh
yarn lint
yarn build
```

`yarn build`는 타입 검사, lint, 정적 페이지 생성, export를 함께 수행합니다.
