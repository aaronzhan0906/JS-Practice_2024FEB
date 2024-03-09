let listState = [];

// const STATE_KEY stores the key for the localStorage
const STATE_KEY = "todo-list";

//  localStage() getItem from STATE_KEY, if not null return JSON.parse(listState) else return []
function loadState() {
  const listState = localStorage.getItem(STATE_KEY);
  if (listState !== null) {
    return JSON.parse(listState);
  }
  return [];
}

// use JSON.stringify() to save listState to localStorage
function saveState(list) {
  localStorage.setItem(STATE_KEY, JSON.stringify(list));
}

// initList() load LoadState() and use for of loop to render list
function initList() {
  // load state
  listState = loadState();
  // render list
  const ul = document.getElementById("list");
  for (const item of listState) {
    const li = document.createElement("li");
    li.innerText = item.text;

    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete");
    deleteButton.onclick = deleteItem;
    li.appendChild(deleteButton);

    li.classList.add("item");
    if (item.checked) {
      li.classList.add("checked");
    }
    li.onclick = checkItem;

    ul.appendChild(li);
  }
}

// get input value and create new item
function addItem() {
  const ul = document.getElementById("list");
  const input = document.getElementById("input");
  const text = input.value;
  if (text === "") {
    alert("請輸入內容");
    return;
  }

  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = text;

  newItem.onclick = checkItem;

  const deleteButton = document.createElement("span");
  deleteButton.classList.add("delete");
  deleteButton.onclick = deleteItem;

  newItem.appendChild(deleteButton);

  // push listState to newItem and saveState
  listState.push({
    text,
    checked: false,
  });
  saveState(listState);

  input.value = "";
  ul.appendChild(newItem);
}

// checkItem click event and toggle class checked
function checkItem(e) {
  const item = e.target; // e.target is the clicked element
  const parent = item.parentNode;
  // Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
  const idx = Array.from(parent.childNodes).indexOf(item);

  // change listState[idx].checked to the opposite value
  listState[idx].checked = !listState[idx].checked;

  // toggle class checked
  item.classList.toggle("checked");
  saveState(listState);
}

// deleteButtom remove item from listState and remove the item from the DOM
function deleteItem(e) {
  const item = this.parentNode;
  const parent = item.parentNode;
  const idx = Array.from(parent.childNodes).indexOf(item);
  // when click deleteButton, remove the item from listState, use filter() to create a new array
  listState = listState.filter((_, i) => i !== idx);
  parent.removeChild(item);
  saveState(listState);
  e.stopPropagation();
}

// call initList() to render the list
initList();

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addItem);

// prevenDefault() to prevent the form from submitting
const form = document.getElementById("input-wrapper");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
