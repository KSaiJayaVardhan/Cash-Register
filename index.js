var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");

checkButton.addEventListener("click", function(){
    console.log(billAmount.value);
})
