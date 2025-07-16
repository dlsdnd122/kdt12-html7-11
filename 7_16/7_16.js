// // 전역 스코프
// let a = 10;
// function sum() {
//     console.log('함수 내부 : ' + a);
// }
//
// sum();
// console.log('함수 외부 : ' + a);
//
// // 블록 스코프
// if (true) {
//     let y = 20;
//     console.log(y);
// }
// console.log(y);
//

// // 함수 스코프
// function example() {
//     var local = "함수 내부 변수";
//     console.log(local);
// }
// example();

// // 3인 BMI 계산 실습
// function bmiCaculator(name, height, weight) {
//     let heightMeter = height * 0.01
//     let bmi = weight/(heightMeter * heightMeter);
//     if (bmi < 18.5) {
//         console.log(name + '님의 bmi 수치는' + bmi.toFixed(1) + '이고 저체중입니다.')
//     } else if (bmi >= 18.5 && bmi <= 22.9 ) {
//         console.log(name + '님의 bmi 수치는' + bmi.toFixed(1) + '이고 정상입니다.')
//     } else if (bmi >= 23 && bmi <= 24.9) {
//         console.log(name + '님의 bmi 수치는' + bmi.toFixed(1) + '이고 과체중입니다.')
//     } else if (bmi >= 25) {
//         console.log(name + '님의 bmi 수치는' + bmi.toFixed(1) + '이고 비만입니다. 살좀 빼세요.')
//     } else {
//         console.log("정확한 값을 입력해주세요.")
//     }
// }
// bmiCaculator('황정동', 175, 78);
// bmiCaculator('김철수', 182, 92);
// bmiCaculator('이영희', 160, 55);

// // 개발자 도구에서 window 객체 속성 확인하기
// console.log('브라우저의 너비 : ' + window.innerWidth);
// console.log('브라우저의 높이 : ' + window.innerHeight);
// console.log('모니터의 높이 : ' + window.screen.height);
// console.log('브라우저 창의 상단 위치 : ' + window.screenY);
// console.log('브라우저 창의 좌측 위치 : ' + window.screenX);
// console.log('스크롤 수직 위치 : ' + window.pageYOffset);
// console.log('스크롤 수평 위치 : ' + window.pageXOffset)

// // 개발자 도구에서 alert() 사용
// let userName = "정인웅"
// alert(`환영합니다, ${userName} 님!`);

// // 웹 브라우저의 스크롤 이동 제어하기
// window.scrollTo(100, 200);
// // x축으로 100px, y축으로 200px 위치로 이동
// window.scrollTo({left:100, top: 200});
// // 객체를 이용한 동일한 이동
// window.scrollBy(100,200);
// // 현재 위치에서 x축으로 100px, y축으로 200px 더 이동
// window.scrollBy({left : 100, top: 200});
// // 객체를 이용한 상대적 이동

// // window.setTimeout() 메서드
// setTimeout(function () {
//     alert("3초가 지났습니다.");
// }, 3000);
//
// setTimeout(() => {
//     console.log('2초 후 실행');
// }, 2000);
//
// setTimeout(function (name) {
//     console.log(`안녕하세요, ${name}님!`);
// }, 1000, '홍길동');

// window.setlnterval() 메서드
// 반복 실행 함수
// const intervalID = setInterval(function () {
//     console.log('3초마다 실행!');
// }, 3000);

// // window.clearinterval() 메서드
// let count = 0;
// const timer = setInterval(function () {
//     count++;
//     console.log(count + '초 경과');
//
//     if (count >= 5) {
//         clearInterval(timer); //5초 후 타이머 중지
//         console.log('타이머 종료!');
//     }
// }, 1000);

// // DOM 노드 선택하기 기본개념과 get 메서드
// // script 태그 위에다가 태그를 만들어서 넣어야 한다. 그렇지 않으면 null값 반환한다.
// const element =document.getElementById('title');
// console.log(element);
// class가 text인 모든 요소 선택
// const classE1 = document.getElementsByClassName('text');
// console.log(classE1);
// // 모든 p 태그 선택
// const tagEls = document.getElementsByTagName('p');
// console.log(tagEls);

// // CSS 선택자 사용하기
// console.log(document.querySelector(".box-1"));
// // 박스와 텍스트 사이에 공백을 넣어줘야 한다.
// console.log(document.querySelectorAll(".box-1 .text"));

