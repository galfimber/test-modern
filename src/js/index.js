import sendForm from "./modules/formValidate.js";
import popupClose from "./modules/popupClose.js";

popupClose();
sendForm();

// Инициализация select2
$("#form__select").select2({
  width: "100%",
  placeholder: "Select Subject",
  allowClear: false,
  minimumResultsForSearch: Infinity,
});

// Инициализация input-mask
const inputTel = document.querySelector("#input-tel");

Inputmask("1-999-999-9999", {
  placeholder: "X",
  greedy: false,
  clearMaskOnLostFocus: true,
}).mask(inputTel);

inputTel.addEventListener("mouseenter", () => {
  console.log(inputTel.value);
  if (inputTel.value.length > 0) {
    inputTel.style.color = "inherit";
  } else {
    inputTel.style.color = "";
  }
});
