function addText() {
  const textBox = document.getElementById('textBox');
  const inputValue = textBox.value.trim();

  if (inputValue === "") {
    return;
  }

  const container = document.getElementById('Container');
  const currentTime = new Date();
  const userHours = currentTime.getHours().toString().padStart(2, '0');
  const userMinutes = currentTime.getMinutes().toString().padStart(2, '0');

  const userLi = document.createElement("li");
  userLi.classList.add("message", "user");
  userLi.style.backgroundColor = "#add8e6";
  const userSpanProfile = document.createElement("span");
  userSpanProfile.classList.add("profile");
  userSpanProfile.textContent = "👤 User: ";
  const userSpanText = document.createElement("span");
  userSpanText.classList.add("text");
  userSpanText.textContent = `${inputValue}`;
  const userSpanTimeStamp = document.createElement("span");
  userSpanTimeStamp.classList.add("timeStamp");
  userSpanTimeStamp.style.float = "right";
  userSpanTimeStamp.textContent = `${userHours}:${userMinutes}`;

  userLi.appendChild(userSpanProfile);
  userLi.appendChild(userSpanText);
  userLi.appendChild(userSpanTimeStamp);
  container.appendChild(userLi);

  const assistantResponse = inputValue + "에 대한 제 생각은...";
  const assistantHours = currentTime.getHours().toString().padStart(2, '0');
  const assistantMinutes = currentTime.getMinutes().toString().padStart(2, '0');

  const assistantLi = document.createElement("li");
  assistantLi.classList.add("message", "assistant");
  assistantLi.style.backgroundColor = "#90ee90";
  const assistantSpanProfile = document.createElement("span");
  assistantSpanProfile.classList.add("profile");
  assistantSpanProfile.textContent = "🌐 Assistant: ";
  const assistantSpanText = document.createElement("span");
  assistantSpanText.classList.add("text");
  assistantSpanText.textContent = assistantResponse;
  const assistantSpanTimeStamp = document.createElement("span");
  assistantSpanTimeStamp.classList.add("timeStamp");
  assistantSpanTimeStamp.style.float = "right";
  assistantSpanTimeStamp.textContent = `${assistantHours}:${assistantMinutes}`;

  assistantLi.appendChild(assistantSpanProfile);
  assistantLi.appendChild(assistantSpanText);
  assistantLi.appendChild(assistantSpanTimeStamp);
  container.appendChild(assistantLi);

  textBox.value = "";
}

const hamburgerMenu = document.getElementById("Hamburger-Menu");
const sideBar = document.querySelector(".sideBar");
const menuItems = ["home", "profile", "settings", "logout"];
const closeButton = document.getElementById("Close-Button");

function toggleSideBar() {
  sideBar.classList.toggle("open");
  if (sideBar.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

hamburgerMenu.addEventListener("click", toggleSideBar);
closeButton.addEventListener("click", toggleSideBar);

menuItems.forEach((item) => {
  const button = document.getElementById(`${item}Button`);
  button.addEventListener("click", () => {
    window.location.href = `/pages/${item}`;
    toggleSideBar();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sideBar = document.querySelector(".sideBar");

  const menuItems = ["Home", "Profile", "Settings", "Logout"];
  const hamburgerMenu = document.getElementById("Hamburger-Menu");

  menuItems.forEach((item) => {
    const button = document.getElementById(`${item.toLowerCase()}Button`);
    button.textContent = item;
    sideBar.appendChild(button);
  });

  function toggleSideBar() {
    sideBar.classList.toggle("open");
    if (sideBar.classList.contains("open")) {
      document.body.style.overflow = "hidden"; // 페이지 스크롤을 막음
    } else {
      document.body.style.overflow = "auto"; // 페이지 스크롤을 허용
    }
  }

  const closeButton = document.getElementById("Close-Button");
  hamburgerMenu.addEventListener("click", toggleSideBar);
  closeButton.addEventListener("click", toggleSideBar);

  menuItems.forEach((item) => {
    const button = document.getElementById(`${item.toLowerCase()}Button`);
    button.addEventListener("click", () => {
      window.location.href = `/pages/${item.toLowerCase()}`;
      toggleSideBar();
    });
  });
});

// 페이지 이동 요청 함수
function navigateToPage(page) {
  fetch(`/${page}`)
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
}

// 버튼에 클릭 이벤트 리스너 등록 함수
function addButtonClickListener(buttonId, page) {
  document.getElementById(buttonId).addEventListener('click', () => navigateToPage(page));
}

// 각 버튼에 클릭 이벤트 추가
addButtonClickListener('homeButton', 'home');
addButtonClickListener('profileButton', 'profile');
addButtonClickListener('settingsButton', 'settings');
addButtonClickListener('logoutButton', 'logout');

// DOMContentLoaded 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', () => {
  const sideBar = document.querySelector('.sideBar');
  const menuItems = ['Home', 'Profile', 'Settings', 'Logout'];
  const hamburgerMenu = document.getElementById('Hamburger-Menu');

  menuItems.forEach(item => {
    const button = document.getElementById(`${item.toLowerCase()}Button`);
    button.textContent = item;
    sideBar.appendChild(button);
    addButtonClickListener(`${item.toLowerCase()}Button`, item.toLowerCase());
  });

  function toggleSideBar() {
    sideBar.classList.toggle('open');
    document.body.style.overflow = sideBar.classList.contains('open') ? 'hidden' : 'auto';
  }

  const closeButton = document.getElementById('Close-Button');
  hamburgerMenu.addEventListener('click', toggleSideBar);
  closeButton.addEventListener('click', toggleSideBar);
});
