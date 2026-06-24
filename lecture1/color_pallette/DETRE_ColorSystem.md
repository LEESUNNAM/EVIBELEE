# 컬러 팔레트 디자인 시스템

## 프로젝트 정보
- **출처 웹사이트**: 디에트르(D'etre) 옥정중앙역 분양 홈페이지
- **분석 날짜**: 2026-06-24
- **적용 프로젝트**: 포트폴리오 웹사이트

## CSS 변수 정의
```css
:root {
  /* Primary Colors */
  --color-primary: #2B3868;
  --color-primary-light: #757E9D;
  --color-primary-dark: #202A4E;

  /* Secondary Colors */
  --color-secondary: #4B5C45;
  --color-accent: #7E9180;

  /* Background Colors */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F2F4F8;

  /* Text Colors */
  --color-text-primary: #2B3868;
  --color-text-secondary: #3D4A6B;
  --color-text-muted: #A0A5BB;

  /* Interactive Colors */
  --color-button-primary: #2B3B5A;
  --color-button-hover: #25324D;
  --color-link: #4B5C45;
  --color-link-hover: #7E9180;
}
```

## 컬러 사용 가이드

| 변수 | 용도 | 사용 가이드 |
|---|---|---|
| `--color-primary` | 메인 헤드라인, 로고, 핵심 브랜드 요소 | 신뢰감을 줘야 하는 타이틀·헤더 영역에 사용. 너무 넓은 면적에는 사용하지 않음 |
| `--color-primary-light` | 보조 강조 텍스트, hover 상태 배경 | primary보다 가벼운 느낌이 필요한 부제목, 비활성/hover 배경에 사용 |
| `--color-primary-dark` | 다크모드 배경, 깊은 강조 영역 | 어두운 섹션(푸터 등) 배경이나 다크모드 base 컬러로 사용 |
| `--color-secondary` | 사이드 패널, 카드 배경, 보조 섹션 | 자연/안정감을 주는 보조 배경. primary와 함께 쓸 때 면적 비율을 작게 유지 |
| `--color-accent` | CTA 보조 버튼, 포인트 아이콘 | 클릭을 유도하지만 메인 CTA보다는 약한 강조가 필요한 곳에 사용 |
| `--color-bg-primary` | 페이지 기본 배경 | 모든 페이지의 기본 배경색. 콘텐츠 가독성 최우선 |
| `--color-bg-secondary` | 섹션 구분용 배경 | 페이지 내 섹션을 시각적으로 구분할 때 옅은 톤으로 교차 사용 |
| `--color-text-primary` | 본문 제목, 핵심 텍스트 | 가장 중요한 텍스트(H1~H3)에 사용, 충분한 대비 확보 |
| `--color-text-secondary` | 본문 단락, 설명 텍스트 | 본문(P) 텍스트의 기본값으로 사용 |
| `--color-text-muted` | 캡션, 보조 설명, placeholder | 우선순위가 낮은 텍스트(날짜, 부가설명)에 사용 |
| `--color-button-primary` | 주요 CTA 버튼 배경 | "신청하기", "문의하기" 등 핵심 행동 유도 버튼에 사용 |
| `--color-button-hover` | 버튼 hover/active 상태 | primary 버튼보다 약 15% 어둡게 설정해 클릭 피드백 제공 |
| `--color-link` | 본문 내 링크 텍스트 | 텍스트 사이 링크가 구별되도록 secondary 톤 사용 |
| `--color-link-hover` | 링크 hover 상태 | hover 시 accent 톤으로 밝아지며 인터랙션 피드백 제공 |

## 반응형 고려사항

- **다크모드 적용**: `--color-bg-primary`/`--color-bg-secondary`를 `--color-primary-dark`(#202A4E) 및 그보다 한 단계 더 어두운 톤으로 교체하고, `--color-text-primary`/`--color-text-secondary`는 흰색 계열(`#F2F4F8`, `#FFFFFF`)로 반전해 충분한 명도 대비를 확보한다.
- **모바일 화면**: 원본 사이트의 하늘 그라데이션 배경은 모바일에서는 단순화하여 `--color-bg-secondary` 단색 또는 2색 그라데이션으로 축소 적용하고, 사이드 패널(`--color-secondary`) 영역은 모바일에서 하단 고정 바 형태로 전환할 때 동일 컬러를 유지한다.
- **접근성(대비)**: `--color-text-muted`(#A0A5BB)는 명도가 높아 `--color-bg-primary`(#FFFFFF) 위에서 작은 텍스트로 사용 시 WCAG AA 기준에 못 미칠 수 있으므로, 14px 이하 텍스트에는 사용을 피하고 캡션·아이콘 보조 텍스트 등 제한적 용도로만 사용한다.
- **다양한 화면 밀도**: 버튼류(`--color-button-primary`, `--color-accent`)는 화면 크기와 무관하게 고정 컬러를 유지해 브랜드 일관성을 확보하고, 배경 그라데이션 등 장식적 요소만 breakpoint별로 단순화한다.
