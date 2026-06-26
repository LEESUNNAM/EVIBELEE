# Dashboard 디자인 시스템 (타이포그래피·스페이싱)

## 프로젝트 정보
- **출처 레퍼런스**: eCoursie — 온라인 학습 플랫폼 대시보드 UI
- **분석 날짜**: 2026-06-26
- **참고 포맷**: `DesignSystem/CODLE_DesingSystem.md` 구조(CSS 변수 정의 → 사용 가이드 표 → 반응형 고려사항)를 따름
- **적용 프로젝트**: 포트폴리오 웹사이트 디자인 시스템 참고용

## CSS 변수 정의
```css
:root {
  /* Typography - Font Size */
  --font-size-page-title: 28px;    /* 페이지 제목 ("My Courses") */
  --font-size-h2: 20px;            /* 카드 제목, 섹션 헤더 ("Online Users", "Nov 2020") */
  --font-size-nav: 14px;           /* 사이드바 네비게이션 라벨 */
  --font-size-body: 14px;          /* 기본 본문 */
  --font-size-body-sm: 13px;       /* 카드 설명, 필터 드롭다운 라벨, "Created by" */
  --font-size-caption: 12px;       /* ID 넘버, 달력 날짜 숫자, 카피라이트 */
  --font-size-day-label: 12px;     /* 달력 요일 헤더 (Mon, Tue …) */

  /* Typography - Font Weight */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Typography - Line Height */
  --line-height-tight: 1.2;        /* 카드 제목, 섹션 헤더 */
  --line-height-base: 1.5;         /* 기본 본문 */
  --line-height-relaxed: 1.6;      /* 카드 설명 단락 */

  /* Spacing Scale */
  --spacing-2xs: 4px;              /* 온라인 상태 점 여백, 아이콘-텍스트 사이 */
  --spacing-xs: 8px;               /* 필터 칩 사이 gap, 네비 아이템 사이 gap */
  --spacing-sm: 12px;              /* 필터 드롭다운 패딩, 네비 아이템 내부 패딩 */
  --spacing-md: 16px;              /* 카드 간격, 유저 리스트 행 간격 */
  --spacing-lg: 20px;              /* 카드 내부 패딩, 섹션 헤더 하단 여백 */
  --spacing-xl: 24px;              /* 패널 내부 패딩, 헤더 영역 상하 패딩 */
  --spacing-2xl: 32px;             /* 사이드바 상단 여백, 주요 영역 간 간격 */

  /* Layout */
  --sidebar-width: 200px;          /* 좌측 사이드바 고정 너비 */
  --right-panel-width: 280px;      /* 우측 패널(달력·유저 목록) 고정 너비 */
  --avatar-size-md: 40px;          /* 유저 아바타, 헤더 프로필 이미지 */
  --avatar-size-sm: 32px;          /* 달력 날짜 선택 원형 */
  --icon-size: 20px;               /* 검색·알림 등 기본 아이콘 크기 */
  --cta-button-size: 44px;         /* 카드 내 원형 CTA 버튼 지름 */

  /* Border Radius */
  --radius-sm: 8px;                /* 사이드바 활성 항목 하이라이트 */
  --radius-md: 16px;               /* 필터 드롭다운 버튼 */
  --radius-lg: 24px;               /* 코스 카드, 전체 대시보드 컨테이너 */
  --radius-circle: 50%;            /* 아바타, CTA 버튼, 달력 날짜 원형 */

  /* Shadow / Elevation */
  --shadow-card: 0 4px 16px rgba(0, 0, 0, 0.06);     /* 코스 카드 */
  --shadow-container: 0 8px 32px rgba(0, 0, 0, 0.10); /* 전체 대시보드 컨테이너 */
}
```

## 사용 가이드 표

### 타이포그래피
| 변수 | 적용 위치 | 사용 가이드 |
|---|---|---|
| `--font-size-page-title` | 페이지 제목 "My Courses" | `--font-weight-bold`, `--line-height-tight`와 함께 사용. 콘텐츠 영역 최상단에 1회만 사용 |
| `--font-size-h2` | 카드 제목, "Online Users", "Nov 2020" | `--font-weight-bold` 처리. 섹션 시작을 명확히 구분하는 헤더에 사용 |
| `--font-size-nav` | 사이드바 네비게이션 라벨 | `--font-weight-medium`으로 처리. 활성 항목만 `--font-weight-bold`로 구분 |
| `--font-size-body` | 기본 본문 텍스트 | `--line-height-base`와 함께 본문 정보의 기준값으로 사용 |
| `--font-size-body-sm` | 카드 설명문, 필터 드롭다운 라벨, "Created by" | `--line-height-relaxed`와 세트로 사용해 좁은 카드 내 가독성 확보 |
| `--font-size-caption` | ID 넘버, 달력 날짜 숫자, 카피라이트 | 가장 낮은 정보 우선순위에만 사용. `--font-weight-regular` 고정 |
| `--font-size-day-label` | 달력 요일 헤더 (Mon~Sun) | `--font-weight-semibold`로 날짜 숫자와 구분감 부여 |

