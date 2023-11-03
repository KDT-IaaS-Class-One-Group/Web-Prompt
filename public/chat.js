function addText()  {
  
  // 1. 추가할 값을 input창에서 읽어온다
  const textBox 
    = document.getElementById('textBox').value;
  
  // 2. 추가할 li element 생성
  // 2-1. 추가할 li element 생성
  const li = document.createElement("li");
  
  // 2-2. li에 id 속성 추가 
  li.setAttribute('id',textBox);
  
  // 2-3. li에 text node 추가 
  const textNode = document.createTextNode(textBox);
  li.appendChild(textNode);
  
  // 3. 생성된 li를 ul에 추가
  document
    .getElementById('Container')
    .appendChild(li);
}