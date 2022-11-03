
// Set the date we're counting down to
var countDownDate = new Date("Dec 24, 2022 23:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  var text = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";
  document.getElementById("demo").innerHTML = text.bold();
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();
    
// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the result in an element with id="demo"
var text = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";
document.getElementById("nav-time").innerHTML = text.bold();

// If the count down is over, write some text 
if (distance < 0) {
clearInterval(x);
document.getElementById("nav-time").innerHTML = "EXPIRED";
  }
}, 1000);

// IMAGES CARDS ETC
var randomImage = new Array();  
    
//insert the URL of images in array  
randomImage[0] = "images/present-card-back.png";  
randomImage[1] = "images/santa-card-back.png";  
randomImage[2] = "images/snowman-card-back.png";  
randomImage[3] = "images/present-card-back.png";  
randomImage[4] = "images/snowman-card-back.png";  
randomImage[5] = "images/raindeer-card-back.png";  

let shuffledImages = randomImage.sort(function () {
    return Math.random() - 0.5;
});

function getRandomImage(num) {  
    //return the images generated by a random number  
    return document.getElementById("change-game"+num).src = shuffledImages[num];  
} 

function flip(num) {
    var image = document.getElementById('change-game'+num);
    if (image.src.match("images/pc1.jpg")) {
        getRandomImage(num)
        if (image.src.match("images/santa-card-back.png")) {
            for (let i = 0; i < 6; i++) {
                if (num != i) {
                    document.getElementById("change-game"+i).src = "images/trophy-card.png";
                }
                
            }
        }
    }
}


function replay() {
    for (let i = 0; i < 6; i++)
    {
        document.getElementById("change-game"+i).src = "images/pc1.jpg"
        let shuffledImages = randomImage.sort(function () {
        return Math.random() - 0.5;
    });
    }
}

//--------------------------------------------------

var randNum = (Math.floor(Math.random() * 5) + 1);
document.getElementById("template").src = "images/templates/template-"+randNum+".png";
document.getElementById("template1").href = "images/templates/template-"+randNum+".png";
