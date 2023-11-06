function addText() {
  const textBox = document.getElementById('textBox');
  const inputValue = textBox.value.trim();

  if (inputValue === "") {
    return;
  }

  // li 태그 생성
  const li = document.createElement("li");
  li.classList.add("message");

  // span 요소 생성 및 클래스 지정
  const spanProfile = document.createElement("span");
  spanProfile.classList.add("profile");
  spanProfile.textContent = "user";

  const spanText = document.createElement("span");
  spanText.classList.add("text");
  spanText.textContent = `${inputValue}`;

  const spanTimeStamp = document.createElement("span");
  spanTimeStamp.classList.add("timeStamp");
  const currentTime = new Date().toLocaleTimeString();
  spanTimeStamp.textContent = currentTime;

  // 생성된 span 요소들을 li에 추가
  li.appendChild(spanProfile);
  li.appendChild(spanText);
  li.appendChild(spanTimeStamp);

  // 생성된 li를 ul(Container)에 추가
  document.getElementById("Container").appendChild(li);

  // Assistant의 응답 생성
  const assistantResponse = document.createElement("span");
  assistantResponse.classList.add("text");
  assistantResponse.textContent = "제 생각에 " + inputValue + "에 대한 내용은...";
  
  const assistantLi = document.createElement("li");
  assistantLi.classList.add("message");
  const assistantSpanProfile = document.createElement("span");
  assistantSpanProfile.classList.add("profile");
  assistantSpanProfile.textContent = "assistant";
  const assistantSpanTimeStamp = document.createElement("span");
  assistantSpanTimeStamp.classList.add("timeStamp");
  assistantSpanTimeStamp.textContent = new Date().toLocaleTimeString();

  assistantLi.appendChild(assistantSpanProfile);
  assistantLi.appendChild(assistantResponse);
  assistantLi.appendChild(assistantSpanTimeStamp);

  // Assistant의 응답 li를 ul(Container)에 추가
  document.getElementById("Container").appendChild(assistantLi);

  // 입력창 비우기
  textBox.value = "";
}
