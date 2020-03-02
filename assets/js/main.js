var header;
var span;
var floral_p = " ☙";
var i = 0;
var j = 0;
var speed = 50;
var text = "Hey, I'm Sierra, a UX Designer.";
var ptext = "I make pretty UI and stuff.";

function loadHeader() {
    header = document.getElementById("tagline");
    document.getElementById("projects-div").style.display = "none";
    document.getElementById("about-div").style.display = "none";
    headerp = document.getElementById("floral");

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
    headerp.style.opacity = "1";
}


function changeDiv() {
    var projects = document.getElementById("projects-link");
    var about = document.getElementById("about-link");
    console.log(event.target);

    if(event.target == projects) {
        document.getElementById("projects-div").style.display = "block";
        document.getElementById("about-div").style.display = "none";
        document.getElementById("tag").style.display = "none";
    }
    else if(event.target == about) {
        document.getElementById("projects-div").style.display = "none";
        document.getElementById("about-div").style.display = "block";
        document.getElementById("tag").style.display = "none";
    }
    else {
        document.getElementById("projects-div").style.display = "none";
        document.getElementById("about-div").style.display = "none";
        document.getElementById("tag").style.display = "block";
    }
}
