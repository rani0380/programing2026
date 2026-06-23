window.questionBanks = window.questionBanks || [];

window.questionBanks.push({
  year: 2026,
  round: 2,
  title: "2026년 2회 정보처리기능사 필기 기출복원문제",
  questions: [
    {
      id: 202602001,
      subject: "프로그래밍 언어 활용",
      question: "JAVA에서 파일 입출력과 관련된 기능을 제공하는 패키지와 그 안에 포함된 클래스가 올바르게 짝지어진 것은?",
      choices: [
        "java.net - Socket",
        "java.io - InputStream",
        "java.util - Random",
        "java.awt - Button"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. java.io 패키지는 파일 입출력과 스트림 처리를 위한 기능을 제공하며, InputStream 클래스가 포함됩니다."
    },
    {
      id: 202602002,
      subject: "프로그래밍 언어 활용",
      question: "다음 중 객체지향 프로그래밍 언어의 특징으로 옳지 않은 것은?",
      choices: [
        "상속을 통해 코드의 재사용과 확장이 용이하다.",
        "현실 세계의 개체를 부품처럼 만들어 재활용성이 높다.",
        "대형 프로그램을 쉽게 작성하고 유지보수하기 용이하다.",
        "구현 시 처리 시간이 빨라 프로그램의 효율성이 높다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 객체지향 프로그래밍은 재사용성, 확장성, 유지보수성이 장점이지만 절차지향 방식보다 실행 속도가 항상 빠르다고 보기는 어렵습니다."
    },
    {
      id: 202602003,
      subject: "프로그래밍 언어 활용",
      question: "다음 중 상속성(Inheritance)과 다형성(Polymorphism)에 대한 설명으로 올바른 것은?",
      choices: [
        "상속성은 코드 재사용으로 개발 비용을 절감하고, 다형성은 하나의 클래스가 여러 클래스로 가질 수 있는 능력이다.",
        "상속성은 상위 클래스의 속성과 연산을 하위 클래스가 물려받아 사용하는 것이고, 다형성은 하나의 메시지에 대해 각 객체가 다른 방식으로 응답하는 것이다.",
        "상속성은 데이터와 메소드를 하나로 묶어 객체의 내부를 숨기고, 다형성은 객체의 공통된 성질을 추출하여 클래스를 만드는 것이다.",
        "상속성은 객체들 간에 메시지를 주고받는 수단이고, 다형성은 동일한 메소드명을 여러 객체에서 다르게 정의할 수 있는 것이다."
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 상속성은 상위 클래스의 특성을 하위 클래스가 물려받는 것이며, 다형성은 같은 메시지나 메소드 호출에 대해 객체마다 다르게 동작할 수 있는 성질입니다."
    },
    {
      id: 202602004,
      subject: "프로그래밍 언어 활용",
      question: "다음 중 자바스크립트(JavaScript)에 대한 설명으로 옳은 것으로 고른 것은?\n\n가. 웹 페이지의 동작을 제어하는 데 사용된다.\n나. 객체지향 프로그래밍 언어의 성격을 갖고 있다.\n다. Prototype Link와 Prototype Object를 통해 프로토타입 개념을 활용한다.",
      choices: [
        "가",
        "가, 나",
        "가, 다",
        "가, 나, 다"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. JavaScript는 웹 페이지 동작 제어에 사용되며, 객체지향적 성격을 갖고 프로토타입 기반 객체 모델을 사용합니다."
    },
    {
      id: 202602005,
      subject: "프로그래밍 언어 활용",
      question: "다음 변수 선언 문장에서 3.1415927의 역할에 대한 설명으로 올바른 것은?\n\nfinal float PI = 3.1415927;",
      choices: [
        "변수명",
        "예약어",
        "데이터 타입",
        "리터럴"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 3.1415927은 프로그램 코드에 직접 작성된 고정된 값이므로 리터럴입니다."
    },
    {
      id: 202602006,
      subject: "프로그래밍 언어 활용",
      question: "다음 중 관계 연산자의 사용이 올바른 것은?",
      choices: [
        "if (a == 5) { ... } - 변수 a가 5와 같지 않을 때",
        "if (b != 10) { ... } - 변수 b가 10과 같을 때",
        "if (c > 3) { ... } - 변수 c가 3보다 크거나 같을 때",
        "if (d <= 7) { ... } - 변수 d가 7보다 작거나 같을 때"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. <= 연산자는 왼쪽 값이 오른쪽 값보다 작거나 같을 때 참입니다."
    },
    {
      id: 202602007,
      subject: "프로그래밍 언어 활용",
      question: "다음 JAVA 프로그램이 실행되었을 때 실행 결과는?\n\npublic class Main {\n  public static void main(String[] args) {\n    System.out.print((int)2.9 + 1.7);\n  }\n}",
      choices: [
        "3.7",
        "4.7",
        "3",
        "4.6"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. (int)2.9는 소수점 이하가 버려져 2가 되고, 2 + 1.7의 결과는 3.7입니다."
    },
    {
      id: 202602008,
      subject: "프로그래밍 언어 활용",
      question: "다음 JAVA 코드의 실행 결과는?\n\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello\\nWorld\");\n  }\n}",
      choices: [
        "HelloWorld",
        "Hello\nWorld",
        "Hello \\nWorld",
        "H e l l o W o r l d"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. \\n은 줄바꿈 이스케이프 문자이므로 Hello와 World가 서로 다른 줄에 출력됩니다."
    },
    {
      id: 202602009,
      subject: "프로그래밍 언어 활용",
      question: "다음 JAVA 코드의 실행 결과는?\n\npublic class Main {\n  public static void main(String[] args) {\n    int i = 0;\n    int sum = 0;\n    while (i < 5) {\n      sum += i;\n      i++;\n    }\n    System.out.println(sum);\n  }\n}",
      choices: [
        "10",
        "15",
        "20",
        "25"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. i가 0부터 4까지 반복되므로 sum은 0 + 1 + 2 + 3 + 4 = 10입니다."
    },
    {
      id: 202602010,
      subject: "프로그래밍 언어 활용",
      question: "다음 중 JAVA에서 배열을 선언, 생성, 초기화하는 방법으로 올바르지 않은 것은?",
      choices: [
        "int[] arr = new int[5];",
        "int[] arr = {1, 2, 3, 4, 5};",
        "int[] arr; arr = new int[]{1, 2, 3};",
        "int[] arr = new int[];"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. new int[] 뒤에는 초기값 목록이 오거나, 배열 크기를 지정해야 합니다."
    },
    {
      id: 202602011,
      subject: "프로그래밍 언어 활용",
      question: "다음 파이썬(Python) 프로그램이 실행되었을 때의 결과는?\n\ninList = [1, 2, 3, 4, 5]\nanswer = inList[:3]\nprint(answer)",
      choices: [
        "[1]",
        "[1, 2]",
        "[1, 2, 3]",
        "[1, 2, 3, 4, 5]"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. inList[:3]은 인덱스 0부터 2까지의 요소를 가져오므로 [1, 2, 3]이 출력됩니다."
    },
    {
      id: 202602012,
      subject: "프로그래밍 언어 활용",
      question: "다음 파이썬(Python) 코드의 실행 결과는?\n\nfruits = ['apple', 'banana', 'cherry', 'kiwi']\nfruits.remove('banana')\nfruits.append('grape')\nfruits.insert(1, 'melon')\nprint(fruits)",
      choices: [
        "['apple', 'melon', 'cherry', 'kiwi', 'grape']",
        "['apple', 'banana', 'melon', 'cherry', 'kiwi', 'grape']",
        "['apple', 'grape', 'melon', 'cherry', 'kiwi']",
        "['apple', 'melon', 'grape', 'cherry', 'kiwi']"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. banana를 삭제한 뒤 grape를 끝에 추가하고, 인덱스 1 위치에 melon을 삽입합니다."
    },
    {
      id: 202602013,
      subject: "프로그래밍 언어 활용",
      question: "다음 파이썬(Python) 코드의 실행 결과는?\n\ndef calculate_sum(start, end):\n    total = 0\n    for i in range(start, end):\n        total += i\n    return total\n\nresult = calculate_sum(1, 5)\nprint(result)",
      choices: [
        "10",
        "15",
        "20",
        "25"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. range(1, 5)는 1, 2, 3, 4를 생성하므로 합계는 10입니다."
    },
    {
      id: 202602014,
      subject: "프로그래밍 언어 활용",
      question: "다음 중 HTML의 테이블 태그와 기능에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "<table>은 표를 생성하는 데 사용한다.",
        "<tr>은 표의 행(Row)을 정의한다.",
        "<th>는 표의 제목 셀(Header Cell)을 정의하며 글자가 굵게 표시된다.",
        "<td>는 표의 한 행을 정의하는 데 사용한다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. <td>는 표의 데이터 셀을 정의하며, 행을 정의하는 태그는 <tr>입니다."
    },
    {
      id: 202602015,
      subject: "프로그래밍 언어 활용",
      question: "다음 중 JavaScript의 배열 속성 및 메소드에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "length 속성은 배열의 요소 개수를 반환한다.",
        "push() 메소드는 배열의 끝에 새로운 요소를 추가한다.",
        "pop() 메소드는 배열의 첫 번째 요소를 삭제한다.",
        "splice() 메소드는 배열의 요소를 추가, 삭제, 교체하는 데 사용한다."
      ],
      answer: 2,
      explanation: "정답은 3번입니다. pop()은 배열의 마지막 요소를 삭제합니다. 첫 번째 요소를 삭제할 때는 shift()를 사용합니다."
    },
    {
      id: 202602016,
      subject: "컴퓨터 일반",
      question: "다음 트리에 대한 중위 순회 운행 결과는?\n\n        A\n       / \\\n      B   C\n     /   / \\\n    D   E   F",
      choices: [
        "A B D C E F",
        "A B C D E F",
        "D B E C F A",
        "D B A E C F"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 중위 순회는 왼쪽 서브트리 → 루트 → 오른쪽 서브트리 순서이므로 D B A E C F입니다."
    },
    {
      id: 202602017,
      subject: "정보통신 일반",
      question: "다음 중 통신 프로토콜의 기본 요소와 거리가 먼 것은?",
      choices: [
        "의미(Semantics)",
        "보안(Security)",
        "시간(Timing)",
        "구문(Syntax)"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 프로토콜의 기본 요소는 구문, 의미, 시간입니다."
    },
    {
      id: 202602018,
      subject: "정보통신 일반",
      question: "TCP/IP 프로토콜 중 전송 계층 프로토콜은?",
      choices: [
        "HTTP",
        "SMTP",
        "FTP",
        "TCP"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. TCP는 TCP/IP 계층 구조에서 전송 계층에 해당하는 프로토콜입니다."
    },
    {
      id: 202602019,
      subject: "데이터베이스 일반",
      question: "개체-관계 모델(E-R Model)에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "특정 DBMS를 고려한 것은 아니다.",
        "E-R 다이어그램에서 개체 타입은 사각형, 관계 타입은 타원, 속성은 다이아몬드로 나타낸다.",
        "개체 타입과 관계 타입을 기본 개념으로 현실 세계를 개념적으로 표현하는 방법이다.",
        "1976년 Peter Chen이 제안하였다."
      ],
      answer: 1,
      explanation: "정답은 2번입니다. E-R 다이어그램에서 개체는 사각형, 관계는 마름모, 속성은 타원으로 표현합니다."
    },
    {
      id: 202602020,
      subject: "정보통신 일반",
      question: "인터넷 도메인 네임을 IP Address로 바꿔주는 시스템은?",
      choices: [
        "HTTP",
        "TCP/IP",
        "URL",
        "DNS"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. DNS는 도메인 이름을 IP 주소로 변환해 주는 시스템입니다."
    },
    {
      id: 202602021,
      subject: "컴퓨터 일반",
      question: "다음 자료에 대하여 선택(Selection) 정렬을 이용하여 오름차순으로 정렬하고자 한다. 2회전 수행 결과는?\n\n27, 7, 4, 30, 25",
      choices: [
        "4, 7, 25, 27, 30",
        "4, 7, 30, 27, 25",
        "4, 7, 27, 30, 25",
        "4, 7, 25, 30, 27"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 1회전에서 가장 작은 4가 첫 번째로 이동하고, 2회전에서는 7이 이미 두 번째에 있으므로 결과는 4, 7, 27, 30, 25입니다."
    },
    {
      id: 202602022,
      subject: "데이터베이스 일반",
      question: "데이터베이스의 구조를 3단계로 구분할 때 해당하지 않는 것은?",
      choices: [
        "내부 스키마",
        "외부 스키마",
        "관계 스키마",
        "개념 스키마"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 데이터베이스 3단계 구조는 외부 스키마, 개념 스키마, 내부 스키마로 구성됩니다."
    },
    {
      id: 202602023,
      subject: "정보통신 일반",
      question: "TCP/IP 계층 구조에서 IP의 동작 과정에서 전송 오류가 발생하는 경우에 대비해 오류 정보를 전송하는 목적으로 사용되는 프로토콜은?",
      choices: [
        "ECP(Error Checking Protocol)",
        "ARP(Address Resolution Protocol)",
        "ICMP(Internet Control Message Protocol)",
        "PPP(Point-to-Point Protocol)"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. ICMP는 IP 패킷 처리 중 발생한 오류나 제어 정보를 전달하는 데 사용됩니다."
    },
    {
      id: 202602024,
      subject: "정보통신 일반",
      question: "다음 중 프로토콜(Protocol)의 종류가 아닌 것은?",
      choices: [
        "ASCII",
        "DDCMP",
        "BSC",
        "HDLC"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. ASCII는 문자 코드 체계이며, 통신 프로토콜이 아닙니다."
    },
    {
      id: 202602025,
      subject: "컴퓨터 일반",
      question: "스택(STACK)의 응용 분야로 거리가 먼 것은?",
      choices: [
        "인터럽트의 처리",
        "수식의 계산",
        "서브루틴의 복귀 번지 저장",
        "운영체제의 작업 스케줄링"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 운영체제의 작업 스케줄링은 주로 큐와 관련이 있으며, 스택의 대표적인 응용 분야와는 거리가 있습니다."
    },
    {
      id: 202602026,
      subject: "데이터베이스 일반",
      question: "물리적 데이터베이스 구조의 기본 데이터 단위인 저장 레코드의 양식을 설계할 때 고려 사항이 아닌 것은?",
      choices: [
        "데이터 타입",
        "데이터 값의 분포",
        "트랜잭션 모델링",
        "접근 빈도"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 저장 레코드 양식 설계에서는 데이터 타입, 데이터 값의 분포, 접근 빈도 등을 고려하며, 트랜잭션 모델링은 별도의 설계 활동에 가깝습니다."
    },
    {
      id: 202602027,
      subject: "데이터베이스 일반",
      question: "데이터베이스와 관련된 설명으로 거리가 먼 것은?",
      choices: [
        "효율적이고 경제적인 데이터의 관리가 목적이다.",
        "데이터의 중복성을 최소화하면서 일관성을 가진 데이터 처리가 목적이다.",
        "파일 시스템의 단점을 극복하여 데이터 독립성을 제공한다.",
        "하드웨어의 비용 절감을 위한 방법으로 등장하였다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 데이터베이스는 데이터의 중복 최소화, 일관성 유지, 데이터 독립성 제공 등을 목적으로 합니다."
    },
    {
      id: 202602028,
      subject: "데이터베이스 일반",
      question: "관계 데이터베이스 모델에서 차수(Degree)의 의미는?",
      choices: [
        "튜플의 수",
        "테이블의 수",
        "데이터베이스의 수",
        "애트리뷰트의 수"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 차수는 릴레이션을 구성하는 속성, 즉 애트리뷰트의 수를 의미합니다."
    },
    {
      id: 202602029,
      subject: "데이터베이스 일반",
      question: "릴레이션에서 튜플을 유일하게 구별해 주는 속성 또는 속성들의 조합을 의미하는 키는?",
      choices: [
        "Candidate Key",
        "Alternate Key",
        "Foreign Key",
        "Primary Key"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 후보키는 릴레이션에서 튜플을 유일하게 식별할 수 있는 속성 또는 속성들의 최소 조합입니다."
    },
    {
      id: 202602030,
      subject: "데이터베이스 일반",
      question: "다음 중 자료 사전(Data Dictionary)에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "메타 데이터(Meta Data)라고 한다.",
        "모든 데이터 객체들의 관련 정보를 유지, 관리하는 시스템이다.",
        "일반 이용자도 SQL을 이용하여 내용을 검색해 볼 수 있다.",
        "자료 사전에 대한 갱신은 메타데이터 무결성 유지를 위해 이용자가 직접 갱신해야 한다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 자료 사전은 DBMS가 관리하며, 일반 사용자가 직접 갱신하는 대상이 아닙니다."
    },
    {
      id: 202602031,
      subject: "데이터베이스 일반",
      question: "학생 테이블의 모든 자료를 검색하는 SQL문으로 옳은 것은?",
      choices: [
        "SELECT % FROM 학생;",
        "SELECT ? FROM 학생;",
        "SELECT * FROM 학생;",
        "SELECT # FROM 학생;"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. SELECT * FROM 학생;은 학생 테이블의 모든 열과 모든 행을 검색합니다."
    },
    {
      id: 202602032,
      subject: "데이터베이스 일반",
      question: "SQL에서 테이블 구조를 정의, 변경, 제거하는 명령을 순서대로 옳게 나열한 것은?",
      choices: [
        "CREATE, MODIFY, DELETE",
        "CREATE, ALTER, DROP",
        "MAKE, ALTER, DROP",
        "MAKE, MODIFY, DELETE"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 테이블 구조의 정의는 CREATE, 변경은 ALTER, 제거는 DROP을 사용합니다."
    },
    {
      id: 202602033,
      subject: "데이터베이스 일반",
      question: "관계 데이터베이스의 테이블인 수강 테이블에서 과목명이 'DB'인 모든 튜플들을 성적에 의해 정렬된 형태로 검색하고자 한다. 이때 정렬 기준은 기말성적의 내림차순으로 정렬하고, 기말성적이 같은 경우는 중간성적의 오름차순으로 정렬하고자 한다. ORDER BY 절의 빈칸에 들어갈 내용으로 옳은 것은?",
      choices: [
        "중간성적 DESC, 기말성적 ASC",
        "기말성적 DESC, 중간성적 ASC",
        "중간성적 DOWN, 기말성적 UP",
        "중간성적 DESC(), 기말성적 ASC"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 먼저 기말성적을 내림차순으로 정렬하고, 같은 경우 중간성적을 오름차순으로 정렬하므로 기말성적 DESC, 중간성적 ASC가 맞습니다."
    },
    {
      id: 202602034,
      subject: "데이터베이스 일반",
      question: "사용자 X1에게 department 테이블에 대한 검색 연산 권한을 회수하는 명령은?",
      choices: [
        "delete select on department to X1;",
        "remove select on department from X1;",
        "revoke select on department from X1;",
        "grant select on department from X1;"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 권한 회수는 REVOKE 명령을 사용하므로 revoke select on department from X1;이 맞습니다."
    },
    {
      id: 202602035,
      subject: "데이터베이스 일반",
      question: "관계형 데이터베이스에서 사용하기 가장 적합한 구조적 언어는 무엇인가?",
      choices: [
        "SQL",
        "HTML",
        "JAVA",
        "PYTHON"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. SQL은 관계형 데이터베이스에서 데이터를 정의, 조작, 제어하기 위해 사용하는 구조적 질의 언어입니다."
    },
    {
      id: 202602036,
      subject: "데이터베이스 일반",
      question: "SQL의 DML에 해당하지 않는 것은?",
      choices: [
        "INSERT",
        "UPDATE",
        "DROP",
        "DELETE"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. DROP은 데이터 정의어(DDL)에 해당하며, INSERT, UPDATE, DELETE는 데이터 조작어(DML)에 해당합니다."
    },
    {
      id: 202602037,
      subject: "데이터베이스 일반",
      question: "다음 SQL 명령에서 DISTINCT의 의미를 가장 잘 설명한 것은?\n\nSELECT DISTINCT 학과명 FROM 학생 WHERE 총점 > 80;",
      choices: [
        "학과명이 중복되지 않게 검색한다.",
        "중복된 학과명만 검색한다.",
        "동일한 총점을 가진 학과만 검색한다.",
        "학과명만 제외하고 검색한다."
      ],
      answer: 0,
      explanation: "정답은 1번입니다. DISTINCT는 검색 결과에서 중복된 값을 제거하여 출력합니다."
    },
    {
      id: 202602038,
      subject: "데이터베이스 일반",
      question: "다음 SQL문을 올바르게 설명한 것은?\n\nSELECT *\nFROM STUDENT\nWHERE SNAME LIKE '홍%';",
      choices: [
        "SNAME이 '홍'자로 시작하면 삭제한다.",
        "SNAME이 '홍'자로 시작되는 튜플을 찾는다.",
        "SNAME이 '홍'자로 시작하면 0으로 치환한다.",
        "SNAME이 '홍'자로 시작되는 튜플을 삭제한다."
      ],
      answer: 1,
      explanation: "정답은 2번입니다. LIKE '홍%'는 SNAME 값이 '홍'으로 시작하는 튜플을 검색합니다."
    },
    {
      id: 202602039,
      subject: "데이터베이스 일반",
      question: "SQL의 논리 연산자가 아닌 것은?",
      choices: [
        "AND",
        "OTHER",
        "OR",
        "NOT"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. SQL의 대표적인 논리 연산자는 AND, OR, NOT입니다."
    },
    {
      id: 202602040,
      subject: "데이터베이스 일반",
      question: "삭제문(DELETE FROM)의 사용 형식으로 옳지 않은 것은?",
      choices: [
        "DELETE FROM 사원 WHERE 부서 = '영업'",
        "DELETE 사원 WHERE 부서 = '마케팅'",
        "DELETE FROM 사원",
        "DELETE FROM 사원 WHERE 판매량 < (SELECT AVG(판매량) FROM 사원)"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. DELETE 문은 일반적으로 DELETE FROM 테이블명 WHERE 조건 형식으로 사용합니다."
    },
    {
      id: 202602041,
      subject: "데이터베이스 일반",
      question: "기존 테이블에 새로운 필드를 추가하거나 변경하려고 할 때 사용하는 SQL 명령은?",
      choices: [
        "ALTER",
        "UPDATE",
        "CREATE",
        "GRANT"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. ALTER는 기존 테이블의 구조를 변경할 때 사용하는 SQL 명령입니다."
    },
    {
      id: 202602042,
      subject: "데이터베이스 일반",
      question: "다음 질의를 SQL문으로 옳게 표기한 것은?\n\n제품 테이블에서 판매수량 300 이상인 자료의 제품명, 단가, 판매수량을 검색하시오.",
      choices: [
        "SELECT 제품명, 단가, 판매수량 FROM 제품 HAVING 판매수량 >= 300;",
        "SELECT 제품 FROM 제품명, 단가, 판매수량 WHERE 판매수량 >= 300;",
        "SELECT 제품명, 단가, 판매수량 FROM 제품 WHERE 판매수량 >= 300;",
        "SELECT 제품명, 단가, 판매수량 FROM 제품 IF 판매수량 >= 300;"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 조건 검색은 WHERE 절을 사용하므로 SELECT 제품명, 단가, 판매수량 FROM 제품 WHERE 판매수량 >= 300;이 맞습니다."
    },
    {
      id: 202602043,
      subject: "데이터베이스 일반",
      question: "데이터 조작문의 유형으로 올바르지 않은 것은?",
      choices: [
        "SELECT ~ FROM ~ WHERE ~",
        "INSERT INTO ~ VALUES ~",
        "UPDATE ~ FROM ~ WHERE ~",
        "DELETE FROM ~ WHERE ~"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. UPDATE 문은 일반적으로 UPDATE 테이블명 SET 컬럼 = 값 WHERE 조건 형식으로 사용합니다."
    },
    {
      id: 202602044,
      subject: "데이터베이스 일반",
      question: "SQL에서 VIEW를 삭제할 때 사용하는 명령은?",
      choices: [
        "ERASE",
        "KILL",
        "DROP",
        "DELETE"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. VIEW를 삭제할 때는 DROP VIEW 문을 사용합니다."
    },
    {
      id: 202602045,
      subject: "데이터베이스 일반",
      question: "다음 SQL 명령문의 의미로 가장 적절한 것은?\n\nDROP TABLE 부서명;",
      choices: [
        "부서명 테이블을 검색하라.",
        "부서명 테이블을 삭제하라.",
        "부서명 필드를 생성하라.",
        "부서명 필드를 검색하라."
      ],
      answer: 1,
      explanation: "정답은 2번입니다. DROP TABLE은 지정한 테이블을 삭제하는 SQL 명령입니다."
    },
    {
      id: 202602046,
      subject: "정보 시스템 일반",
      question: "다중 프로그래밍 환경에서 하나 또는 그 이상의 프로세스가 발생하지 못한 특정 사건(Event)을 무한정 기다리는 상태를 무엇이라고 하는가?",
      choices: [
        "Swapping",
        "Overlay",
        "Pipelining",
        "DeadLock"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. DeadLock은 둘 이상의 프로세스가 서로 필요한 자원을 기다리며 무한 대기하는 상태입니다."
    },
    {
      id: 202602047,
      subject: "정보 시스템 일반",
      question: "프로세스의 상태 변화 중 우선순위가 가장 높은 프로세스가 준비 상태에서 실행 상태로 전환되는 것은?",
      choices: [
        "웨이크 업",
        "타이머 종료",
        "블록",
        "디스패치"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 디스패치는 준비 상태의 프로세스가 CPU를 배정받아 실행 상태로 전환되는 동작입니다."
    },
    {
      id: 202602048,
      subject: "정보 시스템 일반",
      question: "Windows에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "다중 작업 환경 지원",
        "32Bit 환경의 CUI 시스템",
        "파일 이름은 255자까지 지원",
        "Plug & Play 기능 지원"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. Windows는 대표적인 GUI 기반 운영체제입니다."
    },
    {
      id: 202602049,
      subject: "정보 시스템 일반",
      question: "컴퓨터에 하드디스크를 새로 장착하고 부팅 가능한 하드디스크로 만들기 위한 도스 명령어는?",
      choices: [
        "FORMAT C: /S",
        "FORMAT C: /B",
        "FORMAT C: /T",
        "FORMAT C: /Q"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. FORMAT C: /S는 시스템 파일을 함께 전송하여 부팅 가능한 디스크로 포맷할 때 사용합니다."
    },
    {
      id: 202602050,
      subject: "정보 시스템 일반",
      question: "사용자 인터페이스(UI) 테스트 기법에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "페이퍼 프로토타입은 종이로 모형을 만들어 테스트하는 평가 방법이다.",
        "성능 평가는 제품의 학습성, 효율성, 만족도 등을 평가하여 성능을 개선하는 기법이다.",
        "휴리스틱 평가는 최소 3명 이상의 사용자가 제품을 평가하는 기법이다.",
        "선호도 평가는 선호도에 영향을 주는 속성을 파악하고 예측하는 기법이다."
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 휴리스틱 평가는 일반 사용자가 아니라 전문가가 사용성 원칙에 따라 평가하는 방식입니다."
    },
    {
      id: 202602051,
      subject: "정보 시스템 일반",
      question: "목적 프로그램을 만들지 않고 직접 한 문장씩 번역하여 실행하는 방식의 언어 처리기는?",
      choices: [
        "인터프리터(Interpreter)",
        "프리프로세서(Preprocessor)",
        "컴파일러(Compiler)",
        "어셈블러(Assembler)"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 인터프리터는 소스 프로그램을 한 문장씩 번역하면서 바로 실행합니다."
    },
    {
      id: 202602052,
      subject: "정보 시스템 일반",
      question: "다음 중 운영체제를 설명한 것이 아닌 것은?",
      choices: [
        "컴퓨터 시스템 장치를 효율적으로 관리",
        "컴퓨터를 사용자가 편리하게 이용 가능",
        "사용자가 개발한 응용 소프트웨어",
        "사용자와 하드웨어 간 중간 매개 통로"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 운영체제는 응용 소프트웨어가 아니라 시스템 소프트웨어입니다."
    },
    {
      id: 202602053,
      subject: "정보 시스템 일반",
      question: "하향식 통합 시험을 위해 일시적으로 필요한 조건만을 가지고 임시로 제공되는 시험용 모듈은?",
      choices: [
        "Stub",
        "Driver",
        "Procedure",
        "Function"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 하향식 통합 시험에서는 아직 작성되지 않은 하위 모듈을 Stub으로 대체합니다."
    },
    {
      id: 202602054,
      subject: "컴퓨터 일반",
      question: "다음 조건을 이용하여 데이터 디스크 용량을 계산했을 때 결과값은?\n\n데이터 영역: 300GB\n백업 영역: 100GB\n파일 시스템 오버헤드: 1.1\n데이터 디스크 여유율: 1.25\nRAID 여유율: 1.3 (RAID-5 기준)",
      choices: [
        "715",
        "725",
        "735",
        "745"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. (300 + 100) × 1.1 × 1.25 × 1.3 = 715입니다."
    },
    {
      id: 202602055,
      subject: "정보 시스템 일반",
      question: "UNIX에서 사용할 수 있는 편집기가 아닌 것은?",
      choices: [
        "ed",
        "vi",
        "ex",
        "et"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. ed, vi, ex는 UNIX 계열에서 사용되는 편집기이며, et는 일반적인 UNIX 편집기로 보기 어렵습니다."
    },
    {
      id: 202602056,
      subject: "정보 시스템 일반",
      question: "현재 작업 중인 디렉터리 내의 파일을 열거하는 데 사용되는 UNIX의 명령어는?",
      choices: [
        "mv",
        "ls",
        "kill",
        "fork"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. ls는 현재 디렉터리의 파일과 폴더 목록을 표시하는 UNIX 명령어입니다."
    },
    {
      id: 202602057,
      subject: "정보 시스템 일반",
      question: "블랙박스 검사에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "인터페이스 결함, 성능 결함, 초기화와 종료 이상 결함 등을 찾아낸다.",
        "각 기능별로 적절한 정보 영역을 정하여 적합한 입력에 대한 출력의 정확성을 점검한다.",
        "블랙박스 검사는 기능 검사라고도 한다.",
        "조건 검사, 루프 검사, 데이터 흐름 검사 등의 유형이 있다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 조건 검사, 루프 검사, 데이터 흐름 검사는 주로 화이트박스 검사 기법에 해당합니다."
    },
    {
      id: 202602058,
      subject: "정보 시스템 일반",
      question: "도스(MS-DOS)에서 지정한 파일의 이름을 바꾸어 주는 명령은?",
      choices: [
        "REN",
        "MD",
        "XCOPY",
        "CHKDSK"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. REN은 파일 이름을 변경하는 DOS 명령어입니다."
    },
    {
      id: 202602059,
      subject: "정보 시스템 일반",
      question: "키보드로 명령어를 직접 입력하지 않고, 마우스로 아이콘이나 메뉴를 선택하여 모든 작업을 수행하는 방식은?",
      choices: [
        "CLI",
        "GUI",
        "NUI",
        "OUI"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. GUI는 아이콘, 메뉴, 창 등을 통해 작업을 수행하는 그래픽 사용자 인터페이스입니다."
    },
    {
      id: 202602060,
      subject: "정보 시스템 일반",
      question: "시분할 처리 시스템을 바르게 설명한 것은?",
      choices: [
        "처리할 내용을 일정 기간 동안 모았다가 일괄 처리하는 방식",
        "데이터가 발생하는 즉시 처리하는 방식",
        "한 시스템을 여러 명의 사용자가 공유하여 동시에 작업을 수행하는 방식",
        "지역적으로 분산된 컴퓨터들을 연결하여 사용하는 방식"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 시분할 처리 시스템은 CPU 시간을 짧게 나누어 여러 사용자가 동시에 사용하는 것처럼 처리하는 방식입니다."
    }
  ]
});
