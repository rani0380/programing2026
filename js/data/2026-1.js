window.questionBanks = window.questionBanks || [];

window.questionBanks.push({
  year: 2026,
  round: 1,
  title: "2026년 1회 기출문제",
  questions: [
  {
    "id": 9,
    "subject": "프로그래밍 언어 활용",
    "question": "JAVA에서 파일 입출력과 관련된 기능을 제공하는 패키지와 그 안에 포함된 클래스가 올바르게 짝지어진 것은?",
    "choices": [
      "java.net - Socket",
      "java.io - InputStream",
      "java.util - Random",
      "java.awt - Button"
    ],
    "answer": 1,
    "explanation": "java.io 패키지는 파일 입출력과 관련된 기능을 제공하며 InputStream 클래스를 포함합니다."
  },
  {
    "id": 10,
    "subject": "프로그래밍 언어 활용",
    "question": "객체지향 프로그래밍 언어에서 메시지에 대한 설명으로 가장 올바른 것은?",
    "choices": [
      "데이터를 단위별로 정의하는 속성(Attribute)을 의미한다.",
      "유사한 객체들을 묶어서 공통된 특성을 표현하는 요소이다.",
      "객체 간 상호작용을 위해 객체의 메소드를 호출하는 수단이다.",
      "데이터를 처리하기 위한 구체적인 연산을 정의하는 것이다."
    ],
    "answer": 2,
    "explanation": "메시지는 객체 간 상호작용을 위해 메소드 동작을 요청하는 수단입니다."
  },
  {
    "id": 11,
    "subject": "프로그래밍 언어 활용",
    "question": "클라이언트용 스크립트 언어와 서버용 스크립트 언어가 올바르게 묶인 것은?",
    "choices": [
      "클라이언트용: 파이썬, 서버용: PHP",
      "클라이언트용: 자바스크립트, VB 스크립트",
      "서버용: ASP, VB 스크립트",
      "서버용: 자바스크립트, JSP"
    ],
    "answer": 1,
    "explanation": "자바스크립트와 VB 스크립트는 클라이언트 브라우저에서 실행되는 스크립트 언어입니다."
  },
  {
    "id": 12,
    "subject": "프로그래밍 언어 활용",
    "question": "Python의 시퀀스 자료형에 대한 설명으로 옳은 것은?",
    "choices": [
      "리스트(List)는 값이 연속적으로 저장되지만 값의 추가나 삭제가 불가능하다.",
      "튜플(Tuple)은 리스트와 달리 필요에 따라 개수를 늘리거나 줄일 수 있다.",
      "range는 연속된 숫자를 생성하는 자료형이다.",
      "문자열(String)은 시퀀스 자료형에 포함되지 않는다."
    ],
    "answer": 2,
    "explanation": "range는 연속된 숫자를 생성하는 시퀀스 자료형입니다."
  },
  {
    "id": 13,
    "subject": "프로그래밍 언어 활용",
    "question": "다음 JAVA 프로그램이 실행되었을 때 실행 결과는?\n\npublic class Main {\n  public static void main(String[] args) {\n    int i = 0;\n    int j;\n    j = ++i;\n    System.out.println(j++);\n  }\n}",
    "choices": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 1,
    "explanation": "++i는 전치 증가이므로 i를 먼저 1로 증가시킨 뒤 j에 저장합니다. j++는 현재 값 1을 먼저 출력한 뒤 증가하므로 출력 결과는 1입니다."
  },
  {
    "id": 14,
    "subject": "프로그래밍 언어 활용",
    "question": "다음 중 관계 연산자의 사용이 올바른 것은?",
    "choices": [
      "if (a == 5) { ... } - 변수 a가 5와 같지 않을 때",
      "if (b != 10) { ... } - 변수 b가 10과 같을 때",
      "if (c > 3) { ... } - 변수 c가 3보다 크거나 같을 때",
      "if (d <= 7) { ... } - 변수 d가 7보다 작거나 같을 때"
    ],
    "answer": 3,
    "explanation": "<=는 작거나 같을 때를 의미하므로 4번이 올바른 설명입니다."
  },
  {
    "id": 15,
    "subject": "프로그래밍 언어 활용",
    "question": "다음 중 연산자 우선순위가 가장 높은 것은?",
    "choices": [
      "단항 연산자(++, --, !)",
      "산술 연산자(*, /, %)",
      "관계 연산자(==, !=)",
      "논리 연산자(&&, ||)"
    ],
    "answer": 0,
    "explanation": "단항 연산자는 산술, 관계, 논리 연산자보다 우선순위가 높습니다."
  },
  {
    "id": 16,
    "subject": "프로그래밍 언어 활용",
    "question": "다음 JAVA 코드의 실행 결과는?\n\nchar grade = 'B';\nString result;\nif (grade == 'A') result = \"Excellent\";\nelse if (grade == 'B') result = \"Good\";\nelse if (grade == 'C') result = \"Pass\";\nelse result = \"Fail\";\nSystem.out.println(result);",
    "choices": [
      "Excellent",
      "Good",
      "Pass",
      "Fail"
    ],
    "answer": 1,
    "explanation": "grade 값이 'B'이므로 두 번째 조건이 참이 되어 Good이 출력됩니다."
  },
  {
    "id": 17,
    "subject": "프로그래밍 언어 활용",
    "question": "다음 JAVA 코드의 실행 결과는?\n\nint[] numbers = {10, 20, 30, 40, 50};\nint sum = 0;\nfor (int i = 0; i < numbers.length; i++) {\n  sum += numbers[i];\n}\nSystem.out.println(sum);",
    "choices": [
      "50",
      "100",
      "150",
      "200"
    ],
    "answer": 2,
    "explanation": "10 + 20 + 30 + 40 + 50을 모두 더하면 150입니다."
  },
  {
    "id": 18,
    "subject": "프로그래밍 언어 활용",
    "question": "다음 JAVA 코드의 실행 결과는?\n\nclass Test {\n  public static void main(String args[]) {\n    cond obj = new cond(3);\n    obj.a = 5;\n    int b = obj.func();\n    System.out.print(obj.a + b);\n  }\n}\n\nclass cond {\n  int a;\n  public cond(int a) { this.a = a; }\n  public int func() {\n    int b = 1;\n    for (int i = 1; i < a; i++) b += a * i;\n    return a + b;\n  }\n}",
    "choices": [
      "60",
      "61",
      "62",
      "63"
    ],
    "answer": 1,
    "explanation": "obj.a가 5로 바뀐 뒤 func()에서 56을 반환하므로 5 + 56 = 61이 출력됩니다."
  },
  {
    "id": 19,
    "subject": "프로그래밍 언어 활용",
    "question": "다음 파이썬 프로그램이 실행되었을 때의 결과는?\n\ninList = [1,2,3,4,5]\nanswer = inList[:3]\nprint(answer)",
    "choices": [
      "[1]",
      "[1, 2]",
      "[1, 2, 3]",
      "[1, 2, 3, 4, 5]"
    ],
    "answer": 2,
    "explanation": "inList[:3]은 처음부터 인덱스 3 바로 앞까지 가져오므로 [1, 2, 3]입니다."
  },
  {
    "id": 20,
    "subject": "프로그래밍 언어 활용",
    "question": "다음 파이썬 코드의 실행 결과는?\n\nnumbers = list(range(1, 11))\nresult = numbers[::2]\nprint(result)",
    "choices": [
      "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      "[1, 3, 5, 7, 9]",
      "[2, 4, 6, 8, 10]",
      "[1, 2, 3, 4, 5]"
    ],
    "answer": 1,
    "explanation": "numbers[::2]는 처음부터 두 칸씩 건너뛰어 [1, 3, 5, 7, 9]가 됩니다."
  },
  {
    "id": 21,
    "subject": "프로그래밍 언어 활용",
    "question": "HTML 태그와 기능에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "<p>: 문단을 정의하며 닫는 태그가 필요 없다.",
      "<h1>~<h6>: 제목을 나타내며 숫자가 클수록 글자가 작아진다.",
      "<br>: 줄 바꿈을 위해 사용하며 닫는 태그가 필요 없다.",
      "<img src=\"...\">: 이미지를 웹 페이지에 삽입하는 데 사용한다."
    ],
    "answer": 0,
    "explanation": "<p> 태그는 문단을 정의하며 일반적으로 닫는 태그 </p>가 필요합니다."
  },
  {
    "id": 22,
    "subject": "프로그래밍 언어 활용",
    "question": "다음 JavaScript 프로그램이 실행되었을 때 실행 결과는?\n\nvar i = 0, sum = 0;\nwhile (i <= 5) {\n  sum += i;\n  i++;\n}\ndocument.write(sum);",
    "choices": [
      "25",
      "20",
      "15",
      "10"
    ],
    "answer": 2,
    "explanation": "0부터 5까지 더하면 15입니다."
  },
  {
    "id": 23,
    "subject": "프로그래밍 언어 활용",
    "question": "JAVA의 예외 객체와 예외 발생 원인이 올바르게 연결된 것은?",
    "choices": [
      "ArithmeticException - 배열 범위를 벗어난 경우",
      "InterruptedIOException - 0으로 나누는 등의 산술 연산 예외",
      "NoSuchMethodException - 클래스를 찾지 못한 경우",
      "FileNotFoundException - 파일을 찾지 못한 경우"
    ],
    "answer": 3,
    "explanation": "FileNotFoundException은 파일을 찾지 못했을 때 발생하는 예외입니다."
  },
  {
    "id": 24,
    "subject": "컴퓨터 일반",
    "question": "다음 트리에 대한 중위 순회 운행 결과는?\n\n        A\n       / \\\n      B   C\n     /   / \\\n    D   E   F",
    "choices": [
      "A B D C E F",
      "A B C D E F",
      "D B E C F A",
      "D B A E C F"
    ],
    "answer": 3,
    "explanation": "중위 순회는 왼쪽 서브트리, 루트, 오른쪽 서브트리 순서입니다. 그림의 트리를 순회하면 D B A E C F가 됩니다."
  },
  {
    "id": 25,
    "subject": "데이터베이스",
    "question": "속성(Attribute)에 대한 설명으로 틀린 것은?",
    "choices": [
      "속성은 개체의 특성을 기술한다.",
      "속성은 데이터베이스를 구성하는 가장 작은 논리적 단위이다.",
      "속성은 파일 구조상 데이터 항목 또는 데이터 필드에 해당된다.",
      "속성의 수를 Cardinality라고 한다."
    ],
    "answer": 3,
    "explanation": "속성의 수는 Degree, 튜플의 수는 Cardinality라고 합니다."
  },
  {
    "id": 26,
    "subject": "정보 시스템 일반",
    "question": "프로토콜의 계층 구성은 네트워크 구조에 따라 어떻게 구분하는가?",
    "choices": [
      "구문 계층과 의미 계층",
      "비트 계층과 블록 계층",
      "하위 계층과 상위 계층",
      "직접 계층과 간접 계층"
    ],
    "answer": 2,
    "explanation": "프로토콜 계층은 일반적으로 하위 계층과 상위 계층으로 구분합니다."
  },
  {
    "id": 27,
    "subject": "정보 시스템 일반",
    "question": "OSI 7계층 참조 모델에서 최상위 계층은?",
    "choices": [
      "물리 계층",
      "응용 계층",
      "네트워크 계층",
      "세션 계층"
    ],
    "answer": 1,
    "explanation": "OSI 7계층의 최상위 계층은 응용 계층입니다."
  },
  {
    "id": 28,
    "subject": "정보 시스템 일반",
    "question": "TCP/IP 기반 네트워크에서 동작하는 발행-구독 기반의 메시징 프로토콜로 IoT 환경에서 자주 사용되는 프로토콜은?",
    "choices": [
      "MLFQ",
      "MQTT",
      "Zigbee",
      "MTSP"
    ],
    "answer": 1,
    "explanation": "MQTT는 발행-구독 기반의 경량 메시징 프로토콜로 IoT 환경에서 많이 사용됩니다."
  },
  {
    "id": 29,
    "subject": "컴퓨터 일반",
    "question": "다음 자료를 선택 정렬로 오름차순 정렬할 때 2회전 수행 결과는?\n\n27, 7, 4, 30, 25",
    "choices": [
      "4, 7, 25, 27, 30",
      "4, 7, 30, 27, 25",
      "4, 7, 27, 30, 25",
      "4, 7, 25, 30, 27"
    ],
    "answer": 2,
    "explanation": "1회전에서 4가 맨 앞으로 오고, 2회전에서는 7이 이미 올바른 위치에 있어 4, 7, 27, 30, 25가 됩니다."
  },
  {
    "id": 30,
    "subject": "데이터베이스",
    "question": "데이터베이스에서 하나의 논리적 기능을 수행하기 위한 작업의 단위 또는 모두 수행되어야 할 일련의 연산들을 의미하는 것은?",
    "choices": [
      "트랜잭션",
      "뷰",
      "튜플",
      "카디널리티"
    ],
    "answer": 0,
    "explanation": "트랜잭션은 데이터베이스에서 하나의 논리적 작업 단위를 의미합니다."
  },
  {
    "id": 31,
    "subject": "정보 시스템 일반",
    "question": "IPv6의 주소는 몇 비트로 이루어져 있나?",
    "choices": [
      "16비트",
      "32비트",
      "64비트",
      "128비트"
    ],
    "answer": 3,
    "explanation": "IPv6 주소는 128비트입니다."
  },
  {
    "id": 32,
    "subject": "데이터베이스",
    "question": "DBMS의 필수 기능으로 옳은 것은?",
    "choices": [
      "조작 기능, 제어 기능, 연산 기능",
      "정의 기능, 제어 기능, 연산 기능",
      "정의 기능, 조작 기능, 연산 기능",
      "정의 기능, 조작 기능, 제어 기능"
    ],
    "answer": 3,
    "explanation": "DBMS의 필수 기능은 정의 기능, 조작 기능, 제어 기능입니다."
  },
  {
    "id": 33,
    "subject": "컴퓨터 일반",
    "question": "스택에서 입력 자료 A, B, C, D를 push, push, pop, push, push, pop, pop, pop 순서로 연산했을 때 출력은?",
    "choices": [
      "C, B, D, A",
      "B, C, D, A",
      "B, D, C, A",
      "C, B, A, D"
    ],
    "answer": 2,
    "explanation": "스택은 LIFO 구조이므로 연산 순서에 따라 B, D, C, A가 출력됩니다."
  },
  {
    "id": 34,
    "subject": "데이터베이스",
    "question": "물리적 데이터베이스 구조의 기본 데이터 단위인 저장 레코드 양식을 설계할 때 고려 사항이 아닌 것은?",
    "choices": [
      "데이터 타입",
      "데이터 값의 분포",
      "트랜잭션 모델링",
      "접근 빈도"
    ],
    "answer": 2,
    "explanation": "트랜잭션 모델링은 물리적 저장 레코드 양식 설계의 직접 고려 사항이 아닙니다."
  },
  {
    "id": 35,
    "subject": "데이터베이스",
    "question": "데이터베이스 관리자(DBA)의 임무와 거리가 먼 것은?",
    "choices": [
      "시스템 문서화에 표준을 정하여 시행",
      "복구절차와 무결성 유지를 위한 대책 수립",
      "일반 사용자의 고급 DML 질의문을 저급 명령어로 변환",
      "시스템의 감시 및 성능 분석"
    ],
    "answer": 2,
    "explanation": "고급 질의문을 저급 명령어로 변환하는 것은 질의어 처리기의 역할에 가깝습니다."
  },
  {
    "id": 36,
    "subject": "데이터베이스",
    "question": "관계 데이터 모델에서 릴레이션(Relation)에 관한 설명으로 옳은 것은?",
    "choices": [
      "릴레이션의 각 행을 스키마라 한다.",
      "릴레이션의 각 열을 튜플이라 한다.",
      "도메인은 하나의 속성이 가질 수 있는 같은 타입의 모든 값의 집합이다.",
      "속성은 한 개의 릴레이션의 논리적인 구조를 정의한 것이다."
    ],
    "answer": 2,
    "explanation": "도메인은 하나의 속성이 가질 수 있는 같은 타입의 모든 값의 집합입니다."
  },
  {
    "id": 37,
    "subject": "데이터베이스",
    "question": "데이터베이스 설계 단계 중 물리적 설계 시 고려 사항으로 적절하지 않은 것은?",
    "choices": [
      "스키마의 평가 및 정제",
      "응답 시간",
      "저장 공간의 효율화",
      "트랜잭션 처리량"
    ],
    "answer": 0,
    "explanation": "스키마의 평가 및 정제는 논리적 설계 단계와 관련이 깊습니다."
  },
  {
    "id": 38,
    "subject": "정보 시스템 일반",
    "question": "IEEE 802.3 LAN에서 사용되는 전송 매체 접속 제어 방식(MAC)은?",
    "choices": [
      "CSMA/CD",
      "Token Bus",
      "Token Ring",
      "Slotted Ring"
    ],
    "answer": 0,
    "explanation": "IEEE 802.3은 CSMA/CD 방식을 사용합니다."
  },
  {
    "id": 39,
    "subject": "데이터베이스",
    "question": "상품 테이블에서 판매수량이 200 이상인 자료의 상품명, 판매수량을 검색하는 SQL 문으로 옳은 것은?",
    "choices": [
      "SELECT 상품명, 판매수량 FROM 상품 HAVING 판매수량 >= 200;",
      "SELECT FROM 상품 상품명, 판매수량 WHERE 판매수량 >= 200;",
      "SELECT 상품명, 판매수량 FROM 상품 WHERE 판매수량 >= 200;",
      "SELECT 상품명, 판매수량 FROM 상품 IF 판매수량 >= 200;"
    ],
    "answer": 2,
    "explanation": "조건 검색은 WHERE 절을 사용하므로 3번이 옳습니다."
  },
  {
    "id": 40,
    "subject": "데이터베이스",
    "question": "SQL SELECT 문에 대한 설명으로 옳지 않은 것은?",
    "choices": [
      "FROM 절에는 검색될 데이터들을 포함하는 테이블명을 기술한다.",
      "검색 결과의 중복 레코드를 없애려면 WHERE 절에 DISTINCT 키워드를 사용한다.",
      "HAVING 절은 GROUP BY 절과 함께 사용되며 그룹에 대한 조건을 지정한다.",
      "ORDER BY 절은 특정 속성을 기준으로 정렬하여 검색할 때 사용한다."
    ],
    "answer": 1,
    "explanation": "DISTINCT는 WHERE 절이 아니라 SELECT 뒤에 사용합니다."
  },
  {
    "id": 41,
    "subject": "데이터베이스",
    "question": "SQL의 기능별 분류 중 REVOKE문처럼 데이터 사용 권한을 관리하는 언어는?",
    "choices": [
      "DCL(Data Control Language)",
      "DDL(Data Definition Language)",
      "DUL(Data User Language)",
      "DML(Data Manipulation Language)"
    ],
    "answer": 0,
    "explanation": "권한 부여와 회수는 데이터 제어어인 DCL에 해당합니다."
  },
  {
    "id": 42,
    "subject": "데이터베이스",
    "question": "기존 테이블에 새로운 필드를 추가하거나 변경하려고 할 때 사용하는 SQL 명령은?",
    "choices": [
      "ALTER",
      "UPDATE",
      "CREATE",
      "GRANT"
    ],
    "answer": 0,
    "explanation": "ALTER는 기존 테이블의 구조를 변경할 때 사용합니다."
  },
  {
    "id": 43,
    "subject": "데이터베이스",
    "question": "VIEW DEP1을 이용하여 VIEW DEP2를 정의했을 때 DROP VIEW DEP1 CASCADE 명령 수행 후 결과로 옳은 것은?",
    "choices": [
      "DEP1만 삭제된다.",
      "DEP2만 삭제된다.",
      "DEP1과 DEP2 모두 삭제된다.",
      "DEP1과 DEP2 모두 삭제되지 않는다."
    ],
    "answer": 2,
    "explanation": "CASCADE는 참조하는 관련 객체까지 함께 삭제합니다."
  },
  {
    "id": 44,
    "subject": "데이터베이스",
    "question": "SQL BETWEEN 연산의 의미와 동일한 것은?",
    "choices": [
      "점수 >= 90 AND 점수 <= 95",
      "점수 > 90 AND 점수 < 95",
      "점수 > 90 AND 점수 <= 95",
      "점수 >= 90 AND 점수 < 95"
    ],
    "answer": 0,
    "explanation": "BETWEEN 90 AND 95는 양 끝값을 포함합니다."
  },
  {
    "id": 45,
    "subject": "데이터베이스",
    "question": "SQL DML에 해당하지 않는 것은?",
    "choices": [
      "INSERT",
      "UPDATE",
      "DROP",
      "DELETE"
    ],
    "answer": 2,
    "explanation": "DROP은 데이터 정의어(DDL)에 해당합니다."
  },
  {
    "id": 46,
    "subject": "데이터베이스",
    "question": "학적 테이블에서 전화번호가 NULL 값이 아닌 학생명을 모두 검색할 때 SQL 구문으로 옳은 것은?",
    "choices": [
      "SELECT 학생명 FROM 학적 WHERE 전화번호 DON'T NULL;",
      "SELECT 학생명 FROM 학적 WHERE 전화번호 != NOT NULL;",
      "SELECT 학생명 FROM 학적 WHERE 전화번호 IS NOT NULL;",
      "SELECT 학생명 FROM 학적 WHERE 전화번호 IS NULL;"
    ],
    "answer": 2,
    "explanation": "NULL이 아닌 값을 검색할 때는 IS NOT NULL을 사용합니다."
  },
  {
    "id": 47,
    "subject": "데이터베이스",
    "question": "SQL에서 검색 결과 레코드의 중복을 제거할 때 사용하는 옵션은?",
    "choices": [
      "CASCADE",
      "DISTINCT",
      "RESTRICT",
      "UNION"
    ],
    "answer": 1,
    "explanation": "DISTINCT는 검색 결과에서 중복을 제거합니다."
  },
  {
    "id": 48,
    "subject": "데이터베이스",
    "question": "SQL 명령문 DROP TABLE 판매; 의 의미로 가장 적절한 것은?",
    "choices": [
      "판매 테이블을 검색하라.",
      "판매 테이블을 삭제하라.",
      "판매 필드를 생성하라.",
      "판매 필드를 검색하라."
    ],
    "answer": 1,
    "explanation": "DROP TABLE은 테이블을 삭제하는 명령입니다."
  },
  {
    "id": 49,
    "subject": "데이터베이스",
    "question": "SQL SELECT 문에 나타날 수 없는 절은?",
    "choices": [
      "HAVING",
      "GROUP BY",
      "DROP",
      "ORDER BY"
    ],
    "answer": 2,
    "explanation": "DROP은 SELECT 문의 절이 아니라 객체 삭제 명령입니다."
  },
  {
    "id": 50,
    "subject": "데이터베이스",
    "question": "데이터베이스에서 두 릴레이션을 합병할 때 사용하는 연산자는?",
    "choices": [
      "관계 연산자",
      "집합 연산자",
      "비교 연산자",
      "논리 연산자"
    ],
    "answer": 1,
    "explanation": "두 릴레이션을 합병할 때는 합집합 같은 집합 연산자를 사용합니다."
  },
  {
    "id": 51,
    "subject": "데이터베이스",
    "question": "학생 테이블을 이름 기준 내림차순으로 정렬할 때 알맞은 SQL 명령은?",
    "choices": [
      "Order To Asc",
      "Where Asc",
      "Order By Desc",
      "Group By Asc"
    ],
    "answer": 2,
    "explanation": "정렬은 ORDER BY를 사용하고 내림차순은 DESC입니다."
  },
  {
    "id": 52,
    "subject": "데이터베이스",
    "question": "트랜잭션 실행 실패를 알리고 수행 결과를 원래 상태로 복귀시키는 연산은?",
    "choices": [
      "COMMIT",
      "BACKUP",
      "LOG",
      "ROLLBACK"
    ],
    "answer": 3,
    "explanation": "ROLLBACK은 트랜잭션 변경 내용을 취소하고 이전 상태로 되돌립니다."
  },
  {
    "id": 53,
    "subject": "데이터베이스",
    "question": "사원 테이블의 모든 자료를 검색하는 SQL 문으로 옳은 것은?",
    "choices": [
      "SELECT % FROM 사원;",
      "SELECT ? FROM 사원;",
      "SELECT * FROM 사원;",
      "SELECT # FROM 사원;"
    ],
    "answer": 2,
    "explanation": "모든 필드를 검색할 때는 *를 사용합니다."
  },
  {
    "id": 54,
    "subject": "정보 시스템 일반",
    "question": "실시간 데이터 동기화가 가능하며 서버 자원 사용을 최소화하는 특징을 가진 복원 방식은?",
    "choices": [
      "DB 미러링 방식",
      "Log Shipping 방식",
      "스토리지 동기화",
      "디스크 미러링 방식"
    ],
    "answer": 2,
    "explanation": "스토리지 동기화는 실시간 데이터 동기화가 가능하고 서버 자원 사용을 줄일 수 있습니다."
  },
  {
    "id": 55,
    "subject": "정보 시스템 일반",
    "question": "UNIX에서 앞의 출력 결과가 뒤에 실행하는 명령의 입력이 되는 것은?",
    "choices": [
      "pipe",
      "more",
      "filter",
      "link"
    ],
    "answer": 0,
    "explanation": "pipe는 앞 명령의 출력 결과를 뒤 명령의 입력으로 전달합니다."
  },
  {
    "id": 56,
    "subject": "정보 시스템 일반",
    "question": "DOS에서 파일이나 하위 디렉터리가 있는 디렉터리를 삭제하는 명령은?",
    "choices": [
      "DEL",
      "RD",
      "MD",
      "DELTREE"
    ],
    "answer": 3,
    "explanation": "DELTREE는 디렉터리와 그 안의 파일, 하위 디렉터리를 함께 삭제할 수 있습니다."
  },
  {
    "id": 57,
    "subject": "정보 시스템 일반",
    "question": "코드 변경 사항이 자동으로 빌드 및 테스트되어 언제든지 안정적으로 배포될 수 있는 상태를 유지하는 개발 방식은?",
    "choices": [
      "지속적인 배포(CD)",
      "지속적인 통합(CI)",
      "코드형 인프라(IaC)",
      "마이크로서비스(Microservices)"
    ],
    "answer": 0,
    "explanation": "문제의 설명은 지속적인 배포(CD)에 해당합니다."
  },
  {
    "id": 58,
    "subject": "컴퓨터 일반",
    "question": "조건을 이용하여 데이터 디스크 용량을 계산했을 때 결과값은? 데이터 영역 350GB, 백업 영역 150GB, 파일 시스템 오버헤드 1.08, 데이터 디스크 여유율 1.2, RAID-6 여유율 기준 1.4",
    "choices": [
      "800",
      "816",
      "840",
      "864"
    ],
    "answer": 1,
    "explanation": "(350 + 150) × 1.08 × 1.2 × 1.4 = 816GB입니다."
  },
  {
    "id": 59,
    "subject": "정보 시스템 일반",
    "question": "프로세스 스케줄링에 대한 설명으로 옳은 것은?",
    "choices": [
      "SRT는 가장 긴 실행 시간을 요구하는 프로세스에게 CPU를 할당한다.",
      "우선순위는 가장 낮은 우선순위의 프로세스에게 먼저 CPU를 할당한다.",
      "FIFO는 가장 나중에 CPU를 요청한 프로세스에게 먼저 CPU를 할당한다.",
      "다단계 피드백 큐는 준비상태 큐 사이를 이동할 수 있도록 개선한 기법이다."
    ],
    "answer": 3,
    "explanation": "다단계 피드백 큐는 프로세스가 준비상태 큐 사이를 이동할 수 있도록 개선한 기법입니다."
  },
  {
    "id": 60,
    "subject": "정보 시스템 일반",
    "question": "MS-DOS에서 디스크의 상태를 점검하는 명령은?",
    "choices": [
      "CHKDSK",
      "FORMAT",
      "PROMPT",
      "DELTREE"
    ],
    "answer": 0,
    "explanation": "CHKDSK는 디스크 상태를 점검하는 명령입니다."
  },
  {
    "id": 61,
    "subject": "정보 시스템 일반",
    "question": "사용자 입장에서 요구사항 구현 여부를 확인하는 것과 개발자 입장에서 명세서 적합성을 점검하는 용어로 알맞은 것은?",
    "choices": [
      "Validation, Verification",
      "Verification, Validation",
      "Alpha Test, Beta Test",
      "Beta Test, Alpha Test"
    ],
    "answer": 0,
    "explanation": "Validation은 사용자 요구사항 충족 확인, Verification은 명세서 적합성 검증입니다."
  },
  {
    "id": 62,
    "subject": "정보 시스템 일반",
    "question": "블랙박스 테스트의 유형으로 틀린 것은?",
    "choices": [
      "경계값 분석",
      "오류 예측",
      "동등 분할 기법",
      "조건, 루프 검사"
    ],
    "answer": 3,
    "explanation": "조건, 루프 검사는 화이트박스 테스트에 해당합니다."
  },
  {
    "id": 63,
    "subject": "정보 시스템 일반",
    "question": "개발자의 장소에서 사용자가 개발자 앞에서 수행하며 통제된 환경에서 함께 확인하는 검사는?",
    "choices": [
      "베타 검사",
      "알파 검사",
      "형상 검사",
      "동치 분할 검사"
    ],
    "answer": 1,
    "explanation": "알파 검사는 개발자 장소에서 통제된 환경으로 수행하는 검사입니다."
  },
  {
    "id": 64,
    "subject": "정보 시스템 일반",
    "question": "둘 이상의 프로세스들이 서로 다른 프로세스가 차지한 자원을 요구하며 무한정 기다리는 현상은?",
    "choices": [
      "Semaphore",
      "Waiting",
      "Synchronization",
      "Deadlock"
    ],
    "answer": 3,
    "explanation": "서로 자원을 기다리며 진행이 멈추는 현상은 교착상태(Deadlock)입니다."
  },
  {
    "id": 65,
    "subject": "정보 시스템 일반",
    "question": "로더(Loader)의 기능이 아닌 것은?",
    "choices": [
      "스케줄링(Scheduling)",
      "재배치(Relocation)",
      "할당(Allocation)",
      "링킹(Linking)"
    ],
    "answer": 0,
    "explanation": "로더의 기능에는 할당, 링킹, 재배치, 적재가 있으며 스케줄링은 해당하지 않습니다."
  },
  {
    "id": 66,
    "subject": "정보 시스템 일반",
    "question": "DevOps에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      "소프트웨어 테스트 자동화에만 초점을 맞춘 방법론이다.",
      "개발팀과 운영팀이 분리되어 독립적으로 작업하는 방식을 강조한다.",
      "소프트웨어 개발 및 배포 과정을 자동화하고 효율화하기 위한 개발 방법론이다.",
      "프로젝트 종료 후 운영 조직에만 책임을 전가하는 개발 방식이다."
    ],
    "answer": 2,
    "explanation": "DevOps는 개발과 운영을 연계하여 개발 및 배포 과정을 자동화하고 효율화하는 방법론입니다."
  },
  {
    "id": 67,
    "subject": "정보 시스템 일반",
    "question": "UNIX에서 프로세스 관리, 기억장치 관리, 파일 관리, 입출력 관리, 데이터 전송 및 변환 등을 수행하는 부분은?",
    "choices": [
      "Shell",
      "Application Program",
      "Kernel",
      "Utility Program"
    ],
    "answer": 2,
    "explanation": "커널(Kernel)은 UNIX의 핵심으로 시스템 자원을 관리합니다."
  },
  {
    "id": 68,
    "subject": "정보 시스템 일반",
    "question": "키보드로 명령어를 직접 입력하지 않고 마우스로 아이콘이나 메뉴를 선택하여 작업을 수행하는 방식은?",
    "choices": [
      "CLI",
      "GUI",
      "NUI",
      "OUI"
    ],
    "answer": 1,
    "explanation": "GUI는 그래픽 화면에서 마우스로 아이콘이나 메뉴를 선택해 작업하는 방식입니다."
  }
]
});
