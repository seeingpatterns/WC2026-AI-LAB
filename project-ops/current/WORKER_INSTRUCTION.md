# WORKER INSTRUCTION

## Objective
- multiverse.html 제작 (🦋 평행우주).

## Files likely involved
- /multiverse.html (신규), /assets/data.js (read), /assets/style.css, /assets/faces.js

## Constraints
- 정적·클라이언트 전용. data.js 외 수치 하드코딩 금지. 공유 nav/테마 준수.

## Step-by-step tasks
1. data.js의 T(팀 EFI)에서 baseRating(xg·poss·lb·ftr 가중) 산출 함수.
2. 시나리오 모디파이어 정의(퇴장→상대 수비 -, 교체→공격 - 등) → 조정 레이팅.
3. 조정 레이팅 → 예상 xG/스코어 재계산(포아송 근사) + 내레이션 생성.
4. 토글 UI + before/after 비교 시각화.

## Validation steps
- node --check (inline script), 콘솔 에러 0, 토글 동작 확인.

## Report format
- WORKER_REPORT.md 갱신 (Summary/Files/Validation/Next).
