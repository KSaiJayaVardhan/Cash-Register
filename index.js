var billAmount = document.querySelector("#bill-amount");
var nextButton = document.querySelector("#next-button");
var labelCashGiven = document.querySelector(".label-cashgiven");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var errorMessage = document.querySelector("#error-message");
var showReturnChange = document.querySelector(".show-table");
var numberOfNotes = document.querySelectorAll(".no-of-notes");


var availableNotes = [2000, 500, 100, 20 , 10, 5, 1];

nextButton.addEventListener("click", function showSecondInput() {
    labelCashGiven.style.display = "block";
    cashGiven.style.display = "block";
    checkButton.style.display = "block"; 
    nextButton.style.display= "none";
});

checkButton.addEventListener("click", function validateTheBillAmountAndCashAmount() {
    errorMessage.style.display = "none";
    showReturnChange.style.display = "block";
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            var amountToBeReturned = cashGiven.value - billAmount.value;
            changeCalculation(amountToBeReturned);    
        }
        else {
            showMessage("The cash provided must be atleast equal to the bill amount");
        }
    }
    else {
        showMessage("Please provide an amount greater than 0");
    }
});

function changeCalculation(amountToBeReturned) {
    for (i=0; i < availableNotes.length; i++) {
        var noOfNotesOfCurrentDenomination = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        numberOfNotes[i].innerText = noOfNotesOfCurrentDenomination;
    }
};

function showMessage(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText= msg;
}

