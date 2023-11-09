function addText() {
  const textBox = document.getElementById('textBox');
  const inputValue = textBox.value.trim(); // trim(): 문자열 앞뒤의 공백을 제거하는 메서드

  // 프롬프트 입력란이 공백이면 함수를 실행하지 않고 return
  if (inputValue === "") {
    return;
  }
  const container = document.getElementById('Container');

  //! User
  // user 메시지를 li 태그로 생성
  const userLi = document.createElement("li");
  userLi.classList.add("message", "user"); //* classList는 DOM 요소의 클래스에 접근해 추가, 제거, 토글이 가능하게 함
  userLi.style.backgroundColor = "#add8e6"; // 라이트 블루 색상

  // userLi > 유저 프로필(span 태그)
  const userSpanProfile = document.createElement("span");
  userSpanProfile.classList.add("profile");
  userSpanProfile.textContent = "👤 User: ";

  // userLi > 유저 텍스트(span 태그) === inputValue
  const userSpanText = document.createElement("span");
  userSpanText.classList.add("text");
  userSpanText.textContent = inputValue;

  // userLi > 유저 타임스탬프(span 태그)
  // 시간 표현에 필요한 변수 선언
  const currentTime = new Date(); // 현재 날짜와 시간을 생성자 함수로 객체 생성
  const userHours = currentTime.getHours().toString().padStart(2, '0'); //
  const userMinutes = currentTime.getMinutes().toString().padStart(2, '0');
  //* padStart() 메서드는 문자열에 사용하는 메서드

  const userSpanTimeStamp = document.createElement("span");
  userSpanTimeStamp.classList.add("timeStamp");
  userSpanTimeStamp.style.float = "right"; // 우측 정렬
  userSpanTimeStamp.textContent = `${userHours}:${userMinutes}`; // HH:mm으로 표시

  // 컨테이너에 userLi 추가
  container.appendChild(userLi);

  // userLi에 자식 요소로 span 태그들 추가
  userLi.appendChild(userSpanProfile);
  userLi.appendChild(userSpanText);
  userLi.appendChild(userSpanTimeStamp);

  //! Assistant
  // Assistant 메시지를 li 태그로 생성
  const assistantLi = document.createElement("li");
  assistantLi.classList.add("message", "assistant");
  assistantLi.style.backgroundColor = "#90ee90"; // 라이트 그린 (#90ee90)
  
  // assistantLi > 어시스턴트 프로필(span 태그)
  const assistantSpanProfile = document.createElement("span");
  assistantSpanProfile.classList.add("profile");
  assistantSpanProfile.textContent = "🌐 Assistant: ";
  
  // assistantLi > 어시스턴트 텍스트(span 태그) === assistantResponse
  const assistantSpanText = document.createElement("span");
  assistantSpanText.classList.add("text");
  
  const assistantResponse = inputValue + "에 대한 제 생각은..."; // Assistant의 대응 메시지
  assistantSpanText.textContent = assistantResponse;
  
  // assistantLi > 어시스턴트 타임스탬프(span 태그)
  // 시간 표현에 필요한 변수 선언
  const assistantHours = currentTime.getHours().toString().padStart(2, '0');
  const assistantMinutes = currentTime.getMinutes().toString().padStart(2, '0');

  const assistantSpanTimeStamp = document.createElement("span");
  assistantSpanTimeStamp.classList.add("timeStamp");
  assistantSpanTimeStamp.style.float = "right"; // 우측 정렬
  assistantSpanTimeStamp.textContent = `${assistantHours}:${assistantMinutes}`; // 24시간 형식으로 표시

  // 컨테이너에 assistnatLi 추가
  container.appendChild(assistantLi);

  // assistantLi에 자식 요소로 span 태그들 추가
  assistantLi.appendChild(assistantSpanProfile);
  assistantLi.appendChild(assistantSpanText);
  assistantLi.appendChild(assistantSpanTimeStamp);

  // textBox에 입력한 내용을 서버 콘솔에 출력
  console.log("사용자 입력 내용:", inputValue);

  // Fetch를 이용한 POST 처리
  fetch('/api/submit', { //* 'http://localhost:3000/api/submit'과 같은 절대경로를 사용해도 괜찮다
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // 요청 헤더에 콘텐츠 타입을 명시
    },
    body: JSON.stringify({ inputText: inputValue }), // JSON.stringify(): 요청 바디 부분의 객체를 JSON 문자열로 반환하는 메서드
  })
  // * .then은 서버로부터 정상적인 응답을 받았을 때에만 로직이 실행됨
  .then(response => response.json()) // 서버 응답을 JSON 형식으로 파싱
  .then(data => {
    console.log(data); // 서버 응답을 콘솔에 출력
  })
  //* .catch는 서버로부터의 응답이 오류일 때만 로직이 실행됨
  .catch(error => {
    console.error('에러 발생:', error); // 에러 처리
  });

  addToSideBar();

  // 입력창 비우기
  textBox.value = "";
}

