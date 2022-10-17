// set up text to print, each item in array is new line
var bText = new Array(
  'An algorithm is a single, specific way of performing a complex task efficiently and repeatedly. The algorithm works by performing all of the smaller steps you need to do to perform the complex task, and is guaranteed to work (something that doesn\'t really work or only works sometimes would just be considered incomplete). To use a non-programming example, consider a manufacturing plant for a cookie company. The machines have pre-determined procedures for making chocolate chip cookies, oatmeal raisin abominations cookies, and sugar cookies. Now imagine that you\'re the guy whose job it is to switch the production lines to a new recipe whenever you change what kind of cookie you\'re making. It would be a huge pain if, every time you had to manually input the recipe, and give the machines instructions like measure 50kg of chocolate chips and move the flour bin at 0.1 m/s until it reaches the mixing bowl, and then rotate it at 0.25°/s until all of the flour is in the mixing bowl. It would take a ton of time, and even if you knew the recipes by heart it would still be way too easy to make a tiny mistake and cover the floor in raisins.Instead, the machine has preset routines. You push the "sugar cookie" button, and it follows the exact steps you gave it to make sugar cookies, every time. You don\'t have to worry about stupid mistakes, and it doesn\'t take you three hours to input the instructions.Algorithms are like those routines. Computer programs have thousands of tasks that are used over and over again. Things like "sort this list of numbers," "draw a triangle with these vertexes and this color," and "save this file." People have worked out efficient, consistent ways of doing those tasks, and now everyone just uses those instead of doing it themselves every time. Some algorithms are designed for less common things, like finding special prime numbers: not things people do all the time, but things where coming up with a better way of doing them is still a big deal.In the end, "algorithm" is basically just a fancy term for "method of doing something complicated/repetitive/irritating."', 'Things like "sort this list of numbers'
);
let str = bText[1];
let substrings = str.split("."); //turn subsrting to indexed text

var aText = substrings; //each sentence array
var iSpeed = 90; // time delay of print out
var iIndex = 0; // start printing array at this position

var inText = 0;
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = aText[0].length; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row
var tapped = 0;
var called = 0;
var button = document.createElement("div");
button.className = "typing";
var old = document.createElement("div");
old.className = "old";
var blinker = document.createElement("span");
blinker.className = "blink";

function tappedGetStarted() {
  var consolePrompt = document.getElementById("console-prompt");
  consolePrompt.innerHTML = "Lesson 1";

  //consolePrompt.style.display = "none";
  inText++;

  typewriter();
}
function typewriter() {
  called++;
  var nextbutton = document.getElementById("next-button");
  nextbutton.innerHTML = "Next";
  nextbutton.style.backgroundColor = "#303030";

  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");
  destination.appendChild(old);
  destination.appendChild(button);
  

  while (iRow < iIndex) {
    sContents += aText[iRow++] + ".<br /> <br>";
    // aText[iRow++] + ".<br /> <br>" + iTextPos + "idesx" + iArrLength + " tapped " + "<br />
  }

  //MARK: THe button

  if (inText > 1) {
    old.innerHTML = "//" + sContents;
    
  } else {
    old.innerHTML = sContents;
  }

 
  
  button.innerHTML = "//" + aText[iIndex].substring(0, iTextPos) + "_";
  button.innerHTML = "//" + aText[iIndex].substring(0, iTextPos);
  button.appendChild(blinker);
  blinker.innerHTML = "_";

  let scroll_to_bottom = document.getElementById("typedtext");
  scroll_to_bottom.scrollTop = scroll_to_bottom.scrollHeight;

  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      //tapped here is us tappin n going to next array
      iArrLength = aText[inText].length;
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}
