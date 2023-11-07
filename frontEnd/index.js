function addText() {
  const textBox = document.getElementById('textBox');
  const inputValue = textBox.value.trim();

  if (inputValue === "") {
    return;
  }

  const container = document.getElementById('Container');

  // 현재 시간을 24시간 형식으로 표시하기 위한 변수들
  const currentTime = new Date();
  const userHours = currentTime.getHours().toString().padStart(2, '0');
  const userMinutes = currentTime.getMinutes().toString().padStart(2, '0');

  // user 메시지 생성
  const userLi = document.createElement("li");
  userLi.classList.add("message", "user");
  userLi.style.backgroundColor = "#add8e6"; // 라이트 블루 (#add8e6)

  const userSpanProfile = document.createElement("span");
  userSpanProfile.classList.add("profile");
  userSpanProfile.textContent = "👤 User: ";

  const userSpanText = document.createElement("span");
  userSpanText.classList.add("text");
  userSpanText.textContent = `${inputValue}`;

  const userSpanTimeStamp = document.createElement("span");
  userSpanTimeStamp.classList.add("timeStamp");
  userSpanTimeStamp.style.float = "right"; // 우측 정렬
  userSpanTimeStamp.textContent = `${userHours}:${userMinutes}`; // 24시간 형식으로 표시

  userLi.appendChild(userSpanProfile);
  userLi.appendChild(userSpanText);
  userLi.appendChild(userSpanTimeStamp);
  container.appendChild(userLi);

  // Assistant 대응 메시지 생성
  const assistantResponse = inputValue + "에 대한 제 생각은...";

  // 현재 시간을 24시간 형식으로 표시하기 위한 변수들
  const assistantHours = currentTime.getHours().toString().padStart(2, '0');
  const assistantMinutes = currentTime.getMinutes().toString().padStart(2, '0');

  const assistantLi = document.createElement("li");
  assistantLi.classList.add("message", "assistant");
  assistantLi.style.backgroundColor = "#90ee90"; // 라이트 그린 (#90ee90)

  const assistantSpanProfile = document.createElement("span");
  assistantSpanProfile.classList.add("profile");
  assistantSpanProfile.textContent = "🌐 Assistant: ";

  const assistantSpanText = document.createElement("span");
  assistantSpanText.classList.add("text");
  assistantSpanText.textContent = assistantResponse;

  const assistantSpanTimeStamp = document.createElement("span");
  assistantSpanTimeStamp.classList.add("timeStamp");
  assistantSpanTimeStamp.style.float = "right"; // 우측 정렬
  assistantSpanTimeStamp.textContent = `${assistantHours}:${assistantMinutes}`; // 24시간 형식으로 표시

  assistantLi.appendChild(assistantSpanProfile);
  assistantLi.appendChild(assistantSpanText);
  assistantLi.appendChild(assistantSpanTimeStamp);
  container.appendChild(assistantLi);

  // 입력창 비우기
  textBox.value = "";
}
