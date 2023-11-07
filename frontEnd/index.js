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
  const headerHeight = document.getElementById("Header").offsetHeight;
  const footerHeight = document.getElementById("Footer").offsetHeight;
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
      sideBar.style.height = `calc(100vh - ${headerHeight + footerHeight}px)`;
    } else {
      document.body.style.overflow = "auto"; // 페이지 스크롤을 허용
      sideBar.style.height = ""; // 기본값으로 설정
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
