{
  //
  //     <div class="project-grid-box">
  //         <img class="project-svg"
  //             src="../thumbnails/japan.svg">
  //         <div class="project-description">
  //             <div class="project-title">Fusion App</div>
  //             <div class="project-small-title">WEB/HTML/CSS</div>
  //         </div>
  //     </div>
  //
}
let data = [
  {
    title: "Fusion App",
    desc: "WEB/HTML/CSS",
    svg: "../thumbnails/japan.svg",
  },
  {
    title: "Exam Force",
    desc: "LWC/HTML/CSS/JAVASCRIPT",
    svg: "../thumbnails/exam-girl.svg",
    },
    {
        title: "Landing Zone",
        desc: "HTML/CSS/REACT-JS",
        svg: "../thumbnails/exam-girl.svg",
    },
    {
        title: "Aperture",
        desc: "LWC/SALESFORCE/HTML/CSS",
        svg: "../thumbnails/exam-girl.svg",
    },
    {
        title: "Coding App",
        desc: "SWIFT/FIGMA/FIREBASE",
        svg: "../thumbnails/exam-girl.svg",
      },
];
function getdata() {
  var pickThisImages = [
    "https://iphoneswallpapers.com/wp-content/uploads/2022/06/Sun-Rise-and-Mountains-iPhone-Wallpaper.jpg",
    "https://iphoneswallpapers.com/wp-content/uploads/2019/01/Winter-Sunset-Snow-Minimal-iPhone-Wallpaper.jpg",
    "https://iphoneswallpapers.com/wp-content/uploads/2021/06/Night-Forest-Art-iPhone-Wallpaper.jpg",
    "https://i.pinimg.com/736x/9d/4c/12/9d4c1272544b5cafe7eaf4abe30346a8.jpg",
    "https://iphoneswallpapers.com/wp-content/uploads/2020/08/Road-to-Paradise.jpg",
  ];

  let projectsection = document.getElementById("project-section");
  for (var i = 0; i < data.length; i++) {
    //print cards
    let projectgridbox = document.createElement("div");
    projectgridbox.className = "project-grid-box";

    let projectsvg = document.createElement("img");
    projectsvg.className = "project-svg";
    projectsvg.setAttribute("id", "project-svg");
    projectsvg.src = data[i].svg;

    let projectdescription = document.createElement("div");
    projectdescription.className = "project-description";
    let projecttitle = document.createElement("div");
    projecttitle.className = "project-title";
    projecttitle.innerHTML = data[i].title;
    let projectsmalltitle = document.createElement("div");
    projectsmalltitle.className = "project-small-title";
    projectsmalltitle.innerHTML = data[i].desc;

    //description div
    projectdescription.appendChild(projecttitle);
    projectdescription.appendChild(projectsmalltitle);

    projectgridbox.appendChild(projectsvg);
    projectgridbox.appendChild(projectdescription);

    //set background image if it exists
    projectgridbox.style.backgroundImage = "url(" + pickThisImages[getRandomInt(0, pickThisImages.length - 1)] + ")";

    projectsection.appendChild(projectgridbox);
  }
    getrightcards();
  //get random numbers based on the min and max values
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



var numberofdata = topicData.length;
var noimage = [];
var haveimages = [];
var cardsReturned = 12;

function getrightcards() {
  for (i = cardsReturned - 1; i >= 0; --i) {
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
  
    var buttontext = document.createTextNode("DELETE");
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
    document.getElementById("right-cards").appendChild(elem);
  }

    document.getElementById("dsa-amount").innerHTML = cardsReturned;
    document.getElementById("card-amount").innerHTML = cardsReturned;
}