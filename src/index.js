const listElements = document.querySelectorAll(".navigation nav ul li");

listElements.forEach((li) => {
  const lordIcon = li.querySelector(".svg-icon");
  li.addEventListener("mouseover", function () {
    lordIcon.setAttribute("trigger", "boomerang");
  });
  li.addEventListener("mouseout", function () {
    lordIcon.setAttribute("trigger", "");
  });
});

// function toggleMenu() {
//   const showSideNav = document.querySelector(".sidenav");
//   showSideNav.style.display = "flex";
// }

// function toggleMenu() {
//   const navigation = document.querySelector(".navigation");
//   navigation.classList.toggle("menu-active");

//   const sideNav = document.querySelector(".sidenav");
//   sideNav.style.display = navigation.classList.contains("menu-active")
//     ? "flex"
//     : "none";
// }

function toggleMenu() {
  const navigation = document.querySelector(".navigation");
  const sideNav = document.querySelector(".sidenav");

  navigation.classList.toggle("menu-active");
  sideNav.style.display = navigation.classList.contains("menu-active")
    ? "flex"
    : "none";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
