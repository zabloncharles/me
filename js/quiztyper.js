var numberofdata = topicData.length;
var noimage = [];
var haveimages = [];
var cardsReturned = 12;


var topicNumber = 0;
// set up text to print, each item in array is new line
function getdata() {
  // let loadingWrapper = document.createElement("div");
  // loadingWrapper.setAttribute("class", "loading");

  // let loadingIcon = document.createElement("div");
  // loadingIcon.setAttribute("class", "spinner");
  // loadingWrapper.appendChild(loadingIcon);

  for (var i = 0; i < cardsReturned; i++) {
    if (cardsReturned - 1 === i) {
      document.getElementById("loading").style.display = "none";
    }
   if (!topicData[i] || !topicData[i].desc || topicData[i].desc.trim() === "") {
     // topicData[i] is undefined, or its desc property is empty or contains only whitespace
     return;
   }

    // let elem = document.getElementById("topic-card").cloneNode(true);
    let elem = document.createElement("div");
    elem.setAttribute("class", "topic-card-build topic-card");
    elem.setAttribute("id", "topic-card-" + i);
    let topicinfo = document.createElement("div");
    topicinfo.setAttribute("class", "topic-info-quiz");
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
var questionNumber = 0;
var questionarray = topicData[0].lesson[questionNumber];
var answerKey = topicData[0].answerKey;
var removeurl = questionarray.split(">");

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
  // console.log("array has no image " + hasNoImage);
  // console.log("array has image " + hasImage);
  count++;
});
//console.log(lessonImages);
//add the text back together -------------------------------------
var withouturl;
for (var i = 0; i < hasNoImage.length; i++) {
  withouturl += removeurl[hasNoImage[i]];
}

//Regular vars ------------------------------------------------
var strd = withouturl;
var str = questionarray;
var substrings = str.split("."); //turn subsrting to indexed text
var eachSentence = substrings; //each sentence array
var typingSpeed = 30; // time delay of print out
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
var howManyQuestions = topicData[0].lesson.length;

//MARK: TAppedget canSkipLesson button
getStartedButton.style.animation = "1.5s linear infinite led";
//ideStartButton.style.display = "none";

