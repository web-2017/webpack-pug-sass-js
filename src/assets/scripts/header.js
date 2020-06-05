const header = document.querySelector(".header");
const main = document.querySelector(".main");

window.onscroll = () => {
  let y = window.scrollY;
  if (y > 50) {
    header.classList.add("header_fixed");
    main.style.marginTop = "157px";
  } else if (y < 30) {
    header.classList.remove("header_fixed");
    main.style.marginTop = "17px";
  }
};
