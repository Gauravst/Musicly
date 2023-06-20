const popupBtn = document.querySelector(".popupBtn");
const popupContainer = document.querySelector(".popupContainer");
const playerContainer = document.querySelector(".playerContainer");
const body = document.querySelector("body");

const popFun = () => {
  const windowHeight = document.documentElement.clientHeight;
  const popupHeight = windowHeight - 160;
  popupContainer.style.height = popupHeight + "px";

  if (popupContainer.style.display === "none" || popupContainer.style.display === "") {
    popupContainer.style.display = "block";
    body.style.overflow = "hidden";
  } else {
    popupContainer.style.display = "none";
    body.style.overflow = "auto";
  }
};

popupBtn.addEventListener("click", popFun);
playerCover.addEventListener("click", popFun);
playerSongName.addEventListener("click", popFun);
