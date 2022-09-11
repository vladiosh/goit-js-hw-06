const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Заповніть пусті поля!");
    return;
  }
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);

  event.currentTarget.reset();
});
