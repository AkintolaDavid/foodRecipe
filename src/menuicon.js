const menu = document.querySelector("menu");
const menuicon = document.querySelector("menuicon");

menuicon.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
