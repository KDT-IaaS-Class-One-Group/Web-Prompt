// 사용자가 입력한 문자열을 li 태그로 동적 생성하는 함수
function addText()  {
  // input 태그에 입력된 문자열에 접근
  const textBox = document.getElementById('textBox').value;
  
  // li 태그 생성 // spanProfile, spanText, spanTimeStamp 추가
  const li = document.createElement("li");
  const spanProfile = document.createElement("span")
  const spanText = document.createElement("span")
  const spanTimeStamp = document.createElement("span")
  
  // 클래스 지정
  spanProfile.classList.add("profile");
  spanText.classList.add("text")
  spanTimeStamp.classList.add("timeStamp")

  
  // li에 textNode 추가 // spanText도 추가하기
  const textNode = document.createTextNode(textBox);
  li.appendChild(textNode);
  spanText.appendChild(textNode)
  
  // 생성된 li를 ul(Container)에 추가
  document
    .getElementById("Container")
    .appendChild(li);

  // li에 span 요소들 추가
  li.appendChild(spanProfile)    
  li.appendChild(spanText)    
  li.appendChild(spanTimeStamp)    
   
}