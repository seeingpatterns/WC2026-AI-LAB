# PROJECT SNAPSHOT

## Project
- Name: WC2026 AI LAB
- Purpose: FIFA EFI 실측 기반 공개 인터랙티브 월드컵 전술 사이트. 사람들이 직접 만지는 5개 탭.
- Current phase: Phase 0~1 완료(스캐폴드·에셋·랜딩·도감). 다음 = Phase 2 평행우주.

## Stack
- Frontend: Vanilla HTML/CSS/JS (정적, 빌드 없음)
- Backend: 없음 (클라이언트 전용)
- Data: assets/data.js (FIFA EFI 추출 정적 JSON)
- Tooling: node --check (문법검증)

## Key Paths
- /index.html, /dex.html        (페이지)
- /assets/data.js               (데이터 단일소스)
- /assets/faces.js, /assets/style.css (공유 로직/테마)
- /docs/plans, /docs/progress
- /project-ops

## Relevant Files
- path: `/README.md`        role: overview
- path: `/AGENTS.md`        role: constraints/safety
- path: `/CLAUDE.md`        role: cowork handoff spec
- path: `/assets/data.js`   role: 데이터 단일소스 (선수35·팀4)
- path: `/docs/progress/roadmap.md` role: 진행상황
- path: `/dex.html`         role: 완성 기능(선수 도감)

## Data coverage
- Group A 2경기 (M01 MEX-RSA, M02 KOR-CZE). 출처: FIFA EFI Match Report Hub.
