/** 투두리스트 만들기 */
// 추가 ) 할일 값을 받아와서 ul의 li로 출력하기
// 완료 ) 할일 완료(체크) 시, 완료 표시
// 삭제 ) 할일을 삭제

// 할일 입력창에 값을 입력하고 submit을 했을때 (이벤트)
// 작성한 할일을 ul에 li로 추가 (실행할 함수)
const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", todoAdd);

// 투두를 추가하는 함수
function todoAdd(event){
    // submit >> 새로고침 막아야 함
    event.preventDefault();

    // input 태그의 값을 가져와서 ul의 list로 추가하기
    // todoForm.firstElementChild는 input type text 내용만 들고옴
    const todoValue = todoForm.firstElementChild.value;

    // li 태그 생성 > ul 태그 찾아서 추가
    const li = document.createElement("li");

    // li 태그에 추가할 내용 : 체크박스, TODO 입력 - Text Node, X 버튼
    // 체크 박스 생성
    const check = document.createElement("input");
    check.type = "checkbox";
    // todoValue 값 들고와 텍스트 생성
    const text = document.createTextNode(todoValue);
    // 버튼 생성
    const button = document.createElement("button");
    button.innerHTML = "X";
    // 시간을 추가하기 위한 span 태그
    const time = document.createElement("span");
    // 다른 JS에서 작성한 함수를 가져와 쓸 수 있다.
    time.innerHTML = getClock();

    // li 태그에 생성한 태그 추가
    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(time); // 작성 시간 추가
    li.appendChild(button);

    // ul 태그에 생성한 li 태그 출력
    document.querySelector("#todolist").appendChild(li);
    
    // 추가 후 input의 value값을 ""으로 바꿈
    todoForm.firstElementChild.value="";


    // 체크박스 완료 - 클릭 이벤트 만들기
    // 함수 안에 체크박스 선언했기에 여기서 선언 > 호출할 함수는 밖에 선언 가능
    check.addEventListener("click", todoCheck);
    // 버튼 click 이벤트 - li 삭제
    button.addEventListener("click", todoDelete);
}

// todoCheck 체크박스 완료 click 이벤트 함수
function todoCheck(event){
    console.log(event.target.checked);
    // 이벤트 객체를 통해서
    // 이벤트가 실행된 태그 찾아서 값 사용
    const check = event.target;
    const li = check.parentNode;
    if(check.checked){
        li.style.color = "lightgray";
        li.style.textDecoration = "line-through";
        li.style.fontStyle = "italic";
    }
    else{
        li.style.color = "";
        li.style.textDecoration = "none";
        li.style.fontStyle = "normal";
    }
}

// 버튼에 클릭 이벤트를 추가해서
// 선택된 li가 삭제되는 함수
function todoDelete(event){
    event.target.parentNode.remove();
}