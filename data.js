var topicData = [
  {
    title: "WHAT IS AN AlGORITHM?",
    num: "0",
    desc: "In computer programming terms, an algorithm is a set of well-defined instructions to solve a particular problem. It takes a set of input(s) and produces the desired output.o",
    image: "https://images.hdqwalls.com/wallpapers/boy-with-dog-o0.jpg",
    lesson:
      'An algorithm is a single, specific way of performing a complex task efficiently and repeatedly. The algorithm works by performing all of the smaller steps you need to do to perform the complex task, and is guaranteed to work (something that doesn\'t really work or only works sometimes would just be considered incomplete). To use a non-programming example, consider a manufacturing plant for a cookie company. The machines have pre-determined procedures for making chocolate chip cookies, oatmeal raisin abominations cookies, and sugar cookies. Now imagine that you\'re the guy whose job it is to switch the production lines to a new recipe whenever you change what kind of cookie you\'re making. It would be a huge pain if, every time you had to manually input the recipe, and give the machines instructions like measure 50kg of chocolate chips and move the flour bin at 0.1 m/s until it reaches the mixing bowl, and then rotate it at 0.25°/s until all of the flour is in the mixing bowl. It would take a ton of time, and even if you knew the recipes by heart it would still be way too easy to make a tiny mistake and cover the floor in raisins.Instead, the machine has preset routines. You push the "sugar cookie" button, and it follows the exact steps you gave it to make sugar cookies, every time. You don\'t have to worry about stupid mistakes, and it doesn\'t take you three hours to input the instructions.Algorithms are like those routines. Computer programs have thousands of tasks that are used over and over again. Things like "sort this list of numbers," "draw a triangle with these vertexes and this color," and "save this file." People have worked out efficient, consistent ways of doing those tasks, and now everyone just uses those instead of doing it themselves every time. Some algorithms are designed for less common things, like finding special prime numbers: not things people do all the time, but things where coming up with a better way of doing them is still a big deal.In the end, "algorithm" is basically just a fancy term for "method of doing something complicated/repetitive/irritating."\', \'Things like "sort this list of numbers"',
  },
  {
    title: "Data Structure and Types",
    num: "1",
    desc: "Data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/002/099/721/small/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg",
    lesson:
      "Why is life soo wack nowadays.sufgisugfiugfiugsiufgjuhfufhsfufu.fusiufghiufu",
  },
  {
    title: "Why learn DSA?",
    num: "2",
    desc: "In this article, we will learn why every programmer should learn data structures and algorithms with the help of examples.This article is for those who have just started learning algorithms and wondered how impactful it will be to boost their career/programming skills.",
    image: "",
    lesson: "So fucking stressed yoo",
  },
  {
    title: "Asymptotic Analysis: Big-O Notation and More",
    num: "3",
    desc: "The efficiency of an algorithm depends on the amount of time, storage and other resources required to execute the algorithm. The efficiency is measured with the help of asymptotic notations.",
    image:
      "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png",
  },
  {
    title: "Master Theorem",
    num: "4",
    desc: "In this tutorial, you will learn what master theorem is and how it is used for solving recurrence relations.The master method is a formula for solving recurrence relations of the form:",
    image:
      "https://media.istockphoto.com/photos/mountain-landscapes-picture-id108125029?b=1&k=20&m=108125029&s=170667a&w=0&h=L5kspxyBuqkMPMq9NP-0g3iTj7sCWjSXikPe_Kc4Ne8=",
  },
  {
    title: "Divide and Conquer Algorithm",
    num: "5",
    desc: "The divide and conquer algorithm's operation will be explained in this lesson. To tackle a recursive problem, we will contrast the divide and conquer strategy with various methods.",
    image: "",
  },
  {
    title: "Stack Data Structure",
    num: "6",
    desc: "You will learn about the stack data structure and how it is implemented in Python, Java, and C/C++ in this course.Stacks are linear data structures that adhere to the Last In First Out rule (LIFO). This implies that the last piece to be added to the stack gets eliminated first.",
    image: "",
  },
  {
    title: "Queue Data Structure",
    num: "7",
    desc: "You will learn what a queue is in this tutorial. Additionally, queue implementations are available in Python, Java, C, and C++.In programming, a queue is a useful data structure. It is comparable to the line for tickets outside a movie theater, where the person who joins the line first receives the first ticket.",
    image: "",
  },
  {
    title: "Types of Queues",
    num: "8",
    desc: "This tutorial will teach you about different types of queues and illustrate them.In programming, a queue is a useful data structure. It's similar to the ticket line outside a movie theater, where the first person to enter the line gets the first ticket.",
    image: "",
  },
  {
    title: "Circular Queue Data Structure",
    num: "9",
    desc: "This tutorial will teach you what a circular queue is. There are also circular queue implementations in C, C++, Java, and Python.",
    image: "",
  },
  {
    title: "Priority Queue",
    num: "10",
    desc: "This tutorial will teach you what a priority queue is. You will also learn about its Python, Java, C, and C++ implementations.A priority queue is a type of queue in which each element has a different priority value. Furthermore, elements are served in the order of their priority. That is, the elements with the highest priority are served first.",
    image: "",
  },
  {
    title: "Deque Data Structure",
    num: "11",
    desc: "This tutorial will teach you what a double ended queue (deque) is. There are also working examples of various operations on a deque in C, C++, Java, and Python.",
    image: "",
  },
  {
    title: "",
    num: "",
    desc: "",
    image: "",
  },
  {
    title: "",
    num: "",
    desc: "",
    image: "",
  },
  {
    title: "",
    num: "",
    desc: "",
    image: "",
  },
  {
    title: "",
    num: "",
    desc: "",
    image: "",
  },
];
var numberofdata = topicData.length;

