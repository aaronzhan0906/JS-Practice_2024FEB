let listState = [];

// const STATE_KEY 存儲或檢索瀏覽器本地存儲中的數據
const STATE_KEY = "todo-list";

// 讀取功能: localStage() 從 STATE_KEY getItem，如果不是null，return Json.parse(listState)，用Json.parse將字串轉為物件 else return []
function loadState() {
  const listState = localStorage.getItem(STATE_KEY);
  if (listState !== null) {
    return JSON.parse(listState);
  }
  return [];
}

// 存儲功能 saveState ，使用JSON.stringfy方法
function saveState(list) {
  localStorage.setItem(STATE_KEY, JSON.stringify(list));
}

// initList() 讀取 LoadState() 後用 for of 顯示，創建文字、方框、刪除鍵，檢查方框是否打勾並顯示
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

// 取得 addButtom 讓它 click 時 addItem
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

  // push listState，再將 listState 存入 localStorage
  listState.push({
    text,
    checked: false,
  });
  saveState(listState);

  input.value = "";
  ul.appendChild(newItem);
}

// checkItem，點擊item後打勾，用toggle(開關)
function checkItem(e) {
  const item = e.target; // e.target 是被點擊的元素
  const parent = item.parentNode;
  // Array.from() 方法將類陣列轉換為陣列，並使用 indexOf() 方法找到 item 在 parent.childNodes 中的索引
  const idx = Array.from(parent.childNodes).indexOf(item);

  // 確認是否打勾
  listState[idx].checked = !listState[idx].checked;

  item.classList.toggle("checked");
  saveState(listState);
}

// deleteButtom，點擊時刪除 newItem
function deleteItem(e) {
  const item = this.parentNode;
  const parent = item.parentNode;
  const idx = Array.from(parent.childNodes).indexOf(item);
  // 點擊刪除時，用 filter 方法更新 listState 陣列並移除 DOM 元素
  listState = listState.filter((_, i) => i !== idx);
  parent.removeChild(item);
  saveState(listState);
  e.stopPropagation();
}

// 在每次add、check、delete儲存在LocalStorage，創建 listState 空 Array
initList();

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addItem);

// prevenDefault() 防止刷新
const form = document.getElementById("input-wrapper");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
