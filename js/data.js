var topicData = [
  {
    title: "WHAT IS AN AlGORITHM?",
    num: "0",
    desc: "In computer programming terms, an algorithm is a set of well-defined instructions to solve a particular problem. It takes a set of input(s) and produces the desired output.o",
    image: "https://images.hdqwalls.com/wallpapers/boy-with-dog-o0.jpg",
    lesson:
      "An algorithm is a single, specific way of performing a complex task efficiently and repeatedly. The algorithm works by performing all of the smaller steps you need to do to perform the complex task, and is guaranteed to work (something that doesn't really work or only works sometimes would just be considered incomplete). To use a non-programming example, consider a manufacturing plant for a cookie company. The machines have pre-determined procedures for making chocolate chip cookies, oatmeal raisin abominations cookies, and sugar cookies. Now imagine that you're the guy whose job it is to switch the production lines to a new recipe whenever you change what kind of cookie you're making. It would be a huge pain if, every time you had to manually input the recipe, and give the machines instructions like measure 50kg of chocolate chips and move the flour bin at 0.1 m/s until it reaches the mixing bowl, and then rotate it at 0.25°/s until all of the flour is in the mixing bowl. It would take a ton of time, and even if you knew the recipes by heart it would still be way too easy to make a tiny mistake and cover the floor in raisins.Instead, the machine has preset routines. You push the sugar cookie button, and it follows the exact steps you gave it to make sugar cookies, every time. You don't have to worry about stupid mistakes, and it doesn't take you three hours to input the instructions.Algorithms are like those routines. Computer programs have thousands of tasks that are used over and over again. Things like sort this list of numbers, draw a triangle with these vertexes and this color,and save this file. People have worked out efficient, consistent ways of doing those tasks, and now everyone just uses those instead of doing it themselves every time. Some algorithms are designed for less common things, like finding special prime numbers: not things people do all the time, but things where coming up with a better way of doing them is still a big deal.In the end, algorithm is basically just a fancy term for method of doing something complicated/repetitive/irritating.', 'Things like 'sort this list of numbers",
  },
  {
    title: "Data Structure and Types",
    num: "1",
    desc: "Data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/002/099/721/small/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg",
    lesson:
      "In this article, you will learn about data structure and its types.What are Data Structures?.Data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.Depending on your requirement and project, it is important to choose the right data structure for your project. For example, if you want to store data sequentially in the memory, then you can go for the Array data structure.Note: Data structure and data types are slightly different. Data structure is the collection of data types arranged in a specific order. Basically, data structures are divided into two categories:Linear data structure and Non-linear data structure.Let's learn about each type in detail.In linear data structures, the elements are arranged in sequence one after the other. Since elements are arranged in particular order, they are easy to implement.However, when the complexity of the program increases, the linear data structures might not be the best choice because of operational complexities.",
  },
  {
    title: "Why learn DSA?",
    num: "2",
    desc: "In this article, we will learn why every programmer should learn data structures and algorithms with the help of examples.This article is for those who have just started learning algorithms and wondered how impactful it will be to boost their career/programming skills.",
    image: "",
    lesson: "What are data structures?\n\nSimply put, data structures are ways in which we can organize information to make use of it for computation. Data structures and Algorithms are the core pillars of Computer Science. Almost all code consists of some sort of algorithms operating on one or more data structures. As a real-life example of a data structure, consider a dictionary. A dictionary is a book which associates words with definitions of those words, and is organized alphabetically. The way it is organized allows you to search for a particular word quickly, and access the definition for that word. In programming, we actually have a data structure called a dictionary, also known as an \"associative array\" or a \"hash table\", which does something similar. There are lots of other data structures such as linked lists, arrays, trees and so on which all have different strengths and weaknesses. As you learn more about programming you will become familiar with several of the most common data structures no doubt.\n\nIs it a piece of code? Is it particular to one language?\n\nA data structure is really a theoretical construct. In textbooks and computer science papers you can find lots of definitions of data structures which are completely abstracted away from any particular real-world programming language. In principle any data structure could be implemented in any programming language.\n\nHowever life is not all theory. In practical programming we need to use various data structures all the time. So every programming language include concrete implementations of different data structures, either as a built-in part of the language or with the standard libraries. All programming languages support some primitive data structures but which ones precisely and how they are implemented depends on the language.\n\nWho comes up with a better data structure?\n\nAlgorithms and data structures go hand-in-hand and both are very much still active areas of research. Computer science researchers are always trying to come up with better data structures that can solve various problems. There are many many specialized data structures that are relevant in different fields from databases to artificial intelligence to computer graphics, computational biology, etc. A lot of computer science papers are essentially like: \"We identified a problem, so we created this new algorithm based on this new data structure that is some % faster than the previous best one, here are some benchmark results.\"\n\nCan all programmers write data structures?\n\nA programmer with a formal education in computer science will certainly know how to write their own implementations of all the classic data structures. However in the industry, programmers don't often have to resort to reinventing the wheel. For most problems you will encounter as you make your iPhone app or your web service or whatever you might be working on you will be able to use the very finely-tuned, efficient, thoroughly tested and debugged data structures provided with your language or there will be some library available that gives you what you need.\n\nWhat makes one better than another?\n\nSometimes two data structures can be used to solve the same problem, but one will be faster than the other at the cost of taking up more memory. Often times it there will be tradeoffs like that which a programmer has to weigh up against one another as they choose the best approach to the task. Every data structure supports a certain set of operations that allow you to read from / write to / change the structure. Each structure can do some operations faster than others, and which structure you choose usually has to do with what exactly you intend to use it for.\n\nWay out on the cutting edge you can find some data structures that are very specialized, intended to be used on exotic hardware or for special problems such as weather simulation on a supercomputer, or machine learning on a quantum computer, or for an MRI machine scanning the brain."
  },
  {
    title: "Asymptotic Analysis: Big-O Notation and More",
    num: "3",
    desc: "The efficiency of an algorithm depends on the amount of time, storage and other resources required to execute the algorithm. The efficiency is measured with the help of asymptotic notations.",
    image:
      "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png",
    lesson: "In this tutorial, you will learn what asymptotic notations are. Also, you will learn about Big-O notation, Theta notation and Omega notation.\n\nThe efficiency of an algorithm depends on the amount of time, storage and other resources required to execute the algorithm. The efficiency is measured with the help of asymptotic notations.\n\nAn algorithm may not have the same performance for different types of inputs. With the increase in the input size, the performance will change.\n\nThe study of change in performance of the algorithm with the change in the order of the input size is defined as asymptotic analysis.\n\nAsymptotic notations are the mathematical notations used to describe the running time of an algorithm when the input tends towards a particular value or a limiting value.\n\nFor example: In bubble sort, when the input array is already sorted, the time taken by the algorithm is linear i.e. the best case.\n\nBut, when the input array is in reverse condition, the algorithm takes the maximum time (quadratic) to sort the elements i.e. the worst case.\n\nWhen the input array is neither sorted nor in reverse order, then it takes average time. These durations are denoted using asymptotic notations.\n\nThere are mainly three asymptotic notations:\n\nBig-O notation.\nOmega notation.\nand Theta notation.\nBig-O notation represents the upper bound of the running time of an algorithm. Thus, it gives the worst-case complexity of an algorithm. This is basically the worst time our algorythm can take to complete a simple task.\nBig-O gives the upper bound of a function.\nO(g(n)) = { f(n): there exist positive constants c and n0\n            such that 0 ≤ f(n) ≤ cg(n) for all n ≥ n0 }.\n            The above expression can be described as a function f(n) belongs to the set O(g(n)) if there exists a positive constant c such that it lies between 0 and cg(n), for sufficiently large n.\n            For any value of n, the running time of an algorithm does not cross the time provided by O(g(n)).\n\nSince it gives the worst-case running time of an algorithm, it is widely used to analyze an algorithm as we are always interested in the worst-case scenario.\nOmega notation represents the lower bound of the running time of an algorithm. Thus, it provides the best case complexity of an algorithm.\nOmega gives the lower bound of a function.\nΩ(g(n)) = { f(n): there exist positive constants c and n0 \n            such that 0 ≤ cg(n) ≤ f(n) for all n ≥ n0 }.\n            The above expression can be described as a function f(n) belongs to the set Ω(g(n)) if there exists a positive constant c such that it lies above cg(n), for sufficiently large n.\n\nFor any value of n, the minimum time required by the algorithm is given by Omega Ω(g(n)).\nTheta Notation (Θ-notation).\nTheta notation encloses the function from above and below. Since it represents the upper and the lower bound of the running time of an algorithm, it is used for analyzing the average-case complexity of an algorithm.\nFor a function g(n), Θ(g(n)) is given by the relation:\n\nΘ(g(n)) = { f(n): there exist positive constants c1, c2 and n0\n            such that 0 ≤ c1g(n) ≤ f(n) ≤ c2g(n) for all n ≥ n0 }.\nThe above expression can be described as a function f(n) belongs to the set Θ(g(n)) if there exist positive constants c1 and c2 such that it can be sandwiched between c1g(n) and c2g(n), for sufficiently large n.\n\nIf a function f(n) lies anywhere in between c1g(n) and c2g(n) for all n ≥ n0, then f(n) is said to be asymptotically tight bound.",
  },
  {
    title: "Master Theorem",
    num: "4",
    desc: "In this tutorial, you will learn what master theorem is and how it is used for solving recurrence relations.The master method is a formula for solving recurrence relations of the form:",
    image:
      "https://media.istockphoto.com/photos/mountain-landscapes-picture-id108125029?b=1&k=20&m=108125029&s=170667a&w=0&h=L5kspxyBuqkMPMq9NP-0g3iTj7sCWjSXikPe_Kc4Ne8=",
    lesson: "444444 So fucking stressed yoo",
  },
  {
    title: "Divide and Conquer Algorithm",
    num: "5",
    desc: "The divide and conquer algorithm's operation will be explained in this lesson. To tackle a recursive problem, we will contrast the divide and conquer strategy with various methods.",
    image: "",
    lesson: "555555So fucking stressed yoo",
  },
  {
    title: "Stack Data Structure",
    num: "6",
    desc: "You will learn about the stack data structure and how it is implemented in Python, Java, and C/C++ in this course.Stacks are linear data structures that adhere to the Last In First Out rule (LIFO). This implies that the last piece to be added to the stack gets eliminated first.",
    image: "",
    lesson: "6666So fucking stressed yoo",
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
var cardsReturned = 8;

function getdata() {
  for (var i = 0; i < cardsReturned; i++) {
    if (topicData[i].desc == "") {
      break;
    }
    // let elem = document.getElementById("topic-card").cloneNode(true);
    let elem = document.createElement("div");
    elem.setAttribute("class", "topic-card-build topic-card");
    elem.setAttribute("id", "topic-card-" + i);
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

  document.getElementById("side-way-time").innerHTML = "0/" + cardsReturned;
}
var topicNumber = 0;
// set up text to print, each item in array is new line
var strr = topicData[0].lesson;

var removeurl = strr.split(">");

//get url out of lessont text --------------------------------
var count = 0;
var hasNoImage = [];
var hasImage = [];
var lessonImages = [];
var filtered = removeurl.filter(function (strings) {
  var result = strings.includes("http");
  if (result) {
    hasImage += count;
    lessonImages.push(removeurl[count]);
  } else {
    hasNoImage += count;
  }
  console.log("array has no image " + hasNoImage);
  console.log("array has image " + hasImage);
  count++;
});
console.log(lessonImages);
//add the text back together -------------------------------------
var withouturl;
for (var i = 0; i < hasNoImage.length; i++) {
  withouturl += removeurl[hasNoImage[i]];
}

//Regular vars ------------------------------------------------
var strd = withouturl;
var str = topicData[0].lesson;
var substrings = str.split("."); //turn subsrting to indexed text
var eachSentence = substrings; //each sentence array
var typingSpeed = 60; // time delay of print out
var iIndex = 0; // start printing array at this position
var inText = 0;
var textArrayLength = eachSentence[0].length; // the length of the text array
var iScrollAt = eachSentence[0].length;
// start scrolling up at this many lines
var iTextPos = 0; // initialise text position
var typingContent = ""; // initialise contents variable
var currentRow; // initialise current row
var tapped = 0;
var button = document.createElement("div");
button.className = "typing";
var old = document.createElement("div");
old.className = "old";
var blinker = document.createElement("span");
blinker.className = "blink";
var doneTyping = 0;
var topicChanged = 0;
var currentLesson = 0;
var getStartedButton = document.getElementById("next-button");
var stopTyping = false;
var typingInProgress = 0;
var ideStartButton = document.getElementById("next-line");
var currentImage;
var idePrompt = document.getElementById("console-prompt");

var completedLessons = [];
if (currentLesson === 0) {
  document.getElementById("next-line").innerHTML = "START";
}
var alreadyClickedCards = [0];
var currentIdeStyle = 0;
var canSkipLesson = false;
var lessonCompleted = false;
//MARK: TAppedget canSkipLesson button
getStartedButton.style.animation = "1.5s linear infinite led";
ideStartButton.style.display = "none";
function tappedGetStarted() {
  getStartedButton.style.animation = "none";

  if (typingInProgress) {
    return;
  }
  stopTyping = false;
  getStartedButton.innerHTML = "IN PROGRESS";
  getStartedButton.style.backgroundColor = "#303030";
  handleNextLine();
  console.log(eachSentence[5]);
  //MARK: FIRST TOPIC HAS BEEN STARTED
  if (topicNumber == 0) {
    var startedChapter = document.getElementById("card-btn-0");
  startedChapter.innerHTML = "CURRENT";
  startedChapter.style.backgroundColor = "#303030";
  }
  
}

var destination = document.getElementById("typedtext");
var tempTyper = document.createElement("div");
var blinktemp = document.createElement("span");
var previousLesson;
var temp = 0;

//MARK: Change the topic

var changetopic = function () {
  stopTyping = true;
  topicChanged = 1;

  //add the number of words to the ide

  var clickedTopic = this.id.replace(/^\D+/g, "");
  topicNumber = clickedTopic;

  if (currentIdeStyle == 2) {
    idePrompt.style.backgroundImage = topicData[topicNumber].image
      ? 'url("' + encodeURI(topicData[topicNumber].image) + '")'
      : "url(https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png)";
    idePrompt.style.backgroundSize = "cover";
    idePrompt.style.backgroundPosition = "center";
  }

  str = topicData[topicNumber].lesson;
  if (str) {
    substrings = str.split("."); //turn subsrting to indexed text
  } else {
    var subo = "There is no lesson yet. Come back later!";
    substrings = subo.split(".");
  }

  eachSentence = substrings; //each sentence array
  typingSpeed = 60; // time delay of print out
  iIndex = 0; // start printing array at this position

  textArrayLength, (iScrollAt = eachSentence[0].length); // the length of the text array

  var numberOfWords = document.getElementById("number-of-words");
  numberOfWords.innerHTML = iTextPos + "/" + textArrayLength;

  alreadyClickedCards += clickedTopic; //aleady clicked cards
  var alreadyClickedCardsLength = alreadyClickedCards.length;
  previousLesson = alreadyClickedCards[alreadyClickedCards.length - 1];

  var consolePrompt = document.getElementById("console-prompt");
  consolePrompt.innerHTML =
    "Lesson " + topicNumber + " : " + topicData[topicNumber].title;

  getStartedButton.innerHTML = "GET STARTED";

  document.getElementById("lesson-number").innerHTML =
    "LESSON " + topicData[clickedTopic].num;
  getStartedButton.style.backgroundColor = "blue";
  //gets the id of the card button

  //changes the page text and topic
  document.getElementById("topic-title").innerHTML =
    topicData[clickedTopic].title;
  document.getElementById("topic-desc").innerHTML =
    topicData[clickedTopic].desc;
  currentImage = topicData[clickedTopic].image;
  //if the background has an image change it if not put 0
  console.log(previousLesson);
  console.log(alreadyClickedCards);

  if (alreadyClickedCards.length > 0) {
    var buttonLast = document.getElementById(
      "card-btn-" + alreadyClickedCards[alreadyClickedCardsLength - 2]
    );
    buttonLast.innerHTML = " &#10003; RE-VISIT";
    buttonLast.setAttribute("class", "re-visit");
  }

  ideStartButton.innerHTML = "START";
  //Change button color and text to reviewed
  var buttonClicked = document.getElementById("card-btn-" + clickedTopic);
  buttonClicked.innerHTML = "CURRENT";
  buttonClicked.setAttribute("class", "card-button-selected");

  old.style.display = "none";
  button.style.display = "none";
  temp++;

  //your code to be executed after 1 second

  tempTyper.className = "typing";
  tempTyper.style.marginTop = "5px";
  tempTyper.setAttribute("id", "tempTyper");

  blinktemp.className = "blink";
  blinktemp.innerHTML = "// ";
  tempTyper.appendChild(blinktemp);
  destination.appendChild(tempTyper);
  //setTimeout(function () {

  //}, 1000);
};
function init() {
  str = topicData[topicNumber].lesson;

  substrings = str.split("."); //turn subsrting to indexed text

  eachSentence = substrings; //each sentence array
  typingSpeed = 60; // time delay of print out
  iIndex = 0; // start printing array at this position

  textArrayLength = eachSentence[0].length; // the length of the text array
  iScrollAt = eachSentence[0].length; // start scrolling up at this many lines

  iTextPos = 0; // initialise text position
  typingContent = ""; // initialise contents variable
  currentRow; // initialise current row
  tapped = 0;

  button = document.createElement("div");
  button.className = "typing";
  button.setAttribute("typinga", "id");
  old = document.createElement("div");
  old.className = "old";
  blinker = document.createElement("span");
  blinker.className = "blink";
}

function handleNextLine() {
  if (typingInProgress) {
    return;
  }

  if (topicChanged) {
    init();
    topicChanged = 0;
    document
      .getElementById("typedtext")
      .removeChild(document.getElementById("tempTyper"));
  }

  str = topicData[topicNumber].lesson;
  substrings = str.split(".");
  var consolePrompt = document.getElementById("console-prompt");
  consolePrompt.innerHTML =
    "Lesson " + topicNumber + " : " + topicData[topicNumber].title;

  stopTyping = false;
  ideStartButton.innerHTML = "WAIT";
  ideStartButton.style.color = "gray";
  ideStartButton.style.animation = "none";
  typewriter();
}

var lettersTyped = 0;
var b = topicData[0].lesson.split(">");
var newDiv = document.createElement("div");
var iDiv = document.createElement("div");
var lineImage = b[1];
function typewriter() {
  if (stopTyping) {
    typingInProgress = 0;
    lettersTyped = 0;
    iTextPos = 0;
    textArrayLength = 0;

    return;
  }
  lettersTyped++;
  typingInProgress++;

  //if typingInProgress is more than 0 lock this

  typingContent = " ";
  currentRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");
  destination.appendChild(old);
  destination.appendChild(button);

  while (currentRow < iIndex) {
    typingContent += eachSentence[currentRow++] + ".<br /> <br>";
  }

  //MARK: THe button

  if (iIndex > 1) {
    old.innerHTML = "//" + typingContent;
  } else {
    old.innerHTML = typingContent;
  }

  button.innerHTML = "//" + eachSentence[iIndex].substring(0, iTextPos) + "_";
  button.innerHTML = "//" + eachSentence[iIndex].substring(0, iTextPos);

  button.appendChild(blinker);
  blinker.innerHTML = "_";
  //console.log(lettersTyped);
  //Scroll to bottom of Ide as typing continues
  let scroll_to_bottom = document.getElementById("typedtext");
  scroll_to_bottom.scrollTop = scroll_to_bottom.scrollHeight;

  if (iTextPos++ == textArrayLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != eachSentence.length) {
      //tapped here is us tappin n going to next array

      textArrayLength = eachSentence[iIndex].length;

      //Change the button color
      var nextbutton = document.getElementById("next-button");
      nextbutton.style.backgroundColor = "blue";
    }

    typingInProgress = 0;
    var ideStartButton = document.getElementById("next-line");
    if (lettersTyped >= topicData[topicNumber].lesson.length) {
      getStartedButton.innerHTML = "COMPLETED";
      completedLessons += topicNumber;
      console.log("completed " + completedLessons);
      ideStartButton.style.display = "none";
      lessonCompleted = true;
    } else {
      ideStartButton.style.display = "";
      ideStartButton.innerHTML = "CONTINUE";
      ideStartButton.style.color = "orange";
      ideStartButton.style.animation = "led 1.5s infinite linear";

      //nextbutton.innerHTML = "Next";
      getStartedButton.style.animation = "none";
      getStartedButton.innerHTML = "IN PROGRESS";
      getStartedButton.style.backgroundColor = "#303030";
      lessonCompleted = false;

      //    if (the line has a image) {
      //    var ideArea = document.getElementById("typedtext");
      //   var newdv = document.createElement("div");
      //  newdv.setAttribute("class", "ide-image");
      //  ideArea.appendChild(newdv);
      //  }
    }
  } else {
    setTimeout("typewriter()", typingSpeed);
    // console.log("every " + typingInProgress);
  }
  //add the number of words to the ide
  var numberOfWords = document.getElementById("number-of-words");
  //numberOfWords.innerHTML = iTextPos + "/" + textArrayLength + "of" + topicData[topicNumber].lesson.length;
  numberOfWords.innerHTML = lettersTyped + "/" + topicData[topicNumber].lesson.length;
}

//MARK:CHANGES THE STYLE OF THE IDE
function changeIde() {
  var ideArray = [
    "ide-build ide-blur",
    "ide-build ide-dark",
    "ide-build ide-gloss",
    "ide-build ide-black",
    "ide-build ide",
  ];
  var cardArray = [
    "topic-card-build topic-card-blur",
    "topic-card-build topic-card-dark",
    "topic-card-build topic-card-gloss",
    "topic-card-build topic-card-black",
    "topic-card-build topic-card",
  ];

  var buttonArray = [
    "topic-card-blur",
    "topic-card-dark",
    "topic-card-gloss",
    "topic-card-black",
    "ide",
  ];

  var ide = document.getElementById("ide");

  //console.log(currentIdeStyle + "of" + ideArray.length);
  ide.setAttribute("class", ideArray[currentIdeStyle]);

  var ideButton = document.getElementById("change-id");
  ideButton.setAttribute(
    "class",
    buttonArray[currentIdeStyle] + " " + "ide-color"
  );
  var ideButton3 = document.getElementById("next-line");
  ideButton3.setAttribute(
    "class",
    buttonArray[currentIdeStyle] + " " + "ide-button"
  );
  var ideButton2 = document.getElementById("number-of-words");
  ideButton2.setAttribute(
    "class",
    buttonArray[currentIdeStyle] + " " + "ide-button"
  );

  idePrompt.setAttribute(
    "class",
    buttonArray[currentIdeStyle] + " " + "ide-prompt"
  );
  //Find out how many topics we have
  var cardlength = document.getElementsByClassName("topic-card");

  //typingInProgress through the cards and change the class hence background color
  for (let index = 0; index < cardsReturned; index++) {
    var card = document.getElementById("topic-card-" + index);
    card.setAttribute("class", cardArray[currentIdeStyle]);
  }

  document.getElementById("console-prompt").style.color = "#fff";

  if (currentIdeStyle == 0 || currentIdeStyle == 2) {
    document.getElementById("change-id").style.backgroundColor = "transparent";
    ideButton2.style.backgroundColor = "transparent";
    ideButton3.style.backgroundColor = "transparent";

    document
      .getElementById("console-prompt")
      .setAttribute("class", "ide-prompt");
  }

  if (currentIdeStyle == ideArray.length - 1) {
    currentIdeStyle = 0;
  } else {
    currentIdeStyle++;
  }
}
