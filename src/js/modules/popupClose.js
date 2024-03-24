const popupClose = () => {
  const overlay = document.querySelector(".overlay");
  const overlayWrapper = document.querySelector(".overlay__wrapper");
  const btnClose = document.querySelector(".popup__btn");

  document.addEventListener("click", (e) => {
    if (e.target === btnClose || e.target === overlayWrapper) {
      overlay.style.display = "none";
    }
  });
};

export default popupClose;
