window.onload = function() {
    document.body.className += " loaded";
}

window.onscroll = function() {sticker()};

const nav = document.getElementById("nav");
const sticky = nav.offsetTop;

function sticker() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
// padding isn't all the way but it's fine for now

window.addEventListener('scroll', countup);

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;
//valueDisplay is the name of the function being created below?
//next line calls each num div in the array of valueDisplays
function countup() {
    valueDisplays.forEach(valueDisplay => {
        let startValue = 0;
        //why use valueDisplay below and not valueDisplays?
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        //set interval is a JS Method that calls a (function, every amt of time), hence the 2nd comment
        let counter = setInterval(function(){
            startValue += 1;
            valueDisplay.textContent = startValue;
            if(startValue == endValue) {
                clearInterval(counter);
            } //why is duration a "parameter" (is it even that?) there?
        }, duration);
    });
    window.removeEventListener('scroll', countup);
}