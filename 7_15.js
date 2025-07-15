// var num = 10;
// var num = 50;
// console.log(num);
//
// let num = 10;
// let num = 50;
// console.log(num);

// const PI = 3.14;
// // const PI = 3.14159592; //오류 : 재선언 불가
// // PI = 3.14159592; // 오류 : 재할당 불가
// const person = {name:'홍길동'};
// person.name = '김철수'; // 객체 내부 속성은 변경 가능
// console.log(PI);
// console.log(person.name);

// let string1 = "Hello, World!";
// let string2 = 'Hello, World!';
// console.log(string1);
// console.log(string2);

// let string = "문자열 안에 \"큰따옴표\"를 넣고 싶을 때";
// console.log(string);
//
// let name = "홍길동";
// let greeting =`안녕하세요, ${name}!`;
// console.log(greeting);
//

// // 나만의 변수 만들기
//
// // 변수 기본 만들기 : let으로 선언
// let name = '정인웅';
// let age = 26;
//
// // 변경 불가능한 상수 : const로 선언
// const birthYear = 2000;
// const PI = 3.1459;
//
// // 변수로 계산하기
// const currentYear = 2025;
// let myAge = currentYear - birthYear + 1;
//
// // 콘솔에 출력하기
// console.log('이름 : ', name);
// console.log('나이 : ', age);
// console.log('태어난 연도 : ', birthYear)

// 논리형 연산

// let boolean1 = true;
// let boolean2 = false;
// console.log(boolean1);
// console.log(boolean2);
// let boolean3 = 1 < 2;
// let boolean4 = 1 > 2;
// console.log(boolean3);
// console.log(boolean4);

// undefined와 Null의 차이점

// let test;
// console.log(test);
// function noReturn(){
// }
// console.log(noReturn());
// let user = null;
// console.log(user)
//
// function findUser(id){
//     if (id === "admin") {
//         return{name : "관리자"};
//     }
//     return null;
// }
// console.log(findUser());

// // 객체 - 기본 자료형 외 모든 값
//
// // 배열 - 인덱스와 데이터 관리
// // 배열은 여러 데이터를 하나의 변수에 저장할 수 있는 자료형이다.
// // 개별 변수를 여러 개 만드는 대신, 하나의 배열로 데이터를 효율적으로 관리할 수 있다.
// let score = [10,20,30,40];
// //인덱스로 접근하기
// console.log(score[0]);
// console.log(score[1]);
// console.log(score[2]);
// console.log(score[3]);

// // 객체 리터럴 - 키-값 쌍과 접근 방법
//
// let score = {korean : 100, english : 90, math : 100, science : 100};
// console.log(score.korean);  // 점 표기법
// console.log(score.english);
// console.log(score['math']); // 대괄호 표기법
// console.log(score.science);

// 연산자란
// 산술 연산자
// 이항 산술 연산자는 두 개의 피연산자를 대상으로 수학적 연산을 수행한다.

// var num = 10;
// var result1 = num + 5;
// var result2 = num - 3;
// var result3 = num * 2;
// var result4 = num / 4;
// var result5 = num % 3;
// var result6 = num ** 2;
//
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);

// // 단항 산술 연산자
// // 하나의 피연산자를 대상으로 연산하는 연산자이다.
//
// var num = 10;
// // 전치 연산 : 먼저 num의 값을 1 증가시키고, 그 다음에 그 값을 사용한다.
// var result1 = ++num; // 11, 11
// // 후치 연산 : 먼저 num의 값을 사용하고, 그 다음에 1 감소 시킨다.
// var result2 = num--; // 11, 10
// // 부호 변환 연산자
// console.log(result1);
// console.log(result2);
// var num = 10;
// console.log(num);
// num = -num; // -10
// console.log(num);
// num = -num; // 10
// console.log(num);

// // 대입 연산자
// // 기본 대입 연산자 (=) : 우변의 값을 좌변의 변수에 할당한다
// // 복합 대입 연산자 : 연산과 대입을 동시에 수행하는 축약형 연산자
// let x = 10;
// x += 5; // x = x + 5와 같음
// let y = 20;
// y-= 8;  // y = y-8과 같음
// let z = 5;
// z *= 4; // z = z*4와 같음
// console.log(x);
// console.log(y);
// console.log(z);

// 자료형에 따른 복합 대입 연산자의 결과
// a와 b의 자료형이 다르면 예기치 못한 결과가 나올 수 잇다.

// // 비교 연산자
// var a = 1 == 1; // a = true
// var b = 1 > 2; // b = false
// var c = 10 == '10' // c = true (자료형이 달라도 값이 같으면 true)
// var d = 10 ==='10' // d = false (값이 같아도 자료형이 다르면 false)
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// // 논리 연산자 & 삼항 연산자
// let x = 10;
// let y = 5;
// // and 연산자
// if (x > 5 && y < 10) {
//     console.log("두 조건 모두 참");
// }
// // OR 연산자
// if (x ===10 || y ===10) {
//     console.log("x 또는 y 중 하나가 10 입니다.");
// }
// // NOT 연산자
// let isTrue = true;
// console.log(!isTrue);   // False
// // 삼항 연산자
// let result = (x > y) ?
//     "x가 더 큽니다." :
//     "y가 더 크거나 같습니다.";
// console.log(result);

// // 형 변환
// // 암시적 형 변환
// let num1 = 10;
// let num2 = 5;
// result1 = num1 + "10";
// console.log(result1);
// result2 = "10" - num2;
// console.log(result2);
// if ("hello") {
//     console.log("실행됨")
// }
// // 명시적 형 변환
// var num = "10";
// var num = Number("10");
// console.log(typeof num);

