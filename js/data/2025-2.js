window.questionBanks = window.questionBanks || [];

window.questionBanks.push({
  year: 2025,
  round: 2,
  title: "2025? 2? ????",
  questions: [
  {
    "id": 202502001,
    "subject": "컴퓨터 일반",
    "question": "순차적인 주소지정 등에 유리하며, 주소지정에 2개의 레지스터가 사용되는 방식은?",
    "choices": [
      "직접 Addressing",
      "간접 Addressing",
      "상대 Addressing",
      "색인 Addressing"
    ],
    "answer": 3,
    "explanation": "색인 주소지정 방식은 기준 주소에 인덱스 레지스터 값을 더해 유효 주소를 구하므로 배열이나 순차 자료 접근에 유리합니다."
  },
  {
    "id": 202502002,
    "subject": "컴퓨터 일반",
    "question": "CISC의 특징으로 옳지 않은 것은?",
    "choices": [
      "명령어의 개수가 보통 100~250개로 많다.",
      "RISC에 비해 빠른 처리 속도를 제공한다.",
      "명령어의 길이가 가변적이다.",
      "명령어는 기억장치 내의 오퍼랜드를 처리한다."
    ],
    "answer": 1,
    "explanation": "CISC는 복잡하고 다양한 명령어를 제공하지만, 일반적으로 단순 명령어 기반의 RISC보다 처리 속도가 빠르다고 보기 어렵습니다."
  },
  {
    "id": 202502003,
    "subject": "컴퓨터 일반",
    "question": "다음 중 절대주소 표현 방식인 것은?",
    "choices": [
      "즉시 주소 지정 방식",
      "간접 주소 지정 방식",
      "직접 주소 지정 방식",
      "상대 주소 지정 방식"
    ],
    "answer": 2,
    "explanation": "직접 주소 지정 방식은 명령어의 주소 부분에 실제 기억장치 주소가 직접 주어지는 방식입니다."
  },
  {
    "id": 202502004,
    "subject": "컴퓨터 일반",
    "question": "연속되는 2개의 숫자를 표현한 코드에서 한 개의 비트만 변경하면 새로운 코드가 되기 때문에 아날로그-디지털 변환, 데이터 전송 등에 주로 사용되는 코드는?",
    "choices": [
      "EBCDIC Code",
      "Hamming Code",
      "ASCII Code",
      "Gray Code"
    ],
    "answer": 3,
    "explanation": "그레이 코드는 인접한 코드 사이에서 한 비트만 변하므로 A/D 변환이나 오류 감소가 필요한 경우에 사용됩니다."
  },
  {
    "id": 202502005,
    "subject": "컴퓨터 일반",
    "question": "입력 단자와 출력 단자가 반대가 되는, 즉 0이면 1, 1이면 0이 되는 회로는?",
    "choices": [
      "AND 회로",
      "OR 회로",
      "NOT 회로",
      "Flip-Flop 회로"
    ],
    "answer": 2,
    "explanation": "NOT 회로는 입력값을 반전시키는 논리 회로입니다."
  },
  {
    "id": 202502006,
    "subject": "컴퓨터 일반",
    "question": "스택 연산에서 데이터를 삽입하거나 삭제하는 동작을 나타내는 것은?",
    "choices": [
      "ADD, SUB",
      "LOAD, STORE",
      "PUSH, POP",
      "MOV, MUL"
    ],
    "answer": 2,
    "explanation": "스택에서 데이터를 넣는 동작은 PUSH, 꺼내는 동작은 POP입니다."
  },
  {
    "id": 202502007,
    "subject": "컴퓨터 일반",
    "question": "컴퓨터에 의하여 다음에 수행될 명령어의 주소가 저장되어 있는 기억 장소는?",
    "choices": [
      "프로그램 카운터",
      "메모리 레지스터",
      "명령어 레지스터",
      "인덱스 레지스터"
    ],
    "answer": 0,
    "explanation": "프로그램 카운터는 다음에 실행할 명령어의 주소를 저장하는 레지스터입니다."
  },
  {
    "id": 202502008,
    "subject": "컴퓨터 일반",
    "question": "Y = (A + B) · (AB)와 같은 논리식은?",
    "choices": [
      "Y = AB + AB",
      "Y = AB · AB",
      "Y = AB + (AB)",
      "Y = AB · (AB)"
    ],
    "answer": 3,
    "explanation": "문제의 논리식은 괄호 안의 OR 연산 결과와 AB 항을 AND 연산한 형태입니다."
  },
  {
    "id": 202502009,
    "subject": "컴퓨터 일반",
    "question": "제어문은 어떤 장치에서 명령을 받는가?",
    "choices": [
      "기억장치",
      "출력장치",
      "입력장치",
      "제어장치"
    ],
    "answer": 3,
    "explanation": "명령어의 해독과 제어 신호 발생은 CPU의 제어장치가 담당합니다."
  },
  {
    "id": 202502010,
    "subject": "컴퓨터 일반",
    "question": "연산 후 입력 자료가 변하지 않고 보존되는 특징의 장점을 갖는 명령어 형식은?",
    "choices": [
      "0-주소 명령어 형식",
      "1-주소 명령어 형식",
      "2-주소 명령어 형식",
      "3-주소 명령어 형식"
    ],
    "answer": 3,
    "explanation": "3-주소 명령어는 두 개의 피연산자와 결과 저장 주소를 별도로 지정할 수 있어 원래 입력 자료가 보존됩니다."
  },
  {
    "id": 202502011,
    "subject": "컴퓨터 일반",
    "question": "Flip-Flop의 종류에 해당되지 않는 것은?",
    "choices": [
      "R Flip-Flop",
      "T Flip-Flop",
      "RS Flip-Flop",
      "JK Flip-Flop"
    ],
    "answer": 0,
    "explanation": "대표적인 플립플롭에는 RS, JK, D, T 플립플롭이 있으며 R 플립플롭은 일반적인 종류로 분류하지 않습니다."
  },
  {
    "id": 202502012,
    "subject": "컴퓨터 일반",
    "question": "다음 그림의 논리회로에서 입력 A, B, C에 대한 출력 Y의 값은?",
    "image": "../images/logic-circuit-2025-2-12.svg",
    "imageAlt": "A와 B의 AND 결과와 B를 NOT 처리한 값과 C의 AND 결과가 OR 게이트로 연결된 논리회로",
    "choices": [
      "Y = AB + B'C",
      "Y = A + B + C",
      "Y = AB + BC",
      "Y = A'B + B'C"
    ],
    "answer": 0,
    "explanation": "위쪽 게이트는 A와 B의 AND 결과인 AB이고, 아래쪽 게이트는 B를 NOT 한 값과 C를 AND 한 B'C입니다. 두 값을 OR 하므로 Y = AB + B'C입니다."
  },
  {
    "id": 202502013,
    "subject": "컴퓨터 일반",
    "question": "DMA의 주요 구성 요소가 아닌 것은?",
    "choices": [
      "데이터 카운터",
      "주소 레지스터",
      "주소 카운터",
      "제어/상태 레지스터"
    ],
    "answer": 1,
    "explanation": "DMA는 일반적으로 주소 카운터, 데이터 카운터, 제어/상태 레지스터 등을 주요 구성 요소로 사용합니다."
  },
  {
    "id": 202502014,
    "subject": "컴퓨터 일반",
    "question": "다음 보기의 연산은?",
    "image": "../images/alu-or-2025-2-14.svg",
    "imageAlt": "01001101과 01100111을 ALU에 입력하여 01000101이 출력되는 그림",
    "choices": [
      "MOVE 연산",
      "AND 연산",
      "Complement 연산",
      "OR 연산"
    ],
    "answer": 1,
    "explanation": "01001101과 01100111을 AND 연산하면 두 입력이 모두 1인 자리만 1이 되어 01000101이 됩니다."
  },
  {
    "id": 202502015,
    "subject": "컴퓨터 일반",
    "question": "일반적으로 컴퓨터의 CPU에서 하나의 명령어를 실행하기 위하여 이루어지는 동작 단계를 바르게 나열한 것은?",
    "choices": [
      "Fetch Cycle → Instruction Decoding Cycle → Write-Back 작업 → 명령어 실행 단계",
      "Fetch Cycle → Instruction Decoding Cycle → 명령어 실행 단계 → Write-Back 작업",
      "Fetch Cycle → 명령어 실행 단계 → Write-Back 작업 → Instruction Decoding Cycle",
      "Instruction Decoding Cycle → Fetch Cycle → 명령어 실행 단계 → Write-Back 작업"
    ],
    "answer": 1,
    "explanation": "명령어는 일반적으로 인출, 해독, 실행, 결과 저장 순서로 처리됩니다."
  },
  {
    "id": 202502016,
    "subject": "컴퓨터 일반",
    "question": "반가산기에서 두 개의 입력 비트가 모두 1일 때 합은?",
    "choices": [
      "0",
      "1",
      "10",
      "11"
    ],
    "answer": 0,
    "explanation": "반가산기에서 1+1의 합 비트는 0이고 자리올림 비트는 1입니다."
  },
  {
    "id": 202502017,
    "subject": "운영체제",
    "question": "인스트럭션 패치 사이클에서 수행되는 절차는?",
    "choices": [
      "제어 장치가 명령어를 해독한다.",
      "기억 장치에서 명령어를 가져온다.",
      "연산 장치가 연산을 수행한다.",
      "기억 장치에 결과를 저장한다."
    ],
    "answer": 1,
    "explanation": "Fetch Cycle은 기억장치에 저장된 명령어를 CPU로 가져오는 단계입니다."
  },
  {
    "id": 202502018,
    "subject": "운영체제",
    "question": "인터럽트에서 응급 시 고려할 사항으로 맞지 않은 것은?",
    "choices": [
      "외부적인 기술의 사용",
      "메모리 경로 확보 수단",
      "많은 비용 레지스터의 사용",
      "제한적이고 복잡한 명령어 세트"
    ],
    "answer": 3,
    "explanation": "인터럽트 처리에서는 신속한 처리와 상태 보존이 중요하며, 제한적이고 복잡한 명령어 세트는 응급 시 고려 사항으로 보기 어렵습니다."
  },
  {
    "id": 202502019,
    "subject": "운영체제",
    "question": "주기억장치 중 액세스 표현 방식에 해당하는 것은?",
    "choices": [
      "직접 주소",
      "간접 주소",
      "자료 지시 주소",
      "계산에 의한 주소"
    ],
    "answer": 0,
    "explanation": "주기억장치 접근 방식에서 직접 주소는 주소 필드가 실제 기억장치 주소를 나타내는 방식입니다."
  },
  {
    "id": 202502020,
    "subject": "운영체제",
    "question": "다음 설명에 해당하는 용어는?\n\n컴퓨터가 정상적인 업무를 수행하는 도중에 발생하는 예기치 않은 일들에 대하여 컴퓨터의 작동이 중단 없이 계속적으로 업무를 수행할 수 있도록 하는 기능",
    "choices": [
      "Spooling",
      "Buffering",
      "Interrupt",
      "Virtual Memory"
    ],
    "answer": 2,
    "explanation": "인터럽트는 실행 중 예외 상황이나 입출력 요청 등이 발생했을 때 현재 작업을 중단하고 해당 처리를 수행한 뒤 원래 작업으로 돌아가게 하는 기능입니다."
  }
]
});
