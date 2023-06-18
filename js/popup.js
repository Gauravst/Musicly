const popupBtn = document.querySelector(".popupBtn");
const popupContainer = document.querySelector(".popupContainer");
const header = document.querySelector("header");
const playerContainer = document.querySelector(".playerContainer");
const body = document.querySelector("body");

popupBtn.addEventListener("click", () => {
  const headerHeight = header.offsetHeight;
  const playerHeight = playerContainer.offsetHeight;
  const windowHeight = document.documentElement.clientHeight;

  const popupHeight = windowHeight - headerHeight - playerHeight;

  popupContainer.style.height = popupHeight + "px";
  popupContainer.style.top = headerHeight + "px";

  if (popupContainer.style.display === "none" || popupContainer.style.display === "") {
    header.style.backgroundColor = "#181f26";
    popupContainer.style.display = "block";
    body.style.overflow = "hidden"
  } else {
    popupContainer.style.display = "none";
    body.style.overflow = "auto"
  }
});
