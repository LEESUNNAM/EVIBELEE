# CODLE 디자인 시스템 (타이포그래피·스페이싱)

## 프로젝트 정보
- **출처 웹사이트**: 코들(CODLE) AI 교육 솔루션 랜딩페이지
- **분석 날짜**: 2026-06-24
- **참고 포맷**: `color_pallette/DETRE_ColorSystem.md` 구조(CSS 변수 정의 → 사용 가이드 표 → 반응형 고려사항)를 따름
- **적용 프로젝트**: 포트폴리오 웹사이트 디자인 시스템 참고용

## CSS 변수 정의
```css
:root {
  /* Typography - Font Size */
  --font-size-display: 60px;      /* 히어로 메인 타이틀 ("AI 교육, 코들 하나면 돼요!") */
  --font-size-h1: 40px;           /* 섹션 대제목 (마지막 CTA "코들과 함께 하세요!" 등) */
  --font-size-h2: 28px;           /* 넘버링 피처(01~05) 타이틀, 시상 섹션 타이틀 */
  --font-size-h3: 20px;           /* 카드 내부 서브 타이틀 ("의존 적정 없는 AI" 등) */
  --font-size-stat: 52px;         /* 통계 숫자 (750+, 1700+, 12340+, 50%) */
  --font-size-body-lg: 18px;      /* 카드 설명문, 인트로 문단 */
  --font-size-body: 16px;         /* 기본 본문, CTA 버튼 텍스트 */
  --font-size-body-sm: 14px;      /* 피처 설명문, 통계 라벨 */
  --font-size-caption: 13px;      /* 태그 칩, 푸터, 카피라이트 */
  --font-size-nav: 15px;          /* 상단 내비게이션 메뉴 */

  /* Typography - Font Weight */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;

  /* Typography - Line Height */
  --line-height-tight: 1.25;      /* 히어로/섹션 헤드라인 */
  --line-height-base: 1.5;        /* 기본 본문 */
  --line-height-relaxed: 1.7;     /* 피처/카드 설명 단락 */

  /* Spacing Scale */
  --spacing-2xs: 4px;             /* 아이콘-텍스트 사이 */
  --spacing-xs: 8px;              /* 태그 칩 내부 패딩, 칩 사이 gap */
  --spacing-sm: 16px;             /* 버튼 상하 패딩, 라벨-제목 간격 */
  --spacing-md: 24px;             /* 카드 내부 패딩, 제목-본문 간격 */
  --spacing-lg: 32px;             /* 헤드라인-CTA 버튼 간격, 버튼 좌우 패딩 */
  --spacing-xl: 48px;             /* 텍스트 블록-이미지 간격(작은 화면) */
  --spacing-2xl: 64px;            /* 텍스트 블록-이미지 간격(데스크톱) */
  --spacing-3xl: 96px;            /* 일반 섹션 상하 패딩 */
  --spacing-4xl: 120px;           /* 히어로/마지막 CTA 섹션 상하 패딩 */

  /* Border Radius */
  --radius-sm: 8px;               /* 피처 태그 칩, 작은 배지 */
  --radius-md: 16px;              /* 흰색 카드, 인증 박스 */
  --radius-lg: 24px;              /* 다크 카드 목업, 이미지 프레임 */
  --radius-pill: 999px;           /* CTA 버튼, 알약형 배지 */

  /* Shadow / Elevation */
  --shadow-card: 0 8px 24px rgba(0, 0, 0, 0.08);   /* 흰색 카드, 통계 박스 */
  --shadow-button: 0 4px 12px rgba(0, 0, 0, 0.2);  /* 메인 CTA 버튼 */
}
```

## 사용 가이드 표

### 타이포그래피
| 변수 | 적용 위치 | 사용 가이드 |
|---|---|---|
| `--font-size-display` | 히어로 메인 타이틀 | 페이지 내 1회만 사용, 2줄 제한 + `--line-height-tight` 필수 적용 |
| `--font-size-h1` | 마지막 CTA 섹션 대제목 | `--font-weight-extrabold`로 처리, 중앙 정렬 섹션에 사용 |
| `--font-size-h2` | 넘버링 피처(01~05) 타이틀, 시상 섹션 타이틀 | 문장 내 핵심 키워드만 `--font-weight-extrabold`로 부분 강조 |
| `--font-size-h3` | 카드 내부 서브 타이틀 | 카드 패딩(`--spacing-md`) 내부에서 본문보다 1단계 위 강조로 사용 |
| `--font-size-stat` | 통계 숫자(750+, 1700+ 등) | `--font-weight-extrabold` 고정, 단위(+, %)는 `--font-size-body` 크기로 축소 표기 |
| `--font-size-body-lg` | 카드 설명문, 인트로 문단 | `--line-height-relaxed`와 세트로 사용해 가독성 확보 |
| `--font-size-body` | 기본 본문, CTA 버튼 라벨 | 본문 텍스트의 기준값 |
| `--font-size-body-sm` | 피처 설명문, 통계 라벨 | `--font-weight-regular`로 본문보다 가볍게 처리 |
| `--font-size-caption` | 태그 칩, 푸터, 카피라이트 | 가장 낮은 정보 우선순위에만 제한적으로 사용 |
| `--font-size-nav` | 상단 내비게이션 메뉴 | `--font-weight-medium`로 본문과 구분되는 두께감 부여 |

