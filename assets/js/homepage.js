/* Homepage functions 
 * Loads in the welcome text
 * Then loads in the entry button 
 */
let i = 0,
    j = 0,
    hello = "Hello!",
    text = "I'm Sierra, a UX developer and Human-Centered Computing student at RIT.",
    speed = 40,
    speedHello = 80;
    
    async function typeHello() {
        if(j < hello.length) {
            document.getElementById("hello").innerHTML += hello.charAt(j);
            j++;
            setTimeout(typeHello, speedHello);
        }
        else {
            typeWriter();
        }
    }
    
    async function typeWriter() {
        if (i < text.length) {
            document.getElementById("intro").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else {
            showButton();
        }
    }
    
    async function showButton() {
        document.getElementById("enterSite").style.opacity = 1;
    }
    
    window.onload = function() {
        typeHello();
    }
