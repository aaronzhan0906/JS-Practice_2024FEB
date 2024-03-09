const dogImageDiv = document.getElementById("dogImage");
const dogButton = document.getElementById("dogButton");

// getNewDog function to fetch a new dog image from the Dog API
const getNewDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      dogImageDiv.innerHTML = `<img src="${json.message}" style="height: 500px;">`;
    });
};

dogButton.onclick = () => getNewDog();
