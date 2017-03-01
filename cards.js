svar userInputField = document.getElementById("userInput");
var createButton = document.getElementById("createButton");
var cardHolder = document.getElementById("cardHolder");

var createCard = function() {
    console.log("createCard fired")
    var newCard = document.createElement("div");
    newCard.className = "card";
    var content = document.createTextNode(userInputField.value);
    newCard.appendChild(content);
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteButton";
    deleteBtn.innerHTML = "Delete"
    deleteBtn.addEventListener("click", deleteCard)
    newCard.appendChild(deleteBtn);
    cardHolder.appendChild(newCard);
    console.log("createCard ended")
}

var deleteCard = function(e) {
    var currCard = e.target.parentNode;
    console.log(currCard);
    cardHolder.removeChild(currCard);
    console.log("deleteCard fired")
}

createButton.addEventListener("click", createCard);