### 스페이싱
| 변수 | 적용 위치 | 사용 가이드 |
|---|---|---|
| `--spacing-2xs` / `--spacing-xs` | 온라인 상태 점, 아이콘-텍스트 사이, 필터 칩·네비 아이템 간격 | 4~8px 단위, 인라인 밀집 요소에만 사용 |
| `--spacing-sm` | 필터 드롭다운 내부 패딩, 네비 아이템 내부 패딩 | 터치 영역 최소 보장. 좌우 패딩에 `--spacing-md` 추가 적용 권장 |
| `--spacing-md` | 카드 간격, 유저 리스트 행 간격 | 반복 리스트 요소의 기본 행 간격 기준값 |
| `--spacing-lg` | 카드 내부 패딩, 섹션 헤더 하단 여백 | 카드 내부에서 제목-설명 간격과 전체 패딩에 일관 적용 |
| `--spacing-xl` | 패널 내부 패딩, 헤더 상하 패딩 | 각 패널 경계 여백 기준값 |
| `--spacing-2xl` | 사이드바 상단 여백, 주요 패널 간 간격 | 대형 영역 구분에만 사용하고 내부 요소에는 사용 금지 |

### 레이아웃
| 변수 | 적용 위치 | 사용 가이드 |
|---|---|---|
| `--sidebar-width` | 좌측 사이드바 | 고정 너비로 유지. 모바일에서는 아이콘 전용 모드(48px)로 축소 또는 오버레이 전환 |
| `--right-panel-width` | 달력·유저 목록 패널 | 고정 너비 유지. 태블릿 이하에서는 탭 또는 하단 시트로 전환 |
| `--avatar-size-md` | 헤더 프로필, 유저 리스트 아바타 | `--radius-circle`과 세트로 사용. alt 텍스트 필수 |
| `--avatar-size-sm` | 달력 날짜 선택 원형 | 날짜 숫자(`--font-size-caption`)가 원 안에 들어오도록 크기 고정 |
| `--icon-size` | 검색, 알림, 네비 아이콘 | 아이콘 클릭 영역은 최소 40×40px 확보(패딩으로 보완) |
| `--cta-button-size` | 카드 내 원형 CTA 버튼 | `--radius-circle` 고정. 호버 시 그림자 강도를 높여 피드백 제공 |

### 보더 라디우스 & 그림자
| 변수 | 적용 위치 | 사용 가이드 |
|---|---|---|
| `--radius-sm` | 사이드바 활성 항목 하이라이트 | 사이드바 배경과 대비되는 흰색 필 + 해당 라디우스로 구분감 부여 |
| `--radius-md` | 필터 드롭다운 버튼 | 보더 1px와 함께 사용해 필터 칩 형태 강조 |
| `--radius-lg` | 코스 카드, 대시보드 전체 컨테이너 | `--shadow-card` / `--shadow-container`와 세트로 사용 |
| `--radius-circle` | 아바타, CTA 버튼, 달력 날짜 원형 | 정사이즈 정사각형 요소에만 적용해 진정한 원형 유지 |
| `--shadow-card` | 코스 카드 | 배경과 약하게 분리되는 정도로 사용(과도한 그림자 지양) |
| `--shadow-container` | 전체 대시보드 컨테이너 | 외부 배경(라벤더 그라데이션)과 내부 영역을 분리하는 데 한 번만 사용 |

## 반응형 고려사항

- **폰트 스케일 축소**: 모바일에서는 `--font-size-page-title`(28px→22px), `--font-size-h2`(20px→18px)로 축소하고, `--font-size-body-sm`/`--font-size-caption`은 최소 12px 이하로 내려가지 않도록 유지해 가독성을 확보한다.
- **레이아웃 전환**: 태블릿 이하에서는 좌측 사이드바를 아이콘 전용(~48px) 또는 상단 햄버거 메뉴로 전환하고, 우측 패널(달력·유저 목록)은 탭 UI나 하단 시트(bottom sheet)로 분리해 메인 콘텐츠 영역 너비를 최대한 확보한다.
- **카드 레이아웃 조정**: 코스 카드 내부의 좌우 분할(일러스트·텍스트)은 모바일에서 일러스트를 상단 배치 또는 축소 처리하고, 카드 내부 패딩은 `--spacing-lg`에서 `--spacing-md`로 축소해 화면 여백을 확보한다.
- **터치 영역 보장**: `--icon-size`(20px) 아이콘 및 `--cta-button-size`(44px) 버튼의 실제 클릭 영역은 최소 44×44px를 유지하고, 달력 날짜 선택 원형(`--avatar-size-sm`)은 모바일에서 40px 이상으로 확대해 터치 오작동을 방지한다.
- **가독성(줄간격)**: 카드 설명 단락에는 `--line-height-relaxed`를 유지해 좁은 카드 너비에서도 줄간격으로 가독성을 보완하고, 캡션류 텍스트는 `--font-size-caption` 기준 12px 이하로 내려가지 않도록 한다.
