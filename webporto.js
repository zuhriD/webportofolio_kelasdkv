let header = document.getElementById("header");

let title = document.querySelector(".title");
let menu = document.querySelectorAll(".menu ul li a");

function ubahWarnaHeader() {
  if (window.scrollY > 0) {
    header.style.backgroundColor = "#4070f4";
    header.style.borderBottom = "none";
    title.style.color = "white";
    menu.forEach(function (item) {
      item.style.color = "white";
    });
  } else {
    header.style.backgroundColor = "transparent";
    header.style.borderBottom = "1px solid rgb(237, 236, 236)";
    title.style.color = "black";
    menu.forEach(function (item) {
      item.style.color = "black";
    });
  }
}

window.addEventListener("scroll", ubahWarnaHeader);

let floatingButton = document.getElementById("floating-button");

function showOrHideFloatingButton() {
  if (window.scrollY > 0) {
    floatingButton.style.display = "flex";
  } else {
    floatingButton.style.display = "none";
  }
}

window.addEventListener("scroll", showOrHideFloatingButton);

function scrollOnTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

floatingButton.onclick = scrollOnTop;

let aboutLink = document.querySelector('.menu ul li a[href="#about"]');
let heroLink = document.querySelector('.menu ul li a[href="#hero"]');

let aboutSection = document.getElementById("about");
let heroSection = document.getElementById("hero");

function scrollToAbout(event) {
  event.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToHero(event) {
  event.preventDefault();
  heroSection.scrollIntoView({ behavior: "smooth" });
}

aboutLink.onclick = scrollToAbout;
heroLink.onclick = scrollToHero;

let menuBars = document.getElementById("menu-bars");
let sidebarResponsive = document.getElementById("sidebar-responsive");
let closeSidebarButton = document.getElementById("close-sidebar");
let resolusiScreen = window.matchMedia("(max-width: 768px)");
function resnponsiveScreen(screen) {
  if (screen.matches) {
    menuBars.style.display = "block";
    menuBars.addEventListener("click", function (){
      sidebarResponsive.style.display = "block";
      menuBars.style.display = "none";
    });
    closeSidebarButton.addEventListener("click", function () {
      sidebarResponsive.style.display = "none";
      menuBars.style.display = "block";
    });
    
  }else{
    sidebarResponsive.style.display = "none";
    menuBars.style.display = "none";
  }
}
resnponsiveScreen(resolusiScreen);
resolusiScreen.addEventListener("change", resnponsiveScreen);
