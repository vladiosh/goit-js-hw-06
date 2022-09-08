const listItems = document.querySelector("#categories");
console.log("Number of categories:", listItems.children.length);

const itemRef = document.querySelectorAll(".item");

itemRef.forEach((item) => {
  const titleRef = item.querySelector("h2");
  console.log("Category:", titleRef.textContent);

  const itemRef = item.querySelectorAll("li");
  console.log("Elements:", itemRef.length);
});
