# TASK REQUEST

## Goal
- 🦋 평행우주(multiverse.html) 구현: 실제 경기의 변수 하나를 바꿔 EFI 기반 대체 결과를 투영.

## Scope
- 새 페이지 multiverse.html (nav/공유에셋 사용).
- 시나리오 토글: 몬테스 퇴장 취소 / 손흥민 미교체 / 한국 하이프레스 채택 등.
- 토글 → 팀 레이팅·xG·스코어 재계산 + 한 줄 내레이션 + 변화 시각화.

## Non-goals
- 실시간 데이터, 정밀 물리 시뮬. (휴리스틱 투영으로 충분)

## Acceptance Criteria
- file:// 단독 동작, 콘솔 에러 0, node --check 통과.
- 모든 출력에 "AI 모델(추정)" 라벨. 실측 기준점은 ✅표기.

## Risks / Notes
- 모델 단순화 한계를 UI에 명시(과신 금지).
