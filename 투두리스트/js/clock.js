// 현재 시간을 1초마다 다시 화면에 출력
// 현재 시간: Date() - 시간을 가져오는 객체
// 현재 시간은 고정값임
// 그 값을 1초마다 새로 받아 온다 >> new Date() 값을 새로 할당
// >> 타이머 함수인 interval

// clock 변수 가져와서 출력 확인
const clock = document.querySelector("#clock");
clock.innerHTML = "10:50:40";

// date() 함수 만들기 >> 타이머 함수의 콜백함수로 사용하기 위해 함수 작성
function getClock(){
    // date() 입력
    let date = new Date(); // 현재 시간을 가져옴

    // 시분초 00 두 자리수로 고정되게 나오기 (한자리수일 시 한자리만 나옴)
    // >> padStart(나오게할 최대 자릿수,"빈자리 넣을 수")
    // padStart는 문자열에만 사용 가능 >> String으로 변환
    let hour = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    // return을 통해서 시간을 문자열로 돌려줄 수 있다
    // return값을 이용해서 clock.innerHTML = getClock();
    return `${hour}:${minutes}:${seconds}`;
}


// 타이머 함수로 1초마다 시간을 받아옴
setInterval(function(){
    // clock에 현재 시간 출력
    clock.innerHTML = getClock();
},1000); // 1초마다 function 실행
// 타이머 시작 시 1초 딜레이 있음 > 시작하자마자 시간 나오게 하기
getClock();

