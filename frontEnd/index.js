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
  hamburgerMenu.addEventListener('click', () => {
    sideBar.classList.toggle('open');
    document.body.style.overflow = sideBar.classList.contains('open') ? 'hidden' : 'auto';
  });
  
  const closeButton = document.getElementById('Close-Button');
  closeButton.addEventListener('click', () => {
    sideBar.classList.remove('open');
    document.body.style.overflow = 'auto';
  })
  }



// // 버튼에 클릭 이벤트 리스너 등록 함수
// function addButtonClickListener(buttonId, page) {
//   document.getElementById(buttonId).addEventListener('click', () => navigateToPage(page));
// }

// // 각 버튼에 클릭 이벤트 추가
// addButtonClickListener('homeButton', 'home');
// addButtonClickListener('profileButton', 'profile');
// addButtonClickListener('settingsButton', 'settings');
// addButtonClickListener('logoutButton', 'logout');

// // DOMContentLoaded 이벤트 리스너 등록
// document.addEventListener('DOMContentLoaded', () => {
//   const sideBar = document.querySelector('.sideBar');
//   const menuItems = ['Home', 'Profile', 'Settings', 'Logout'];
//   const hamburgerMenu = document.getElementById('Hamburger-Menu');

//   menuItems.forEach(item => {
//     const button = document.getElementById(`${item.toLowerCase()}Button`);
//     button.textContent = item;
//     sideBar.appendChild(button);
//     addButtonClickListener(`${item.toLowerCase()}Button`, item.toLowerCase());
//   });

//   function toggleSideBar() {
//     sideBar.classList.toggle('open');
//     document.body.style.overflow = sideBar.classList.contains('open') ? 'hidden' : 'auto';
//   }

//   const closeButton = document.getElementById('Close-Button');
//   hamburgerMenu.addEventListener('click', toggleSideBar);
//   closeButton.addEventListener('click', toggleSideBar);
// });
