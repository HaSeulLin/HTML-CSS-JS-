/* 버튼을 눌렀을 때 환영인사 출력 */
/* form의 submit을 눌렀을 때 input 값을 h1 태그에 할당 */

// id를 통해서 직접 접근
// submit을 눌렀을 때 이벤트(submit: form) 발생
// input의 값이 h1 태그에 할당 (실행할 함수)
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit",onLogin);

// 로그인 함수
function onLogin(e){
    // submit 이벤트는 새로고침이 들어가 있다
    e.preventDefault();
    
    // 값을 들고올 input 태그 가져옴 - value
    const loginId = document.querySelector("#login-id");
    // 값을 넣어줄 h1 태그 가져옴
    const greeting = document.querySelector("#greeting");
    greeting.innerHTML = `환영합니다 ${loginId.value}님`;

    // 화면에 글자를 보여주기 위해 hidden class 제거
    greeting.classList.remove("hidden");
    document.querySelector("#todo-form").classList.remove("hidden");
    document.querySelector("#todolist").classList.remove("hidden");
    
    // 로그인 창을 보이지 않게 하기 위해 class 추가
    loginForm.classList.add("hidden");
}