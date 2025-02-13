let addBtn = document.querySelector(".btn");
let toDoList = document.querySelector(".lists");
let inputBox = document.querySelector(".search-list");

document.addEventListener("DOMContentLoaded", loadData);

addBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("The list cannot be empty!");
  } else {
    let element = document.createElement("li");
    element.innerHTML = inputBox.value;
    toDoList.appendChild(element);
    let unchecked = document.createElement("img");
    unchecked.classList.add("uncheck");
    element.appendChild(unchecked);
    let closeBtn = document.createElement("span");
    closeBtn.classList.add("close-btn");
    element.appendChild(closeBtn);
  }
  inputBox.value = "";
  saveData();
});

toDoList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("check");
  } else if (e.target.tagName === "IMG" && e.target.classList.contains("uncheck")) {
    e.target.parentElement.classList.toggle("check");
  } else if (e.target.classList.contains("close-btn")) {
    e.target.parentElement.remove();
  }
  saveData();
});

function saveData() {
  try {
    localStorage.setItem("data", toDoList.innerHTML);
  } catch (error) {
    console.error("Failed to save data", error);
  }
}

function loadData() {
  try {
    console.log("Loading data from localStorage"); // Debug log
    let data = localStorage.getItem("data");
    if (data) {
      console.log("Data loaded:", data); // Debug log
      toDoList.innerHTML = data;
    }
  } catch (error) {
    console.error("Failed to load data", error);
  }
}