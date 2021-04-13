window.onload=function(){
mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 6 + 0.5
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();

var countDownDate = new Date("Apr 30, 2021 15:00:30").getTime();

var myfunc = setInterval(function() {

var now = new Date().getTime();
  
var timeleft = countDownDate - now;
      
  
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  if (days<10) {document.getElementById("days").innerHTML = `0${days}`}
  else {document.getElementById("days").innerHTML = `${days}`}

  if (hours<10) {document.getElementById("hours").innerHTML = `0${hours}`}
  else {document.getElementById("hours").innerHTML = `${hours}`}
  
  if (minutes<10){document.getElementById("mins").innerHTML = `0${minutes}`}
  else {document.getElementById("mins").innerHTML = `${minutes}`}

  if (seconds<10){document.getElementById("secs").innerHTML = `0${seconds}`}
  else {document.getElementById("secs").innerHTML = `${seconds}`}

}, 1000);
}
