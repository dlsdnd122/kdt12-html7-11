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


// this 키워드 활용 예제
// Enter 키 입력 감지 예제
document.getElementById("messageInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Enter 키가 눌렸는지 확인
        document.getElementById("messageOutput").textContent = `입력된 메시지: ${ this .value}`;
        this .value = ""; // 입력창 초기화
    }
});
