// // 노드 콘텐츠 조작하기
// const paragraph =
//     document.getElementById("myParagraph");
// console.log(paragraph.textContent);
// // Hello, JavaScript!
// console.log(paragraph.innerText);   // Hello,
// console.log(paragraph.innerHTML);   // Hello, <span....
// // 택스트 변경하기
// paragraph.textContent = "<b>안녕하세요!</b>";
// console.log(paragraph.textContent);
// paragraph.innerText = "<b>안녕하세요!</b>";
// console.log(paragraph.textContent);
// paragraph.innerHTML = "<b>안녕하세요!</b>";
// console.log(paragraph.textContent)

// // 스타일 조작하기 기본 개념
// // JavaScript로 스타일 변경
// const pE1 = document.querySelector("p");
// // 텍스트 색상 변경
// pE1.style.color = "red";
// // 배경색 및 글자색 동시 변경
// pE1.style.backgroundColor = "#ff0000";
// pE1.style.color = "#ffffff";
// // 여러 스타일 한번에 변경
// pE1.style.color = "blue";
// pE1.style.fontWeight = "bold";
// pE1.style.fontSize = "24px";

// // 데이터 속성 조작하기
// // 데이터 속성 값 가져오기
// const buttons = document.querySelectorAll("button");
// buttons.forEach(e1 => {
//     console.log(e1.dataset.cnt);
// });

// // 데이터 속성을 활용한 동적 ui 변경
// document.querySelectorAll("li").forEach(
//     item =>
//     {item.addEventListener(
//         "click", function (){
//         document.body.style.backgroundColor = this.dataset.color;
//     });
//     });

// // 메스드로 속성 조작하기
// // 요소 선택
// const link = document.querySelector("a");
// // href 속성 값 가져오기
// const originalHref = link.getAttribute("href");
// console.log(originalHref); // 출력
// // href 속성 값 변경
// link.setAttribute("href", "https://www.google.com");
// // href 속성 삭제
// link.removeAttribute("href");

// // 폼 조작하기
// const firstForm = document.forms[0];
// console.log(firstForm);
// const secondForm = document.login; // name으로 접근
// console.log(secondForm);
// const thirdForm = document.forms['login'];   // 문자열로 접근
// console.log(thirdForm);
// const fourthForm = document.getElementById('loginForm'); // id로 접근
// console.log(fourthForm);

// //element 속성
// // 인덱스로 접근 - 첫 번째 요소 (uname)
// console.log(document.frm1.elements[0]);
//
// //네임으로 접근
// console.log(document.frm1.elements['uname']);
// console.log(document.frm1.elements['age']);
// console.log(document.frm1.elements['gender']);
//
// // name으로 직접 접근
// console.log(document.frm1.uname); // uname input요소
// console.log(document.frm1.age); // age input요소
// console.log(document.frm1.gender); // gender input요소

// // 폼 요소의 입력값 다루기
// // 입력값 가져오기
// console.log(document.frm.id.value);
// console.log(document.frm.pw.value);
// // 값 설정하기
// document.frm.id.value = '오오오오';
// document.frm.pw.value = '우우우우';
// console.log(document.frm.id.value);
// console.log(document.frm.id.value);

// textarea 다루기
// document.getElementById("myTextArea").value = "설정된 값";

// 라디오 버튼 다루기
const form = document.getElementById('fruitForm');
// 특정 html 요소(여기서는 form)에 이벤트 핸들러(이벤트가 발생했을 때 실행할 함수)를 등록하는 메서드
form.addEventListener('submit', function (e) {
    // 브라우저의 기본 이벤트 동작을 막아주는 함수
    // <form>요소에서 submit 버튼을 클릭하면 자동으로 페이지가 새로고침되면서 폼 데이터를 서버로 전송한다.
    e.preventDefault(); // 폼 제출로 인한 새로고침 방지

    // input : <input> 태그를 의미
    // [name="fruits"] : name 속성이 "fruits"인 요소를 찾으라는 뜻
    // :checked : 체크된 상태(사용자가 선택한 상태)인 요소를 의미
    const selected = document.querySelector('input[name="fruits"]:checked');
    if (selected) {
        console.log("선택한 과일 : ", selected.value);
    } else {
        console.log("선택한 과일이 없습니다.");
    }
})




