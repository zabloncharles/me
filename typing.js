// set up text to print, each item in array is new line
var aText = new Array(
  "In computer programming terms, an algorithm is a set of well-defined instructions.",
  "They are written to solve a particular problem.",
  "It takes a set of input(s) and produces the desired output.",
  "In computer programming terms, an algorithm is a set of well-defined instructions.",
  "They are written to solve a particular problem.",
    "It takes a set of input(s) and produces the desired output.",
  "In computer programming terms, an algorithm is a set of well-defined instructions.",
  "They are written to solve a particular problem.",
    "It takes a set of input(s) and produces the desired output.",
  "In computer programming terms, an algorithm is a set of well-defined instructions.",
  "They are written to solve a particular problem.",
  "It takes a set of input(s) and produces the desired output."
);

var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row
var tapped = 0;
function typewriter() {
    tapped++;
    var nextbutton = document.getElementById("next-button");
    nextbutton.innerHTML = "Next";
    nextbutton.style.backgroundColor = "#303030";
    
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br /> <br> // ";
  }
  destination.innerHTML =
      sContents + aText[iIndex].substring(0, iTextPos) + "_";
    let scroll_to_bottom = document.getElementById("typedtext");
    scroll_to_bottom.scrollTop = scroll_to_bottom.scrollHeight;
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
      if (iIndex != aText.length) {
        //tapped here is us tappin n going to next array
          iArrLength = aText[tapped].length;
         
          
         
      setTimeout("typewriter()", 500);
    }
  } else {
      setTimeout("typewriter()", iSpeed);
  }
}

typewriter();
