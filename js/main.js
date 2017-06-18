$(document).ready(function() {


  $(document.body).click(function(eve) {

    var clicked = eve.target;
    var currId = clicked.id || "null"; // Is getting button ID when button is pressed and storing in currId value.
    console.log(checkIfNumber(currId));

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
    }
  }
}
