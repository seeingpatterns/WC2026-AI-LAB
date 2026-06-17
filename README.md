# WC2026 AI LAB ⚽

FIFA EFI(Hawk-Eye 실측 트래킹, 무료 공개)를 토대로 한 **공개 인터랙티브 월드컵 전술 사이트**.
정적(클라이언트 전용) → GitHub Pages / Netlify에 그대로 배포.

## 빠른 시작
- 로컬: `index.html`을 브라우저로 열면 끝 (빌드 불필요).
- 배포: 이 폴더를 GitHub 레포 루트에 올리고 **Settings → Pages → Branch: main / root**. 또는 Netlify에 폴더 드래그.

## 폴더 구조
```
WC2026_AI_LAB/
├─ index.html              랜딩(히어로 + 기능 네비)
├─ dex.html                📇 선수 도감 (LIVE)
├─ multiverse.html         🦋 평행우주        (예정)
├─ ghost.html              👻 유령 토너먼트   (예정)
├─ oracle.html             🔮 예언 엔진       (예정)
├─ assets/
│  ├─ data.js              window.LAB = {TEAM,P,T,MATCHES,FIXTURES}  ← 데이터 단일소스
│  ├─ faces.js             window.FACES = 캐릭터 얼굴 시스템
│  └─ style.css            공유 테마(다크+골드)
├─ docs/
│  ├─ plans/               설계/결정 기록(날짜별)
│  └─ progress/            로드맵·페이즈
├─ project-ops/            개발 워크플로(SNAPSHOT/TASK_REQUEST/WORKER_REPORT/INSTRUCTION + templates)
├─ AGENTS.md               작업 규칙·안전 가드레일
├─ CLAUDE.md               코웍 핸드오프 스펙
└─ README.md               (이 파일)
```

## 데이터
- 단일 소스 `assets/data.js`. **새 경기 EFI = 여기에 append** → 모든 페이지 자동 확장.
- 출처: [FIFA EFI Match Report Hub](https://www.fifatrainingcentre.com/en/fifa-world-cup-2026/match-report-hub.php).

## 면책
- 능력치·스탯 = ✅실측. 평행우주/유령/예언 결과 = 실측에서 도출한 **AI 설계 휴리스틱** 출력(베팅용 아님).
