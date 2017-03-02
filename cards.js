var userInputField = document.getElementById("userInput");
var createButton = document.getElementById("createButton");
var cardHolder = document.getElementById("cardHolder");

var createCard = function() {
    var newCard = document.createElement("div");
    newCard.className = "card";
    var content = document.createTextNode(userInputField.value);
    newCard.appendChild(content);
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteButton";
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", deleteCard);
    newCard.appendChild(deleteBtn);
    cardHolder.appendChild(newCard);
}

var deleteCard = function(e) {
    var currCard = e.target.parentNode;
    cardHolder.removeChild(currCard);
}

createButton.addEventListener("click", createCard);