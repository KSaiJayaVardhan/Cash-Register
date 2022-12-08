var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var errorMessage = document.querySelector("#error-message");
var numberOfNotes = document.querySelectorAll(".no-of-notes");

var availableNotes = [2000, 500, 100, 20 , 10, 5, 1];
 
checkButton.addEventListener("click", function(){
    errorMessage.style.display = "none";
    if (billAmount.value > 0){
        if (cashGiven.value >= billAmount.value){
            var amountToBeReturned = cashGiven.value - billAmount.value;
            for (i=0; i < availableNotes.length; i++){
                var noOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
                amountToBeReturned = amountToBeReturned % availableNotes[i];
                numberOfNotes[i].innerText = noOfNotes;
            }
        }
        else{
            showMessage("Cash given should atleast be equal to bill amount");
        }
    }
    else{
        showMessage("Invalid Amount");
    }
    
});

function showMessage(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText= msg;
}

