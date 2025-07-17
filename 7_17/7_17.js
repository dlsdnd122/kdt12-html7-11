// // 파일 업로드 다루기
// // FileList 객체 접근하기
// const filesObj = document.frm.upload.files;
// console.log(filesObj)
// // 파일 선택 시 이벤트 처리
// const input = document.forms.frm.upload;
// input.addEventListener('change',() => {
//     const files = input.files;
//
//     // 선택한 파일의 정보 출력
//     console.log(files[0].name); // 파일명
//     console.log(files[0].size); // 파일 크기(바이트)
//     console.log(files[0].type); // MIME 타입
//     console.log(files[0].lastModifiedDate); // 수정일
// });


// // 이벤트 다루기
// // 이벤트 등록
// function clickEvent() {
//     alert("버튼이 클릭되었습니다.");
// }


// // 프로퍼티 리스너 방식으로 이벤트 등록하기
// const btnE1 = document.querySelector("button");
// btnE1.onclick = function () {
//     alert('click!')
// }


// // 이벤트 등록 메서드를 이용한 이벤트 등록하기
// // const btnE1 = document.querySelector("button");
// // btnE1.addEventListener("click", function () {
// //     alert("click")
// // });
// // 첫 번째 클릭 이벤트 핸들러
// const btnE1 = document.querySelector("button");
// btnE1.addEventListener("click", function () {
//     console.log("첫 번째 핸들러 : 버튼이 클릭됨!");
// });
// // 마우스오버 이벤트 핸들러
// btnE1.addEventListener("mouseover", function () {
//     console.log("마우스가 버튼 위에 위치함")
// });


// 이벤트 객체와 this
// 아래 코드에서 event 객체는 버튼이 클릭되었을 때 발생한 이벤트에 대한 모든 정보를 담고 있다.
// const btnE1 = document.querySelector("button");
// btnE1.addEventListener("click", function (event) {
//     console.log(event);
//     // 이벤트 객체 정보 출력
// });
// // this 사용 예제
// const btnE1 = document.querySelector("button");
// btnE1.addEventListener("click", function (event) {
//     console.log(this); // 버튼 요소를 카리킴
//     console.log(event.target); // 버튼 요소를 가리킴
// });
// // 화살표 함수는 상위스코프의 this를 가리킨다.
// btnE1.addEventListener("click", (event) => {
//     console.log(this); // 상위 스코프의 this
//     console.log(event.target); // 버튼 요소를 가리킴
// });


// // this 키워드 활용 예제
// // Enter 키 입력 감지 예제
// document.getElementById("messageInput").addEventListener("keydown", function(event) {
//     if (event.key === "Enter") { // Enter 키가 눌렸는지 확인
//         document.getElementById("messageOutput").textContent = `입력된 메시지: ${ this .value}`;
//         this .value = ""; // 입력창 초기화
//     }
// });

// 동기와 비동기 개념 이해하기
// 콜백 함수 방식
// 콜백 함수를 이용한 비동기 처리
// function fetchData(callback) {
//     // 데이터를 가져오는 비동기 작업
//     setTimeout(() => {
//         const data = '데이터';
//         callback(data); // 데이터를 콜백으로 전달
//     }, 1000);
// }
// fetchData(function (result) {
//     console.log(result);    // 데이터 출력
// })
// // 콜백함수 간단한 예제
// function greet(name, callback) {
//     console.log(`안녕하세요, ${name}`);
//     callback(); // 콜백 함수를 여기서 호출한다.
// }
// // afterGreeting 함수 정의
// function afterGreeting() {
//     console.log("방문해주셔서 감사합니다!");
// }
// // greet 함수 호출 시 afterGreeting을 콜백으로 전달
// greet("지민", afterGreeting);

// //Promise 방식
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = '데이터';
//             resolve(data);
//         }, 1000);
//     });
// }
// fetchData()
//     .then(result => console.log(result))
//     .catch(error => console.error(error));


// // async/await 방식
// async function fetchDataAndProcess() {
//     try {
//         const result = await fetchData();   // promise를 반환하는 함수
//         console.log(result);    // '데이터' 출력
//     } catch (error) {
//         console.error(error);
//     }
// }
// fetchDataAndProcess();

// // async/await 방식 예제
// function fetchData() {
//     return new Promise((resolve) => {
//         // setTimeout은 3초 뒤에 콜백 함수를 실행하도록 예약하는 비동기 API
//         // 자바 스크립트 엔진이 setTimeout을 호출한 즉시 다음 코드로 넘어가고, 3초 후에야 콜백이 실행
//         setTimeout(() =>
//         resolve("데이터 받음 - async/await"));
//     }, 3000);
// }
// async function run() {
//     console.log("요청 보냄 - async/await");
//     // await fetchData()는 fetchData()가 반환하는 Promise가 해결(resolve)될 때까지 기다림
//     const result = await fetchData();
//     console.log(result); // 3초 후 출력됨
// }
// run();
// // 3초 대기 중에 이런 코드도 실행 가능
// console.log("이 코드는 3초 대기하는 동안 즉시 실행됩니다!")

// Ajax 기본 사용법
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
// method : HTTP 요청 메서드 (GET, POST 등)
// url : 요청할 url 주소
// async : 비동기 여부 (true : 비동기. false : 동기)
xhr.onload = function () {
    if (xhr.status === 200) {
        // 요청이 성공적으로 완료된 경우
        console.log(xhr.responseText); // 응답 데이터
    } else {
        // 요청이 실패한 경우
        console.error('Error : ', xhr.status);
    }
};

xhr.onerror = function () {
    //네트워크 에러 발생한 경우
    console.error('Network Error');
};

xhr.send();



