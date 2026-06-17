# WC2026 AI LAB — 월드컵 전술 인텔리전스 웹사이트 (핸드오프)

**FIFA EFI 실측 데이터**(Hawk-Eye 트래킹, 무료 공개)를 토대로, 사람들이 직접 만지는 **공개 인터랙티브 웹사이트**.
정적 사이트 → GitHub Pages/Netlify에 그대로 배포.

## 컨셉 (탭)
1. **📇 선수 도감** (`dex.html`) — 선수 EFI 능력치 카드 + 대회 랭킹/기록. *(완성)*
2. **🦋 평행우주** (`multiverse.html`) — 실제 경기 변수 하나(퇴장/교체/전술)를 바꿔 EFI 기반 대체 결과 투영. *(예정)*
3. **👻 AI 유령 토너먼트** (`ghost.html`) — 팀 EFI DNA로 자율 시뮬 → 예측 브래킷/순위. 실제와 비교·갱신. *(예정)*
4. **🔮 자가채점 예언 엔진** (`oracle.html`) — 경기 전 반증가능 예언 발행 → 결과 후 자동 채점·적중률 누적. *(예정)*
5. **🧬 팀 DNA/상성**(보너스) — 4팀 EFI 게놈 비교 + 스타일 상성표. *(예정)*

## 구조
```
WC2026_AI_LAB/
  index.html          랜딩(히어로+네비)
  dex.html            선수 도감
  multiverse.html     평행우주        (예정)
  ghost.html          유령 토너먼트   (예정)
  oracle.html         예언 엔진       (예정)
  assets/
    data.js           window.LAB = {TEAM,P,T,MATCHES,FIXTURES}  ← 데이터 단일소스
    faces.js          window.FACES = {faceCanvas,hair2D,drawHead,headCanvas}
    style.css         공유 테마
  README.md           배포 가이드      (예정)
```

## 데이터 (assets/data.js)
- `P`: 선수별 실측 — spd(최고속도) spr(스프린트) hsr(고속런) dist(km) lb(라인브레이크) rg(볼탈취) g(골) + 얼굴 f.
- `T`: 팀별 EFI — poss·xg·lb·ftr(파이널서드리셉션)·hiLine(라인높이)·ph(국면%)·ballRec·style·form.
- `MATCHES`: 검증된 결과. `FIXTURES`: 다가올 경기(예언용).
- **경기 추가 = data.js에 append**하면 모든 탭이 자동 확장. (출처: FIFA Training Centre EFI Match Report Hub PDF)

## 규칙
- 정적·클라이언트 전용(백엔드 X). 모델/예측은 **EFI에서 도출한 결정적 휴리스틱**(LLM 실시간 호출 아님) — UI에 "AI 설계 모델" 명시.
- 실측 수치 = ✅REAL 라벨, 추정/모델 = 구분 표기. 출처 링크 항상.
- 얼굴은 식별용 캐릭터(사진 아님). 어두운 피부 + 어두운 라인 대비 주의.
- 새 탭 추가 시 `assets/`를 재사용(중복 코드 금지).

## 다음 작업
1. multiverse.html (평행우주) — 시나리오 토글 → 결과 재계산 + 내레이션.
2. ghost.html (유령 토너먼트) — 팀 레이팅(xG·점유·라인브레이크 가중) → 대진 시뮬.
3. oracle.html (예언 엔진) — 6/18 멕시코-한국 예언 + 결과 후 채점 슬롯.
4. README.md 배포 가이드.
