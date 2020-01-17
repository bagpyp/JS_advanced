function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }
    if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    }
    if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }
    if (selectedSize === "Large Pizza") {
        sizeTotal = 12;
    }
    if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 15;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + runningTotal + ".00");
    console.log("subtotatl: $" + runningTotal + ".00\n\n");
    getMeat(runningTotal,text1);
};

function getMeat(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected topping item: (" + meatArray[j].value + ")");
            text1 = text1 + meatArray[j].value + "<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal)
    console.log("total selected Topping items: " + meatCount);
    console.log(meatCount + " toppings - 1 free topping = $" + meatTotal + ".00")
    console.log("\n\nPurchase Total: $" + runningTotal + ".00")
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}