const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const elements = ingredients.map((elem) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = elem;

  return itemEl;
});

console.log(elements);
listRef.append(...elements);
