function addText() {
  const textBox = document.getElementById('textBox');
  const inputValue = textBox.value.trim();

  if (inputValue === "") {
    return;
  }

  const container = document.getElementById('Container');

  // user 메시지 생성
  const userLi = document.createElement("li");
  userLi.classList.add("message", "user");
  userLi.style.backgroundColor = "#add8e6"; // 라이트 블루 (#add8e6)

  const userSpanProfile = document.createElement("span");
  userSpanProfile.classList.add("profile");
  userSpanProfile.textContent = "👤 User";

  const userSpanText = document.createElement("span");
  userSpanText.classList.add("text");
  userSpanText.textContent = `${inputValue}`;

  const userSpanTimeStamp = document.createElement("span");
  userSpanTimeStamp.classList.add("timeStamp");
  const userCurrentTime = new Date().toLocaleTimeString();
  userSpanTimeStamp.textContent = userCurrentTime;

  userLi.appendChild(userSpanProfile);
  userLi.appendChild(userSpanText);
  userLi.appendChild(userSpanTimeStamp);
  container.appendChild(userLi);

  // Assistant 대응 메시지 생성
  const assistantResponse = inputValue + "에 대한 제 생각은...";

  const assistantLi = document.createElement("li");
  assistantLi.classList.add("message", "assistant");
  assistantLi.style.backgroundColor = "#90ee90"; // 라이트 그린 (#90ee90)

  const assistantSpanProfile = document.createElement("span");
  assistantSpanProfile.classList.add("profile");
  assistantSpanProfile.textContent = "🌐 Assistant";

  const assistantSpanText = document.createElement("span");
  assistantSpanText.classList.add("text");
  assistantSpanText.textContent = assistantResponse;

  const assistantSpanTimeStamp = document.createElement("span");
  assistantSpanTimeStamp.classList.add("timeStamp");
  const assistantCurrentTime = new Date().toLocaleTimeString();
  assistantSpanTimeStamp.textContent = assistantCurrentTime;

  assistantLi.appendChild(assistantSpanProfile);
  assistantLi.appendChild(assistantSpanText);
  assistantLi.appendChild(assistantSpanTimeStamp);
  container.appendChild(assistantLi);

  // 입력창 비우기
  textBox.value = "";
}