var noimage = [];
var haveimages = [];

function getdata() {
  for (var i = 0; i < topicData.length; i++) {
    if (topicData[i].desc == "") {
      break;
    }
    // let elem = document.getElementById("topic-card").cloneNode(true);
    let elem = document.createElement("div");
    elem.setAttribute("class", "topic-card");
    let topicinfo = document.createElement("div");
    topicinfo.setAttribute("class", "topic-info");
    let topicpicture = document.createElement("div");
    topicpicture.setAttribute("class", "topic-picture");

    var title = document.createElement("div");
    title.className = "topic-card-title";
    var titletext = document.createTextNode(topicData[i].title);
    title.appendChild(titletext);
    topicpicture.appendChild(title);

    var num = document.createElement("div");
    num.className = "topic-card-ln";
    var numtext = document.createTextNode("LESSON " + i);
    num.appendChild(numtext);
    topicpicture.appendChild(num);

    topicinfo.appendChild(topicpicture);

    var desc = document.createElement("div");
    desc.className = "topic-card-desc";
    var desctext = document.createTextNode(topicData[i].desc);
    desc.appendChild(desctext);

    topicinfo.appendChild(desc);

    //MARK: THe button
    var button = document.createElement("div");
    button.className = "card-button";
    button.setAttribute("id", "card-btn-" + i);
    button.addEventListener("click", changetopic);
    var buttontext = document.createTextNode("START");
    button.appendChild(buttontext);

    topicinfo.appendChild(button);

    var randomimage = Math.floor(Math.random() * haveimages.length);
    var randomimages = [];
    randomimages.push(randomimage);
    if (topicData[i].image == "") {
      noimage.push(i);
      if (randomimages[randomimages.length - 1] == randomimage) {
        randomimage = Math.floor(Math.random() * haveimages.length);
      }
      topicpicture.style.backgroundImage =
        'url("' + encodeURI(topicData[randomimage].image) + '")';

      // "url(https://source.unsplash.com/random/?landscape,night)";
    } else {
      haveimages.push(i);
      topicpicture.style.backgroundImage =
        'url("' + encodeURI(topicData[i].image) + '")';
    }

    elem.appendChild(topicinfo);
    document.getElementById("bottom-container").appendChild(elem);
  }
}
var topicNumber = 0;

// set up text to print, each item in array is new line
var str = topicData[topicNumber].lesson;
var substrings = str.split("."); //turn subsrting to indexed text
var aText = substrings; //each sentence array
var iSpeed = 90; // time delay of print out
var iIndex = 0; // start printing array at this position

var inText = 0;
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = aText[0].length;
// start scrolling up at this many lines

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

var hold = 0;
function tappedGetStarted() {
  if (hold == 1) {
    init();
    hold = 0;
  }

  str = topicData[0].lesson;
  substrings = str.split(".");
  var consolePrompt = document.getElementById("console-prompt");
  consolePrompt.innerHTML =
    "Lesson " + topicNumber + " : " + topicData[topicNumber].title;

  var nextbutton = document.getElementById("next-button");
  nextbutton.innerHTML = "Next";
  nextbutton.style.backgroundColor = "#303030";

  inText++;
  typewriter();
}

var changetopic = function () {
  hold = 1;
  var thenum = this.id.replace(/^\D+/g, "");
  topicNumber = thenum;
  var consolePrompt = document.getElementById("console-prompt");
  consolePrompt.innerHTML =
    "Lesson " + topicNumber + " : " + topicData[topicNumber].title;
  var nextbutton = document.getElementById("next-button");
  nextbutton.innerHTML = "GET STARTED";
  nextbutton.style.backgroundColor = "blue";
  //gets the id of the card button
  

  //changes the page text and topic
  document.getElementById("topic-title").innerHTML = topicData[thenum].title;
  document.getElementById("topic-desc").innerHTML = topicData[thenum].desc;

  //Change button color and text to reviewed
  var buttonClicked = document.getElementById("card-btn-" + thenum);
  buttonClicked.innerHTML = "REVIEW";
  buttonClicked.setAttribute("class", "card-button-selected");

  old.style.display = "none";
  button.style.display = "none";
};
function init() {
  str = topicData[topicNumber].lesson;

  substrings = str.split("."); //turn subsrting to indexed text

  aText = substrings; //each sentence array
  iSpeed = 90; // time delay of print out
  iIndex = 0; // start printing array at this position

  inText = 0;
  iArrLength = aText[0].length; // the length of the text array
  iScrollAt = aText[0].length; // start scrolling up at this many lines

  iTextPos = 0; // initialise text position
  sContents = ""; // initialise contents variable
  iRow; // initialise current row
  tapped = 0;
  called = 0;
  button = document.createElement("div");
  button.className = "typing";
  button.setAttribute("typinga", "id");
  old = document.createElement("div");
  old.className = "old";
  blinker = document.createElement("span");
  blinker.className = "blink";
}
var loop = 0;
function typewriter() {
  loop++;

  called++;

  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");
  destination.appendChild(old);
  destination.appendChild(button);

  while (iRow < iIndex) {
    sContents += aText[iRow++] + ".<br /> <br>";
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
