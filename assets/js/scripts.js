var navbar = document.getElementById("navbar");

window.onscroll = function(){
    myFunction()
};



//var sticky = navbar.offsetTop;

function myFunction() {
    console.log(window.pageYOffset);
    if(window.pageYOffset >= 1024) {
        console.log("Changing background");
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.top = "0";
        //document.getElementById("navbar").classList.add("bg");
        //document.getElementById("divHead").style.display = "none";
    }
    else {
        //document.getElementById("navbar").classList.remove("bg");
        document.getElementById("navbar").style.position = "relative";
        document.getElementById("navbar").style.top = "950px";
        //document.getElementById("divHead").style.display = "block";
    }
}