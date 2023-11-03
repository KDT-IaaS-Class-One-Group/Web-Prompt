// 사용자가 입력한 문자열을 li 태그로 동적 생성하는 함수
function addText()  {
  // input 태그에 입력된 문자열에 접근
  const textBox = document.getElementById('textBox').value;
  
  // li 태그 생성
  const li = document.createElement("li");
  
  // li에 id 속성을 추가
  li.setAttribute("id",textBox);
  
  // li에 textNode 추가
  const textNode = document.createTextNode(textBox);
  li.appendChild(textNode);
  
  // 생성된 li를 ul(Container)에 추가
  document
    .getElementById("Container")
    .appendChild(li);

  // span 태그 => 프로필 / 입력한 텍스트 / 시간
  makeSpan ((profile, text, timeStamp) => {
    const span = document.createElement("span")
    if (profile) {
      span.setAttribute("id", textBox)
      span.appendChild(textNode)
      li.appendChild(span)
    }
    else if (text) {
      span.setAttribute("id", textBox)
      span.appendChild(textNode)
      li.appendChild(span)
    }
    else if (timeStamp) {
      span.setAttribute("id", textBox)
      span.appendChild(textNode)
      li.appendChild(span)
    }
  } ) 
  

}


