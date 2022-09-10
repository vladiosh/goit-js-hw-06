const inputRef = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputRef.addEventListener("input", (event) => {
  textEl.style.fontSize = ` ${event.target.value}px`;
});