### 스페이싱
| 변수 | 적용 위치 | 사용 가이드 |
|---|---|---|
| `--spacing-2xs` / `--spacing-xs` | 태그 칩 내부 패딩, 아이콘-텍스트 간격, 칩 사이 gap | 4~8px 단위, 촘촘한 인라인 요소에만 사용 |
| `--spacing-sm` / `--spacing-md` | 버튼 패딩, 카드 내부 요소 간격, 라벨-제목 간격 | 버튼은 상하 `--spacing-sm` · 좌우 `--spacing-lg` 비율 권장 |
| `--spacing-lg` | 헤드라인-CTA 버튼 간격, 카드 내부 패딩 | 텍스트 블록과 인터랙션 요소 사이 여백 기준값 |
| `--spacing-xl` / `--spacing-2xl` | 텍스트 블록-이미지 좌우 간격 | 피처(01~05) 좌우 분할 레이아웃에서 사용, 화면 크기에 따라 단계 조정 |
| `--spacing-3xl` / `--spacing-4xl` | 섹션 간 상하 패딩 | 데스크톱 기준값, 섹션 간 시각적 분리를 명확히 할 때 사용 |

### 보더 라디우스 & 그림자
| 변수 | 적용 위치 | 사용 가이드 |
|---|---|---|
| `--radius-sm` | 피처 태그 칩, 작은 배지 | 1px 보더와 함께 사용해 칩 형태 강조 |
| `--radius-md` | 흰색 카드, 인증/통계 박스 | `--shadow-card`와 세트로 사용 |
| `--radius-lg` | 다크 카드 목업, 우측 이미지 프레임 | 섹션 내 시각적 포인트 영역에 사용 |
| `--radius-pill` | 모든 CTA 버튼, 알약형 배지 | 브랜드 일관성을 위해 버튼 형태를 페이지 전체에서 고정 |
| `--shadow-card` | 흰색 카드, 통계/인증 박스 | 배경과 약하게 분리되는 정도로 사용(과도한 그림자 지양) |
| `--shadow-button` | 메인 CTA 버튼 | hover 시 그림자 강도를 소폭 키워 클릭 피드백 제공 |

## 반응형 고려사항

- **폰트 스케일 축소**: 모바일에서는 `--font-size-display`(60px→약 36px), `--font-size-h1`(40px→약 28px), `--font-size-h2`(28px→약 22px) 순으로 단계적으로 축소하고, `--font-size-body`/`--font-size-caption`은 최소 14px/12px 이하로 내려가지 않도록 유지해 가독성을 확보한다.
- **섹션 패딩 축소**: 데스크톱 전용값인 `--spacing-3xl`/`--spacing-4xl`은 모바일에서 `--spacing-xl`~`--spacing-2xl` 수준으로 축소하고, 카드·버튼 내부 패딩(`--spacing-sm`~`--spacing-lg`)은 가능한 동일하게 유지해 터치 영역을 보존한다.
- **레이아웃 전환**: 피처(01~05)·시상 섹션의 텍스트-이미지 좌우 분할 구조는 모바일에서 텍스트 우선 세로 스택으로 전환하고, 이미지는 너비 100%로 확장하며 `--spacing-xl`/`--spacing-2xl` 간격을 그대로 텍스트-이미지 사이 수직 여백으로 재사용한다.
- **장식 요소 최소화**: "GLOBAL CODE" 워터마크, 01~05 대형 넘버링 배경 등 초대형 장식 타이포는 좁은 화면에서 본문을 가리거나 가독성을 해치므로 모바일 breakpoint에서는 숨김 처리하거나 크기를 50% 이하로 축소한다.
- **가독성(줄간격)**: 설명 단락에는 `--line-height-relaxed`를 유지해 줄간격으로 가독성을 보완하고, 캡션류 텍스트는 `--font-size-caption` 기준 13px 이하로 내려가지 않도록 한다.
