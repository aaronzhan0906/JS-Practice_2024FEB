// References the HTML element with the ID
const content = document.getElementById("content");
const date = document.getElementById("date");
const time = document.getElementById("time");
const addedBtn = document.getElementById("addedBtn");
const deletedBtn = document.getElementById("deletedBtn");
const list = document.getElementById("list");

//Initializes an empty array
const listContent = [];

function render() {
  //Initializes an empty array
  list.innerHTML = "";

  listContent.forEach(function (item) {
    //create
    const divItem = document.createElement("div");
    divItem.classList.add("item");

    const divContent = document.createElement("div");

    const pContent = document.createElement("p");
    pContent.textContent = `內容：${item.content}`;

    const pTime = document.createElement("p");
    pTime.textContent = `時間：${item.date} ${item.time}`;

    //append
    divContent.appendChild(pContent);
    divContent.appendChild(pTime);

    divItem.appendChild(divContent);

    list.appendChild(divItem);
  });
}

// add object to listcontent
addedBtn.addEventListener("click", function () {
  listContent.unshift({
    content: content.value,
    date: date.value,
    time: time.value,
  });

  render();
});

// delete object from listcontent
deletedBtn.addEventListener("click", function () {
  listContent.pop();

  render();
});
