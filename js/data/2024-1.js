window.questionBanks = window.questionBanks || [];

window.questionBanks.push({
  year: 2024,
  round: 1,
  title: "2024년 1회 정보처리기능사 필기 기출문제",
  questions: [
    {
      id: 202401001,
      subject: "컴퓨터 일반",
      question: "오퍼랜드(Operand) 자체가 연산 대상이 되는 주소 지정 방식은?",
      choices: [
        "즉시 주소 지정 방식(Immediate Addressing)",
        "직접 주소 지정 방식(Direct Addressing)",
        "간접 주소 지정 방식(Indirect Addressing)",
        "묵시적 주소 지정 방식(Implied Addressing)"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 즉시 주소 지정 방식은 명령어의 오퍼랜드 부분에 실제 데이터가 들어 있어 오퍼랜드 자체가 연산 대상이 됩니다."
    },
    {
      id: 202401002,
      subject: "컴퓨터 일반",
      question: "Y = A + A'ㆍB를 간소화하면?",
      choices: [
        "A",
        "B",
        "A + B",
        "AㆍB"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. A + A'B = (A + A')(A + B) = 1ㆍ(A + B) = A + B입니다."
    },
    {
      id: 202401003,
      subject: "컴퓨터 일반",
      question: "전가산기(Full Adder)는 어떤 회로로 구성되는가?",
      choices: [
        "반가산기 1개와 OR 게이트로 구성된다.",
        "반가산기 1개와 AND 게이트로 구성된다.",
        "반가산기 2개와 OR 게이트로 구성된다.",
        "반가산기 2개와 AND 게이트로 구성된다."
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 전가산기는 반가산기 2개와 OR 게이트 1개로 구성할 수 있습니다."
    },
    {
      id: 202401004,
      subject: "컴퓨터 일반",
      question: "입력 A, B와 출력 C의 진리표가 00→0, 01→0, 10→0, 11→1일 때 해당하는 논리회로는?",
      choices: [
        "그림 1",
        "그림 2",
        "그림 3",
        "그림 4"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 두 입력이 모두 1일 때만 출력이 1이므로 AND 회로입니다.",
      image: "../images/extracted/2024-1-q4-choices.jpg",
      imageAlt: "진리표에 맞는 논리회로 보기 4개"
    },
    {
      id: 202401005,
      subject: "컴퓨터 일반",
      question: "다음 중 가장 작은 수는?",
      choices: [
        "2진수 101011000",
        "8진수 531",
        "10진수 345",
        "16진수 159"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 2진수 101011000은 10진수 344이고, 나머지 8진수 531, 10진수 345, 16진수 159는 모두 10진수 345입니다."
    },
    {
      id: 202401006,
      subject: "컴퓨터 일반",
      question: "컴퓨터에 의하여 다음에 수행될 명령어의 주소가 저장되어 있는 기억 장소는?",
      choices: [
        "명령어 레지스터(Instruction Register)",
        "메모리 레지스터(Memory Register)",
        "인덱스 레지스터(Index Register)",
        "프로그램 카운터(Program Counter)"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 프로그램 카운터는 다음에 수행할 명령어의 주소를 저장하는 레지스터입니다."
    },
    {
      id: 202401007,
      subject: "컴퓨터 일반",
      question: "다음 논리회로에서 A = 1, B = 1, C = 0일 때 출력 X의 값은?",
      choices: [
        "0",
        "1",
        "10",
        "11"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. A와 B의 AND 결과가 1이고, 이를 C = 0과 OR 하면 출력 X는 1입니다.",
      image: "../images/extracted/2024-1-p1-img3.jpg",
      imageAlt: "A와 B가 AND 게이트를 거친 뒤 C와 OR 게이트로 연결되는 논리회로"
    },
    {
      id: 202401008,
      subject: "컴퓨터 일반",
      question: "JK 플립플롭에서 보수가 출력되기 위한 J, K의 입력 상태는?",
      choices: [
        "J = 1, K = 0",
        "J = 0, K = 1",
        "J = 1, K = 1",
        "J = 0, K = 0"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. JK 플립플롭에서 J = 1, K = 1이면 현재 상태의 보수, 즉 토글 동작을 합니다."
    },
    {
      id: 202401009,
      subject: "컴퓨터 일반",
      question: "특정 비트 또는 특정 문자를 삭제하기 위해 사용하는 연산은?",
      choices: [
        "OR",
        "AND",
        "MOVE",
        "Complement"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 특정 비트를 삭제하거나 마스크 처리할 때 AND 연산을 사용합니다."
    },
    {
      id: 202401010,
      subject: "컴퓨터 일반",
      question: "0-주소 명령은 연산 시 어떤 자료 구조를 이용하는가?",
      choices: [
        "STACK",
        "TREE",
        "QUEUE",
        "DEQUE"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 0-주소 명령어는 주소부 없이 스택을 이용하여 연산합니다."
    },
    {
      id: 202401011,
      subject: "컴퓨터 일반",
      question: "명령어(Instruction)의 구성을 가장 바르게 표현한 것은?",
      choices: [
        "명령 코드부와 번지부로 구성",
        "오류 검색 코드 형식",
        "자료의 표현과 주소 지정 방식",
        "주 프로그램과 부 프로그램"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 명령어는 일반적으로 연산을 나타내는 명령 코드부와 주소를 나타내는 번지부로 구성됩니다."
    },
    {
      id: 202401012,
      subject: "컴퓨터 일반",
      question: "컴퓨터 내에서 실행되는 명령어와 데이터가 이동되는 통로를 일컫는 것은?",
      choices: [
        "라인",
        "버스",
        "체인",
        "드라이버"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 버스는 컴퓨터 내부에서 데이터, 주소, 제어 신호가 이동하는 공통 통로입니다."
    },
    {
      id: 202401013,
      subject: "컴퓨터 일반",
      question: "다음 블록화 레코드에서 블록화 인수는?",
      choices: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 블록화 인수는 하나의 물리 레코드 또는 블록 안에 포함된 논리 레코드의 개수입니다."
    },
    {
      id: 202401014,
      subject: "컴퓨터 일반",
      question: "논리적 연산의 종류에 해당하지 않는 것은?",
      choices: [
        "AND",
        "OR",
        "Rotate",
        "ADD"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. ADD는 산술 연산이며, AND, OR, Rotate는 논리적 연산에 해당합니다."
    },
    {
      id: 202401015,
      subject: "컴퓨터 일반",
      question: "다음 중 RISC의 설명으로 옳은 것은?",
      choices: [
        "메모리에 대한 액세스는 LOAD와 STORE만으로 한정되어 있다.",
        "명령어마다 다른 수행 사이클을 가지므로 파이프라이닝이 어렵다.",
        "마이크로 코드에 의해 해석 후 명령어를 수행한다.",
        "주소 지정 방식이 다양하게 존재한다."
      ],
      answer: 0,
      explanation: "정답은 1번입니다. RISC는 LOAD/STORE 구조를 사용하여 메모리 접근 명령을 단순화합니다."
    },
    {
      id: 202401016,
      subject: "컴퓨터 일반",
      question: "일반적으로 CPU에서 하나의 명령어를 실행하기 위해 이루어지는 동작 단계를 바르게 나열한 것은?",
      choices: [
        "Fetch Cycle → Instruction Decoding Cycle → Write-Back → 명령어 실행",
        "Fetch Cycle → Instruction Decoding Cycle → 명령어 실행 → Write-Back",
        "명령어 실행 → Fetch Cycle → Instruction Decoding Cycle → Write-Back",
        "Instruction Decoding Cycle → 명령어 실행 → Fetch Cycle → Write-Back"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 명령어 처리 순서는 인출(Fetch) → 해독(Decode) → 실행(Execute) → 기록(Write-Back)입니다."
    },
    {
      id: 202401017,
      subject: "컴퓨터 일반",
      question: "논리회로, 가산기, 누산기, 감산기와 가장 관계있는 장치는?",
      choices: [
        "입출력장치",
        "제어장치",
        "연산장치",
        "기억장치"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 논리회로, 가산기, 감산기, 누산기는 연산장치와 관련이 깊습니다."
    },
    {
      id: 202401018,
      subject: "컴퓨터 일반",
      question: "다음 논리식으로 구성되는 회로는? 단, S는 합(Sum), C는 자리올림(Carry)을 나타낸다.\nS = A'ㆍB + AㆍB', C = AㆍB",
      choices: [
        "반가산기(Half Adder)",
        "전가산기(Full Adder)",
        "전감산기(Full Subtracter)",
        "부호기(Encoder)"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 반가산기의 합 S는 XOR 연산이고, 자리올림 C는 AND 연산입니다."
    },
    {
      id: 202401019,
      subject: "컴퓨터 일반",
      question: "연속되는 2개의 숫자를 표현한 코드에서 한 개의 비트만 변경하면 새로운 코드가 되기 때문에 아날로그-디지털 변환, 데이터 전송 등에 주로 사용되는 코드는?",
      choices: [
        "EBCDIC Code",
        "Hamming Code",
        "ASCII Code",
        "Gray Code"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 그레이 코드는 인접한 코드 사이에서 1비트만 달라지는 특징이 있습니다."
    },
    {
      id: 202401020,
      subject: "컴퓨터 일반",
      question: "기억장치 고유의 번지로서 0, 1, 2, 3과 같이 순서대로 정해 놓은 주소는?",
      choices: [
        "메모리 주소",
        "베이스 주소",
        "상대 주소",
        "절대 주소"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 절대 주소는 기억장치의 고유한 실제 주소를 의미합니다."
    },
    {
      id: 202401021,
      subject: "데이터베이스 일반",
      question: "프레젠테이션에서 화면을 구성하는 그림이나 도형들은?",
      choices: [
        "슬라이드",
        "개체",
        "시나리오",
        "개요"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 프레젠테이션에서 그림, 도형, 표, 차트 등 화면을 구성하는 요소를 개체라고 합니다."
    },
    {
      id: 202401022,
      subject: "데이터베이스 일반",
      question: "SQL 구문 형식으로 옳지 않은 것은?",
      choices: [
        "SELECT ~ FROM ~ WHERE",
        "DELETE ~ FROM ~ WHERE",
        "INSERT ~ INTO ~ WHERE",
        "UPDATE ~ SET ~ WHERE"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. INSERT 문은 일반적으로 INSERT INTO 테이블명 VALUES (...) 형식을 사용하며 WHERE 절을 사용하지 않습니다."
    },
    {
      id: 202401023,
      subject: "데이터베이스 일반",
      question: "3단계 스키마의 종류에 해당하지 않는 것은?",
      choices: [
        "개념 스키마(Conceptual Schema)",
        "관계 스키마(Relational Schema)",
        "내부 스키마(Internal Schema)",
        "외부 스키마(External Schema)"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 3단계 스키마는 외부 스키마, 개념 스키마, 내부 스키마로 구성됩니다."
    },
    {
      id: 202401024,
      subject: "데이터베이스 일반",
      question: "다음 SQL 명령문의 의미로 가장 적절한 것은?\nDROP TABLE 학과 CASCADE;",
      choices: [
        "학과 테이블을 제거하시오.",
        "학과 필드를 제거하시오.",
        "학과 테이블과 이 테이블을 참조하는 다른 테이블도 함께 제거하시오.",
        "학과 테이블이 다른 테이블에 의해 참조 중이면 제거하지 마시오."
      ],
      answer: 2,
      explanation: "정답은 3번입니다. CASCADE 옵션은 삭제 대상과 관련된 참조 객체까지 함께 삭제합니다."
    },
    {
      id: 202401025,
      subject: "데이터베이스 일반",
      question: "데이터베이스 관리 시스템(DBMS)의 주요 기능에 속하지 않는 것은?",
      choices: [
        "관리 기능",
        "정의 기능",
        "조작 기능",
        "제어 기능"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. DBMS의 주요 기능은 정의 기능, 조작 기능, 제어 기능입니다."
    },
    {
      id: 202401026,
      subject: "데이터베이스 일반",
      question: "관계형 데이터베이스에서 속성의 수를 의미하는 것은?",
      choices: [
        "카디널리티(Cardinality)",
        "도메인(Domain)",
        "차수(Degree)",
        "릴레이션(Relation)"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 차수는 릴레이션을 구성하는 속성의 수를 의미합니다."
    },
    {
      id: 202401027,
      subject: "데이터베이스 일반",
      question: "엑셀에서 연속되지 않는 여러 개의 셀들을 선택할 때 사용하는 키는?",
      choices: [
        "[Ctrl]",
        "[Shift]",
        "[Insert]",
        "[Alt]"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 연속되지 않는 셀을 여러 개 선택할 때는 [Ctrl] 키를 누른 상태에서 선택합니다."
    },
    {
      id: 202401028,
      subject: "데이터베이스 일반",
      question: "스프레드시트의 기능과 거리가 먼 것은?",
      choices: [
        "데이터 연산 결과를 사용자가 다양한 서식으로 자유롭게 표현한다.",
        "입력된 자료 또는 계산된 자료를 가지고 여러 유형의 그래프를 작성한다.",
        "동영상 처리 및 애니메이션 효과를 구현할 수 있다.",
        "특정 자료의 검색, 추출 및 정렬을 한다."
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 동영상 처리 및 애니메이션 효과는 스프레드시트보다 프레젠테이션이나 영상 편집 프로그램과 관련이 있습니다."
    },
    {
      id: 202401029,
      subject: "데이터베이스 일반",
      question: "SQL SELECT 문에서 정렬과 관계없는 것은?",
      choices: [
        "LIKE",
        "ORDER BY",
        "DESC",
        "ASC"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. LIKE는 패턴 검색에 사용되며, ORDER BY, DESC, ASC는 정렬과 관련됩니다."
    },
    {
      id: 202401030,
      subject: "데이터베이스 일반",
      question: "다음의 데이터베이스 설계 항목들을 순서대로 옳게 나열한 것은?\n㉮ 요구 조건 분석\n㉯ 물리적 설계\n㉰ 논리적 설계\n㉱ 개념적 설계\n㉲ 구현",
      choices: [
        "㉮ → ㉯ → ㉰ → ㉱ → ㉲",
        "㉮ → ㉯ → ㉱ → ㉰ → ㉲",
        "㉮ → ㉰ → ㉯ → ㉱ → ㉲",
        "㉮ → ㉱ → ㉰ → ㉯ → ㉲"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 데이터베이스 설계 순서는 요구 조건 분석 → 개념적 설계 → 논리적 설계 → 물리적 설계 → 구현입니다."
    },
    {
      id: 202401031,
      subject: "운영체제",
      question: "한글 Windows 10에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "다중 작업 환경을 지원한다.",
        "64Bit CUI 환경의 시스템이다.",
        "파일 이름을 255자까지 지원한다.",
        "Plug & Play 기능을 지원한다."
      ],
      answer: 1,
      explanation: "정답은 2번입니다. Windows 10은 CUI가 아니라 GUI 환경을 제공하는 운영체제입니다."
    },
    {
      id: 202401032,
      subject: "운영체제",
      question: "윈도우의 단축키 중 활성화된 창을 닫고 프로그램을 종료하는 것은?",
      choices: [
        "[Ctrl]+[C]",
        "[Ctrl]+[Esc]",
        "[Alt]+[F4]",
        "[Shift]+[Tab]"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. [Alt]+[F4]는 현재 활성화된 창이나 프로그램을 종료하는 단축키입니다."
    },
    {
      id: 202401033,
      subject: "운영체제",
      question: "윈도우 환경에서 여러 개의 프로그램을 동시에 작업하는 것을 무엇이라 하는가?",
      choices: [
        "멀티 유저",
        "멀티 태스킹",
        "멀티 스케줄링",
        "멀티 컨트롤"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 멀티 태스킹은 여러 작업을 동시에 처리하는 기능입니다."
    },
    {
      id: 202401034,
      subject: "운영체제",
      question: "1980년대에 MS-DOS에서 멀티태스킹과 GUI 환경을 제공하기 위한 응용 프로그램으로 출시된 운영체제는 무엇인가?",
      choices: [
        "iOS",
        "UNIX",
        "Windows",
        "Android"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. Windows는 MS-DOS 환경에서 GUI와 멀티태스킹 기능을 제공하기 위해 등장했습니다."
    },
    {
      id: 202401035,
      subject: "운영체제",
      question: "사용자와 컴퓨터 하드웨어 사이에서 중개자 역할을 하는 프로그램으로 가장 적절한 것은?",
      choices: [
        "운영체제(Operating System)",
        "컴파일러(Compiler)",
        "파일 시스템(File System)",
        "GUI"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 운영체제는 사용자와 하드웨어 사이에서 자원을 관리하고 중개하는 시스템 소프트웨어입니다."
    },
    {
      id: 202401036,
      subject: "운영체제",
      question: "도스(MS-DOS)의 내부 명령어에 대한 설명으로 옳은 것은?",
      choices: [
        "디스크에 별도의 독립 파일로 존재한다.",
        "프롬프트 상태에서 언제든지 사용 가능하다.",
        "COMMAND.COM 파일이 없어도 사용할 수 있다.",
        "보조기억장치에 저장되어 있으므로 Load하여 사용한다."
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 내부 명령어는 COMMAND.COM에 포함되어 있어 프롬프트 상태에서 바로 사용할 수 있습니다."
    },
    {
      id: 202401037,
      subject: "운영체제",
      question: "다음 중 운영체제가 아닌 것은?",
      choices: [
        "UNIX",
        "DOS",
        "WINDOWS",
        "PASCAL"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. PASCAL은 프로그래밍 언어입니다."
    },
    {
      id: 202401038,
      subject: "운영체제",
      question: "윈도우의 탐색기에서 비연속적인 여러 개의 파일을 선택하는 방법은?",
      choices: [
        "[Ctrl]을 누른 상태에서 선택하려는 파일들을 왼쪽 마우스 버튼으로 클릭한다.",
        "[Shift]를 누른 상태에서 선택하려는 파일들을 왼쪽 마우스 버튼으로 클릭한다.",
        "[Alt]를 누른 상태에서 선택하려는 파일들을 오른쪽 마우스 버튼으로 클릭한다.",
        "[Shift]를 누른 상태에서 선택하려는 파일들을 오른쪽 마우스 버튼으로 클릭한다."
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 비연속적인 파일을 여러 개 선택할 때는 [Ctrl] 키를 누른 상태에서 클릭합니다."
    },
    {
      id: 202401039,
      subject: "운영체제",
      question: "도스(MS-DOS)에서 지정한 파일의 이름을 바꾸어 주는 명령은?",
      choices: [
        "REN",
        "MD",
        "XCOPY",
        "CHKDSK"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. REN 또는 RENAME 명령어는 파일 이름을 변경할 때 사용합니다."
    },
    {
      id: 202401040,
      subject: "운영체제",
      question: "도스의 DEL 명령에서 삭제 전에 삭제 여부를 확인하는 방법은?",
      choices: [
        "C:\\>DEL *.*/S",
        "C:\\>DEL *.*/P",
        "C:\\>DEL *.*/A",
        "C:\\>DEL *.*/E"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. DEL 명령에서 /P 옵션은 삭제 전에 확인 메시지를 표시합니다."
    },
    {
      id: 202401041,
      subject: "운영체제",
      question: "도스(MS-DOS)에서 하드디스크를 논리적으로 여러 개의 디스크로 나누어 논리적 드라이브 번호를 할당하는 명령은?",
      choices: [
        "CHKDSK",
        "FORMAT",
        "DIR",
        "FDISK"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. FDISK는 하드디스크의 파티션을 설정하는 명령어입니다."
    },
    {
      id: 202401042,
      subject: "운영체제",
      question: "컴퓨터에 작업을 지시하고 나서부터 결과를 받을 때까지의 경과 시간은?",
      choices: [
        "턴어라운드 시간(Turnaround Time)",
        "프로세스 시간(Process Time)",
        "서치 시간(Search Time)",
        "액세스 시간(Access Time)"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 턴어라운드 시간은 작업 제출부터 결과를 받을 때까지 걸리는 전체 시간입니다."
    },
    {
      id: 202401043,
      subject: "운영체제",
      question: "윈도우의 폴더명에 대한 설명으로 틀린 것은?",
      choices: [
        "하나의 폴더 내에 동일한 이름의 폴더가 존재할 수 없다.",
        "폴더명은 공백을 포함할 수 없다.",
        "폴더의 이름은 255자 이내로 작성한다.",
        "?, / 등은 폴더 이름으로 사용할 수 없다."
      ],
      answer: 1,
      explanation: "정답은 2번입니다. Windows의 폴더명은 공백을 포함할 수 있습니다."
    },
    {
      id: 202401044,
      subject: "운영체제",
      question: "UNIX에서 note 파일의 접근 허용 상태가 -rwxrwxrwx일 때, 소유자만 파일을 수정할 수 있도록 하는 명령으로 옳은 것은?",
      choices: [
        "chmod u-w note",
        "chmod u+w note",
        "chmod go-w note",
        "chmod o+w note"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 소유자만 수정 가능하게 하려면 그룹과 기타 사용자에게서 쓰기 권한을 제거해야 하므로 chmod go-w note가 적절합니다."
    },
    {
      id: 202401045,
      subject: "운영체제",
      question: "윈도우의 휴지통에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "삭제한 파일을 임시 저장하며 휴지통 내의 파일을 다시 복구할 수 있다.",
        "휴지통의 크기를 변경할 수 없다.",
        "파일 삭제 시 휴지통에 보관하지 않고 즉시 삭제할지의 여부를 지정할 수 있다.",
        "파일 삭제 시 삭제 확인 메시지를 보이지 않게 지정할 수 있다."
      ],
      answer: 1,
      explanation: "정답은 2번입니다. Windows에서는 휴지통의 크기를 변경할 수 있습니다."
    },
    {
      id: 202401046,
      subject: "운영체제",
      question: "도스(MS-DOS)에서 CONFIG.SYS 파일에 'break=on'을 설정하는 이유는?",
      choices: [
        "중첩 확장 메모리 영역의 사용을 위하여",
        "[Ctrl]+[C]에 의한 작업 중지 명령을 위하여",
        "숨김 파일을 만들기 위하여(Hidden)",
        "드라이브를 읽기 전용으로 만들기 위하여(Read Only)"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. break=on은 [Ctrl]+[C] 또는 [Ctrl]+[Break]에 의한 작업 중지 감지를 강화하기 위한 설정입니다."
    },
    {
      id: 202401047,
      subject: "운영체제",
      question: "비선점(Non-Preemptive) 프로세스 스케줄링 방식에 해당하는 것은?",
      choices: [
        "SJF, SRT",
        "SJF, FIFO",
        "Round-Robin, SRT",
        "Round-Robin, SJF"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. FIFO와 비선점 SJF는 대표적인 비선점 스케줄링 방식입니다."
    },
    {
      id: 202401048,
      subject: "운영체제",
      question: "기억장치에 저장된 여러 개의 프로세스가 수행 상태, 대기 상태, 준비 상태와 같은 변환 과정을 반복할 때 각 프로세스에게 중앙처리장치의 사용 시간을 할당하는 것을 무엇이라 하는가?",
      choices: [
        "Partition",
        "Scheduling",
        "Fragmentation",
        "Optimize"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 스케줄링은 여러 프로세스에 CPU 사용 순서와 시간을 배정하는 작업입니다."
    },
    {
      id: 202401049,
      subject: "운영체제",
      question: "윈도우에서 '디스크 조각 모음'에 관한 설명으로 옳은 것은?",
      choices: [
        "디스크의 논리적 영역을 할당한다.",
        "디스크의 삭제된 파일을 복구한다.",
        "디스크의 물리적 손상 부분을 제거한다.",
        "디스크를 효율적으로 사용하기 위해 파일을 정리한다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 디스크 조각 모음은 흩어진 파일 조각을 정리하여 디스크 사용 효율을 높이는 기능입니다."
    },
    {
      id: 202401050,
      subject: "운영체제",
      question: "로더(Loader)가 수행하는 기능으로 옳지 않은 것은?",
      choices: [
        "재배치가 가능한 주소들을 할당된 기억장치에 맞게 변환한다.",
        "프로그램의 수행 순서를 결정한다.",
        "로드 모듈을 주기억장치로 읽어 들인다.",
        "프로그램을 적재할 주기억장치 내의 공간을 할당한다."
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 로더는 할당, 연결, 재배치, 적재 등을 수행하며 프로그램의 수행 순서를 결정하지는 않습니다."
    },
    {
      id: 202401051,
      subject: "정보통신 일반",
      question: "다음 중 전진 에러 수정(FEC)에 해당되는 것은?",
      choices: [
        "해밍 부호",
        "Stop-and-Wait ARQ",
        "Continuous ARQ",
        "패리티 부호"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 해밍 부호는 오류를 검출하고 정정할 수 있는 전진 오류 수정 방식에 사용됩니다."
    },
    {
      id: 202401052,
      subject: "정보통신 일반",
      question: "위상이 일정하고 진폭이 0[V]와 5[V]의 2가지 변화로써 신호를 1,200[Baud]의 속도로 전송할 때 매초당 비트 수[bps]는?",
      choices: [
        "1,200",
        "2,400",
        "4,800",
        "9,600"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 2가지 신호 상태는 1심벌당 1비트를 나타내므로 1,200 Baud는 1,200 bps입니다."
    },
    {
      id: 202401053,
      subject: "정보통신 일반",
      question: "다음 중 PCM 전송에서 송신측 과정은?",
      choices: [
        "음성 → 양자화 → 표본화 → 부호화",
        "음성 → 복호화 → 변조화 → 부호화",
        "음성 → 진화 → 압축화 → 부호화",
        "음성 → 표본화 → 양자화 → 부호화"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. PCM 송신 과정은 표본화 → 양자화 → 부호화 순서로 진행됩니다."
    },
    {
      id: 202401054,
      subject: "정보통신 일반",
      question: "다음 중 OSI 7계층에 대한 설명으로 틀린 것은?",
      choices: [
        "다른 시스템 간의 원활한 통신을 위해 국제표준화기구(ISO)에서 제안한 통신 규약이다.",
        "개방형 시스템(Open System) 간의 데이터 통신 시 필요한 장비 및 처리 방법 등을 7단계로 표준화하여 규정했다.",
        "서로 다른 시스템 간을 상호 접속하기 위한 개념을 규정한다.",
        "9개의 계층으로 구성된다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. OSI 참조 모델은 7개의 계층으로 구성됩니다."
    },
    {
      id: 202401055,
      subject: "정보통신 일반",
      question: "IP 주소를 MAC 주소로 변환하는 프로토콜은?",
      choices: [
        "IGMP",
        "ARP",
        "FTP",
        "RS-232C"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. ARP는 IP 주소를 물리 주소인 MAC 주소로 변환하는 프로토콜입니다."
    },
    {
      id: 202401056,
      subject: "정보통신 일반",
      question: "다음 중 ARQ 방식에 속하지 않는 것은?",
      choices: [
        "전진 오류 수정(FEC)",
        "Stop-and-Wait ARQ",
        "Adaptive ARQ",
        "Go-Back-N ARQ"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. FEC는 오류를 정정하는 방식이고, ARQ는 오류 검출 후 재전송을 요구하는 방식입니다."
    },
    {
      id: 202401057,
      subject: "정보통신 일반",
      question: "EIA RS-232C DTE 접속 장치의 핀은 모두 몇 개인가?",
      choices: [
        "25",
        "8",
        "16",
        "32"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. RS-232C의 표준 D-sub 커넥터는 25핀을 사용합니다."
    },
    {
      id: 202401058,
      subject: "정보통신 일반",
      question: "전자기 결합, 정전 결합 등 전기적 결합에 의하여 서로 다른 회선에 영향을 주는 현상은?",
      choices: [
        "감쇠",
        "누화",
        "위상 왜곡",
        "비선형 왜곡"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 누화는 한 회선의 신호가 다른 회선에 영향을 주는 현상입니다."
    },
    {
      id: 202401059,
      subject: "정보통신 일반",
      question: "정보 검색 엔진에서 AND, OR, NOT과 같은 연산자가 사용된다. 이 연산자를 무슨 연산자라 하는가?",
      choices: [
        "부울(Boolean) 연산자",
        "드모르간 연산자",
        "우선 연산자",
        "키워드 연산자"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. AND, OR, NOT은 논리 검색에 사용되는 부울 연산자입니다."
    },
    {
      id: 202401060,
      subject: "정보통신 일반",
      question: "데이터 통신의 교환 방식에 해당하지 않는 것은?",
      choices: [
        "메시지 교환",
        "수동 교환",
        "패킷 교환",
        "회선 교환"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 데이터 통신의 대표적인 교환 방식은 회선 교환, 메시지 교환, 패킷 교환입니다."
    }
  ]
});
