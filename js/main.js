$(document).ready(function() {

  var displayVal = ""; // is storing equation
  var displayResult = 0; // is storing result of equation
  var inputTable = [];
  $(document.body).click(function(eve) {
    var clicked = eve.target;
    var currId = clicked.id; // Is getting button ID when button is pressed and storing in currId value.

    var keyValue = checkIfNumber(currId);


    // Is adding key pressed values to inputTable
    if (keyValue !== "=" && keyValue != "ce" && keyValue != "ac") {
      displayVal += keyValue;
      inputTable.push(keyValue);
    }

    if (keyValue == "ce") {
      displayVal = "";
      displayResult = "0";
      inputTable.length = 0;
    }

    if(keyValue == "ac"){
      inputTable = inputTable.splice(0,inputTable.length-1);
      console.log(inputTable);
      displayVal = inputTable.join("");
    }

    // When keyValue equals to "=" inputTable is converted to equation .
    // Equation is solved and value of is returned by eqResult
    if (keyValue == "=") {
      displayResult = eval(inputTable.join(""));
    }

    //Displays value in displayDiv
    $("div.displayDiv").html(displayResult);

    // Displays value in displayOperations div
    $("div.displayOperations").html(displayVal);
  });

});

// Function is checking if clicked value is number or mathematical sign.
function checkIfNumber(val) {
  if (!isNaN(val)) {
    return val;
  } else {
    if (val == "devide") {
      return "/";
    } else if (val == "percent") {
      return "%";
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