// 햄버거 메뉴
const hamburgerMenu = document.getElementById("Hamburger-Menu");
const sideBar = document.createElement("div");
sideBar.classList.add("sideBar");

const closeButton = document.createElement("button");
closeButton.innerHTML = "&#9776;"; // ☰ 아이콘
closeButton.classList.add("hamburgerIcon");
hamburgerMenu.appendChild(sideBar);

const toggleSideBar = () => {
  sideBar.classList.toggle("open");
};

hamburgerMenu.addEventListener("click", toggleSideBar);

document.addEventListener('DOMContentLoaded', () => {
  const sideBar = document.querySelector('.sideBar');
  const menuItems = ['Home', 'Profile', 'Settings', 'Logout'];
// 사이드바에 들어갈 메뉴 버튼에 각각 ID 부여
  menuItems.forEach(item => {
    const button = document.createElement('button');
    button.textContent = item;
    button.id = `${item.toLowerCase()}Button`; // 각 버튼에 ID 부여
    button.classList.add('menuItem'); // 버튼에 클래스 추가
    sideBar.appendChild(button);
    // 각 버튼에 클릭 이벤트 추가
    button.addEventListener('click', () => {
      navigateToPage(item.toLowerCase()); // 각 버튼에 맞는 페이지로 이동하는 함수 호출
    });
  });
});


function navigateToPage(page) {
  fetch(`/pages/${page}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(html => {
      document.body.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));

  // 햄버거 메뉴 토글
  const hamburgerMenu = document.getElementById('Hamburger-Menu');
  const sideBar = document.querySelector('.sideBar');
  hamburgerMenu.addEventListener('click', () => {
    sideBar.classList.toggle('open');
    document.body.style.overflow = sideBar.classList.contains('open') ? 'hidden' : 'auto';
  });

  const closeButton = document.getElementById('Close-Button');
  closeButton.addEventListener('click', () => {
    sideBar.classList.remove('open');
    document.body.style.overflow = 'auto';
  });
}

// right-Menu에 이벤트 추가
document.addEventListener('DOMContentLoaded', () => {
  const rightMenuButton = document.getElementById('right-Menu');
  const rightSideBar = document.getElementById('rightSideBar');
  
  // right-Menu 버튼을 클릭했을 때 rightSideBar에 show 클래스를 토글하는 함수
  function toggleRightMenu() {
    rightSideBar.classList.toggle('show'); // 'show' 클래스를 토글합니다.
  }

  // right-Menu 버튼에 클릭 이벤트를 추가합니다.
  rightMenuButton.addEventListener('click', toggleRightMenu);

  });

  function addToSideBar() {
    const textBox = document.getElementById('textBox');
    const inputValue = textBox.value.trim();
    const rightSideBar = document.getElementById('rightSideBar');
    
    const span = document.createElement("span");
    span.textContent = inputValue;
    rightSideBar.appendChild(span);
  }
  