// // 연산자 우선순위
// let result1 = 10 + 5 * 2;
// console.log(result1);
// let result2 = (10 + 5) * 2;
// console.log(result2)

// 조건문
// let num = -100;
// if (num > 0) {
//     console.log("양수 입니다.");
// } else if (num < 0) {
//     console.log("음수 입니다.")
// } else {
//     console.log("0 입니다.")
// }

// // 심화 조건문
// // 0: false로 평가
// // NaN : false로 평가
// // 그 외의 모든 숫자 : true로 평가
// if (0) {
//     console.log("0은 true 입니다.");
// }
// if (NaN) {
//     console.log("NaN은 true 입니다.");
// }
// if (10) {
//     console.log("10은 true 입니다.");
// }

// // 심화 조건문 문자열
// // 빈 문자열 ("") : false로 평가
// // 공백만 있는 문자열 (" ") : true로 평가
// // 그 외의 모든 문자열 : true로 평가
// if ("") {
//     console.log("빈 문자열은 true입니다..");
// }
// if (" ") {
//     console.log("공백 문자열은 true입니다..");
// }
// if ("hello") {
//     console.log("hello 문자열은 true입니다..");
// }

// // 심화 조건문 undefined, null
// // undefined : false로 평가
// // null : false로 평가
// let x;
// if (x) {
//     console.log("x는 true입니다.");
// }
// let y = null;
// if (y) {
//     console.log("y는 null입니다.");
// }

// // 심화 조건문 Boolean 값, 객체(빈 객체 포함)
// // Boolean 값은 true/false
// // 객체는 true
// let isTrue = true;
// let isFalse = false;
// if (isTrue) {
//     console.log("isTrue는 true입니다.");
// }
// if (isFalse) {
//     console.log("isFalse는 False입니다.");
// }
// let obj = {};
// if (obj) {
//     console.log("obj는 true입니다.");
// }

// // switch문 기본 구조
// let food = "melon";
// switch (food) {
//     case "melon" :
//         console.log("fruit");
//         break;
//     case "apple" :
//         console.log("fruit");
//         break;
//     case "banana" :
//         console.log("fruit");
//         break;
//     case "carrot" :
//         console.log("vegetable");
//         break;
//     default:
//         console.log("It's not fruits and vegetables.");
//         break;
// }

// // switch문 -1
// let Language = "japanese";
// switch (Language) {
//     case "english" :
//         console.log("Hello~");
//         break;
//     case "french" :
//         console.log("Salut~");
//         break;
//     case "spanish" :
//         console.log("Hola~");
//         break;
//     case "japanese" :
//         console.log("こんにちは");
//         break;
//     default:
//         console.log("인식할수없는 언어입니다.");
//         break;
// }

// // 배열
// // 배열 생성과 초기화
// var numbers = [1,2,3,4,5];
// // 배열 요소 접근
// console.log(numbers[0]);
// // 배열 메서드 사용
// numbers.push(6); // 배열 끝에 요소 추가
// console.log(numbers);
// numbers.pop(); // 배열 끝 요소 제거
// console.log(numbers);
// numbers.length; // 배열의 길이 반환
// console.log(numbers.length);

// // 반복문
// let i = 1;
// while (i <= 5 ) {
//     console.log(i);
//     i++;
// }
// console.log(i);

// // do...while문
// let count = 0;
// do {
//     console.log("현재 카운트 : " + count);
//     count++;
// } while (count < 3);

// // for문
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// let arr = ['banana', 'apple', 'orange'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // for...in문
// 객체 순회할때 사용
// const person = {
//     name : "홍길동",
//     age : 20,
//     job : "개발자"
// }
// for (const key in person) {
//     console.log(key, "->", person[key])
// }

// // for...of문
// // 배열 순회할때 사용
// let arr = ["orange", "banana", "apple"];
// for (let fruit of arr) {
//     console.log(fruit);
// }

// // break와 continue
// for (let i = 0; i <10; i++) {
//     console.log(i);
//     if (i ===5) {
//         break;
//     }
// }
// for (let i = 1; i <=10; i++) {
//     if (i%2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// // 함수 선언문
// function printGugudan(dan) {
//     for (let i = 1; i <= 9; i++) {
//         console.log(`${dan} X ` + i + ' = ' + (dan*i) );
//     }
// }
// printGugudan(3);

// // return문
// function sum(num1,num2) {
//     return num1 + num2;
// }
// const result = sum(10,10);
// console.log(result);
//
// function greet(name) {
//     if (!name) {
//         return "이름을 입력해주세요"
//     }
//     return `안녕하세요, ${name}님!`;
//
//     console.log("함수 종료");
//     // return 뒤에 잇으므로 실행되지 않는다.
// }
// console.log(greet('정인웅'));

// // 함수 표현식 사용법
// const hello = function () {
//     for (let i = 1; i <=9; i++) {
//         console.log('3 * ' + i + ' = ' + (3*i))
//     }
// };
// hello();

// // 화살표 함수
// const gugudan = (dan) => {
//     for (let i = 1; i <=9; i++) {
//         console.log(`${dan} * ${i} = ${dan * i}`);
//     }
// };
// gugudan(3);

// // return 문과 조건 분기
// function checkNumber(num) {
//     if (num > 0) {
//         return '양수';
//     } else if (num < 0) {
//         return '음수';
//     } else {
//         return 0;
//     }
// }
// const result = checkNumber(-5);
// console.log(result);

// 즉시 실행 함수
// 기본 형태
(function() {
    console.log("즉시 실행됩니다!")
})();
// 매개변수 사용
(function (name) {
    console.log("안녕하세요, " + name + "님!");
})("홍길동");
