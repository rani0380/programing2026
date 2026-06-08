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
