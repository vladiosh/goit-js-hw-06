const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (event) => {
  refs.nameLabel.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.nameLabel.textContent = "Anonymous";
  }
});
