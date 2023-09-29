var numberofdata = topicData.length;
var noimage = [];
var haveimages = [];
var cardsReturned = 12;

function getdata() {
  // let loadingWrapper = document.createElement("div");
  // loadingWrapper.setAttribute("class", "loading");

  // let loadingIcon = document.createElement("div");
  // loadingIcon.setAttribute("class", "spinner");
  // loadingWrapper.appendChild(loadingIcon);

  
  for (var i = 0; i < cardsReturned; i++) {

    if ( cardsReturned - 1 === i) {
      document.getElementById("loading").style.display = "none";
    }
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


    // Show the container if it has children
    // loadingWrapper.style.display = "none";
  }
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

  count++;
});

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

var stopTyping = false;
var typingInProgress = 0;
var ideStartButton = document.getElementById("next-line");
var currentImage;
var idePrompt = document.getElementById("console-prompt");

var completedLessons = [];
// if (currentLesson === 0) {
//   document.getElementById("next-line").innerHTML = "START";
// }
var alreadyClickedCards = [0];
var currentIdeStyle = 0;
var canSkipLesson = false;
var lessonCompleted = false;
//MARK: TAppedget canSkipLesson button

function tappedGetStarted() {
  if (typingInProgress) {
    return;
  }
  stopTyping = false;
  if (lessonCompleted) {
  } else {
    handleNextLine();
  }

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

function changetopic() {
  stopTyping = true;
  topicChanged = 1;

  //add the number of words to the ide
  var clickedTopic = this.id.replace(/^\D+/g, "");
  topicNumber = clickedTopic;

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

  document.getElementById("lesson-number").innerHTML =
    "LESSON " + topicData[clickedTopic].num;

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
    buttonLast.innerHTML = " &#10003; COMPLETED";
    buttonLast.setAttribute("class", "re-visit");
  }

  ideStartButton.innerHTML = "START";
  //Change button color and text to reviewed
  var buttonClicked = document.getElementById("card-btn-" + clickedTopic);
  buttonClicked.innerHTML = "CURRENT";
  buttonClicked.setAttribute("class", "card-button-selected");

  var currentCard = document.getElementById("topic-card-" + clickedTopic);
  currentCard.setAttribute("class", "topic-card-build topic-card-selected");
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
}
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
    }

    typingInProgress = 0;
    var ideStartButton = document.getElementById("next-line");
    if (lettersTyped >= topicData[topicNumber].lesson.length) {
      completedLessons += topicNumber;
      // console.log("completed " + completedLessons);
      ideStartButton.style.display = "none";
      lessonCompleted = true;
    } else {
      ideStartButton.style.display = "";
      ideStartButton.innerHTML = "CONTINUE";
      ideStartButton.style.color = "orange";
      ideStartButton.style.animation = "led 1.5s infinite linear";

      //nextbutton.innerHTML = "Next";
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
  numberOfWords.innerHTML =
    lettersTyped + "/" + topicData[topicNumber].lesson.length;
}

//MARK:CHANGES THE STYLE OF THE IDE
function changeIde() {
  var ideArray = [
    "ide-build ide-blur",
    "ide-build ide-dark",
    "ide-build ide-gloss",
    "ide-build ide-black",
  ];
  var cardArray = [
    "topic-card-build topic-card-blur",
    "topic-card-build topic-card-dark",
    "topic-card-build topic-card-gloss",
    "topic-card-build topic-card-black",
  ];

  var buttonArray = [
    "topic-card-blur",
    "topic-card-dark",
    "topic-card-gloss",
    "topic-card-black",
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
