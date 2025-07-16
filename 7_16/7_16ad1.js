// 3인 BMI 계산 실습
function bmiCaculator(name, height, weight) {
    heightMeter = height * 0.01
    bmi = weight/(heightMeter * heightMeter);
    if (bmi < 18.5) {
        console.log('저체중입니다.')
    } else if (bmi >= 18.5 && bmi <= 22.9 ) {
        console.log("정상입니다.")
    } else if (bmi >= 23 && bmi <= 24.9) {
        console.log("과체중입니다.")
    } else if (bmi >= 25) {
        console.log("비만입니다. 살좀 빼세요")
    } else {
        console.log("정확한 값을 입력해주세요.")
    }
}
bmiCaculator('황정동', 175, 78);
bmiCaculator('김철수', 182, 92);
bmiCaculator('이영희', 160, 55);
