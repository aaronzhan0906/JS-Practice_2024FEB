// References the HTML element with the ID
const changeButton = document.getElementById("changeButton");
const squares = document.querySelectorAll(".colorSquare");
const output = document.getElementById("output");

changeButton.addEventListener("click", function () {
  document.querySelector(
    "#title"
  ).innerHTML = `<h2>黃綠紅你要哪一個？點擊以下方塊</h2>`;
});

squares.forEach((square) => {
  square.onclick = () => {
    _id = square.getAttribute("id");
    output.innerHTML = `<div class="colorSquare" id="${_id}"></div>`;
  };
});
