# React TDD Boilerplate

한국어 | English

React Vite TypeScript Tailwind Redux Toolkit License

실제 프로덕션 환경을 목표로 설계된 TDD React 보일러플레이트입니다. [React-boilerplate](https://github.com/react-boilerplate/react-boilerplate)를 참고하여 현대적인 개발 도구, 상태 관리, 국제화, 테스팅, 타입 안전성까지 기본 제공하여 바로 제품 개발에 착수할 수 있습니다.

## 🌟 주요 기능

### 🏗️ 개발 환경
- [x] **Vite**: 초고속 빌드 도구 및 개발 서버
- [x] **TypeScript**: 완전한 타입 안전성
- [x] **Hot Module Replacement (HMR)**: 실시간 개발 경험
- [x] **Path Mapping**: `@/` 별칭을 통한 깔끔한 import

### 🎨 UI/UX
- [x] **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- [x] **반응형 디자인**: 모바일 퍼스트 접근법
- [ ] **다크모드 지원**: 시스템 테마 자동 감지
- [x] **컴포넌트 기반 아키텍처**: 재사용 가능한 UI 컴포넌트

### 🔄 상태 관리
- [x] **Redux Toolkit**: 현대적이고 효율적인 상태 관리
- [ ] **RTK Query**: 강력한 데이터 페칭 및 캐싱
- [ ] **Persist**: 로컬 스토리지 상태 유지
- [x] **DevTools**: Redux DevTools 통합

### 🌍 국제화 (i18n)
- [x] **React Intl**: 포맷된 메시지와 다국어 지원
- [x] **동적 언어 전환**: 런타임 언어 변경
- [x] **다국어 지원**: 영어, 독일어, 한국어 기본 제공
- [ ] **지역화**: 날짜, 숫자, 통화(원, 달러 등) 포맷팅

### 🧪 테스팅
- [x] **Vitest**: 빠르고 현대적인 테스트 러너
- [x] **React Testing Library**: 컴포넌트 테스팅
- [x] **Jest DOM**: DOM 매처 확장
- [x] **Coverage**: 코드 커버리지 보고서

### 🛠️ 개발 도구
- [x] **ESLint**: 코드 품질 관리
- [x] **Prettier**: 코드 포맷팅
- [x] **TypeScript**: 정적 타입 검사
- [x] **Turbo**: 모노레포 지원

### 🚀 라우팅 & 네비게이션
- [x] **React Router**: 클라이언트 사이드 라우팅
- [x] **페이지 구조**: HomePage, FeaturePage, NotFoundPage
- [ ] **권한 기반 라우팅**: 인증된 사용자만 접근 가능한 페이지
- [ ] **중첩 라우팅**: 복잡한 페이지 구조 지원

### 📱 사용자 인터페이스
- [x] **Header 컴포넌트**: 네비게이션 및 언어 전환
- [x] **Footer 컴포넌트**: 기본 푸터 레이아웃
- [ ] **사이드바**: 반응형 네비게이션 메뉴
- [ ] **모달 시스템**: 재사용 가능한 모달 컴포넌트
- [ ] **로딩 스피너**: 비동기 작업 표시
- [ ] **에러 바운더리**: 에러 처리 및 복구

### 🔧 유틸리티
- [x] **HTTP 요청 유틸**: 기본적인 API 통신
- [x] **타입 정의**: TypeScript 인터페이스 및 타입
- [ ] **로깅 시스템**: 개발 및 프로덕션 로깅
- [ ] **에러 핸들링**: 전역 에러 처리
- [ ] **폼 검증**: 입력값 유효성 검사
- [ ] **파일 업로드**: 이미지 및 파일 처리

## 🚀 시작하기

### 요구사항
- Node.js 18+
- pnpm 8+ (권장) 또는 npm/yarn
- TypeScript 5.0+

### 설치

```bash
# 저장소 클론
git clone https://github.com/dongmin0204/React-Tdd-Boilerplate.git
cd React-Tdd-Boilerplate

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

### Docker로 실행 (선택사항)

```bash
# Docker 이미지 빌드 및 실행
docker build -t react-vite-tailwind .
docker run -p 5173:5173 react-vite-tailwind

# 웹 접속: http://localhost:5173
```

## 📚 문서

각 기능별로 상세한 문서를 제공합니다.

### 🏗️ 아키텍처
- **컴포넌트 구조**: 재사용 가능한 UI 컴포넌트 설계
- **컨테이너 패턴**: 비즈니스 로직과 프레젠테이션 분리
- **상태 관리**: Redux Toolkit 기반 전역 상태 관리
- **라우팅**: React Router 기반 SPA 라우팅

### 🎨 스타일링
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **커스텀 디자인 시스템**: 일관된 디자인 토큰
- **반응형 디자인**: 모바일 퍼스트 접근법
- **다크모드**: 테마 전환 시스템

### 🌍 국제화
- **다국어 지원**: React Intl 기반 i18n
- **동적 언어 전환**: 런타임 언어 변경
- **메시지 관리**: 구조화된 번역 파일 관리

### 🧪 테스팅
- **단위 테스트**: Vitest 기반 컴포넌트 테스트
- **통합 테스트**: 사용자 시나리오 기반 테스트
- **E2E 테스트**: 전체 애플리케이션 테스트 (준비 중)

## 🔧 환경 구성

다음 환경을 지원합니다:

- **개발**: `pnpm dev` - 개발 서버 실행
- **빌드**: `pnpm build` - 프로덕션 빌드
- **프리뷰**: `pnpm preview` - 빌드 결과 미리보기

### 주요 환경 변수

```bash
# .env.local (선택사항)
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My React App
VITE_APP_VERSION=1.0.0
```

## 📂 프로젝트 구조

```
react-vite-tailwind/
├── public/                     # 정적 파일
│   └── vite.svg
├── src/                        # 소스 코드
│   ├── assets/                 # 에셋 파일
│   │   └── react.svg
│   ├── components/             # 재사용 가능한 컴포넌트
│   │   ├── App.tsx            # 메인 앱 컴포넌트
│   │   ├── Header/            # 헤더 컴포넌트
│   │   └── Footer/            # 푸터 컴포넌트
│   ├── containers/            # 페이지 컨테이너
│   │   ├── HomePage/         # 홈페이지
│   │   ├── FeaturePage/      # 기능 페이지
│   │   ├── NotFoundPage/     # 404 페이지
│   │   ├── LanguageProvider/ # 언어 제공자
│   │   └── LocaleToggle/     # 언어 전환 컴포넌트
│   ├── store/                # Redux 상태 관리
│   │   ├── index.ts          # 스토어 설정
│   │   └── slices/           # Redux 슬라이스
│   │       ├── appSlice.ts   # 앱 전역 상태
│   │       ├── homeSlice.ts  # 홈페이지 상태
│   │       └── languageSlice.ts # 언어 상태
│   ├── translations/         # 다국어 번역 파일
│   │   ├── en.json          # 영어
│   │   ├── de.json          # 독일어
│   │   └── ko.json          # 한국어
│   ├── types/               # TypeScript 타입 정의
│   │   └── index.ts
│   ├── utils/               # 유틸리티 함수
│   │   └── request.ts       # HTTP 요청 유틸
│   ├── i18n.ts             # 국제화 설정
│   ├── index.css           # 글로벌 스타일
│   └── main.tsx            # 애플리케이션 진입점
├── .eslintrc.js            # ESLint 설정
├── .prettierrc             # Prettier 설정
├── index.html              # HTML 템플릿
├── package.json            # 프로젝트 설정
├── tailwind.config.js      # Tailwind CSS 설정
├── tsconfig.json           # TypeScript 설정
├── vite.config.ts          # Vite 설정
├── vitest.config.js        # Vitest 설정
└── README.md               # 프로젝트 문서
```

## 🧩 컴포넌트 구조

각 컴포넌트는 다음과 같은 구조를 따릅니다:

```
ComponentName/
├── ComponentName.tsx        # 메인 컴포넌트
├── ComponentName.test.tsx   # 테스트 파일
├── ComponentName.module.css # CSS 모듈 (선택사항)
└── index.ts                # 내보내기 파일
```

### 컨테이너 패턴

```
ContainerName/
├── ContainerName.tsx        # 컨테이너 컴포넌트
├── hooks/                  # 커스텀 훅
│   └── useContainerName.ts
├── components/             # 컨테이너 전용 컴포넌트
└── types/                  # 타입 정의
    └── index.ts
```

## 🛠️ 기술 스택

### 프론트엔드
- **React 19.1+**: 사용자 인터페이스 라이브러리
- **TypeScript 5.9+**: 정적 타입 검사
- **Vite 7.1+**: 빌드 도구 및 개발 서버
- **Tailwind CSS 3.4+**: 유틸리티 우선 CSS 프레임워크

### 상태 관리
- **Redux Toolkit 2.9+**: 상태 관리 라이브러리
- **React Redux 9.2+**: React-Redux 바인딩
- **RTK Query**: 데이터 페칭 및 캐싱

### 라우팅 & 네비게이션
- **React Router DOM 7.9+**: 클라이언트 사이드 라우팅
- **History 5.3+**: 브라우저 히스토리 관리

### 국제화
- **React Intl 7.1+**: 국제화 및 현지화
- **다국어 지원**: 영어, 독일어, 한국어

### 개발 도구
- **ESLint 9.36+**: 코드 린팅
- **Prettier 3.6+**: 코드 포맷팅
- **Vitest 3.2+**: 테스트 러너
- **Turbo 1.13+**: 모노레포 빌드 시스템

### 테스팅
- **React Testing Library 16.3+**: 컴포넌트 테스팅
- **Jest DOM 6.9+**: DOM 매처 확장
- **User Event 14.6+**: 사용자 상호작용 시뮬레이션


### 빌드 최적화
- **Vite**: ESBuild 기반 초고속 빌드
- **Tree Shaking**: 사용하지 않는 코드 제거
- **Code Splitting**: 자동 청크 분할
- **Asset Optimization**: 이미지 및 폰트 최적화

### 런타임 최적화
- **React 19**: 자동 배치 업데이트
- **Redux Toolkit**: 불변성 기반 상태 관리
- **Memoization**: React.memo, useMemo, useCallback
- **Lazy Loading**: 동적 컴포넌트 로딩

### 번들 분석
```bash
# 번들 크기 분석
pnpm build
pnpm preview
```

## 🔒 보안

### 개발 보안
- **TypeScript**: 타입 안전성으로 런타임 오류 방지
- **ESLint**: 보안 취약점 검사
- **Dependency Audit**: 의존성 취약점 검사

### 프로덕션 보안
- **Content Security Policy**: XSS 공격 방지
- **HTTPS**: 암호화된 통신
- **Environment Variables**: 민감한 정보 보호

## 📑 API 문서 및 엔드포인트

### 개발 도구
- **Vite Dev Server**: http://localhost:5173
- **Vitest UI**: `pnpm test:ui`
- **Coverage Report**: `pnpm test:coverage`

### 빌드 결과
- **Production Build**: `dist/` 폴더
- **Preview Server**: `pnpm preview`

## 📝 개발 가이드라인

### 코드 스타일
- **ESLint**: Airbnb 스타일 가이드
- **Prettier**: 일관된 코드 포맷팅
- **TypeScript**: 엄격한 타입 검사

### 커밋 컨벤션
```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가/수정
chore: 빌드 프로세스 또는 도구 변경
```

### 브랜치 전략
- **main**: 프로덕션 브랜치
- **develop**: 개발 브랜치
- **feature/**: 기능 개발 브랜치
- **hotfix/**: 긴급 수정 브랜치

## 🧪 테스트

### 테스트 실행
```bash
# 모든 테스트 실행
pnpm test

# 테스트 UI 실행
pnpm test:ui

# 커버리지 포함 테스트
pnpm test:coverage

# 특정 파일 테스트
pnpm test ComponentName.test.tsx
```

### 테스트 작성 가이드
- **컴포넌트 테스트**: 사용자 관점에서 테스트
- **유닛 테스트**: 개별 함수/유틸리티 테스트
- **통합 테스트**: 여러 컴포넌트 간 상호작용 테스트

## 🧰 스크립트 사용법

### 개발
```bash
pnpm dev          # 개발 서버 실행
pnpm build        # 프로덕션 빌드
pnpm preview      # 빌드 결과 미리보기
```

### 테스팅
```bash
pnpm test         # 테스트 실행
pnpm test:ui      # 테스트 UI 실행
pnpm test:run     # 테스트 한번 실행
pnpm test:coverage # 커버리지 포함 테스트
```

### 코드 품질
```bash
pnpm lint         # ESLint 검사
pnpm format       # Prettier 포맷팅
pnpm format:check # 포맷팅 검사
pnpm type-check   # TypeScript 타입 검사
```

### 유지보수
```bash
pnpm clean        # 캐시 및 빌드 파일 정리
```

### Turbo (모노레포)
```bash
pnpm turbo:dev    # 모든 워크스페이스 개발 서버 실행
pnpm turbo:build  # 모든 워크스페이스 빌드
pnpm turbo:test   # 모든 워크스페이스 테스트
```

## 📸 스크린샷

### 홈페이지
![Homepage](docs/screenshots/homepage.png)

### 다국어 지원
![Internationalization](docs/screenshots/i18n.png)

### 다크모드
![Dark Mode](docs/screenshots/dark-mode.png)

### 테스트 UI
![Test UI](docs/screenshots/test-ui.png)

## 🤝 기여하기

1. 이 저장소를 Fork합니다
2. Feature 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

### 기여 가이드라인
- 코드 스타일 가이드를 따릅니다
- 테스트를 작성합니다
- 문서를 업데이트합니다
- 의미 있는 커밋 메시지를 작성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📮 연락처

- **프로젝트 관리자**: [백동민](https://github.com/dongmin0204)
- **이슈 트래커**: [GitHub Issues](https://github.com/dongmin0204/React-Tdd-Boilerplate/issues)
- **이메일**: nm2200521@gmail.com

## 레퍼런스!

이 보일러플레이트는 다음 오픈소스 프로젝트들의 도움을 받았습니다:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [React Intl](https://formatjs.io/docs/react-intl/)
- [Vitest](https://vitest.dev/)

---
