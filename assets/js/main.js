var header;
var i = 0;
var speed = 50;
var text = "Hey, I'm Sierra, a UX Developer.";

function loadHeader() {
    header = document.getElementById("tagline");

    if(i < text.length) {
        header.innerHTML += text.charAt(i);
        i++;
        setTimeout(loadHeader, speed);
    }
}