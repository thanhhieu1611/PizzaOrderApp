"use strict"

//#region Declaration
// Global Variables
var pizzaTypes = ["Meat Lover", "Fruit Lover", "Veggie Lover", "Pepperoni Lover", "Italian Meatball"];         //Selection types of pizzas
var maxQuantity = 10;       //Max quantity selection options
var pizzaPrice = 5;         //Pizza price
var taxRate = 0.076;        //tax rate

//Elements in HTML
var quantitySelection = document.getElementById("sltQuan");
var pizzaSelection = document.getElementById("sltPizza");
var orderButton = document.getElementById("btnOrder");
var summaryTextArea = document.getElementById("txtaSummary");
var nameText = document.getElementById("txtName");
var phoneText = document.getElementById("txtPhone");

//#endregion

//#region Create new HTML Element
//Add selection of options for sltQuan
for(var i = 1; i <= maxQuantity; i++){
    var option = document.createElement("option");
    option.text = i;
    quantitySelection.add(option);
} 

//Add a selection of Pizza types
for(var i = 0; i < pizzaTypes.length; i++){
    var option = document.createElement("option");
    option.text = pizzaTypes[i];
    pizzaSelection.add(option);
}

//#endregion

//#region Event
//Show Order Summary
orderButton.addEventListener("click",function(){
    summaryTextArea.value = "Customer Name:\t" + nameText.value +
    "\nPhone Number:\t" + phoneText.value +
    "\nQuantity ordered:\t" + quantitySelection.value +
    "\nType of Pizza:\t\t" + pizzaSelection.value +
    "\nSubtotal:\t\t\t"+ "$" + calSubTotal() +
    "\nTax:\t\t\t\t"+ "$" + calTax() +
    "\nTotal:\t\t\t" + "$" +calTotalCost();
})

//#endregion

//#region Functions
//Calculate subtotal cost of the order
function calSubTotal(){
    return pizzaPrice*quantitySelection.value;
}

//Calculate tax of the order
function calTax(){
    return calSubTotal()*taxRate;
}

//Calculate total cost of the order
function calTotalCost(){
    return calSubTotal() + calTax();
}

//#endregion

