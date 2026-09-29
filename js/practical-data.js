// 첨부 수업 자료의 학습 주제를 참고하여 새로 작성한 수업용 콘텐츠입니다.
window.practicalLessons = [
  {
    id: 'linux', title: '경로와 Linux 명령어', category: '시스템', source: 'PDF 3, 27쪽',
    goal: '상대 경로를 절대 경로로 바꾸고 목적에 맞는 명령어를 고릅니다.',
    concepts: [['경로 읽기', '/로 시작하면 절대 경로입니다. 상대 경로의 .은 현재 폴더, ..은 상위 폴더를 뜻합니다. 심볼릭 링크가 없는 일반 디렉터리를 기준으로 연습합니다.'], ['기본 명령어', 'pwd는 현재 경로, ls는 목록, cat은 파일 내용, cd는 작업 폴더를 확인하거나 변경합니다. chmod는 접근 권한을, chown은 소유자를 변경합니다.'], ['권한 숫자', '읽기 r=4, 쓰기 w=2, 실행 x=1을 더합니다. 754는 소유자 rwx, 그룹 r-x, 기타 r--입니다.']],
    example: {code: '현재 경로: /home/student/project\n상대 경로: ../data/input.txt', steps: ['현재 위치는 /home/student/project입니다.', '..을 만나면 project에서 한 단계 올라가 /home/student가 됩니다.', 'data/input.txt를 이어 붙이면 /home/student/data/input.txt입니다.']},
    questions: [
      {prompt: '현재 작업 디렉터리의 절대 경로를 출력하는 명령어를 쓰세요.', answer: 'pwd', hint: 'print working directory의 약자입니다.', explanation: 'pwd는 현재 작업 디렉터리를 출력합니다. cd는 디렉터리를 변경합니다.'},
      {prompt: '현재 경로가 /srv/app/src일 때 ../../data의 절대 경로를 쓰세요.', answer: '/srv/data', hint: '..을 두 번 처리한 뒤 data로 이동합니다.', explanation: '/srv/app/src → /srv/app → /srv → /srv/data 순서로 이동합니다.'},
      {prompt: '소유자는 읽기·쓰기, 그룹은 읽기, 기타 사용자는 권한 없음으로 설정합니다. 빈칸에 들어갈 세 자리 숫자를 쓰세요.', code: 'chmod ___ memo.txt', answer: '640', hint: '각 위치에서 r=4, w=2, x=1을 더합니다.', explanation: '소유자는 4+2=6, 그룹은 4, 기타는 0이므로 640입니다.'}
    ]
  },
  {
    id: 'python-flow', title: 'Python 조건문과 반복문', category: 'Python', source: 'PDF 5, 21쪽',
    goal: '반복마다 바뀌는 변수의 값을 추적하고 출력 결과를 구합니다.',
    concepts: [['반복 범위', 'range(a, b)는 a부터 b 직전까지의 정수를 만듭니다. range(4)는 0, 1, 2, 3입니다.'], ['조건과 누적', '%는 나머지 연산입니다. n % 2 == 0이면 짝수입니다. 누적 변수는 반복문 밖에서 초기화합니다.'], ['들여쓰기와 동시 대입', '들여쓰기는 실행 범위를 결정합니다. a, b = b, a + b는 오른쪽을 기존 값으로 먼저 계산한 다음 대입합니다.']],
    example: {code: 'total = 0\nfor n in range(1, 5):\n    if n % 2 == 0:\n        total += n\nprint(total)', steps: ['total은 0에서 시작합니다. n은 1, 2, 3, 4를 차례로 가집니다.', 'n=1과 n=3은 홀수여서 더하지 않습니다.', 'n=2에서 total=2, n=4에서 total=6이 됩니다.', '반복문 밖의 print가 6을 한 번 출력합니다.']},
    questions: [
      {prompt: '출력 결과를 쓰세요.', code: 'print(len(range(2, 7)))', answer: '5', hint: '2부터 6까지 세어 보세요.', explanation: 'range(2, 7)은 2, 3, 4, 5, 6이므로 길이는 5입니다.'},
      {prompt: '출력 결과를 쓰세요.', code: 's = 0\nfor n in range(1, 7):\n    if n % 2 != 0:\n        s += n\nprint(s)', answer: '9', hint: '1부터 6까지 중 홀수만 더합니다.', explanation: '홀수 1, 3, 5를 더하므로 s=9입니다.'},
      {prompt: '두 수를 공백으로 구분해 쓰세요.', code: 'a, b = 0, 1\nfor _ in range(4):\n    a, b = b, a + b\nprint(a, b)', answer: '3 5', hint: '첫 반복 후 (a, b)는 (1, 1)입니다.', explanation: '(0,1) → (1,1) → (1,2) → (2,3) → (3,5) 순서입니다.'}
    ]
  },
  {
    id: 'python-data', title: 'Python 리스트와 딕셔너리', category: 'Python', source: 'PDF 5, 31, 71쪽',
    goal: '인덱스, 슬라이싱, 자료구조의 변경과 집합 연산을 구분합니다.',
    concepts: [['인덱스와 슬라이스', '첫 인덱스는 0이고 -1은 마지막 원소입니다. a[1:3]은 인덱스 1과 2만 포함합니다.'], ['딕셔너리', '키로 값을 조회합니다. keys()는 키, values()는 값, items()는 (키, 값) 쌍을 제공합니다.'], ['집합과 참조', 'set은 중복을 없앱니다. &는 교집합입니다. b=a는 같은 리스트를 가리키고 b=a[:]는 얕은 복사입니다.']],
    example: {code: 'scores = {"A": 80, "B": 90}\nscores["A"] += 5\nvalues = list(scores.values())\nprint(sum(values))', steps: ['A의 값 80에 5를 더해 85로 바꿉니다.', 'values에는 85와 90이 들어갑니다.', 'sum이 두 값을 더해 175를 출력합니다.']},
    questions: [
      {prompt: '출력 결과를 쓰세요.', code: 'a = [3, 6, 9, 12]\nprint(a[-1] + a[1])', answer: '18', hint: '마지막 값과 두 번째 값을 더합니다.', explanation: 'a[-1]=12, a[1]=6이므로 18입니다.'},
      {prompt: '출력 결과를 쓰세요.', code: 'd = {"x": 2, "y": 5}\nd["x"] = d["y"] + 1\nprint(sum(d.values()))', answer: '11', hint: 'x의 값이 2에서 6으로 바뀝니다.', explanation: '변경 후 값은 6과 5이므로 합계는 11입니다.'},
      {prompt: '출력 결과를 쓰세요.', code: 'a = [1, 2, 2, 3]\ns = set(a)\ns.add(4)\nprint(len(s & {2, 4, 6}))', answer: '2', hint: '두 집합 모두에 들어 있는 원소를 찾습니다.', explanation: 's={1,2,3,4}이고 교집합은 {2,4}이므로 원소 수는 2입니다.'}
    ]
  },
  {
    id: 'recursion', title: '함수·재귀와 트리 순회', category: '알고리즘', source: 'PDF 11~15쪽',
    goal: '종료 조건을 찾고 함수 호출이 되돌아오는 순서를 따라갑니다.',
    concepts: [['함수 반환', 'return은 결과를 호출한 곳으로 돌려주며 현재 함수 실행을 끝냅니다. print와 역할이 다릅니다.'], ['재귀', '함수가 자신을 호출합니다. 종료 조건과, 그 조건에 가까워지는 인수가 필요합니다.'], ['트리 순회', '전위는 루트→왼쪽→오른쪽, 중위는 왼쪽→루트→오른쪽, 후위는 왼쪽→오른쪽→루트입니다.']],
    example: {code: 'def total(n):\n    if n == 0:\n        return 0\n    return n + total(n - 1)\nprint(total(3))', steps: ['total(3)은 3 + total(2)의 결과를 기다립니다.', 'total(2) → total(1) → total(0)까지 호출합니다.', 'total(0)이 0을 반환하며 재귀가 멈춥니다.', '되돌아오며 1+0=1, 2+1=3, 3+3=6을 계산합니다.']},
    questions: [
      {prompt: '빈칸에 들어갈 숫자를 쓰세요.', code: 'def factorial(n):\n    if n == 0:\n        return ___\n    return n * factorial(n - 1)', answer: '1', hint: '0!은 1입니다.', explanation: '곱셈을 유지하는 항등원은 1이며 0!=1이므로 1을 반환합니다.'},
      {prompt: '출력 결과를 쓰세요.', code: 'def f(n):\n    if n <= 1:\n        return n\n    return f(n - 1) + f(n - 2)\nprint(f(5))', answer: '5', hint: 'f(0)=0, f(1)=1부터 작은 값을 먼저 구합니다.', explanation: 'f(2)=1, f(3)=2, f(4)=3, f(5)=5입니다.'},
      {prompt: '아래 트리를 후위 순회한 값을 공백으로 구분해 쓰세요.', code: '    A\n   / \\\n  B   C\n / \\\nD   E', answer: 'D E B C A', hint: '왼쪽 부분 트리를 먼저 끝내고 루트 A는 마지막에 방문합니다.', explanation: '왼쪽 부분 트리는 D E B, 오른쪽은 C, 마지막 루트는 A입니다.'}
    ]
  },
  {
    id: 'java-string', title: 'Java 문자열과 연산', category: 'Java', source: 'PDF 7, 29쪽',
    goal: '문자열의 내용 비교와 참조 비교, 형 변환의 결과를 구분합니다.',
    concepts: [['문자열 비교', 'String의 equals()는 내용을 비교합니다. ==는 같은 객체를 가리키는지 비교합니다. new String으로 만든 두 객체는 내용이 같아도 서로 다른 객체입니다.'], ['연결과 덧셈', '+는 숫자끼리는 덧셈, 문자열이 포함되면 문자열 연결을 수행합니다. 같은 우선순위의 +는 왼쪽부터 처리합니다.'], ['정수 연산', '정수끼리 나누면 소수 부분을 버립니다. (int) 형 변환도 소수 부분을 0 방향으로 버립니다. Math.ceil은 올림, Math.floor는 내림입니다.']],
    example: {code: 'String a = new String("CODE");\nString b = new String("CODE");\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));', steps: ['a와 b는 각각 new로 만든 별개의 객체입니다.', 'a == b는 참조가 다르므로 false입니다.', '문자열 내용은 모두 CODE이므로 equals는 true입니다.']},
    questions: [
      {prompt: '출력 결과를 쓰세요.', code: 'System.out.println(9 / 2);', answer: '4', hint: '두 피연산자가 모두 정수입니다.', explanation: '정수 나눗셈이므로 4.5의 소수 부분을 버려 4를 출력합니다.'},
      {prompt: '출력 결과를 쓰세요.', code: 'System.out.println(1 + 2 + "3");', answer: '33', hint: '왼쪽의 1+2를 먼저 계산합니다.', explanation: '1+2는 숫자 3이고, 뒤의 문자열 "3"과 연결해 33이 됩니다.'},
      {prompt: '두 불리언 값을 공백으로 구분해 쓰세요.', code: 'String x = new String("JAVA");\nString y = new String("JAVA");\nSystem.out.print((x == y) + " " + x.equals(y));', answer: 'false true', hint: '참조 비교와 내용 비교를 따로 판단합니다.', explanation: '별개 객체이므로 ==는 false, 내용이 같으므로 equals는 true입니다.'}
    ]
  },
  {
    id: 'java-object', title: 'Java 상속과 메서드', category: 'Java', source: 'PDF 31, 37쪽',
    goal: '변수의 선언 타입과 객체의 실제 타입이 사용되는 상황을 구분합니다.',
    concepts: [['상속과 재정의', 'extends로 상속합니다. 자식이 같은 시그니처의 인스턴스 메서드를 구현하면 오버라이딩입니다.'], ['인스턴스 메서드', '오버라이딩된 인스턴스 메서드는 실제 객체의 타입에 따라 선택됩니다. 부모 타입 변수로 자식 객체를 가리켜도 자식 구현을 호출합니다.'], ['static 메서드', 'static 메서드는 오버라이딩이 아니라 숨김입니다. 호출을 해석할 때 선언 타입을 사용합니다. 실제 코드에서는 클래스 이름으로 호출하는 편이 명확합니다.']],
    example: {code: 'class Parent {\n    String name() { return "P"; }\n}\nclass Child extends Parent {\n    String name() { return "C"; }\n}\nParent item = new Child();\nSystem.out.print(item.name());', steps: ['변수 item의 선언 타입은 Parent입니다.', '실제로 생성한 객체는 Child입니다.', 'name은 인스턴스 메서드이므로 Child의 구현을 실행해 C를 출력합니다.']},
    questions: [
      {prompt: '상속을 나타내는 Java 키워드를 쓰세요.', code: 'class Child ___ Parent { }', answer: 'extends', hint: '부모 클래스의 기능을 확장합니다.', explanation: '클래스 상속에는 extends를 사용합니다. 인터페이스 구현에는 implements를 사용합니다.'},
      {prompt: '위 예제에서 item.name()이 반환하는 문자열 내용을 쓰세요. 따옴표는 생략하세요.', answer: 'C', hint: '실제 생성한 객체 타입을 확인합니다.', explanation: 'new Child()로 만든 객체의 오버라이딩된 메서드를 호출하므로 C입니다.'},
      {prompt: '출력 결과를 쓰세요.', code: 'class A {\n    static String s() { return "A"; }\n    String m() { return "a"; }\n}\nclass B extends A {\n    static String s() { return "B"; }\n    String m() { return "b"; }\n}\n// main 메서드 내부\nA obj = new B();\nSystem.out.print(obj.s() + obj.m());', answer: 'Ab', hint: 's는 static, m은 인스턴스 메서드입니다.', explanation: 's는 선언 타입 A에서 선택되어 A, m은 실제 객체 B에서 선택되어 b를 반환하므로 Ab입니다.'}
    ]
  },
  {
    id: 'sql-select', title: 'SQL 조회와 조건', category: 'SQL', source: 'PDF 9, 27, 41쪽',
    goal: '조건에 맞는 행을 선택하고 정렬하거나 테이블 구조를 변경합니다.',
    concepts: [['SELECT와 WHERE', 'SELECT는 조회할 열, FROM은 테이블, WHERE는 행을 고르는 조건입니다. NULL 여부는 = NULL이 아니라 IS NULL로 검사합니다.'], ['LIKE와 정렬', 'LIKE에서 %는 길이 0 이상 문자열, _는 한 글자입니다. ORDER BY의 ASC는 오름차순, DESC는 내림차순입니다.'], ['테이블 구조', 'ALTER TABLE은 기존 테이블의 구조를 변경합니다. 열 추가는 ADD, 모든 행 삭제는 DELETE 또는 TRUNCATE, 테이블 제거는 DROP의 역할을 구분합니다.']],
    example: {code: "SELECT name, score\nFROM student\nWHERE name LIKE '김%'\nORDER BY score DESC;", steps: ['student에서 학생 데이터를 읽습니다.', '이름이 김으로 시작하는 행만 남깁니다.', '점수가 높은 행부터 정렬합니다.', '결과에는 name과 score 열을 표시합니다.']},
    questions: [
      {prompt: '점수가 큰 순서로 정렬할 때 빈칸의 키워드를 쓰세요.', code: 'SELECT name, score FROM student\nORDER BY score ___;', answer: 'DESC', mode: 'keyword', hint: '내림차순을 의미하는 키워드입니다.', explanation: 'DESC는 내림차순입니다. ASC는 오름차순입니다.'},
      {prompt: '이름이 이로 시작하는 조건입니다. 따옴표 안에 들어갈 패턴만 쓰세요.', code: "WHERE name LIKE '___'", answer: '이%', hint: '뒤에 글자가 몇 개든 올 수 있어야 합니다.', explanation: '%는 0개 이상의 문자를 뜻하므로 이%를 사용합니다.'},
      {prompt: 'email이 NULL인 행을 고르는 두 단어를 쓰세요.', code: 'SELECT * FROM student\nWHERE email ___;', answer: 'IS NULL', mode: 'keyword', hint: 'NULL은 일반적인 등호 비교를 사용하지 않습니다.', explanation: 'NULL 여부를 검사할 때는 IS NULL을 사용합니다. = NULL은 올바른 NULL 판정이 아닙니다.'}
    ]
  },
  {
    id: 'sql-group', title: 'SQL 집계·조인·집합', category: 'SQL', source: 'PDF 29, 41, 91쪽',
    goal: '그룹별 집계와 테이블 결합 결과를 작은 표로 계산합니다.',
    concepts: [['집계 함수', 'COUNT(*)는 행 수, COUNT(열)은 NULL이 아닌 값의 수를 셉니다. SUM은 합, AVG는 NULL이 아닌 값의 평균입니다.'], ['GROUP BY와 HAVING', 'GROUP BY는 같은 값을 가진 행을 묶습니다. WHERE는 묶기 전의 행, HAVING은 집계 후의 그룹에 조건을 적용합니다.'], ['조인과 집합', 'INNER JOIN은 조건이 맞는 행을 결합합니다. UNION은 중복 행을 제거하고 UNION ALL은 유지합니다. NOT IN의 하위 결과에 NULL이 있으면 예상과 달라질 수 있습니다.']],
    example: {code: '-- sales\n-- item | amount\n-- A    | 10\n-- A    | 20\n-- B    | 15\nSELECT item, SUM(amount)\nFROM sales GROUP BY item\nHAVING SUM(amount) >= 25;', steps: ['item별로 A 그룹과 B 그룹을 만듭니다.', 'A의 합은 10+20=30, B의 합은 15입니다.', '합계가 25 이상인 A 그룹만 남습니다.', '결과는 A, 30 한 행입니다.']},
    questions: [
      {prompt: 'score 값이 10, NULL, 20인 세 행입니다. 아래 조회 결과를 쓰세요.', code: 'SELECT COUNT(score) FROM result;', answer: '2', hint: 'COUNT(열)은 NULL을 제외합니다.', explanation: 'NULL을 제외한 10과 20 두 값을 세므로 2입니다. COUNT(*)라면 3입니다.'},
      {prompt: '빈칸에 들어갈 키워드를 쓰세요.', code: 'SELECT category, COUNT(*)\nFROM product GROUP BY category\n___ COUNT(*) >= 3;', answer: 'HAVING', mode: 'keyword', hint: '그룹의 집계 결과에 조건을 적용합니다.', explanation: '집계한 그룹에 조건을 걸 때 HAVING을 사용합니다.'},
      {prompt: '조회 결과의 행 수를 쓰세요. id 이외의 열은 조회하지 않습니다.', code: '-- A.id: 1, 2, 3\n-- B.id: 2, 3, 4\nSELECT id FROM A\nUNION\nSELECT id FROM B;', answer: '4', hint: 'UNION은 중복을 제거합니다.', explanation: '합친 뒤 중복을 없애면 1, 2, 3, 4 네 행입니다. UNION ALL이면 여섯 행입니다.'}
    ]
  }
];
