function addText() {
  // input 태그에 입력된 문자열에 접근
  const textBox = document.getElementById('textBox');
  const inputValue = textBox.value;

  // 입력값이 공백인 경우 함수를 실행하지 않음
  if (inputValue.trim() === "") {
    return;
  }

  // 이하 코드는 입력값이 공백이 아닐 때만 실행됨

  // li 태그 생성
  const li = document.createElement("li");

  // span 요소 생성 및 클래스 지정
  const spanProfile = document.createElement("span");
  spanProfile.classList.add("profile");

  const spanText = document.createElement("span");
  spanText.classList.add("text");
  spanText.textContent = inputValue; // 입력된 문자열을 spanText에 설정

  const spanTimeStamp = document.createElement("span");
  spanTimeStamp.classList.add("timeStamp");

  // 생성된 span 요소들을 li에 추가
  li.appendChild(spanProfile);
  li.appendChild(spanText);
  li.appendChild(spanTimeStamp);

  // 생성된 li를 ul(Container)에 추가
  document.getElementById("Container").appendChild(li);

  // 입력창 비우기
  textBox.value = '';
}
