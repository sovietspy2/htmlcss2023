function handleDragStart(e) {
  const sourceId = e.target.getAttribute("id");
  e.dataTransfer.setData("sourceId", sourceId);

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("html", this.outerHTML);
  this.style.opacity = "0.4";
}

function handleDragEnd(e) {
  this.style.opacity = "1";
}

function handleDragOver(e) {
  e.preventDefault();
  return false;
}

function handleDragEnter(e) {
  this.classList.add("over");
}

function handleDragLeave(e) {
  this.classList.remove("over");
}

function handleDrop(e) {
  e.stopPropagation(); // stops the browser from redirecting.
  this.classList.remove("over");

  const sourceId = e.dataTransfer.getData("sourceId");
  console.log("source id: " + sourceId);
  const sourceElement = document.getElementById(sourceId);
  sourceElement.remove();

  const html = e.dataTransfer.getData("html");
  console.log(html);

  const subject = document.querySelector("#dark");
  subject.insertAdjacentHTML("afterbegin", html);

  return false;
}

let items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("dragstart", handleDragStart);
  item.addEventListener("dragend", handleDragEnd);
});

const destination = document.getElementById("dark");
destination.addEventListener("dragover", handleDragOver);
destination.addEventListener("dragenter", handleDragEnter);
destination.addEventListener("dragleave", handleDragLeave);
destination.addEventListener("drop", handleDrop);
