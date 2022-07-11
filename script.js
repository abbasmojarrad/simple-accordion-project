const wrappersElm = document.querySelectorAll(".wrapper");
const contentElm = document.querySelectorAll(".content");
const icons = document.querySelectorAll(".icon");
const toggles = document.querySelectorAll(".toggle");
function closeTab() {
  contentElm.forEach((elm, i) => {
    elm.style.height = "0px";
    toggles[i].style.color = "#111130";
    icons[i].classList.remove("fa-minus");
    icons[i].classList.add("fa-plus");
  });
}
wrappersElm.forEach((elm) => {
  elm.onclick = () => {
    closeTab();
    contentElem = elm.querySelector(".content");
    toggleElem = elm.querySelector(".toggle");
    iconElem = elm.querySelector(".icon");
    contentElem.style.height = contentElem.scrollHeight + "px";
    toggleElem.style.color = "#0084e9";
    iconElem.classList.add("fa-minus");
    iconElem.classList.remove("fa-plus");
  };
});
