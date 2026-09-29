# 프로그래밍기능사 CBT 정적 웹사이트

프로그래밍기능사 필기 기출문제를 CBT 화면처럼 풀 수 있는 HTML, CSS, JavaScript 기반 정적 웹사이트입니다.

## 구성

- `index.html`: 메인 화면
- `pages/exam-list.html`: 연도별, 회차별 기출문제 선택
- `pages/quiz.html`: 문제 풀이, 정답 확인, 해설, 오답 저장
- `pages/study.html`: 과목별 학습정리
- `pages/wrong-note.html`: 브라우저 저장소 기반 오답노트
- `js/questions.js`: 문제 데이터
- `css/style.css`: 전체 디자인

## GitHub Pages 게시 방법

1. GitHub에서 새 저장소를 만듭니다.
2. 이 폴더의 모든 파일을 저장소에 업로드합니다.
3. 저장소의 `Settings`로 이동합니다.
4. 왼쪽 메뉴에서 `Pages`를 선택합니다.
5. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
6. Branch를 `main`, 폴더를 `/root`로 선택한 뒤 저장합니다.
7. 잠시 후 표시되는 GitHub Pages 주소로 접속합니다.

## 문제 추가 방법

`js/questions.js` 파일의 `questions` 배열에 아래 형식으로 문제를 추가하면 됩니다.

```js
{
  id: 9,
  year: 2026,
  round: 1,
  subject: "프로그래밍 언어 활용",
  question: "문제 내용을 입력하세요.",
  choices: ["선택지1", "선택지2", "선택지3", "선택지4"],
  answer: 0,
  explanation: "해설을 입력하세요."
}
```

`answer`는 정답 선택지의 순서입니다. 첫 번째 선택지는 `0`, 두 번째 선택지는 `1`입니다.

## 참고

현재 오답노트는 사용자의 브라우저 `localStorage`에 저장됩니다. 로그인, 관리자 문제 등록, 학생별 점수 기록이 필요하면 Firebase나 Supabase 같은 백엔드를 연결하면 됩니다.


## 실기 학습 (2026-09-29)

상단 **실기 학습** 메뉴 또는 `pages/practical.html`에서 시작합니다.
Linux, Python, 재귀·트리, Java, SQL의 8개 단원과 자체 제작한 단계별 문제 24개를 제공합니다.
각 단원은 개념 → 단계별 예제 → 주관식 연습 순서입니다. 힌트·해설 확인과 브라우저별 답안 저장을 지원합니다.
공용 PC에서는 **학습 단원 선택 → 실기 학습 기록 초기화**로 이전 기록을 지울 수 있습니다.
학생별 계정이나 교사용 성적 집계 기능은 없으며, 코드를 직접 실행하지 않습니다.

- `js/practical-data.js`: 단원 개념, 예제 흐름, 문제·정답·해설
- `js/practical.js`: 단원 선택, 학습 단계, 답안 비교, 로컬 기록
- `css/practical.css`: 실기 페이지와 홈 진입 링크 스타일
- `localStorage` 키: `practical-study-v1` (기존 필기 기록과 분리)

첨부 수업 자료 `20260929105853.pdf`에서 확인한 주제를 참고했습니다. 원문 파일은 게시하지 않으며,
각 단원의 참고 쪽수는 PDF 파일 기준입니다. 설명과 연습문제는 새로 작성한 수업용 콘텐츠이며 공식 기출/채점 기준이 아닙니다.
답안 비교는 앞뒤 공백과 연속 공백·줄바꿈을 정리하며, SQL 키워드 문제만 대소문자를 무시합니다.
