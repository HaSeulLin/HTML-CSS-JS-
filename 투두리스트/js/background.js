/* body의 이미지가 새로고침 할때마다 바뀜 */
// : body를 새로 부를 때마다 바뀜 --> JS도 새로 호출되니 자동
// 1) 이미지가 여러장
// 2) 이미지는 랜덤으로 바뀜
// 랜덤) Math.random() 정수값 사용 위해 > 원하는 횟수 곱함 + 소수점 삭제

const body = document.querySelector("body");

// 랜덤한 문자열을 사용하기 위해 배열 이용
// 배열의 인덱스를 랜덤
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];

// 랜덤한 숫자값 0~images.length까지 생성
const randomIndex = Math.floor(Math.random()*images.length);

body.style.backgroundImage = `url(./img/${images[randomIndex]})`;
body.style.backgroundSize = "cover";