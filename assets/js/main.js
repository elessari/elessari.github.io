var header;
var span;
var floral_p = " ☙";
var i = 0;
var speed = 50;
var text = "Hey, I'm Sierra, a UX Designer.";

function loadHeader() {
    header = document.getElementById("tagline");

    if(i < text.length) {
        header.innerHTML += text.charAt(i);
        i++;
        setTimeout(loadHeader, speed);
    }
    else {
        loadFlower();
    }
}

function loadFlower() {
    span = document.getElementById("floral");

    
    span.innerHTML += floral_p;
    span.style.opacity = "1";
}
