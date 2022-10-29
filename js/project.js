var imagesFromData = [];


//lets get the images from the list of images
for (var i = 0; i < topicData.length; i++) {
    if (topicData[i].image != "") {
        imagesFromData.push(topicData[i].image);
    }
}

var projectCards = document.getElementsByClassName("project-grid-box");
var pickThisImages = ["https://iphoneswallpapers.com/wp-content/uploads/2022/06/Sun-Rise-and-Mountains-iPhone-Wallpaper.jpg","https://iphoneswallpapers.com/wp-content/uploads/2019/01/Winter-Sunset-Snow-Minimal-iPhone-Wallpaper.jpg","https://iphoneswallpapers.com/wp-content/uploads/2021/06/Night-Forest-Art-iPhone-Wallpaper.jpg","https://i.pinimg.com/736x/9d/4c/12/9d4c1272544b5cafe7eaf4abe30346a8.jpg","https://iphoneswallpapers.com/wp-content/uploads/2020/08/Road-to-Paradise.jpg"];
console.log(projectCards.length);



for (var i = 0; i < projectCards.length; i++) {
   // projectCards[i].setAttribute("id", "project-card-" + i);
   // var randomImage = getRandomInt(0, (pickThisImages.length - 1));
    //set background image if it exists
        projectCards[i].style.backgroundImage = "url(" + pickThisImages[i] + ")";
    
}

//get random numbers based on the min and max values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}