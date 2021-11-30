var header;
var span;
var theEnd;
var i = 0;
var j = 0;
var k = 0;
var text = "Hello! I'm Sierra, a ";
var colorText = "Human-Centered ";
var endText = "Designer.";
var speed = 50;

function loadHeader() {
  header = document.getElementById("tagline");
  
  if(i < text.length) {
    header.innerHTML += text.charAt(i);
    i++;
    setTimeout(loadHeader, speed);
  }
  else {
    loadSpan();
  }
}

function loadSpan() {
  span = document.getElementById("colorText");

  if(j < colorText.length) {
    span.innerHTML += colorText.charAt(j);
    j++;
    setTimeout(loadSpan, speed);
  }
  else {
    finishHeader();
  }
}

function finishHeader() {

  theEnd = document.getElementById("endText");
  if (k < endText.length) {
    theEnd.innerHTML += endText.charAt(k);
    k++;
    setTimeout(finishHeader, speed);
  }
  else {
    loadContent();
  }
}

function loadContent() {
  var projects = document.getElementById("content");
  projects.style.opacity = 1;
}

function changeDiv() {
  var projects = document.getElementById("projects-link");
  var about = document.getElementById("about-link");
  console.log(event.target);

  if(event.target == projects) {
      document.getElementById("projects-content").style.display = "block";
      document.getElementById("about-content").style.display = "none";
      projects.classList.add("active");
      about.classList.remove("active");
  }
  else if(event.target == about) {
      document.getElementById("projects-content").style.display = "none";
      document.getElementById("about-content").style.display = "block";
      about.classList.add("active");
      projects.classList.remove("active");
  }
  else {
      document.getElementById("projects-content").style.display = "block";
      document.getElementById("about-content").style.display = "none";
      projects.classList.add("active");
      about.classList.remove("active");
  }
}
