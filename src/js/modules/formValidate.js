const sendForm = () => {
  const form = document.getElementById("form");
  const overlay = document.querySelector(".overlay");

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll(".form__el");
    const formData = new FormData(form);
    const formBody = {};

    try {
      formElements.forEach((input) => {
        input.classList.remove("form__error");
        document
          .querySelector(".select2-selection--single")
          .classList.remove("form__error");
          document.querySelector(
            ".select2-selection__placeholder"
          ).style.color = "";
      });
      let isError = false;
      formData.forEach((val, key) => {
        if (key === "subject" && val === "") {
          document
            .querySelector(".select2-selection--single")
            .classList.add("form__error");
          document.querySelector(
            ".select2-selection__placeholder"
          ).style.color = "#ef5c53";
          isError = true;
        } else if (key === "email" && val === "") {
          document.getElementsByName(key)[0].classList.add("form__error");
          isError = true;
        } else if (key === "name" && val === "") {
          document.getElementsByName(key)[0].classList.add("form__error");
          isError = true;
        } else if (key === "message" && val === "") {
          document.getElementsByName(key)[0].classList.add("form__error");
          isError = true;
        }

        formBody[key] = val;
      });
      if (isError) {
        throw new Error("Заполните обязательные поля");
      }
      console.log(formBody);
    } catch (error) {
      console.log(error.message);
      return false;
    }

    formElements.forEach((input) => {
      input.classList.remove("form__error");
    });

    sendData(formBody)
      .then(async (data) => {
        overlay.style.display = "block";
        formElements.forEach((input) => {
          input.value = "";
        });
        await new Promise((resolve, reject) => setTimeout(resolve, 3000));
        overlay.style.display = "none";
      })
      .catch((error) => {
        console.log(error.message);
      });

    return true;
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место!");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!submitForm()) {
        throw new Error("Не все поля заполнены");
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;
