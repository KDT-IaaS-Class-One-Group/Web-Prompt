// index.js

function addText() {
  const textBox = document.getElementById('textBox');
  const inputValue = textBox.value.trim();

  if (inputValue === "") {
    return;
  }

  const container = document.getElementById('Container');
  const li = document.createElement('li');
  li.classList.add('message');

  const spanProfile = document.createElement('span');
  spanProfile.classList.add('profile');
  spanProfile.textContent = 'user';

  const spanText = document.createElement('span');
  spanText.classList.add('text');
  spanText.textContent = inputValue;

  const spanTimeStamp = document.createElement('span');
  spanTimeStamp.classList.add('timeStamp');
  const currentTime = new Date().toLocaleTimeString();
  spanTimeStamp.textContent = currentTime;

  li.appendChild(spanProfile);
  li.appendChild(spanText);
  li.appendChild(spanTimeStamp);

  container.appendChild(li);

  textBox.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  // 초기 데이터 렌더링 로직 (기존 renderData 함수 대신 사용)
  const initialData = [
    {
      type: 'user',
      message: 'How does OpenAI work?',
      timestamp: '10:23 AM',
    },
    {
      type: 'assistant',
      message: 'OpenAI is a machine learning model...',
      timestamp: '10:24 AM',
    },
  ];

  const container = document.getElementById('Container');
  initialData.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('message');

    const spanProfile = document.createElement('span');
    spanProfile.classList.add('profile');
    spanProfile.textContent = item.type;

    const spanText = document.createElement('span');
    spanText.classList.add('text');
    spanText.textContent = item.message;

    const spanTimeStamp = document.createElement('span');
    spanTimeStamp.classList.add('timeStamp');
    spanTimeStamp.textContent = item.timestamp;

    li.appendChild(spanProfile);
    li.appendChild(spanText);
    li.appendChild(spanTimeStamp);

    container.appendChild(li);
  });
});
