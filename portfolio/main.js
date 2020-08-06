var header;
var span;
var theEnd;
var i = 0;
var j = 0;
var k = 0;
var text = "Hey, I'm Sierra, a ";
var colorText = "User Experience ";
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
  var projects = document.getElementById("projects-content");
  projects.style.opacity = 1;
}