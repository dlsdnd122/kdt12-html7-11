const greenBox = document.getElementById("box");
    const move = 10;
    let x = 225;
    let y = 225;

    //초기위치 적용
    greenBox.style.left = x+"px";
    greenBox.style.top = y+"px";

    document.addEventListener("keydown", function (event){
    // 이동 조건문
     if (event.key === "ArrowUp") {
         y = y-move;
    } else if (event.key === "ArrowDown") {
         y = y+move;
    } else if (event.key === "ArrowLeft") {
         x = x-move;
    } else if (event.key === "ArrowRight") {
         x = x+move;
    }
    // 위치 적용
    greenBox.style.left = x+"px";
    greenBox.style.top = y+"px";
    event.preventDefault(); // 페이지 스크롤 X
});
