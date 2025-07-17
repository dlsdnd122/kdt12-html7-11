// DOM 요소 가져오기
const adviceText = document.getElementById('advice-text');
const adviceButton = document.getElementById('advice-button');

// 서버에서 조언 가져오는 함수
function fetchAdvice() {
    // AJAX 요청 생성
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.adviceslip.com/advice', true);

    // 요청 완료 이벤트 처리
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const advice = response.slip.advice;
            adviceText.textContent = advice;
        } else {
            adviceText.textContent = '조언을 가져오지 못했습니다...! ; .'
        }
    };

    // 요청 전송
    xhr.send();
}

// 새로운 조언 가져오기 버튼 클릭 이벤트 핸들러
adviceButton.addEventListener('click', function () {
    fetchAdvice();
})