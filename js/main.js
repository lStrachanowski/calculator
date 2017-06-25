$(document).ready(function() {
  var displayVal = ""; // is storing equation
  var displayResult = 0; // is storing result of equation
  inputTable = [];
  tempNum = [];
  $(document.body).click(function(eve) {
    var clicked = eve.target;
    var currId = clicked.id; // Is getting button ID when button is pressed and storing in currId value.

    var keyValue = checkIfNumber(currId);
    // Is adding key pressed values to inputTable
    if (keyValue !== "=" && keyValue != "ce" && keyValue != "ac" && keyValue !="pow" && keyValue !="sqrt" && keyValue != "per") {
      if(!isNaN(keyValue) || keyValue == "."){
        tempNum.push(keyValue);
        displayVal += keyValue;
      }else{
        checkTempNumber();
        inputTable.push(keyValue);
        displayVal += keyValue;
      }
    }
    // delete all operations
    if (keyValue == "ce") {
      displayVal = "";
      displayResult = "0";
      inputTable.length = 0;
    }
    // delete last operation
    if(keyValue == "ac"){
      inputTable = inputTable.splice(0,inputTable.length-1);
      displayVal = inputTable.join("");
    }
    //Calculate power of number
    if(keyValue =="pow"){
      checkTempNumber();
      var a = inputTable.join("");
      var powerResult = Math.pow(eval(a),2);
      inputTable = [];
      inputTable.push(powerResult);
      displayResult = powerResult;
      displayVal = powerResult;
    }
    // Calculate square root of number
    if(keyValue == "sqrt"){
      checkTempNumber();
      var a = inputTable.join("");
      var sqrtResult = Math.sqrt(eval(a));
      inputTable = [];
      inputTable.push(sqrtResult);
      displayResult = sqrtResult;
      displayVal = sqrtResult;
    }

    // Calculate percent
    if(keyValue =="per"){
      try{
        checkTempNumber();
        var inVal = Number(inputTable.slice(inputTable.length-1));
        var inAmount = eval(inputTable.slice(0,inputTable.length-2).join(""));
        var lastSymbol = inputTable[inputTable.length-2];
        var percentResult = eval(inAmount + lastSymbol + percentCount(inVal, inAmount));
        inputTable.length = 0;
        inputTable.push(percentResult);
        displayResult = percentResult;
        displayVal = percentResult;
        if(inAmount == undefined){
          displayResult = "Invalid operation";
        }
      }catch(err){
        displayResult = "Invalid operation";
      }

    }

    // When keyValue equals to "=" inputTable is converted to equation .
    // Equation is solved and value of is returned by eqResult
    // If invalid invalid sing is placed at the end of equation error is thrown.
    if (keyValue == "=") {
      try{
        if(tempNum.length !=0 ){
          inputTable.push(tempNum.join(""));
          tempNum.length = 0;
        }
        displayResult = eval(inputTable.join(""));
      }catch(err){
        displayResult = "Invalid operation";
      }
    }

    //Displays value in displayDiv
    $("div.displayDiv").html(displayResult);

    // Displays value in displayOperations div
    $("div.displayOperations").html(displayVal);
  });

});

//Is chcecking if tempNum was pushed to inputTable
function checkTempNumber(){
  if(tempNum.length !=0 ){
    inputTable.push(tempNum.join(""));
    tempNum.length = 0;
  }
}
// Function calculating percent
function percentCount(num, amount){
  return num*amount/100;
}

// Function is checking if clicked value is number or mathematical sign.
function checkIfNumber(val) {
  if (!isNaN(val)) {
    return val;
  } else {
    if (val == "devide") {
      return "/";
    } else if (val == "percent") {
      return "per";
    } else if (val == "power") {
      return "pow";
    } else if (val == "square") {
      return "sqrt";
    } else if (val == "multiply") {
      return "*";
    } else if (val == "substract") {
      return "-";
    } else if (val == "add") {
      return "+";
    } else if (val == "point") {
      return ".";
    } else if (val == "result") {
      return "=";
    } else if (val == "ac") {
      return "ac";
    } else if (val == "ce") {
      return "ce";
    } else if (val == "left") {
      return "(";
    } else if (val == "right") {
      return ")";
    }
  }
}
