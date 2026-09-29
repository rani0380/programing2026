// 원본 20260929105853.pdf의 파일 기준 쪽수. 문제·해설은 원문 이미지로 표시합니다.
// answers가 null이면 자동 판정하지 않고 원문 대조 후 사용자가 채점합니다.
window.practicalMockSource = '출처: 첨부 자료 20260929105853.pdf의 모의고사 1~4회 원문(파일 27~89쪽). 원본 스캔에 일부 좌우 글자가 잘린 부분이 있습니다. 원문을 임의로 보완하지 않았습니다.';
window.practicalMockExams = [
  {id:'pdf-1', title:'모의고사 1회', description:'첨부 PDF 27~32쪽 · 정답 및 해설 33~39쪽',
    questionPages:[27,28,29,30,31,32], solutionPages:[33,34,35,36,37,38,39],
    questions:[
      {page:27, solutions:[33], category:'경로', answers:['/var/www/html/assets/images']},
      {page:27, solutions:[33], category:'Linux 명령어', answers:['cat chown'], inputHint:'①, ②의 답을 순서대로 공백 또는 줄바꿈으로 구분하세요.'},
      {page:27, solutions:[33], category:'SQL 작성', answers:null},
      {page:28, solutions:[33], category:'SQL 빈칸', answers:['ON 학번'], mode:'keyword', inputHint:'①, ②의 답을 순서대로 공백 또는 줄바꿈으로 구분하세요.'},
      {page:28, solutions:[34], category:'SQL 빈칸', answers:null},
      {page:29, solutions:[34], category:'SQL 결과표', answers:null},
      {page:29, solutions:[35], category:'Java 실행 결과', answers:['16']},
      {page:30, solutions:[35,36], category:'Python 빈칸', answers:['count split'], inputHint:'①, ②의 답을 순서대로 공백 또는 줄바꿈으로 구분하세요.'},
      {page:30, solutions:[36], category:'Java 실행 결과', answers:null},
      {page:31, solutions:[37], category:'Java 실행 결과', answers:['Ab']},
      {page:31, solutions:[38], category:'Python 실행 결과', answers:null},
      {page:32, solutions:[39], category:'Python 오류·실행 결과', answers:['2 ck'], inputHint:'① 오류가 발생한 줄 번호, ② 실행 결과를 순서대로 입력하세요.'}
    ]},
  {id:'pdf-2', title:'모의고사 2회', description:'첨부 PDF 40~46쪽 · 정답 및 해설 47~58쪽',
    questionPages:[40,41,42,43,44,45,46], solutionPages:[47,48,49,50,51,52,53,54,55,56,57,58],
    questions:[
      {page:40, solutions:[47], category:'경로', answers:['/home/docs/api']},
      {page:40, solutions:[47], category:'Linux 명령어', answers:['ls fsck'], inputHint:'①, ②의 답을 순서대로 공백 또는 줄바꿈으로 구분하세요.'},
      {page:40, solutions:[47], category:'SQL 작성', answers:null},
      {page:41, solutions:[47], category:'SQL 빈칸', answers:["'김%' ASC",'김% ASC','‘김%’ ASC'], mode:'keyword', inputHint:'① 패턴, ② 정렬 방향을 순서대로 입력하세요. 패턴의 작은따옴표는 생략해도 됩니다.'},
      {page:41, solutions:[48], category:'SQL 결과표', answers:null},
      {page:42, solutions:[48], category:'SQL 빈칸', answers:null},
      {page:42, solutions:[49], category:'Java 빈칸·실행 결과', answers:['getNumericValue 4'], inputHint:'① 메서드명, ② 실행 결과를 순서대로 입력하세요.'},
      {page:43, solutions:[50], category:'Java 오류 수정', answers:null},
      {page:44, solutions:[51,52,53,54], category:'Java 실행 결과', answers:['1a3b3']},
      {page:45, solutions:[54,55], category:'Python 실행 결과', answers:['GFedCbA']},
      {page:45, solutions:[56,57], category:'Python 재귀', answers:['6']},
      {page:46, solutions:[58], category:'Python 리스트', answers:null}
    ]},
  {id:'pdf-3', title:'모의고사 3회', description:'첨부 PDF 59~65쪽 · 정답 및 해설 66~75쪽',
    questionPages:[59,60,61,62,63,64,65], solutionPages:[66,67,68,69,70,71,72,73,74,75],
    questions:[
      {page:59, solutions:[66], category:'경로', answers:null},
      {page:59, solutions:[66], category:'Linux 명령어', answers:null},
      {page:60, solutions:[66], category:'Linux 권한', answers:null},
      {page:60, solutions:[66], category:'SQL 작성', answers:null},
      {page:60, solutions:[67], category:'SQL 결과표', answers:null},
      {page:61, solutions:[68], category:'SQL 빈칸', answers:null},
      {page:61, solutions:[68], category:'SQL 권한', answers:null},
      {page:62, solutions:[69], category:'Java 실행 결과', answers:['5P']},
      {page:62, solutions:[70], category:'Java 실행 결과', answers:['3.14']},
      {page:63, solutions:[70,71], category:'Python 딕셔너리', answers:['238']},
      {page:64, solutions:[72], category:'Java 실행 순서', answers:null},
      {page:65, solutions:[73], category:'Python 실행 결과', answers:['5']},
      {page:65, solutions:[74,75], category:'Python 재귀', answers:null}
    ]},
  {id:'pdf-4', title:'모의고사 4회', description:'첨부 PDF 76~81쪽 · 정답 및 해설 82~89쪽',
    questionPages:[76,77,78,79,80,81], solutionPages:[82,83,84,85,86,87,88,89],
    questions:[
      {page:76, solutions:[82], category:'경로', answers:null},
      {page:76, solutions:[82], category:'시스템', answers:null},
      {page:76, solutions:[82], category:'SQL 작성', answers:null},
      {page:77, solutions:[82], category:'SQL 결과표', answers:null},
      {page:77, solutions:[83], category:'SQL 빈칸', answers:['SET BETWEEN AND'], mode:'keyword', inputHint:'①, ②, ③의 답을 순서대로 공백 또는 줄바꿈으로 구분하세요.'},
      {page:78, solutions:[83], category:'SQL 조인', answers:null},
      {page:78, solutions:[83,84], category:'Java 문자열', answers:null},
      {page:79, solutions:[85], category:'Java 실행 결과', answers:['C2']},
      {page:80, solutions:[86], category:'Java 연산', answers:['2']},
      {page:80, solutions:[86,87], category:'Python 정렬', answers:['10']},
      {page:81, solutions:[88], category:'Python 빈칸', answers:['True break'], inputHint:'①, ②의 답을 순서대로 공백 또는 줄바꿈으로 구분하세요. 대소문자를 구분합니다.'},
      {page:81, solutions:[89], category:'Python 실행 결과', answers:['9 5']}
    ]}
];
