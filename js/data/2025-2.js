window.questionBanks = window.questionBanks || [];

window.questionBanks.push({
  year: 2025,
  round: 2,
  title: "2025년 2회 정보처리기능사 필기 기출문제",
  questions: [
    {
      id: 202502001,
      subject: "컴퓨터 일반",
      question: "순차적인 주소 지정 등에 유리하며, 주소 지정에 2개의 레지스터가 사용되는 방식은?",
      choices: [
        "직접 주소 지정",
        "간접 주소 지정",
        "상대 주소 지정",
        "색인 주소 지정"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 색인 주소 지정 방식은 색인 레지스터를 사용하며, 순차적인 자료 처리나 배열 처리에 유리합니다."
    },
    {
      id: 202502002,
      subject: "컴퓨터 일반",
      question: "CISC(Complex Instruction Set Computer)의 특징으로 옳지 않은 것은?",
      choices: [
        "명령어의 개수가 보통 100~250개로 많다.",
        "RISC에 비해 빠른 처리 속도를 제공한다.",
        "명령어의 길이가 가변적이다.",
        "명령어는 기억장치 내의 오퍼랜드를 처리할 수 있다."
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 일반적으로 RISC가 단순한 명령어 구조로 인해 처리 속도 향상에 유리합니다."
    },
    {
      id: 202502003,
      subject: "컴퓨터 일반",
      question: "다음 중 절대주소(Absolute Address) 표현 방식인 것은?",
      choices: [
        "즉시 주소 지정 방식(Immediate Addressing)",
        "직접 주소 지정 방식(Direct Addressing)",
        "간접 주소 지정 방식(Indirect Addressing)",
        "계산에 의한 주소 지정 방식"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 절대주소 표현 방식은 직접 주소 지정 방식에 해당합니다."
    },
    {
      id: 202502004,
      subject: "컴퓨터 일반",
      question: "연속되는 2개의 숫자를 표현한 코드에서 한 개의 비트만 변경하면 새로운 코드가 되기 때문에 아날로그-디지털 변환, 데이터 전송 등에 주로 사용되는 코드는?",
      choices: [
        "EBCDIC Code",
        "Hamming Code",
        "ASCII Code",
        "Gray Code"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 그레이 코드는 인접한 코드 간에 1비트만 달라지는 특징이 있습니다."
    },
    {
      id: 202502005,
      subject: "컴퓨터 일반",
      question: "입력 단자와 출력 단자가 반대가 되는, 즉 0이면 1, 1이면 0이 되는 회로는?",
      choices: [
        "AND 회로",
        "OR 회로",
        "NOT 회로",
        "Flip-Flop 회로"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. NOT 회로는 입력값을 반대로 바꾸는 논리 회로입니다."
    },
    {
      id: 202502006,
      subject: "컴퓨터 일반",
      question: "스택 연산에서 데이터를 삽입하거나 삭제하는 동작을 나타내는 것은?",
      choices: [
        "ADD, SUB",
        "LOAD, STORE",
        "PUSH, POP",
        "MOV, MUL"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 스택에서 삽입은 PUSH, 삭제는 POP 연산입니다."
    },
    {
      id: 202502007,
      subject: "컴퓨터 일반",
      question: "컴퓨터에 의하여 다음에 수행될 명령어의 주소가 저장되어 있는 기억 장소는?",
      choices: [
        "프로그램 카운터(Program Counter)",
        "메모리 레지스터(Memory Register)",
        "명령어 레지스터(Instruction Register)",
        "인덱스 레지스터(Index Register)"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 프로그램 카운터는 다음에 실행할 명령어의 주소를 저장합니다."
    },
    {
      id: 202502008,
      subject: "컴퓨터 일반",
      question: "Y = (A + B)ㆍ(AB)'와 같은 논리식은?",
      choices: [
        "Y = A'B + AB'",
        "Y = A'B' + AB",
        "Y = AB + A'B'",
        "Y = AB"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. (AB)' = A' + B'이므로 (A + B)(AB)' = (A + B)(A' + B') = A'B + AB'입니다."
    },
    {
      id: 202502009,
      subject: "컴퓨터 일반",
      question: "채널은 어떤 장치에서 명령을 받는가?",
      choices: [
        "기억장치",
        "출력장치",
        "입력장치",
        "제어장치"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 채널은 입출력 제어를 담당하며 제어장치의 명령을 받아 동작합니다."
    },
    {
      id: 202502010,
      subject: "컴퓨터 일반",
      question: "연산 후 입력 자료가 변하지 않고 보존되는 특징의 장점을 갖는 명령어 형식은?",
      choices: [
        "0-주소 명령어 형식",
        "1-주소 명령어 형식",
        "2-주소 명령어 형식",
        "3-주소 명령어 형식"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 3-주소 명령어는 두 입력 자료와 결과 저장 위치를 따로 지정할 수 있어 입력 자료를 보존할 수 있습니다."
    },
    {
      id: 202502011,
      subject: "컴퓨터 일반",
      question: "Flip-Flop의 종류에 해당되지 않는 것은?",
      choices: [
        "R Flip-Flop",
        "T Flip-Flop",
        "RS Flip-Flop",
        "JK Flip-Flop"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 대표적인 플립플롭에는 RS, D, JK, T 플립플롭 등이 있습니다."
    },
    {
      id: 202502012,
      subject: "컴퓨터 일반",
      question: "다음 그림의 논리회로에서 입력 A, B, C에 대한 출력 Y의 값은?",
      choices: [
        "Y = AB + B'C",
        "Y = A + B + C",
        "Y = AB + BC",
        "Y = A'B + BC"
      ],
      answer: 0,
      explanation: "정답은 1번입니다.",
      image: "../images/logic-circuit-2025-2-12.svg",
      imageAlt: "A, B, C 입력으로 Y를 구하는 논리회로"
    },
    {
      id: 202502013,
      subject: "컴퓨터 일반",
      question: "DMA(Direct Memory Access)의 주요 구성 요소가 아닌 것은?",
      choices: [
        "데이터 카운터",
        "주소 레지스터",
        "주소 카운터",
        "제어/상태 레지스터"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. DMA의 주요 구성 요소로는 주소 레지스터, 데이터 카운터, 제어/상태 레지스터 등이 있습니다."
    },
    {
      id: 202502014,
      subject: "컴퓨터 일반",
      question: "다음 보기의 연산은?",
      choices: [
        "MOVE 연산",
        "AND 연산",
        "Complement 연산",
        "OR 연산"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 두 입력값이 모두 1일 때만 결과가 1이 되는 연산은 AND 연산입니다.",
      image: "../images/alu-and-2025-2-14.svg",
      imageAlt: "두 이진수를 ALU에 입력해 AND 연산 결과를 출력하는 그림"
    },
    {
      id: 202502015,
      subject: "컴퓨터 일반",
      question: "일반적으로 컴퓨터의 CPU에서 하나의 명령어를 실행하기 위하여 이루어지는 동작 단계를 바르게 나열한 것은?",
      choices: [
        "Fetch Cycle → Instruction Decoding Cycle → Write-Back 작업 → 명령어 실행 단계",
        "Fetch Cycle → Instruction Decoding Cycle → 명령어 실행 단계 → Write-Back 작업",
        "명령어 실행 단계 → Fetch Cycle → Instruction Decoding Cycle → Write-Back 작업",
        "Instruction Decoding Cycle → Fetch Cycle → 명령어 실행 단계 → Write-Back 작업"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 명령어 처리 순서는 인출(Fetch) → 해독(Decode) → 실행(Execute) → 저장/기록(Write-Back)입니다."
    },
    {
      id: 202502016,
      subject: "컴퓨터 일반",
      question: "반가산기(Half-Adder)에서 두 개의 입력 비트가 모두 1일 때 합(Sum)은?",
      choices: [
        "0",
        "1",
        "10",
        "11"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 반가산기에서 1 + 1의 합(Sum)은 0이고 자리올림(Carry)은 1입니다."
    },
    {
      id: 202502017,
      subject: "컴퓨터 일반",
      question: "인스트럭션 레지스터(Instruction Register), 부호기, 번지 해독기, 제어 계수기 등과 관계있는 장치는?",
      choices: [
        "입력장치",
        "제어장치",
        "연산장치",
        "기억장치"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 명령어 해독과 제어 신호 발생은 제어장치의 기능입니다."
    },
    {
      id: 202502018,
      subject: "컴퓨터 일반",
      question: "명령어 설계 시 고려할 사항으로 옳지 않은 것은?",
      choices: [
        "컴파일러 기술의 사용",
        "메모리 접근 횟수 감소",
        "많은 범용 레지스터의 사용",
        "제한적이고 복잡한 명령어 세트"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 명령어 설계에서는 단순하고 효율적인 명령어 구성이 중요합니다."
    },
    {
      id: 202502019,
      subject: "컴퓨터 일반",
      question: "주소 접근 방식 중 약식주소 표현 방식에 해당하는 것은?",
      choices: [
        "직접 주소",
        "간접 주소",
        "자료 자신",
        "계산에 의한 주소"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 계산에 의한 주소 지정 방식은 주소를 짧게 표현할 수 있는 약식주소 표현 방식에 해당합니다."
    },
    {
      id: 202502020,
      subject: "컴퓨터 일반",
      question: "컴퓨터가 정상적인 업무를 수행하는 도중에 발생하는 예기치 않은 일에 대하여, 현재 작업을 잠시 중단하고 그 상황을 처리한 뒤 다시 원래 작업으로 돌아가도록 하는 기능은?",
      choices: [
        "Spooling",
        "Buffering",
        "Interrupt",
        "Virtual Memory"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 인터럽트는 예기치 않은 사건이나 입출력 요청 등을 처리하기 위한 기능입니다."
    },
    {
      id: 202502021,
      subject: "데이터베이스 일반",
      question: "3단계 데이터베이스 구조에서 각 단계의 스키마에 해당하지 않는 것은?",
      choices: [
        "내부 스키마",
        "외부 스키마",
        "개념 스키마",
        "물리 스키마"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 3단계 데이터베이스 구조는 외부 스키마, 개념 스키마, 내부 스키마로 구성됩니다."
    },
    {
      id: 202502022,
      subject: "데이터베이스 일반",
      question: "SQL DROP 문의 옵션 중 'RESTRICT'의 역할에 대한 설명으로 가장 적합한 것은?",
      choices: [
        "제거할 요소들을 기록 후 제거한다.",
        "제거할 요소가 참조 중일 경우에만 제거한다.",
        "제거할 요소들에 대한 예비 조치 작업을 한다.",
        "제거할 요소가 참조 중이면 제거하지 않는다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. RESTRICT는 삭제 대상이 다른 객체에서 참조 중이면 삭제하지 않습니다."
    },
    {
      id: 202502023,
      subject: "데이터베이스 일반",
      question: "스프레드시트에서 행과 열이 만나서 이루는 사각형으로 데이터가 입력되는 기본 단위는?",
      choices: [
        "피치(pitch)",
        "셀(cell)",
        "도트(dot)",
        "포인트(point)"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 스프레드시트에서 행과 열이 만나는 기본 입력 단위를 셀이라고 합니다."
    },
    {
      id: 202502024,
      subject: "데이터베이스 일반",
      question: "단순하게 반복되는 작업을 특정 키나 이름에 기록하여 자동 실행할 수 있는 스프레드시트의 기능은?",
      choices: [
        "필터",
        "차트",
        "매크로",
        "정렬"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 매크로는 반복 작업을 기록하여 자동으로 실행할 수 있는 기능입니다."
    },
    {
      id: 202502025,
      subject: "데이터베이스 일반",
      question: "데이터베이스 디자인 단계의 순서가 옳은 것은?\n㉠ 데이터베이스의 목적을 정의\n㉡ 데이터베이스에서 필요한 테이블을 정의\n㉢ 테이블에서 필요한 필드를 정의\n㉣ 테이블 간의 관계를 정의",
      choices: [
        "㉠ → ㉣ → ㉡ → ㉢",
        "㉠ → ㉢ → ㉡ → ㉣",
        "㉠ → ㉡ → ㉣ → ㉢",
        "㉠ → ㉡ → ㉢ → ㉣"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 데이터베이스 디자인은 목적 정의 → 테이블 정의 → 필드 정의 → 관계 정의 순서로 진행합니다."
    },
    {
      id: 202502026,
      subject: "데이터베이스 일반",
      question: "하나의 테이블에 한 행의 데이터를 등록하는 방법으로 옳은 것은?",
      choices: [
        "INSERT INTO 고객(계좌번호, 이름, 금액) VALUES('111', '홍길동', 5000);",
        "UPDATE 고객 SET 금액 = 10000 WHERE 이름 = '홍길동';",
        "SELECT * FROM 고객;",
        "CREATE TABLE 고객(계좌번호 NUMBER(3,0), 이름 CHAR(10), 금액 NUMBER(7,0));"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 테이블에 새 행을 추가할 때는 INSERT INTO 문을 사용합니다."
    },
    {
      id: 202502027,
      subject: "데이터베이스 일반",
      question: "하나 이상의 기본 테이블로부터 유도되어 만들어지는 가상 테이블은?",
      choices: [
        "뷰(VIEW)",
        "유리창(WINDOW)",
        "스키마(SCHEMA)",
        "도메인(DOMAIN)"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 뷰는 하나 이상의 기본 테이블로부터 유도되는 가상 테이블입니다."
    },
    {
      id: 202502028,
      subject: "데이터베이스 일반",
      question: "다음 SQL문의 실행 결과를 가장 올바르게 설명한 것은?\nDROP TABLE 인사 CASCADE;",
      choices: [
        "인사 테이블을 삭제한다.",
        "인사 테이블과 인사 테이블을 참조하는 모든 테이블을 삭제한다.",
        "인사 테이블이 참조 중이면 삭제하지 않는다.",
        "인사 테이블을 삭제할지의 여부를 사용자에게 다시 질의한다."
      ],
      answer: 1,
      explanation: "정답은 2번입니다. CASCADE 옵션은 삭제 대상과 관련된 참조 객체까지 함께 삭제합니다."
    },
    {
      id: 202502029,
      subject: "데이터베이스 일반",
      question: "관계형 데이터베이스에서 튜플(Tuple)의 수를 의미하는 것은?",
      choices: [
        "카디널리티(Cardinality)",
        "도메인(Domain)",
        "차수(Degree)",
        "릴레이션(Relation)"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 카디널리티는 릴레이션에 포함된 튜플의 수를 의미합니다."
    },
    {
      id: 202502030,
      subject: "데이터베이스 일반",
      question: "Windows용 프레젠테이션에서 화면 전체를 전환하는 단위를 의미하는 것은?",
      choices: [
        "개요",
        "개체",
        "스크린 팁",
        "슬라이드"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 프레젠테이션에서 하나의 화면 단위는 슬라이드입니다."
    },
    {
      id: 202502031,
      subject: "운영체제",
      question: "운영체제의 발달 과정을 바르게 나열한 것은?",
      choices: [
        "단일 처리 → 일괄 처리 → 다중 프로그래밍 → 다중 처리 → 분산 처리",
        "단일 처리 → 일괄 처리 → 다중 처리 → 분산 처리 → 다중 프로그래밍",
        "일괄 처리 → 단일 처리 → 다중 프로그래밍 → 분산 처리 → 다중 처리",
        "단일 처리 → 다중 프로그래밍 → 일괄 처리 → 다중 처리 → 분산 처리"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 운영체제는 단일 처리에서 시작하여 일괄 처리, 다중 프로그래밍, 다중 처리, 분산 처리 형태로 발전했습니다."
    },
    {
      id: 202502032,
      subject: "운영체제",
      question: "Windows 10에서 다음 설명에 해당하는 것은?\nㆍ확장자가 LNK이며 컴퓨터에 여러 개 존재할 수 있다.\nㆍ해당 프로그램을 찾아서 실행하지 않고 바탕 화면에서 바로 실행할 수 있도록 도와준다.\nㆍ사용자가 임의로 생성하거나 삭제할 수 있다.\nㆍ삭제 시 해당 프로그램에는 영향이 없다.",
      choices: [
        "아이콘",
        "바로 가기 아이콘",
        "폴더",
        "작업 표시줄"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 바로 가기 아이콘은 원본 프로그램을 쉽게 실행할 수 있도록 연결해 주는 파일입니다."
    },
    {
      id: 202502033,
      subject: "운영체제",
      question: "파일 시스템에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "ext는 리눅스에서 사용하는 파일 시스템이다.",
        "UFS는 유닉스에서 사용하는 파일 시스템으로 슈퍼 블록, 아이노드, 데이터 블록의 구조를 갖는다.",
        "Windows에서는 FAT만 사용할 수 있다.",
        "NTFS는 성능, 보안, 안정성 면에서 우수하다."
      ],
      answer: 2,
      explanation: "정답은 3번입니다. Windows에서는 FAT뿐만 아니라 NTFS 등의 파일 시스템도 사용할 수 있습니다."
    },
    {
      id: 202502034,
      subject: "운영체제",
      question: "MS-DOS의 시스템 파일이 아닌 것은?",
      choices: [
        "IO.SYS",
        "MSDOS.SYS",
        "COMMAND.COM",
        "CONFIG.SYS"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. CONFIG.SYS는 환경 설정 파일이며, MS-DOS의 핵심 시스템 파일로 보기는 어렵습니다."
    },
    {
      id: 202502035,
      subject: "운영체제",
      question: "운영체제의 성능 평가에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "신뢰도는 시스템이 주어진 문제를 얼마나 정확하게 해결하는가를 나타내는 척도이다.",
        "사용 가능도는 시스템을 얼마나 빨리 사용할 수 있는가의 정도를 나타낸다.",
        "처리 능력은 수치가 높을수록 좋다.",
        "응답 시간은 수치가 높을수록 좋다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 응답 시간은 짧을수록 좋습니다."
    },
    {
      id: 202502036,
      subject: "운영체제",
      question: "UNIX에서 현재 작업 디렉터리의 경로를 출력하는 명령어는?",
      choices: [
        "pwd",
        "cat",
        "tar",
        "vi"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. pwd 명령어는 현재 작업 디렉터리의 경로를 출력합니다."
    },
    {
      id: 202502037,
      subject: "운영체제",
      question: "컴퓨터 센터에 작업을 지시하고 나서부터 결과를 받을 때까지의 경과 시간은?",
      choices: [
        "서치 시간(Search Time)",
        "액세스 시간(Access Time)",
        "프로세스 시간(Process Time)",
        "턴어라운드 시간(Turnaround Time)"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 턴어라운드 시간은 작업 제출부터 결과 반환까지 걸리는 전체 시간입니다."
    },
    {
      id: 202502038,
      subject: "운영체제",
      question: "캐시 메모리에 대한 설명으로 잘못된 것은?",
      choices: [
        "중앙처리장치(CPU)와 주기억장치 사이에 위치하여 컴퓨터의 처리 속도를 향상시키는 역할을 한다.",
        "캐시 메모리로는 접근 속도가 빠른 정적 램(SRAM)을 사용한다.",
        "적중률은 캐시 기억장치가 있는 컴퓨터의 성능을 나타내는 척도로 이용된다.",
        "고속이며 가격이 저가이다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 캐시 메모리는 고속이지만 가격이 비싼 편입니다."
    },
    {
      id: 202502039,
      subject: "운영체제",
      question: "운영체제에 대한 설명으로 가장 적합한 것은?",
      choices: [
        "운영체제는 언어 번역기의 일종이다.",
        "운영체제는 사용자가 직접 개발한 응용 프로그램이다.",
        "하나의 컴퓨터에는 반드시 하나의 운영체제만 설치해야 한다.",
        "운영체제는 소프트웨어의 일종이다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 운영체제는 하드웨어와 사용자, 응용 프로그램 사이에서 자원을 관리하는 시스템 소프트웨어입니다."
    },
    {
      id: 202502040,
      subject: "운영체제",
      question: "Windows 10에서 제어판의 디스플레이 항목으로 설정할 수 있는 기능이 아닌 것은?",
      choices: [
        "해상도 지정",
        "배경 화면 변경",
        "화면 보호 기능",
        "마우스 포인터의 모양 변경"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 마우스 포인터의 모양은 마우스 설정 항목에서 변경합니다."
    },
    {
      id: 202502041,
      subject: "운영체제",
      question: "다음 설명에 해당하는 시스템은?\n여러 사용자가 한 대의 컴퓨터를 동시에 사용하는 방식으로, CPU 처리 시간을 짧은 시간 단위로 나누어 각 사용자에게 순차적으로 할당한다.",
      choices: [
        "시분할 시스템(Time-Sharing System)",
        "다중 처리 시스템(Multi-Processing System)",
        "일괄 처리 시스템(Batch System)",
        "단일 사용자 시스템(Single User System)"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 시분할 시스템은 CPU 시간을 여러 사용자에게 짧게 나누어 제공하는 방식입니다."
    },
    {
      id: 202502042,
      subject: "운영체제",
      question: "Windows 10에서 [휴지통]에 관한 설명으로 옳은 것은?",
      choices: [
        "[휴지통]의 크기에 대한 초기 설정은 하드디스크의 20%이다.",
        "[휴지통]에 있는 파일들은 디스크의 공간을 차지하지 않는다.",
        "[휴지통]에 있는 파일은 자동으로 삭제된다.",
        "파일을 선택한 뒤 [Shift]+[Delete]를 누르면 휴지통에 보관되지 않고 바로 삭제된다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. [Shift]+[Delete]를 사용하면 파일이 휴지통을 거치지 않고 삭제됩니다."
    },
    {
      id: 202502043,
      subject: "운영체제",
      question: "MS-DOS에서 숨김 속성을 해제하는 명령은?",
      choices: [
        "ATTRIB -H",
        "ATTRIB +H",
        "ATTRIB -A",
        "ATTRIB +A"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. -H는 숨김 속성을 해제하고, +H는 숨김 속성을 설정합니다."
    },
    {
      id: 202502044,
      subject: "운영체제",
      question: "UNIX의 who 명령으로 알 수 없는 내용은?",
      choices: [
        "단말명",
        "로그인명",
        "로그인 일시",
        "사용 소프트웨어"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. who 명령은 현재 로그인한 사용자 정보, 단말명, 로그인 시간 등을 확인할 수 있지만 사용 소프트웨어 정보는 알 수 없습니다."
    },
    {
      id: 202502045,
      subject: "운영체제",
      question: "Windows 10의 탐색기에서 폴더를 관리하는 방법으로 틀린 것은?",
      choices: [
        "[Ctrl]을 누르고 마우스로 드래그하면 폴더가 복사된다.",
        "폴더의 이름을 변경할 때는 [F2]를 누른 후 변경한다.",
        "폴더에서 연속적인 여러 개의 파일을 선택할 때는 [Shift]를 이용한다.",
        "폴더를 삭제할 때는 삭제할 폴더를 선택한 후 [Backspace]를 누른다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 삭제는 일반적으로 [Delete] 키를 사용하며, [Backspace]는 이전 위치나 상위 폴더 이동에 사용됩니다."
    },
    {
      id: 202502046,
      subject: "운영체제",
      question: "스케줄링 알고리즘에서 규정 시간 또는 시간 조각(Slice)을 미리 정의하여, 스케줄러가 준비 상태 큐에서 정의된 시간만큼 각 프로세스에 CPU를 제공하는 시분할 시스템에 적절한 스케줄링 알고리즘은?",
      choices: [
        "RR(Round-Robin)",
        "FCFS(First-Come-First-Served)",
        "SJF(Shortest Job First)",
        "SRT(Shortest Remaining Time)"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. Round-Robin은 시간 할당량을 기준으로 CPU를 순환 배정하는 방식입니다."
    },
    {
      id: 202502047,
      subject: "운영체제",
      question: "UNIX의 주요 구성 요소에 해당하지 않는 것은?",
      choices: [
        "커널(Kernel)",
        "쉘(Shell)",
        "포트(Port)",
        "유틸리티(Utility)"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. UNIX의 주요 구성 요소는 커널, 쉘, 유틸리티입니다."
    },
    {
      id: 202502048,
      subject: "운영체제",
      question: "Windows 10에서 하나의 디렉터리 내의 모든 파일을 선택할 때 사용하는 단축키는?",
      choices: [
        "[Shift]+[F5]",
        "[Ctrl]+[A]",
        "[Shift]+[Alt]",
        "[Ctrl]+[F1]"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. [Ctrl]+[A]는 전체 선택 단축키입니다."
    },
    {
      id: 202502049,
      subject: "운영체제",
      question: "DOS에서 DIR 명령은 현재 디렉터리와 파일 등에 관한 정보를 표시해 주는 명령이다. 이 명령의 옵션에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "/P : 목록을 한 화면 단위로 표시한다.",
        "/A : 지정한 속성의 파일 목록을 표시한다.",
        "/H : 지정한 정렬 방식으로 파일 목록을 표시한다.",
        "/S : 하위 디렉터리의 정보까지 표시한다."
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 정렬 방식 지정은 /O 옵션을 사용합니다."
    },
    {
      id: 202502050,
      subject: "운영체제",
      question: "Windows 10의 휴지통에 대한 설명으로 옳은 것은?",
      choices: [
        "'휴지통 비우기'를 실행한 후에도 파일을 항상 다시 복구할 수 있다.",
        "USB 메모리에 있는 파일이나 네트워크상의 파일도 삭제되면 휴지통에 보관된다.",
        "MS-DOS에서 삭제 작업을 실행한 경우에도 휴지통에서 복구 가능하다.",
        "삭제된 파일이 휴지통에 보관되지 않고 완전히 삭제되도록 할 수 있다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. [Shift]+[Delete]를 사용하거나 휴지통 속성 설정을 변경하면 휴지통을 거치지 않고 삭제할 수 있습니다."
    },
    {
      id: 202502051,
      subject: "정보통신 일반",
      question: "UNIX에서 네트워크 연결 상태를 확인하는 명령어는?",
      choices: [
        "ping",
        "cd",
        "pwd",
        "who"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. ping 명령어는 네트워크 연결 상태를 확인할 때 사용합니다."
    },
    {
      id: 202502052,
      subject: "정보통신 일반",
      question: "Baud가 1200이고 디비트(Dibit)를 사용한다면 통신 속도[bps]는?",
      choices: [
        "1200",
        "2400",
        "4800",
        "9600"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 디비트는 한 번에 2비트를 전송하므로 1200 Baud × 2 = 2400 bps입니다."
    },
    {
      id: 202502053,
      subject: "정보통신 일반",
      question: "RS-232C가 해당하는 OSI 7계층은?",
      choices: [
        "MPEG 압축",
        "HDLC 프로토콜",
        "INTERNET 주소",
        "물리 계층"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. RS-232C는 물리적인 전기적·기계적 접속 규격이므로 물리 계층에 해당합니다."
    },
    {
      id: 202502054,
      subject: "정보통신 일반",
      question: "반송파의 주파수를 변화시켜 정보를 전송하는 변조 방식은?",
      choices: [
        "위상 편이 변조(PSK)",
        "주파수 편이 변조(FSK)",
        "펄스 코드 변조(PCM)",
        "델타 변조(DM)"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 주파수 편이 변조(FSK)는 반송파의 주파수를 변화시켜 정보를 전송하는 방식입니다."
    },
    {
      id: 202502055,
      subject: "정보통신 일반",
      question: "다음 중 전송 속도가 빠르고 장거리 전송에 적합한 전송 매체는?",
      choices: [
        "폼스킨 케이블",
        "UTP 케이블",
        "광섬유 케이블",
        "동축 케이블"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 광섬유 케이블은 전송 속도가 빠르고 장거리 전송에 적합합니다."
    },
    {
      id: 202502056,
      subject: "정보통신 일반",
      question: "진폭 편이 변조(ASK)의 특징으로 옳지 않은 것은?",
      choices: [
        "전송로의 레벨 변동에 영향을 받기 쉽다.",
        "모뎀의 구조가 간단하다.",
        "자동 주파수 제어회로가 필요하다.",
        "잡음에 약해 데이터 전송용으로는 거의 사용되지 않는다."
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 진폭 편이 변조(ASK)는 진폭을 변화시키는 방식이므로 자동 주파수 제어회로가 필요하다는 설명은 적절하지 않습니다."
    },
    {
      id: 202502057,
      subject: "정보통신 일반",
      question: "데이터를 여러 블록으로 나누어 전송할 경우, 최종 블록에 들어갈 전송 제어 문자는?",
      choices: [
        "ETB",
        "ETX",
        "SOH",
        "STX"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. ETX는 End of Text로, 최종 텍스트 블록의 끝을 나타냅니다."
    },
    {
      id: 202502058,
      subject: "정보통신 일반",
      question: "OSI 7계층에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "다른 시스템 간의 원활한 통신을 위해 ISO에서 제안한 통신 규약이다.",
        "개방형 시스템 간 데이터 통신에 필요한 장비 및 처리 방법 등을 7단계로 표준화하여 규정했다.",
        "서로 다른 시스템 간을 상호 접속하기 위한 개념을 규정한다.",
        "9개의 계층으로 구성된다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. OSI 참조 모델은 7개의 계층으로 구성됩니다."
    },
    {
      id: 202502059,
      subject: "정보통신 일반",
      question: "다음 중 실시간 처리 시스템에 적합한 업무는?",
      choices: [
        "수도세 계산",
        "은행 업무",
        "월급 계산",
        "성적 처리 업무"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 은행 업무는 즉시 처리와 응답이 필요한 실시간 처리 시스템에 적합합니다."
    },
    {
      id: 202502060,
      subject: "정보통신 일반",
      question: "IPv6 주소의 길이는?",
      choices: [
        "16비트",
        "32비트",
        "128비트",
        "256비트"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. IPv6 주소의 길이는 128비트입니다."
    }
  ]
});
