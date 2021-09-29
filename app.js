const item = document.querySelector(".item"),
  placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", gragstart);
item.addEventListener("dragend", gragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function gragstart(e) {
  e.target.classList.add("hold");
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}

function gragend(e) {
  e.target.className = "item";
}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  e.target.classList.add("hovered");
}

function dragleave(e) {
  e.target.classList.remove("hovered");
}

function dragdrop(e) {
  e.target.classList.remove("hovered");
  e.target.append(item);
}
