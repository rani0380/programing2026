// 문제·해설 대조 복원 콘텐츠. 원본 쪽수는 practical-mock-data.js에 보존합니다.
window.practicalRestoredContent = [
  [
    {
      "prompt": "현재 작업 디렉터리와 상대 경로를 보고, 목적지의 절대 경로를 쓰세요.",
      "code": "현재 작업 디렉터리: /var/www/html/public\n상대 경로: ../assets/images",
      "solutionText": "/var/www/html/assets/images",
      "explanation": "..으로 public의 상위인 /var/www/html로 이동한 다음 assets/images를 붙입니다.",
      "tables": [],
      "language": "",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "보기에서 ① 파일 내용을 확인하는 명령어, ② 파일이나 폴더의 소유자를 변경하는 명령어를 순서대로 쓰세요.",
      "code": "보기: head, chown, cd, mkdir, chmod, ls, rm, pwd, cat, find",
      "solutionText": "① cat\n② chown",
      "explanation": "cat은 파일의 내용을 출력하고 chown은 소유자를 변경합니다. chmod는 접근 권한 변경입니다.",
      "tables": [],
      "language": "",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "CUSTOMER 테이블에 최대 255자의 가변 길이 문자열을 저장하는 email 열을 추가하는 SQL문을 작성하세요.",
      "code": "",
      "solutionText": "ALTER TABLE CUSTOMER ADD email VARCHAR(255);",
      "explanation": "기존 테이블의 구조를 바꾸므로 ALTER TABLE을 사용하고 ADD로 새 열을 추가합니다.",
      "tables": [],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "학생 테이블의 모든 학생이 결과에 나타나도록 성적 테이블과 조인합니다. SQL의 ①, ②를 채우세요.",
      "code": "SELECT a.학번, 이름, 과목, 점수\nFROM 학생 a LEFT JOIN 성적 b\n(①) a.학번 = b.(②);",
      "solutionText": "① ON\n② 학번",
      "explanation": "LEFT JOIN은 왼쪽 학생 테이블의 모든 행을 유지합니다. 성적이 없는 학생의 과목과 점수는 NULL입니다. ON 절에서 두 테이블의 학번을 연결합니다.",
      "tables": [
        {
          "title": "학생 — 결과표를 기준으로 복원한 조회 대상 열",
          "headers": [
            "학번",
            "이름"
          ],
          "rows": [
            [
              101,
              "최은지"
            ],
            [
              102,
              "윤성철"
            ],
            [
              103,
              "서기운"
            ],
            [
              104,
              "한영희"
            ]
          ]
        },
        {
          "title": "성적",
          "headers": [
            "학번",
            "과목",
            "점수"
          ],
          "rows": [
            [
              101,
              "DB",
              90
            ],
            [
              102,
              "경영학",
              85
            ],
            [
              104,
              "물리",
              88
            ]
          ]
        }
      ],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "추정 복원",
        "note": "학생 테이블의 왼쪽 부분은 잘려 있어 결과표에 보이는 학번·이름 열로 재구성했습니다. 이 조회에 쓰이지 않는 학과 열은 생략했습니다. 조인 방식과 빈칸은 해설과 대조했습니다."
      }
    },
    {
      "prompt": "SALES에서 제품별 판매량 합계가 1000 이상인 제품의 이름, 최소판매량, 최대판매량을 조회합니다. ①, ②를 채우세요.",
      "code": "SELECT product, MIN(quantity) (①) 최소판매량,\n       MAX(quantity) (①) 최대판매량\nFROM SALES\nGROUP BY product\n(②) SUM(quantity) >= 1000;",
      "solutionText": "① AS\n② HAVING",
      "explanation": "AS는 출력 열에 별칭을 붙입니다. 제품별로 묶은 뒤 합계 조건을 적용하므로 HAVING을 사용합니다.",
      "tables": [],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "추정 복원",
        "note": "잘린 SQL의 앞부분과 두 번째 빈칸 위치를 해설의 완성 SQL 및 처리 조건에 맞춰 재구성했습니다."
      }
    },
    {
      "prompt": "다음 SQL의 실행 결과를 result 열을 가진 결과표로 작성하세요.",
      "code": "SELECT AVG(N) AS result\nFROM X2\nWHERE M IN (SELECT M FROM X1);",
      "solutionText": "result\n4",
      "explanation": "X1에도 존재하는 X2의 M은 C와 G입니다. N은 6과 2이므로 평균은 (6+2)/2=4입니다.",
      "tables": [
        {
          "title": "X1",
          "headers": [
            "M",
            "N"
          ],
          "rows": [
            [
              "A",
              8
            ],
            [
              "C",
              3
            ],
            [
              "E",
              6
            ],
            [
              "G",
              4
            ]
          ]
        },
        {
          "title": "X2",
          "headers": [
            "M",
            "N"
          ],
          "rows": [
            [
              "C",
              6
            ],
            [
              "D",
              10
            ],
            [
              "F",
              9
            ],
            [
              "G",
              2
            ]
          ]
        }
      ],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Java 프로그램의 출력 결과를 쓰세요.",
      "code": "public class Main {\n    public static void main(String[] args) {\n        int ans = (int)Math.pow(2, Math.ceil(Math.PI));\n        System.out.printf(\"%d\", ans);\n    }\n}",
      "solutionText": "16",
      "explanation": "Math.PI를 올림하면 4.0이고, 2의 4제곱은 16.0입니다. int로 변환하여 16을 출력합니다.",
      "tables": [],
      "language": "java",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "이메일에 @가 정확히 하나 있고, 도메인 부분에 .이 있는지 확인합니다. 빈칸 ①, ②에 들어갈 Python 메서드를 쓰세요.",
      "code": "def is_valid_email(email):\n    return (\n        email.(①)(\"@\") == 1 and \".\" in email.(②)(\"@\")[-1]\n    )\n\nemails = [\"test@example.com\", \"user@@mail.com\", \"helloworld\"]\nfor e in emails:\n    print(is_valid_email(e))",
      "solutionText": "① count\n② split",
      "explanation": "count(\"@\")로 개수를 세고 split(\"@\")[-1]로 마지막 부분을 가져옵니다. and는 앞 조건이 거짓이면 뒤 조건을 평가하지 않습니다. 이 코드의 출력은 True, False, False입니다.",
      "tables": [],
      "language": "python",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Java 프로그램의 출력 결과를 쓰세요.",
      "code": "public class Main {\n    int result = 0;\n    int test() {\n        try {\n            return 1;\n        } finally {\n            result = 2;\n        }\n    }\n    public static void main(String[] args) {\n        Main p = new Main();\n        System.out.print(p.test());\n    }\n}",
      "solutionText": "1",
      "explanation": "return의 반환값 1을 정한 뒤 finally가 실행되어 필드 result가 2로 바뀝니다. 필드 변경은 이미 정한 반환값을 바꾸지 않으므로 1을 출력합니다.",
      "tables": [],
      "language": "java",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Java 프로그램의 출력 결과를 쓰세요.",
      "code": "public class Main {\n    static class A {\n        static String nu() { return \"A\"; }\n        String mo() { return \"a\"; }\n    }\n    static class B extends A {\n        static String nu() { return \"B\"; }\n        String mo() { return \"b\"; }\n    }\n    public static void main(String[] args) {\n        A tester = new B();\n        System.out.println(tester.nu() + tester.mo());\n    }\n}",
      "solutionText": "Ab",
      "explanation": "static 메서드 nu는 변수의 선언 타입 A를 따르고, 오버라이딩된 인스턴스 메서드 mo는 실제 객체 B를 따릅니다.",
      "tables": [],
      "language": "java",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Python 프로그램의 출력 결과를 쓰세요.",
      "code": "lst = [1, 2, 3]\ndst = {i: i * 2 for i in lst}\ns = set(dst.values())\nlst[0] = 99\ndst[2] = 7\ns.add(99)\nprint(len(s & set(dst.values())))",
      "solutionText": "2",
      "explanation": "처음 s는 {2,4,6}입니다. s에 99를 추가하면 {2,4,6,99}, 변경된 dst의 값은 {2,7,6}입니다. 교집합 {2,6}의 원소 수는 2입니다.",
      "tables": [],
      "language": "python",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "① 문법 오류가 있는 줄 번호와 ② 오류를 수정한 뒤의 출력 결과를 쓰세요. 줄 번호는 왼쪽 표시를 기준으로 합니다.",
      "code": "def process_data(data_list):\n    sliced_data = data_list(1:4)\n    processed_list = []\n    for item in sliced_data:\n        processed_list.append(item + '-Checked')\n    return processed_list\ndata = ['a', 'b', 'c', 'd', 'e']\nresult1 = process_data(data)\nresult2 = result1[1].split('e')\nprint(result2[1])",
      "solutionText": "① 2\n② ck",
      "explanation": "2행을 data_list[1:4]로 고칩니다. result1[1]은 c-Checked이고 e로 나누면 [\"c-Ch\", \"ck\", \"d\"]이므로 두 번째 원소 ck를 출력합니다.",
      "tables": [],
      "language": "python",
      "numbered": true,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    }
  ],
  [
    {
      "prompt": "현재 작업 디렉터리와 상대 경로를 보고 목적지의 절대 경로를 쓰세요.",
      "code": "현재 작업 디렉터리: /home/user/app\n상대 경로: ../../docs/api",
      "solutionText": "/home/docs/api",
      "explanation": "상위로 두 번 이동하여 /home에 도착한 다음 docs/api를 연결합니다.",
      "tables": [],
      "language": "",
      "numbered": false,
      "restoration": {
        "kind": "추정 복원",
        "note": "원문의 작업 경로 왼쪽이 잘려 중간 폴더명을 user로 가정했습니다. 두 단계 상위가 /home이라는 해설과 최종 정답을 보존한 연습용 경로 복원입니다."
      }
    },
    {
      "prompt": "보기에서 ① 디렉터리의 파일 목록을 표시하는 명령어, ② 파일 시스템을 검사하고 필요하면 복구하는 명령어를 순서대로 쓰세요.",
      "code": "보기: fsck, ls, mkdir, who, chmod, ps, cp, chown",
      "solutionText": "① ls\n② fsck",
      "explanation": "ls는 파일·디렉터리 목록을 표시하고 fsck는 파일 시스템 검사·복구에 사용합니다.",
      "tables": [],
      "language": "",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "EMP 테이블에서 부서명을 중복 없이 한 번씩만 조회하는 SQL문을 작성하세요.",
      "code": "",
      "solutionText": "SELECT DISTINCT 부서명 FROM EMP;",
      "explanation": "SELECT DISTINCT는 조회 결과에서 동일한 값을 중복 제거합니다.",
      "tables": [],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "고객명이 김으로 시작하는 주문을 주문일 오름차순으로 조회합니다. SQL의 ①, ②를 채우세요.",
      "code": "SELECT * FROM 주문\nWHERE 고객명 LIKE (①)\nORDER BY 주문일 (②);",
      "solutionText": "① '김%'\n② ASC",
      "explanation": "%는 길이 0 이상의 문자열과 일치합니다. ASC는 오름차순 정렬입니다.",
      "tables": [
        {
          "title": "주문",
          "headers": [
            "고객코드",
            "고객명",
            "주소",
            "주문일"
          ],
          "rows": [
            [
              "SG001",
              "임영우",
              "서울",
              "2025-09-05"
            ],
            [
              "SG002",
              "김예소",
              "경기",
              "2025-09-08"
            ],
            [
              "SG003",
              "신선아",
              "서울",
              "2025-09-11"
            ],
            [
              "SG004",
              "김시환",
              "인천",
              "2025-09-12"
            ],
            [
              "SG005",
              "이다해",
              "경기",
              "2025-09-16"
            ]
          ]
        }
      ],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 SQL의 실행 결과를 total 열을 가진 결과표로 작성하세요.",
      "code": "SELECT SUM(Z) AS total\nFROM S2\nWHERE X NOT IN (SELECT X FROM S1);",
      "solutionText": "total\n35",
      "explanation": "S1의 X에 없는 S2의 행은 D와 E입니다. 해당 Z 값 15와 20을 더하면 35입니다.",
      "tables": [
        {
          "title": "S1",
          "headers": [
            "X",
            "Y"
          ],
          "rows": [
            [
              "A",
              10
            ],
            [
              "B",
              20
            ],
            [
              "C",
              30
            ]
          ]
        },
        {
          "title": "S2",
          "headers": [
            "X",
            "Z"
          ],
          "rows": [
            [
              "A",
              5
            ],
            [
              "B",
              10
            ],
            [
              "D",
              15
            ],
            [
              "E",
              20
            ]
          ]
        }
      ],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "학생 테이블에서 점수가 90 이상인 학생의 학번·이름·점수를 가진 우수학생 뷰를 생성합니다. ①~③을 채우세요.",
      "code": "(①) 우수학생\n(②) SELECT 학번, 이름, 점수\nFROM 학생\n(③) 점수 >= 90;",
      "solutionText": "① CREATE VIEW\n② AS\n③ WHERE",
      "explanation": "CREATE VIEW 뷰이름 AS 뒤에 조회문을 작성합니다. 행의 점수 조건에는 WHERE를 사용합니다.",
      "tables": [],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "추정 복원",
        "note": "잘린 SQL의 앞부분과 빈칸 위치를 처리 조건 및 해설의 완성문에 맞춰 재구성했습니다."
      }
    },
    {
      "prompt": "괄호에 공통으로 들어갈 Character 메서드명과 프로그램의 출력 결과를 순서대로 쓰세요.",
      "code": "public class Main {\n    public static void main(String[] args) {\n        char a = '5';\n        int t1 = Character.(①)(a);\n        char b = '*';\n        int t2 = Character.(①)(b);\n        char c = '9';\n        int t3 = Character.(①)(c);\n        System.out.print(t1 + t2 + t3);\n    }\n}",
      "solutionText": "① getNumericValue\n② 13",
      "explanation": "getNumericValue는 문자 5와 9를 각각 5와 9로, 숫자 값이 없는 *를 -1로 변환합니다. 따라서 5+(-1)+9=13입니다. 첨부 해설의 정답 4는 제시 코드와 일치하지 않아 복원판에서 13으로 바로잡았습니다.",
      "tables": [],
      "language": "java",
      "numbered": false,
      "restoration": {
        "kind": "원문 정답 오류 보정",
        "note": "문제와 해설의 코드는 문자 5, *, 9를 사용하지만 원문 정답은 4로 표기되어 있습니다. 복원판은 제시 코드를 기준으로 채점합니다. 자세한 계산은 제출 후 해설에서 확인하세요."
      }
    },
    {
      "prompt": "① 발생하는 예외를 처리하도록 고쳐야 할 catch문의 줄 번호와 ② 수정 후 출력 결과를 쓰세요. NumberFormatException을 적절한 예외 클래스로 바꾸세요.",
      "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 32, b = 0, c = 4;\n        int d, e;\n        try {\n            d = a / b;\n            System.out.print(a);\n        }\n        catch (NumberFormatException f) {\n            e = a / c;\n            System.out.print(e);\n        }\n        finally {\n            System.out.print(\" \" + c);\n        }\n    }\n}",
      "solutionText": "① 9\n② 8 4",
      "explanation": "정수의 0 나눗셈은 ArithmeticException입니다. 9행을 고치면 catch에서 32/4=8을 출력하고 finally에서 공백과 4를 출력합니다.",
      "tables": [],
      "language": "java",
      "numbered": true,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Java 프로그램의 출력 결과를 쓰세요.",
      "code": "public class Main {\n    static class BO {\n        public int v;\n        public BO(int v) { this.v = v; }\n    }\n    public static void main(String[] args) {\n        BO a = new BO(1);\n        BO b = new BO(2);\n        BO c = new BO(3);\n        BO[] arr = {a, b, c};\n        BO t = arr[0];\n        arr[0] = arr[2];\n        arr[2] = t;\n        arr[1].v = arr[0].v;\n        System.out.println(a.v + \"a\" + b.v + \"b\" + c.v);\n    }\n}",
      "solutionText": "1a3b3",
      "explanation": "배열의 참조를 교환해도 변수 a와 c가 가리키는 객체는 그대로입니다. arr[1]은 b, arr[0]은 c이므로 b.v가 3이 됩니다. a.v=1, b.v=3, c.v=3입니다.",
      "tables": [],
      "language": "java",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Python 프로그램의 출력 결과를 쓰세요.",
      "code": "def test_arr(arr):\n    arr = list(arr)\n    length = len(arr)\n    for i in range(length):\n        for j in range(i + 1, length):\n            if arr[i].lower() < arr[j].lower():\n                arr[i], arr[j] = arr[j], arr[i]\n    return \"\".join(arr)\narr = \"AGeCbFd\"\nresult = test_arr(arr)\nprint(result)",
      "solutionText": "GFedCbA",
      "explanation": "소문자로 변환한 값을 비교하여 내림차순 정렬하지만 실제 저장된 문자의 대소문자는 유지합니다.",
      "tables": [],
      "language": "python",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Python 프로그램의 출력 결과를 쓰세요.",
      "code": "def gg(n):\n    if n <= 1:\n        return 1\n    else:\n        return n * gg(n - 1)\nprint(gg(3))",
      "solutionText": "6",
      "explanation": "gg(3)=3×gg(2), gg(2)=2×gg(1), gg(1)=1이므로 3×2×1=6입니다.",
      "tables": [],
      "language": "python",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Python 프로그램이 출력하는 리스트를 쓰세요.",
      "code": "a = ['pen', 'eraser', 'notebook', 'pencil', 'pen']\na.pop(2)\na.pop()\na += ['stapler', 'ruler']\na.reverse()\nprint(a)",
      "solutionText": "['ruler', 'stapler', 'pencil', 'eraser', 'pen']",
      "explanation": "인덱스 2의 notebook을 제거하고 마지막 pen을 제거합니다. 두 원소를 추가한 뒤 역순으로 바꾸면 표시된 리스트가 됩니다.",
      "tables": [],
      "language": "python",
      "numbered": false,
      "restoration": {
        "kind": "추정 복원",
        "note": "왼쪽이 잘린 메서드 호출은 해설에 나타난 리스트 변화와 같은 연산으로 복원했습니다. 원문에서 인덱스 2를 계산한 표현은 확정할 수 없어 pop(2)로 나타냈습니다."
      }
    }
  ],
  [
    {
      "prompt": "현재 작업 디렉터리와 상대 경로를 보고 목적지의 절대 경로를 쓰세요. 구분자는 /로 표시하세요.",
      "code": "현재 작업 디렉터리: C:/Program Files/Common Files\n상대 경로: ../Microsoft Shared/VBA",
      "solutionText": "C:/Program Files/Microsoft Shared/VBA",
      "explanation": "Common Files에서 한 단계 올라간 Program Files에 Microsoft Shared/VBA를 연결합니다.",
      "tables": [],
      "language": "",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "보기에서 ① 현재 시스템에 로그인한 사용자 정보를 확인하는 명령어, ② 새 디렉터리를 만드는 명령어를 순서대로 쓰세요.",
      "code": "보기: head, find, killall, chown, mkdir, cp, top, rmdir, pwd, cat, who, chmod",
      "solutionText": "① who\n② mkdir",
      "explanation": "who는 로그인 사용자 정보를 표시하고 mkdir는 새 디렉터리를 생성합니다.",
      "tables": [],
      "language": "",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "data.txt에 아래 권한을 부여하는 명령어를 8진수 숫자 방식으로 작성하세요.",
      "code": "소유자: 읽기·쓰기·실행\n그룹: 읽기\n기타 사용자: 읽기·쓰기",
      "solutionText": "chmod 746 data.txt",
      "explanation": "읽기 4, 쓰기 2, 실행 1을 더합니다. 소유자는 7, 그룹은 4, 기타 사용자는 6입니다.",
      "tables": [],
      "language": "",
      "numbered": false,
      "restoration": {
        "kind": "추정 복원",
        "note": "처리 조건의 왼쪽이 잘렸지만 해설의 rwx, r--, rw- 및 이진수 111, 100, 110을 근거로 각 사용자 범주의 조건을 복원했습니다."
      }
    },
    {
      "prompt": "ORDERS 테이블에 주문번호 A001, 고객번호 CMK5757, 주소 청주인 행을 삽입하는 SQL문을 작성하세요.",
      "code": "ORDERS의 열: 주문번호, 고객번호, 주소",
      "solutionText": "INSERT INTO ORDERS (주문번호, 고객번호, 주소)\nVALUES ('A001', 'CMK5757', '청주');",
      "explanation": "INSERT INTO 뒤에 대상 테이블과 열 목록을 쓰고 VALUES에 같은 순서로 값을 지정합니다.",
      "tables": [],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 SQL의 결과로 조회되는 행의 개수를 숫자로 쓰세요.",
      "code": "SELECT COUNT(*)\nFROM 판매\nWHERE 판매량 > 200 AND 판매액 >= 500000\n   OR 판매량 <= 100;",
      "solutionText": "3",
      "explanation": "AND가 OR보다 먼저 적용됩니다. 첫 조건을 만족하는 CS-01, FV-63과 판매량이 100 이하인 GE-57, 총 세 행이 선택됩니다.",
      "tables": [
        {
          "title": "판매",
          "headers": [
            "제품코드",
            "판매량",
            "판매액"
          ],
          "rows": [
            [
              "CS-01",
              250,
              550000
            ],
            [
              "GE-57",
              100,
              230000
            ],
            [
              "PK-82",
              300,
              450000
            ],
            [
              "FV-63",
              350,
              560000
            ],
            [
              "TR-44",
              200,
              540000
            ]
          ]
        }
      ],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "세 SQL문이 각각 다음 조건을 만족하도록 ①~③을 채우세요: 가격 20000 이상이면서 출판사 길벗 / 제목 내림차순 / 저자가 이로 시작하지 않음.",
      "code": "SELECT * FROM 도서\nWHERE 가격 >= 20000 (①) 출판사 = '길벗';\n\nSELECT * FROM 도서 ORDER BY 제목 (②);\n\nSELECT * FROM 도서 WHERE 저자 (③) '이%';",
      "solutionText": "① AND\n② DESC\n③ NOT LIKE",
      "explanation": "두 조건을 모두 만족시키려면 AND, 내림차순에는 DESC, 패턴과 일치하지 않는 조건에는 NOT LIKE를 사용합니다.",
      "tables": [],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "사용자 김은소에게 EMP 테이블의 UPDATE 권한을 부여하고, 다른 사용자에게 이 권한을 다시 부여할 수도 있게 하려고 합니다. ①, ②를 채우세요.",
      "code": "(①) UPDATE ON EMP TO 김은소 (②);",
      "solutionText": "① GRANT\n② WITH GRANT OPTION",
      "explanation": "GRANT로 권한을 부여합니다. WITH GRANT OPTION은 부여받은 권한을 다른 사용자에게 다시 부여할 수 있게 합니다.",
      "tables": [],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Java 프로그램의 출력 결과를 쓰세요.",
      "code": "public class Main {\n    public static class Parent {\n        public int x(int i) { return i + 2; }\n        public static String id() { return \"P\"; }\n    }\n    public static class Child extends Parent {\n        public int x(int i) { return i + 3; }\n        public String x(String s) { return s + \"R\"; }\n        public static String id() { return \"C\"; }\n    }\n    public static void main(String[] args) {\n        Parent ref = new Child();\n        System.out.println(ref.x(2) + ref.id());\n    }\n}",
      "solutionText": "5P",
      "explanation": "인스턴스 메서드 x(int)는 실제 객체 Child에서 실행되어 5를 반환합니다. static 메서드 id는 선언 타입 Parent에서 선택되어 P를 반환합니다.",
      "tables": [],
      "language": "java",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Java 프로그램의 출력 결과를 쓰세요.",
      "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.printf(\"%.2f\", Math.PI);\n    }\n}",
      "solutionText": "3.14",
      "explanation": "%.2f는 소수점 아래 둘째 자리까지 표시합니다. Math.PI의 다음 자리가 1이므로 3.14가 됩니다.",
      "tables": [],
      "language": "java",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Python 프로그램의 출력 결과를 쓰세요.",
      "code": "grades = [\n    [85, 90, 78],\n    [92, 88, 95],\n    [76, 82, 80],\n    [90, 85, 87]\n]\ntotals = {}\nnumber = 1\nfor i in grades:\n    score = 0\n    for j in i:\n        score += j\n    totals[number] = score\n    number += 1\nout_value = totals.get(3)\nprint(out_value)",
      "solutionText": "238",
      "explanation": "각 행의 합계를 키 1~4에 저장합니다. 키 3의 값은 세 번째 행의 합 76+82+80=238입니다.",
      "tables": [],
      "language": "python",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "main 메서드 내부에서 실행되는 줄 번호를 순서대로 쓰세요. 닫는 중괄호와 catch·finally 진입 줄은 제외하고, 실행문 및 try 진입 줄을 기록하세요. 이 복원판의 줄 번호를 사용합니다.",
      "code": "public class Main {\n    public static void main(String[] args) {\n        String[] fruits = {\"apple\", \"banana\", \"cherry\"};\n        try {\n            String nullString = null;\n            int result = 10 / 0;\n            System.out.println(\"인덱스 3의 과일: \" + fruits[3]);\n            System.out.println(\"문자열 길이: \" + nullString.length());\n            System.out.println(\"결과: \" + result);\n        } catch (NullPointerException e) {\n            System.out.println(\"NullPointerException 발생!\");\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"ArrayIndexOutOfBoundsException 발생!\");\n        } catch (ArithmeticException e) {\n            System.out.println(\"ArithmeticException 발생!\");\n        } catch (Exception e) {\n            System.out.println(\"기타 예외 발생: \" + e.toString());\n        } finally {\n            System.out.println(\"프로그램 종료!\");\n        }\n    }\n}",
      "solutionText": "3, 4, 5, 6, 15, 19",
      "explanation": "6행의 정수 0 나눗셈에서 ArithmeticException이 발생합니다. 7~9행은 실행하지 않고 15행으로 이동한 후 finally의 19행을 실행합니다.",
      "tables": [],
      "language": "java",
      "numbered": true,
      "restoration": {
        "kind": "추정 복원",
        "note": "원문의 줄 번호가 잘려 있어 코드에 새 줄 번호를 붙이고 실행 순서의 기록 기준을 명시했습니다. 원문 정답의 줄 번호와는 직접 비교하지 마세요. 예외 발생과 제어 흐름은 원문 코드에 맞췄습니다."
      }
    },
    {
      "prompt": "아래 입력값을 사용했을 때, 마지막 print문이 출력하는 값을 쓰세요.",
      "code": "arr_Str = input('Input String : ').split('-')\narr_Len = int(input('Input Number : '))\narr_Val = list(range(0, arr_Len, 2))\narr_Val.remove(4)\nprint(arr_Str[1].find('i') + arr_Val[2])",
      "solutionText": "5",
      "explanation": "문자열을 나누면 [information, technology]가 됩니다. technology에 i가 없으므로 find는 -1을 반환합니다. [0,2,4,6,8,10]에서 4를 제거한 뒤 인덱스 2의 값은 6이므로 -1+6=5입니다.",
      "tables": [
        {
          "title": "입력값",
          "headers": [
            "항목",
            "값"
          ],
          "rows": [
            [
              "Input String",
              "information-technology"
            ],
            [
              "Input Number",
              12
            ]
          ]
        }
      ],
      "language": "python",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Python 프로그램의 출력 결과를 쓰세요.",
      "code": "def prnt(x, y, z):\n    if x >= y:\n        return z\n    x += 1\n    z += x\n    t = prnt(x, y, z)\n    return t\na, b, c = 0, 5, 0\nc = prnt(a, b, c)\nprint('a =', a, end=', ')\nprint('b =', b, end=', ')\nprint('c =', c)",
      "solutionText": "a = 0, b = 5, c = 15",
      "explanation": "함수 안에서 x는 1부터 5까지 증가하고 z는 1+2+3+4+5=15가 됩니다. 호출한 곳의 a와 b는 바뀌지 않고 반환값을 받은 c만 15가 됩니다.",
      "tables": [],
      "language": "python",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    }
  ],
  [
    {
      "prompt": "현재 작업 디렉터리와 상대 경로를 보고 목적지의 절대 경로를 쓰세요.",
      "code": "현재 작업 디렉터리: /Users/admin/docs/report\n상대 경로: ./2080/summary",
      "solutionText": "/Users/admin/docs/report/2080/summary",
      "explanation": "./는 현재 디렉터리를 뜻합니다. 위치를 바꾸지 않고 2080/summary를 이어 붙입니다.",
      "tables": [],
      "language": "",
      "numbered": false,
      "restoration": {
        "kind": "추정 복원",
        "note": "경로의 왼쪽 일부가 잘려 있어 해설에 남은 Users/admin/docs/report 부분을 바탕으로 루트 /에서 시작하는 경로로 복원했습니다. 원문의 드라이브 표기 유무는 확인할 수 없습니다."
      }
    },
    {
      "prompt": "보기에서 ① 작업 디렉터리를 변경하는 명령어, ② 파일을 삭제하는 명령어를 순서대로 쓰세요.",
      "code": "보기: mkdir, ls, cat, who, chmod, cd, pwd, cp, rm, chown",
      "solutionText": "① cd\n② rm",
      "explanation": "cd는 현재 작업 디렉터리를 바꿉니다. rm은 파일을 삭제합니다. rmdir는 비어 있는 디렉터리를 삭제할 때 사용합니다.",
      "tables": [],
      "language": "",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "PRODUCT 테이블에서 카테고리가 전자기기인 모든 행을 삭제하는 SQL문을 작성하세요.",
      "code": "",
      "solutionText": "DELETE FROM PRODUCT WHERE 카테고리 = '전자기기';",
      "explanation": "DELETE FROM으로 행을 삭제하고 WHERE로 삭제 대상을 제한합니다. DROP TABLE은 테이블 자체를 삭제하므로 이 조건에 맞지 않습니다.",
      "tables": [],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 SQL의 결과를 상품코드 열을 가진 결과표로 작성하세요. 행 순서는 채점에 영향을 주지 않습니다.",
      "code": "SELECT 상품코드\nFROM 상품\nWHERE 구분코드 IN (\n    SELECT 구분코드 FROM 구분 WHERE 카테고리 = '가전제품'\n);",
      "solutionText": "상품코드\nP101\nP103",
      "explanation": "구분 테이블에서 가전제품에 해당하는 구분코드는 E11입니다. 상품 테이블에서 E11을 가진 P101과 P103이 조회됩니다.",
      "tables": [
        {
          "title": "상품",
          "headers": [
            "상품코드",
            "상품명",
            "구분코드"
          ],
          "rows": [
            [
              "P101",
              "냉장고",
              "E11"
            ],
            [
              "F102",
              "네임펜",
              "O22"
            ],
            [
              "P103",
              "세탁기",
              "E11"
            ],
            [
              "F104",
              "A4용지",
              "O22"
            ]
          ]
        },
        {
          "title": "구분",
          "headers": [
            "구분코드",
            "카테고리"
          ],
          "rows": [
            [
              "E11",
              "가전제품"
            ],
            [
              "O22",
              "사무용품"
            ]
          ]
        }
      ],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "Student에서 score가 80 이상 90 이하인 행의 grade를 B로 변경합니다. ①~③을 채우세요.",
      "code": "UPDATE Student (①) grade = 'B'\nWHERE score (②) 80 (③) 90;",
      "solutionText": "① SET\n② BETWEEN\n③ AND",
      "explanation": "UPDATE의 변경값은 SET으로 지정합니다. BETWEEN 80 AND 90은 양 끝값 80과 90을 모두 포함합니다.",
      "tables": [],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "사원과 부서 테이블에서 부서코드가 같은 행을 조인합니다. 두 번째 SQL의 빈칸에 들어갈 절 전체를 쓰세요.",
      "code": "-- 같은 의미의 기존 SQL\nSELECT 사원이름, 사원.부서코드, 부서명\nFROM 사원, 부서\nWHERE 사원.부서코드 = 부서.부서코드;\n\n-- JOIN을 사용한 SQL\nSELECT 사원이름, 사원.부서코드, 부서명\nFROM 사원 JOIN 부서\n(빈칸);",
      "solutionText": "ON 사원.부서코드 = 부서.부서코드",
      "explanation": "명시적인 JOIN에서는 ON 절에 두 테이블을 연결하는 조건을 씁니다. 부서코드는 두 테이블에 모두 있으므로 테이블 이름으로 구분합니다.",
      "tables": [],
      "language": "sql",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Java 프로그램의 출력 결과를 줄바꿈을 포함하여 쓰세요.",
      "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"가,나,다,라,,,사,아,자,,카,파\";\n        String[] splittest = str.split(\",\");\n        for (int i = 0; i < splittest.length; i++) {\n            System.out.print(splittest[i]);\n            if ((i + 1) % 3 == 0)\n                System.out.println();\n        }\n    }\n}",
      "solutionText": "가나다\n라\n사아자\n카파",
      "explanation": "중간의 연속 쉼표는 빈 문자열 원소를 만듭니다. 빈 문자열도 원소 개수에는 포함되므로 세 원소마다 줄바꿈할 때 두 번째 줄에는 라만 나타납니다.",
      "tables": [],
      "language": "java",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Java 프로그램의 출력 결과를 쓰세요.",
      "code": "interface testint {\n    void method1();\n    default void method2() {\n        System.out.print(\"I\");\n    }\n}\nclass testclass implements testint {\n    public void method1() {\n        System.out.print(\"C1\");\n    }\n    public void method2() {\n        System.out.print(\"C2\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        testint t1 = new testclass();\n        t1.method2();\n    }\n}",
      "solutionText": "C2",
      "explanation": "구현 클래스 testclass가 default 메서드 method2를 오버라이딩했으므로 실제 객체의 C2 구현이 실행됩니다.",
      "tables": [],
      "language": "java",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Java 프로그램의 출력 결과를 쓰세요.",
      "code": "public class Main {\n    public static void main(String[] args) {\n        int i = 17;\n        i++;\n        i -= 2;\n        i *= 3;\n        i /= 4;\n        i %= 5;\n        System.out.print(i);\n    }\n}",
      "solutionText": "2",
      "explanation": "i는 17 → 18 → 16 → 48 → 12 → 2로 변합니다. 마지막 나머지 연산 12%5의 결과는 2입니다.",
      "tables": [],
      "language": "java",
      "numbered": false,
      "restoration": {
        "kind": "추정 복원",
        "note": "잘린 연산문은 해설에 명시된 +1, -2, ×3, ÷4, 나머지 5 순서에 맞춰 복합 대입 연산자로 복원했습니다."
      }
    },
    {
      "prompt": "다음 Python 프로그램의 출력 결과를 쓰세요.",
      "code": "ary = [1, 9, 4, 8, 2]\nfor i in range(4):\n    for j in range(i + 1, 5):\n        if ary[i] > ary[j]:\n            ary[i], ary[j] = ary[j], ary[i]\nresult = []\nfor i in range(5):\n    result.append(ary[i])\nresult.reverse()\nprint(result[1] + result[3])",
      "solutionText": "10",
      "explanation": "정렬하면 [1,2,4,8,9], 뒤집으면 [9,8,4,2,1]입니다. 인덱스 1과 3의 값 8과 2를 더하여 10을 출력합니다.",
      "tables": [],
      "language": "python",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "출력 결과가 119가 되도록 ①, ②에 들어갈 Python 키워드를 순서대로 쓰세요.",
      "code": "a = 0\nss = 0\nwhile (①):\n    if ss > 100:\n        (②)\n    a += 1\n    ss += a\nprint(a + ss)",
      "solutionText": "① True\n② break",
      "explanation": "무한 반복은 True로, 반복 종료는 break로 표현합니다. 1부터 14까지의 합은 105이므로 다음 반복에서 종료되고 a+ss=14+105=119가 됩니다.",
      "tables": [],
      "language": "python",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    },
    {
      "prompt": "다음 Python 프로그램의 출력 결과를 쓰세요.",
      "code": "a = [[1, 1, 0, 1, 0],\n     [1, 0, 1, 0]]\ntot = sum(map(sum, a))\ntotsu = sum(map(len, a))\nprint(totsu, tot)",
      "solutionText": "9 5",
      "explanation": "두 내부 리스트 길이의 합은 5+4=9이고, 원소 합은 3+2=5입니다. print는 두 값을 공백으로 구분합니다.",
      "tables": [],
      "language": "python",
      "numbered": false,
      "restoration": {
        "kind": "문제·해설 대조",
        "note": "남아 있는 문제와 해설을 대조하여 문장·코드·표를 웹페이지로 재구성했습니다."
      }
    }
  ]
];
window.practicalMockExams.forEach((exam, r) => {
  exam.questions.forEach((question, q) => Object.assign(question, window.practicalRestoredContent[r][q]));
});
// PDF 2회 7번은 5 + (-1) + 9 = 13. 원문 정답 4의 오류를 바로잡습니다.
window.practicalMockExams[1].questions[6].answers = ['getNumericValue 13'];
window.practicalMockSource = '첨부 PDF 모의고사 1~4회의 문제·해설을 대조하여 텍스트·코드·표로 복원했습니다. 추정 복원과 원문 오류 보정은 각 문항에 표시하며, 원본 스캔은 대조용으로 보존합니다.';
