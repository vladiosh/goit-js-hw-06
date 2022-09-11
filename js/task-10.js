const refs = {
  inputEl: document.querySelector("#controls input"),
  btnCreateEl: document.querySelector("[data-create]"),
  btnDestrEl: document.querySelector("[data-destroy]"),
  boxEl: document.querySelector("#boxes"),
};

refs.inputEl.addEventListener("input", onInputPresentValue);
refs.btnCreateEl.addEventListener("click", createBoxes);

const murkupBoxes = [];
function onInputPresentValue(event) {
  console.log(event.currentTarget.value);
  event.currentTarget.value;
}

function createBoxes(amount) {
  for (let i = 11; i <= refs.inputEl.value; i += 1) {
    const markup = `<div style="background-color: ${getRandomHexColor}; width: 20+i*10; height: ${
      20 + i * 10
    }"></div>`;

    murkupBoxes.push(markup);
    console.log(markup);
  }
}

refs.boxEl.innerHTML = murkupBoxes.join(" ");
console.log(murkupBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
