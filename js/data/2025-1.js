window.questionBanks = window.questionBanks || [];

window.questionBanks.push({
  year: 2025,
  round: 1,
  title: "2025년 1회 정보처리기능사 필기 기출문제",
  questions: [
    {
      id: 202501001,
      subject: "컴퓨터 일반",
      question: "기억장치에 액세스할 필요 없이 스택(Stack)을 이용하여 연산을 행하는 명령어 형식은?",
      choices: [
        "0-주소 명령어",
        "1-주소 명령어",
        "2-주소 명령어",
        "3-주소 명령어"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 0-주소 명령어는 주소부 없이 스택을 이용하여 연산을 수행하는 명령어 형식입니다."
    },
    {
      id: 202501002,
      subject: "컴퓨터 일반",
      question: "다음 진리표에 해당하는 논리식은?",
      choices: [
        "C = A · B",
        "C = A + B",
        "C = (A · B)'",
        "C = (A + B)'"
      ],
      answer: 2,
      explanation: "정답은 3번입니다.",
      image: "../images/extracted/2025-1-p1-img5.jpg",
      imageAlt: "A, B 입력과 C 출력으로 구성된 진리표"
    },
    {
      id: 202501003,
      subject: "컴퓨터 일반",
      question: "다음 중 로더(Loader)의 기능이 아닌 것은?",
      choices: [
        "할당(Allocation)",
        "번역(Compile)",
        "링킹(Linking)",
        "재배치(Relocation)"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 번역은 컴파일러의 기능이며, 로더의 기능은 할당, 링킹, 재배치, 적재 등입니다."
    },
    {
      id: 202501004,
      subject: "컴퓨터 일반",
      question: "이항(Binary) 연산에 해당하는 것은?",
      choices: [
        "논리곱 연산",
        "시프트 연산",
        "로테이트 연산",
        "보수 연산"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 이항 연산은 두 개의 피연산자를 대상으로 하는 연산이며, 논리곱(AND)이 이에 해당합니다."
    },
    {
      id: 202501005,
      subject: "컴퓨터 일반",
      question: "순차적인 주소 지정 등에 유리하며, 주소 지정에 2개의 레지스터가 사용되는 방식은?",
      choices: [
        "직접 주소 지정",
        "간접 주소 지정",
        "상대 주소 지정",
        "색인 주소 지정"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 색인 주소 지정 방식은 색인 레지스터를 사용하며, 배열이나 순차적인 자료 처리에 유리합니다."
    },
    {
      id: 202501006,
      subject: "컴퓨터 일반",
      question: "16진수 FF를 10진수로 나타내면?",
      choices: [
        "254",
        "255",
        "256",
        "257"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. FF(16) = 15 × 16 + 15 = 255입니다."
    },
    {
      id: 202501007,
      subject: "컴퓨터 일반",
      question: "2진수 1011을 그레이 코드(Gray Code)로 변환한 것은?",
      choices: [
        "0111",
        "1110",
        "0100",
        "1010"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 첫 비트는 그대로 쓰고, 이후 비트는 인접한 두 비트를 XOR하여 구하므로 1011의 그레이 코드는 1110입니다."
    },
    {
      id: 202501008,
      subject: "컴퓨터 일반",
      question: "마이크로프로세서의 구성에 해당하지 않는 것은?",
      choices: [
        "제어장치",
        "연산장치",
        "레지스터",
        "출력장치"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 마이크로프로세서는 제어장치, 연산장치, 레지스터 등으로 구성되며 출력장치는 주변장치입니다."
    },
    {
      id: 202501009,
      subject: "컴퓨터 일반",
      question: "다음 블록화 레코드에서 블록화 인수는?",
      choices: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 블록화 인수는 하나의 물리 레코드 안에 포함된 논리 레코드의 개수입니다.",
      image: "../images/extracted/2025-1-p1-img4.jpg",
      imageAlt: "IBG와 논리 레코드로 구성된 블록화 레코드 그림"
    },
    {
      id: 202501010,
      subject: "컴퓨터 일반",
      question: "다음 설명에 해당하는 데이터 입출력 방식은?\nㆍ데이터의 입·출력 전송이 CPU를 통하지 않고 입·출력장치와 기억장치 간에 직접 데이터를 주고받는다.\nㆍCPU와 주변 장치 간의 속도차를 줄일 수 있다.",
      choices: [
        "DCA",
        "DMA",
        "Multiplexer",
        "Channel"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. DMA는 CPU를 거치지 않고 입출력장치와 기억장치 사이에서 직접 데이터를 전송하는 방식입니다."
    },
    {
      id: 202501011,
      subject: "컴퓨터 일반",
      question: "A · (A · B + C)를 간략화하면?",
      choices: [
        "A",
        "B",
        "C",
        "A · (B + C)"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. A · (A · B + C) = A · A · B + A · C = A · B + A · C = A · (B + C)입니다."
    },
    {
      id: 202501012,
      subject: "컴퓨터 일반",
      question: "다음과 같은 회로에서 입력이 A = 1, B = 1일 경우에 합 S와 자리올림 C의 값은?",
      choices: [
        "S = 0, C = 0",
        "S = 0, C = 1",
        "S = 1, C = 0",
        "S = 1, C = 1"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 반가산기에서 1 + 1의 합(S)은 0, 자리올림(C)은 1입니다.",
      image: "../images/extracted/2025-1-p1-img3.jpg",
      imageAlt: "A와 B 입력으로 합 S와 자리올림 C를 출력하는 반가산기 회로"
    },
    {
      id: 202501013,
      subject: "컴퓨터 일반",
      question: "다음과 같은 계산에 의해 주소를 지정하는 방식은?\n유효번지 = 프로그램 카운터(PC) + 주소 부분(Operand)",
      choices: [
        "색인 주소 지정",
        "상대 주소 지정",
        "베이스 주소 지정",
        "절대 주소 지정"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 상대 주소 지정 방식은 프로그램 카운터(PC)를 기준으로 주소 부분을 더해 유효 주소를 구합니다."
    },
    {
      id: 202501014,
      subject: "컴퓨터 일반",
      question: "연산의 중심이 되는 레지스터(Register)는?",
      choices: [
        "General Register",
        "Address Register",
        "Accumulator",
        "Flip-Flop"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 누산기(Accumulator)는 연산의 중심이 되는 레지스터입니다."
    },
    {
      id: 202501015,
      subject: "컴퓨터 일반",
      question: "8개의 bit로 표현 가능한 정보의 최대 가지수는?",
      choices: [
        "255",
        "256",
        "257",
        "258"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 8비트로 표현 가능한 정보의 수는 2⁸ = 256가지입니다."
    },
    {
      id: 202501016,
      subject: "컴퓨터 일반",
      question: "연산 작업을 할 때 연산의 중간 결과나 데이터 저장 시 레지스터를 사용하는 주된 이유는?",
      choices: [
        "인터럽트 요청을 방지하기 위하여",
        "연산의 속도 향상을 위하여",
        "기억 장소를 절약하기 위하여",
        "연산의 정확성을 위하여"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 레지스터는 CPU 내부의 고속 기억장치이므로 연산 속도 향상에 사용됩니다."
    },
    {
      id: 202501017,
      subject: "컴퓨터 일반",
      question: "RISC(Reduced Instruction Set Computer)에 대한 설명으로 틀린 것은?",
      choices: [
        "하드웨어나 마이크로 코드 방식으로 구현한다.",
        "모든 명령어를 1사이클에 실행한다.",
        "단순한 파이프 라인 구조를 가진다.",
        "명령어와 데이터에 대한 통합 캐시를 이용한다."
      ],
      answer: 3,
      explanation: "정답은 4번입니다. RISC는 일반적으로 명령어와 데이터를 분리한 캐시 구조를 사용하는 경우가 많습니다."
    },
    {
      id: 202501018,
      subject: "컴퓨터 일반",
      question: "다음을 논리식으로 바르게 표현한 것은?",
      choices: [
        "(A · B) + C",
        "(A + B) · C",
        "A + B + C",
        "AC + C + A"
      ],
      answer: 0,
      explanation: "정답은 1번입니다."
    },
    {
      id: 202501019,
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
      id: 202501020,
      subject: "컴퓨터 일반",
      question: "컴퓨터 내에서 실행되는 명령어와 데이터가 이동되는 통로를 일컫는 것은?",
      choices: [
        "드라이버",
        "라인",
        "버스",
        "체인"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 버스는 컴퓨터 내부에서 데이터, 주소, 제어 신호가 이동하는 공통 통로입니다."
    },
    {
      id: 202501021,
      subject: "데이터베이스 일반",
      question: "데이터베이스 관리자(DBA)의 임무와 거리가 먼 것은?",
      choices: [
        "시스템 문서화에 표준을 정하여 시행",
        "복구 절차와 무결성 유지를 위한 대책 수립",
        "일반 사용자의 고급 질의문을 저급 DML 명령어로 변환",
        "시스템의 감시 및 성능 분석"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 질의문을 저급 DML 명령어로 변환하는 것은 DBMS의 기능에 가깝습니다."
    },
    {
      id: 202501022,
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
      id: 202501023,
      subject: "데이터베이스 일반",
      question: "SQL의 데이터 정의어(DDL)에 해당되지 않는 것은?",
      choices: [
        "SELECT",
        "CREATE",
        "ALTER",
        "DROP"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. SELECT는 데이터 조작어(DML)에 해당하며, CREATE, ALTER, DROP은 데이터 정의어(DDL)입니다."
    },
    {
      id: 202501024,
      subject: "데이터베이스 일반",
      question: "데이터베이스 개체(Entity)의 속성 중 하나의 속성이 가질 수 있는 모든 값의 집합을 무엇이라고 하는가?",
      choices: [
        "객체(Object)",
        "속성(Attribute)",
        "도메인(Domain)",
        "카디널리티(Cardinality)"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 도메인은 하나의 속성이 가질 수 있는 값들의 범위 또는 집합입니다."
    },
    {
      id: 202501025,
      subject: "데이터베이스 일반",
      question: "판매 테이블에서 품명이 '카메라'인 항목을 삭제하는 SQL 문은?",
      choices: [
        "DELETE FROM 판매 WHERE 품명 = '카메라';",
        "DELETE FROM 품명 = '카메라' WHERE 판매;",
        "DELETE SET 판매 WHERE 품명 = '카메라';",
        "DELETE SET 품명 = '카메라' WHERE 판매;"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 조건에 맞는 행을 삭제할 때는 DELETE FROM 테이블명 WHERE 조건 형식을 사용합니다."
    },
    {
      id: 202501026,
      subject: "데이터베이스 일반",
      question: "SQL에서 검색 결과에 대한 레코드의 중복을 제거하기 위해 사용하는 명령은?",
      choices: [
        "DESC",
        "DELETE",
        "GRANT",
        "DISTINCT"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. DISTINCT는 SELECT 결과에서 중복된 행을 제거할 때 사용합니다."
    },
    {
      id: 202501027,
      subject: "데이터베이스 일반",
      question: "SQL에서 테이블의 price 열을 기준으로 오름차순 정렬하고자 할 경우 사용되는 명령은?",
      choices: [
        "SORT BY price ASC",
        "SORT BY price DESC",
        "ORDER BY price ASC",
        "ORDER BY price DESC"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 오름차순 정렬은 ORDER BY 열이름 ASC 형식을 사용합니다."
    },
    {
      id: 202501028,
      subject: "데이터베이스 일반",
      question: "데이터베이스 관리 시스템의 필수 기능 중 사용자와 데이터베이스 사이의 인터페이스를 위한 수단을 제공하는 기능에 해당하는 것은?",
      choices: [
        "정의 기능",
        "조작 기능",
        "제어 기능",
        "통제 기능"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 조작 기능은 사용자가 데이터를 검색, 삽입, 삭제, 갱신할 수 있도록 하는 기능입니다."
    },
    {
      id: 202501029,
      subject: "데이터베이스 일반",
      question: "수치 계산과 관련된 업무에서 계산의 어려움과 비효율성을 개선하여 전표의 작성, 처리, 관리를 쉽게 할 수 있도록 한 것은?",
      choices: [
        "스프레드시트",
        "데이터베이스",
        "프레젠테이션",
        "워드프로세서"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 스프레드시트는 수치 계산, 표 작성, 전표 관리 등에 적합한 프로그램입니다."
    },
    {
      id: 202501030,
      subject: "데이터베이스 일반",
      question: "SQL SELECT 문에서 정렬과 관계 없는 것은?",
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
      id: 202501031,
      subject: "운영체제",
      question: "아래 내용이 설명하는 Windows 10의 기능은?\nHardware should automatically be detected and installed by Windows.",
      choices: [
        "PnP(Plug and Play)",
        "Drag and Drop",
        "OLE(Object Linking and Embedding)",
        "DMA(Direct Memory Access)"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. PnP는 하드웨어를 자동으로 인식하고 설치하는 기능입니다."
    },
    {
      id: 202501032,
      subject: "운영체제",
      question: "UNIX 명령어 중 DOS의 DIR과 같은 역할을 하는 것은?",
      choices: [
        "ls",
        "cd",
        "pwd",
        "cp"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. ls 명령어는 디렉터리의 파일 목록을 출력합니다."
    },
    {
      id: 202501033,
      subject: "운영체제",
      question: "UNIX 시스템에서 명령어 해석기에 해당하는 것은?",
      choices: [
        "쉘(Shell)",
        "커널(Kernel)",
        "유틸리티(Utility)",
        "응용 프로그램(Application Program)"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 쉘은 사용자의 명령어를 해석하여 커널에 전달하는 명령어 해석기입니다."
    },
    {
      id: 202501034,
      subject: "운영체제",
      question: "Windows 10에서 하드디스크에 있는 파일을 휴지통에 버리지 않고 바로 삭제하려고 한다. 파일 선택 후 어떤 키를 눌러야 하는가?",
      choices: [
        "[Alt]+[Delete]",
        "[Ctrl]+[Delete]",
        "[Shift]+[Delete]",
        "[Tab]+[Delete]"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. [Shift]+[Delete]를 누르면 휴지통을 거치지 않고 바로 삭제됩니다."
    },
    {
      id: 202501035,
      subject: "운영체제",
      question: "다음 중 운영체제의 목적이 아닌 것은?",
      choices: [
        "처리 능력 향상(Throughput)",
        "턴어라운드 타임의 증가(Turnaround Time)",
        "사용 가능도의 증대(Availability)",
        "신뢰도의 향상(Reliability)"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 운영체제의 목적은 처리 능력 향상, 응답 시간 및 반환 시간 단축, 사용 가능도와 신뢰도 향상입니다."
    },
    {
      id: 202501036,
      subject: "운영체제",
      question: "다음 중 턴어라운드 타임에 대한 설명으로 옳은 것은?",
      choices: [
        "일정 시간 동안 시스템이 처리하는 작업량이다.",
        "작업을 시스템에 제출한 시점부터 결과를 받을 때까지 걸린 시간이다.",
        "필요할 때 시스템을 즉시 사용할 수 있는 정도이다.",
        "시스템이 주어진 문제를 정확하게 해결하는 정도이다."
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 턴어라운드 타임은 작업 제출부터 결과를 받을 때까지의 전체 경과 시간입니다."
    },
    {
      id: 202501037,
      subject: "운영체제",
      question: "DOS에서 새로운 서브 디렉터리를 만드는 명령어는?",
      choices: [
        "COPY",
        "DEL",
        "MD",
        "DIR"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. MD 또는 MKDIR 명령어는 새로운 디렉터리를 만들 때 사용합니다."
    },
    {
      id: 202501038,
      subject: "운영체제",
      question: "UNIX의 압축 프로그램인 TAR의 옵션으로 틀린 것은?",
      choices: [
        "-v: 서브 디렉터리의 모든 파일을 압축한다.",
        "-x: 압축 파일의 압축을 해제한다.",
        "-r: 기존 압축 파일에 새로운 파일을 추가한다.",
        "-t: 압축 파일 내의 파일 목록을 조회한다."
      ],
      answer: 0,
      explanation: "정답은 1번입니다. tar에서 -v는 처리 과정을 자세히 출력하는 옵션입니다."
    },
    {
      id: 202501039,
      subject: "운영체제",
      question: "도스(MS-DOS)의 COMMAND.COM에서 처리하는 것이 아닌 것은?",
      choices: [
        "DIR",
        "COPY",
        "CLS",
        "DISKCOPY"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. DIR, COPY, CLS는 내부 명령어이고, DISKCOPY는 외부 명령어입니다."
    },
    {
      id: 202501040,
      subject: "운영체제",
      question: "CPU 스케줄링 방법 중 우선순위에 의한 방법의 단점은 무한 정지(Indefinite Blocking)와 기아 현상(Starvation)이다. 이 단점을 해결하는 방안으로 가장 적합한 것은?",
      choices: [
        "순환 할당",
        "다단계 큐 방식",
        "에이징 방식(Aging)",
        "최소 작업 우선"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 에이징은 오래 기다린 프로세스의 우선순위를 점차 높여 기아 현상을 방지하는 방법입니다."
    },
    {
      id: 202501041,
      subject: "운영체제",
      question: "도스(MS-DOS) 명령어에 관한 설명 중 옳지 않은 것은?",
      choices: [
        "CLS: 화면을 깨끗이 지운다.",
        "MD: 새로운 디렉터리를 만든다.",
        "FC: 모든 열려 있는 파일을 닫는다.",
        "CD: 현재의 디렉터리를 변경한다."
      ],
      answer: 2,
      explanation: "정답은 3번입니다. FC는 파일 비교(File Compare) 명령어입니다."
    },
    {
      id: 202501042,
      subject: "운영체제",
      question: "Windows 10에서 보조프로그램의 구성에 해당되는 것은?",
      choices: [
        "디스플레이",
        "계산기",
        "매체 재생기",
        "키보드"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 계산기는 Windows 보조프로그램에 해당합니다."
    },
    {
      id: 202501043,
      subject: "운영체제",
      question: "도스(MS-DOS)에서 DIR 명령어로 찾아볼 수 없는 숨김 속성의 시스템 파일은?",
      choices: [
        "COMMAND.COM, IO.SYS",
        "MSDOS.SYS, COMMAND.COM",
        "MSDOS.SYS, IO.SYS",
        "FDISK.COM, COMMAND.COM"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. MSDOS.SYS와 IO.SYS는 숨김 속성을 가진 시스템 파일입니다."
    },
    {
      id: 202501044,
      subject: "운영체제",
      question: "다중 프로그래밍 환경에서 한 프로그램이 다른 프로그램이 사용 중인 장치를 사용하려고 하여, 사용할 수 없는 자원을 무한정 기다리는 상태는?",
      choices: [
        "교착상태(Deadlock)",
        "오버레이(Overlay)",
        "페이징(Paging)",
        "버퍼링(Buffering)"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 교착상태는 둘 이상의 프로세스가 서로 필요한 자원을 기다리며 무한정 대기하는 상태입니다."
    },
    {
      id: 202501045,
      subject: "운영체제",
      question: "Windows 10에서 디스크 조각 모음을 수행할 수 없는 매체는? (단, 각 매체는 로컬(Local) 매체를 의미한다.)",
      choices: [
        "SSD 메모리",
        "USB 메모리(이동식 디스크)",
        "하드디스크",
        "네트워크 드라이브"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 네트워크 드라이브는 Windows 디스크 조각 모음 대상이 아닙니다."
    },
    {
      id: 202501046,
      subject: "운영체제",
      question: "UNIX에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "사용자의 명령으로 시스템이 수행되고 그에 따른 결과를 나타내 주는 대화식 운영체제이다.",
        "여러 프로그램을 동시에 여러 개 실행시킬 수 있다.",
        "파일 시스템의 배열 형태가 선형적 구조로 되어 있다.",
        "표준 입출력을 통해 명령어와 명령어가 파이프라인으로 연결된다."
      ],
      answer: 2,
      explanation: "정답은 3번입니다. UNIX의 파일 시스템은 선형 구조가 아니라 계층적 트리 구조입니다."
    },
    {
      id: 202501047,
      subject: "운영체제",
      question: "도스(MS-DOS)에서 파일을 저장하고 보관하는 것은?",
      choices: [
        "파일(File)",
        "디렉터리(Directory)",
        "트리(Tree)",
        "자료 구조(Data Structure)"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 디렉터리는 파일을 저장하고 관리하기 위한 공간입니다."
    },
    {
      id: 202501048,
      subject: "운영체제",
      question: "운영체제의 서비스 프로그램(Service Program) 중 사용자의 편의를 도모하기 위한 프로그램으로 텍스트 에디터, 디버거 등을 포함하고 있는 것은?",
      choices: [
        "라이브러리 프로그램(Library)",
        "로더(Loader)",
        "유틸리티 프로그램(Utility)",
        "컴파일러(Compiler)"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 유틸리티 프로그램은 사용자의 편의를 돕는 서비스 프로그램입니다."
    },
    {
      id: 202501049,
      subject: "운영체제",
      question: "리눅스 ls 명령어로 표시되는 정보 중 파일의 종류에 대한 설명으로 옳지 않은 것은?",
      choices: [
        "b: 블록형 특수 파일",
        "l: 이진 파일",
        "c: 문자형 특수 파일",
        "d: 디렉터리"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. l은 이진 파일이 아니라 심벌릭 링크를 의미합니다."
    },
    {
      id: 202501050,
      subject: "운영체제",
      question: "Windows 10에서 한 번의 마우스 조작만으로 현재 실행 중인 응용 프로그램 사이를 오가며 작업할 수 있는 환경을 제공하는 것은?",
      choices: [
        "바탕 화면",
        "내 컴퓨터",
        "시작 버튼",
        "작업 표시줄"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 작업 표시줄을 이용하면 실행 중인 응용 프로그램 사이를 쉽게 전환할 수 있습니다."
    },
    {
      id: 202501051,
      subject: "정보통신 일반",
      question: "다음 중 진폭과 위상을 변화시켜 정보를 전달하는 디지털 변조 방식은?",
      choices: [
        "QAM",
        "FSK",
        "PSK",
        "ASK"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. QAM은 진폭과 위상을 함께 변화시켜 정보를 전달하는 변조 방식입니다."
    },
    {
      id: 202501052,
      subject: "정보통신 일반",
      question: "전화용 동축 케이블과 비교하여 광 케이블의 특성이 아닌 것은?",
      choices: [
        "전송 용량이 커서 많은 신호를 전송할 수 있다.",
        "케이블 간의 누화가 없다.",
        "주파수에 따른 신호 감쇠 및 전송 지연의 변화가 크다.",
        "통신의 보안성이 우수하다."
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 광 케이블은 주파수에 따른 신호 감쇠와 전송 지연 변화가 작은 편입니다."
    },
    {
      id: 202501053,
      subject: "정보통신 일반",
      question: "ARQ 방식이란?",
      choices: [
        "에러를 정정하는 방식",
        "부호를 정정하는 방식",
        "에러를 검출하는 방식",
        "에러를 검출하여 재전송을 요구하는 방식"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. ARQ는 오류를 검출하면 송신 측에 재전송을 요구하는 방식입니다."
    },
    {
      id: 202501054,
      subject: "정보통신 일반",
      question: "데이터 통신에서 서로 다른 방향에서 동시에 송·수신을 할 수 있는 것은?",
      choices: [
        "이중 시스템(Dual System)",
        "반이중 시스템(Half Duplex System)",
        "전이중 시스템(Full Duplex System)",
        "단향 시스템(Simplex System)"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 전이중 방식은 양방향으로 동시에 송신과 수신이 가능합니다."
    },
    {
      id: 202501055,
      subject: "정보통신 일반",
      question: "데이터 전달의 기본 단계를 순서대로 옳게 나열한 것은?",
      choices: [
        "회선 연결 → 링크 확립 → 메시지 전달 → 링크 단절 → 회선 단절",
        "링크 확립 → 회선 연결 → 메시지 전달 → 회선 단절 → 링크 단절",
        "회선 연결 → 링크 단절 → 메시지 전달 → 링크 확립 → 회선 단절",
        "링크 확립 → 회선 단절 → 메시지 전달 → 회선 연결 → 링크 단절"
      ],
      answer: 0,
      explanation: "정답은 1번입니다. 데이터 전달은 회선 연결 → 링크 확립 → 메시지 전달 → 링크 단절 → 회선 단절 순서로 진행됩니다."
    },
    {
      id: 202501056,
      subject: "정보통신 일반",
      question: "다음 중 LAN의 표준에 대한 관계가 잘못 짝지어진 것은?",
      choices: [
        "IEEE 802.2: 논리적 링크 제어",
        "IEEE 802.3: CSMA/CD",
        "IEEE 802.5: 토큰 링",
        "IEEE 802.10: 무선 LAN"
      ],
      answer: 3,
      explanation: "정답은 4번입니다. 무선 LAN은 IEEE 802.11 표준입니다."
    },
    {
      id: 202501057,
      subject: "정보통신 일반",
      question: "정보 통신 회선을 멀티 포인트(Multi-Point)로 구성할 때의 특성 설명으로 적합하지 않은 것은?",
      choices: [
        "회선 경비가 증가한다.",
        "제어 소프트웨어가 간단하다.",
        "포트 수가 증가한다.",
        "변·복조기의 대수가 증가한다."
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 멀티 포인트 방식은 여러 단말이 하나의 회선을 공유하므로 제어 소프트웨어가 단순하지 않습니다."
    },
    {
      id: 202501058,
      subject: "정보통신 일반",
      question: "회선 교환 방식에 대한 일반적인 설명으로 틀린 것은?",
      choices: [
        "고정된 대역폭 전송 방식이다.",
        "실시간 전송에 적합하다.",
        "접속에는 짧은 시간이 소요되며 전송 지연은 길다.",
        "속도나 코드 변환이 불가능하다."
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 회선 교환 방식은 접속 설정에는 시간이 걸리지만, 접속 후 전송 지연은 비교적 일정하고 짧습니다."
    },
    {
      id: 202501059,
      subject: "정보통신 일반",
      question: "디지털 신호를 직접 전화 회선에 전송하지 않고 MODEM을 사용하는 가장 큰 이유는?",
      choices: [
        "전송 속도의 개선",
        "신호 일그러짐 개선",
        "임피던스 정합 기능",
        "타기종 간 인터페이스 작용"
      ],
      answer: 1,
      explanation: "정답은 2번입니다. 모뎀은 디지털 신호를 전화 회선에 적합한 아날로그 신호로 변환하여 전송 시 신호 일그러짐을 줄이기 위해 사용합니다."
    },
    {
      id: 202501060,
      subject: "정보통신 일반",
      question: "데이터 통신에서 정보의 전송을 수행하는 두 개의 컴퓨터 시스템 사이에서 상호 간에 전달되는 정보의 형식, 정보 교환을 위하여 사용되는 제어 정보의 의미와 전달 방식 등과 같은 정보 교환 규칙을 의미하는 것은?",
      choices: [
        "통신 절차",
        "전송 제어",
        "프로토콜",
        "제어 표준"
      ],
      answer: 2,
      explanation: "정답은 3번입니다. 프로토콜은 데이터 통신을 위한 정보 형식, 제어 정보, 전달 방식 등에 관한 규칙입니다."
    }
  ]
});