//typerwriter has started typing
function tappedGetStarted() {
  getStartedButton.style.animation = "none";

  if (typingInProgress) {
    return;
  }
  stopTyping = false;
  if (lessonCompleted) {
  } else {
    getStartedButton.innerHTML = "IN PROGRESS";
    getStartedButton.style.backgroundColor = "#303030";

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
var lettersTyped = 0;

var answerletter = ["A", "B", "C", "D"];
var answer = "C";
var currentQuestion = "question0";
var questionInt = 0;

function init(questionNumber) {
  str = topicData[topicNumber].lesson[questionNumber];

  substrings = str.split("."); //turn subsrting to indexed text

  eachSentence = substrings; //each sentence array
  typingSpeed = 30; // time delay of print out
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

  substrings = str.split(".");
  var consolePrompt = document.getElementById("console-prompt");
  consolePrompt.innerHTML =
    "Lesson " + topicNumber + " : " + topicData[topicNumber].title;

  stopTyping = false;
  ideStartButton.innerHTML = "WAIT";
  ideStartButton.style.color = "gray";
  ideStartButton.style.animation = "none";
  init(questionNumber);
  document.getElementById("topic-big-title").classList.remove("blink");
    document.getElementById("topic-big-title").innerHTML =
      "'00:" + "10" + " + <br/> + TIME'";
  typewriter();
}

function typewriter() {
  lettersTyped++;
  typingInProgress++;
  typingContent = " ";
  currentRow = Math.max(0, iIndex - iScrollAt);
  destination.appendChild(old);

  if (questionNumber == 0) {
 //old.style.backgroundColor = "black";
  } else {
    //old.style.backgroundColor =  #131212
  }
 
  destination.appendChild(button);
  //adds a line break between each typed answer
  while (currentRow < iIndex) {
    typingContent += eachSentence[currentRow++] + ".<br /> <br>";
  }

  button.innerHTML = ">" + eachSentence[iIndex].substring(0, iTextPos);

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

    if (lettersTyped >= str.length + 1) {
      //IF THE TYPEWRITER HAS FINISHED TYPING-------------------
      updateTimer();
      getStartedButton.innerHTML = "COMPLETED";
      completedLessons += topicNumber;
      // ideStartButton.style.display = "none";
      ideStartButton.innerHTML = "NEXT";
      ideStartButton.style.color = "white";
      lessonCompleted = true;
      blinker.innerHTML = "";
      questionNumber++;
      lettersTyped = 0;
      typingInProgress = 0;
      typingContent = " ";
      currentRow = Math.max(0, iIndex - iScrollAt);
      button.remove();
      //------------------------------------------------------------------------
    } else {
      if (lettersTyped != str.length + 1 && iIndex > 1) {
        var newDiv = document.createElement("div");
        newDiv.className = "already-typed-answer";
        newDiv.setAttribute("id", answerletter[iIndex - 2]);
        newDiv.innerHTML = eachSentence[iIndex - 1];

        newDiv.addEventListener("click", function () {
          // Retrieve the id of the clicked div
          const divId = this.id;

          if (answer === divId) {
            // console.log("you got the right answer " + divId);
            newDiv.style.backgroundColor = "#3afa8d";
          } else {
            newDiv.style.backgroundColor = "#ff6464";
          }
        });
        old.setAttribute("id", "question" + questionNumber);
        currentQuestion = "question" + questionNumber;
        questionInt = questionNumber;
        old.appendChild(newDiv);
      } else {
        var newDiv = document.createElement("div");
        newDiv.className = "question";

        newDiv.innerHTML = eachSentence[iIndex - 1];

        old.appendChild(newDiv);
      }

      button.appendChild(blinker);
      blinker.innerHTML = "_";
      ideStartButton.style.display = "";
      ideStartButton.innerHTML = "CONTINUE";
      ideStartButton.style.color = "orange";
      ideStartButton.style.animation = "led 1.5s infinite linear";
      getStartedButton.style.animation = "none";
      getStartedButton.innerHTML = "IN PROGRESS";
      getStartedButton.style.backgroundColor = "#303030";
      lessonCompleted = false;
      typewriter();
    }
  } else {
    setTimeout("typewriter()", typingSpeed);
  }
  //add the number of words to the ide
  var numberOfWords = document.getElementById("number-of-words");
  numberOfWords.innerHTML = lettersTyped + "/" + str.length;
}

// Get the element with the class "timer"
const timerElement = document.querySelector(".timer");

// Set the initial countdown value (30 seconds)

let countdown = 9;
var topic = document.getElementById("topic-big-title");
// Function to update the timer and handle countdown
function updateTimer() {
  if (countdown >= 0) {
    // Update the innerHTML of the timer element with the current countdown value
document.getElementById("topic-big-title").innerHTML =
  "'00:0" + countdown + " + <br/> + TIME'";
    
    timerElement.innerHTML = countdown;
    // topic.innerHTML = countdown;
   // topic.style.fontFamily = "Monoton, cursive";
    if (countdown > 2 && countdown < 5) {
      ideStartButton.innerHTML = "HURRY!";
      
    }

    if (countdown < 2) {
       timerElement.classList.add("blink");
      
    }

    if (countdown == 0) {
     document.getElementById("topic-big-title").classList.add("blink");
    }

    // Decrease the countdown value by 1 second
    countdown--;

    // Call the function again after 1 second (1000 milliseconds)
    setTimeout(updateTimer, 1000);
  } else {
    // When the countdown reaches 0, you can perform any desired action here
    //timerElement.innerHTML = "Time's up!";
    countdown = 9;
   var vbutton = document.createElement("div");
   vbutton.className = "typing";
   vbutton.setAttribute("typinga", "id");
   destination.appendChild(vbutton);
    // Get the parent element by its ID
typeWriterEffectWithDelete("You lost the game", vbutton);
    console.log(currentQuestion);
    // Get the parent element by its ID
    var parentElement = document.getElementById(currentQuestion);

    // Select all the div elements with class "divToChange" within the parent element
    var divsToChange = parentElement.querySelectorAll(".already-typed-answer");

    //change the id to a number
    var str = questionNumber;

    // Check if a match is found

    // Apply a new background color to the selected div elements
    divsToChange.forEach(function (div) {
      console.log(answerKey[questionInt]);
      if (div.id === answerKey[questionInt]) {
        // Change the background color to green for the div with ID "D"
        div.style.backgroundColor = "#3afa8d";
      } else {
        // Change the background color to red for other divs
        div.style.backgroundColor = "#433d3d";
      }
    });

    timerElement.classList.remove("blink");
    ideStartButton.innerHTML = "NEXT";
  }
}
//just a typerwriter
// Function to display and delete text with typewriter effect
// function typeWriterEffectWithDelete(
//   text,
//   element,typeanddelete = false,
//   typeDelay = 40,
//   deleteDelay = 40
// ) {
//   let charIndex = 0;

//   if (typeanddelete == false) {
//     function type() {
//       if (charIndex < text.length) {
//         element.innerHTML += text.charAt(charIndex);
//         charIndex++;
//         setTimeout(type, typeDelay);
//       }
//     }

//     type();

    
//   } 
// }

 // Function to display and delete text with typewriter effect
        function typeWriterEffectWithDelete(text, element, typeDelay = 40, deleteDelay = 90) {
            let charIndex = 0;

            function type() {
                if (charIndex < text.length) {
                    element.innerHTML += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(deleter, typeDelay);
                }
            }

            function deleteCharacters(count) {
                let currentText = element.innerHTML;
                if (currentText.length > 0) {
                    element.innerHTML = currentText.slice(0, -count);
                    setTimeout(type, deleteDelay);
                }
            }

            function deleter() {
                if (element.innerHTML === text) {
                    const charsToDelete = Math.min(
                      element.innerHTML.length,
                      1
                    ); // Delete up to 3 characters at a time
                    deleteCharacters(charsToDelete);
                } else {
                    setTimeout(type, typeDelay);
                }
            }

            type();
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
  

  document.getElementById("console-prompt").style.color = "#fff";

  if (currentIdeStyle == 0 || currentIdeStyle == 2) {
    document.getElementById("change-id").style.backgroundColor = "transparent";
    ideButton2.style.backgroundColor = "transparent";
    ideButton3.style.backgroundColor = "transparent";

    document
      .getElementById("console-prompt")
      .setAttribute("class", "ide-prompt");
  }
currentIdeStyle = Math.floor(Math.random() * ideArray.length);


}

function changetopic() {
  stopTyping = true;
  topicChanged = 1;

  //add the number of words to the ide
  var clickedTopic = this.id.replace(/^\D+/g, "");
  topicNumber = clickedTopic;

  // str = topicData[topicNumber].lesson[1];

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
  // console.log(previousLesson);
  // console.log(alreadyClickedCards);

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
}
