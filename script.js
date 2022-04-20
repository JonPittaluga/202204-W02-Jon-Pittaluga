const menu = document.querySelector(".menu__main");

const displayResponsiveMenu = () => {
  // menu.style.display = none;
  // menu.style.color = "red";
  console.log(document.querySelector(".menu"));
  console.log(document.querySelector(".menu__main"));
  document.querySelector(".menu__main").classList.add("menu__main-mobile");
  console.log("displayResponsiveMenu");
};
