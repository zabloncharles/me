var topicData = [
  {
    title: "WHAT IS AN albon?",
    number: "0",
    desc: "In computer programming terms, an algorithm is a set of well-defined instructions to solve a particular problem. It takes a set of input(s) and produces the desired output.o",
    image: "https://images.hdqwalls.com/wallpapers/boy-with-dog-o0.jpg",
  },
  {
    title: "Data Structure and Types",
    number: "1",
    desc: "Data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/002/099/721/small/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg",
  },
  {
    title: "Why learn DSA?",
    number: "2",
    desc: "In this article, we will learn why every programmer should learn data structures and algorithms with the help of examples.This article is for those who have just started learning algorithms and wondered how impactful it will be to boost their career/programming skills.",
    image: "",
  },
  {
    title: "Asymptotic Analysis: Big-O Notation and More",
    number: "3",
    desc: "The efficiency of an algorithm depends on the amount of time, storage and other resources required to execute the algorithm. The efficiency is measured with the help of asymptotic notations.",
    image:
      "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png",
  },
  {
    title: "Master Theorem",
    number: "4",
    desc: "In this tutorial, you will learn what master theorem is and how it is used for solving recurrence relations.The master method is a formula for solving recurrence relations of the form:",
    image:
      "https://media.istockphoto.com/photos/mountain-landscapes-picture-id108125029?b=1&k=20&m=108125029&s=170667a&w=0&h=L5kspxyBuqkMPMq9NP-0g3iTj7sCWjSXikPe_Kc4Ne8=",
  },
  {
    title: "Divide and Conquer Algorithm",
    number: "5",
    desc: "The divide and conquer algorithm's operation will be explained in this lesson. To tackle a recursive problem, we will contrast the divide and conquer strategy with various methods.",
    image: "",
  },
  {
    title: "Stack Data Structure",
    number: "6",
    desc: "You will learn about the stack data structure and how it is implemented in Python, Java, and C/C++ in this course.Stacks are linear data structures that adhere to the Last In First Out rule (LIFO). This implies that the last piece to be added to the stack gets eliminated first.",
    image: "",
  },
  {
    title: "Queue Data Structure",
    number: "7",
    desc: "You will learn what a queue is in this tutorial. Additionally, queue implementations are available in Python, Java, C, and C++.In programming, a queue is a useful data structure. It is comparable to the line for tickets outside a movie theater, where the person who joins the line first receives the first ticket.",
    image: "",
  },
  {
    title: "Types of Queues",
    number: "8",
    desc: "This tutorial will teach you about different types of queues and illustrate them.In programming, a queue is a useful data structure. It's similar to the ticket line outside a movie theater, where the first person to enter the line gets the first ticket.",
    image: "",
  },
  {
    title: "Circular Queue Data Structure",
    number: "9",
    desc: "This tutorial will teach you what a circular queue is. There are also circular queue implementations in C, C++, Java, and Python.",
    image: "",
  },
  {
    title: "Priority Queue",
    number: "10",
    desc: "This tutorial will teach you what a priority queue is. You will also learn about its Python, Java, C, and C++ implementations.A priority queue is a type of queue in which each element has a different priority value. Furthermore, elements are served in the order of their priority. That is, the elements with the highest priority are served first.",
    image: "",
  },
  {
    title: "Deque Data Structure",
    number: "11",
    desc: "This tutorial will teach you what a double ended queue (deque) is. There are also working examples of various operations on a deque in C, C++, Java, and Python.",
    image: "",
  },
  {
    title: "",
    number: "",
    desc: "",
    image: "",
  },
  {
    title: "",
    number: "",
    desc: "",
    image: "",
  },
  {
    title: "",
    number: "",
    desc: "",
    image: "",
  },
  {
    title: "",
    number: "",
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

const changetopic = function () {
  var thenum = this.id.replace(/^\D+/g, "");
  console.log(thenum);

  document.getElementById("topic-title").innerHTML = topicData[thenum].title;
  document.getElementById("topic-desc").innerHTML = topicData[thenum].desc;
};
//function changetopic() {

//   document.getElementById("topic-title").innerHTML = topicData[pass].title;
//   document.getElementById("topic-big-title").innerHTML = "OVERVIEW";
//   document.getElementById("topic-desc").innerHTML = topicData[pass].desc;
//}
//document.getElementById("topic-card-ln").innerHTML = topicData[i].number;
//document.getElementById("topic-card-desc").innerHTML = topicData[i].desc;
