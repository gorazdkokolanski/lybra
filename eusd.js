const clickers = document.querySelectorAll(".governance")
const expansion = document.querySelectorAll(".governance-expansion")
const arrows = document.querySelectorAll(".governance img")
let clicked = [false, false]
const thesun = document.querySelector(".thesun")
const burger = document.querySelector(".burger")
const mobilemenu = document.querySelector(".mobile-menu")
const mobileGovernance = document.querySelector(".mobile-governance")
const mobileGovernanceE = document.querySelector(".mobile-governance-expansion")
let mobileOpened = false
let mobileGovernanceOpened = false
const boxes = document.querySelectorAll(".box")

burger.addEventListener("click", () => {
    if (!mobileOpened) {
        mobileOpened = true
        document.querySelector(".burger img").src = "img/x.svg"
        mobilemenu.style.display = "flex"
    }
    else {
        mobileOpened = false
        document.querySelector(".burger img").src = "img/burger.svg"
        mobilemenu.style.display = "none"
    }
})

mobileGovernance.addEventListener("click", () => {
    if (!mobileGovernanceOpened) {
        mobileGovernanceOpened = true
        mobileGovernanceE.style.display = "flex"
    }
    else {
        mobileGovernanceOpened = false
        mobileGovernanceE.style.display = "none"
    }
})

for (let i = 0; i < 2; i++) {
    clickers[i].addEventListener("click", () => {
        if (clicked[i]) {
            expansion[i].style.display = "none"
            clicked[i] = false
            arrows[i].style.transform = "rotate(0deg)"
        }
        else {
            clicked[i] = true
            expansion[i].style.display = "flex"
            arrows[i].style.transform = "rotate(180deg)"
        }
    })
}

function appear(element) {
    element.style.opacity = "1"
    element.style.transform = "translate(0)"
}

const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5, // Trigger callback when 50% of the element is visible
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        appear(entry.target)
      } else {
        console.log('Element is no longer visible.');
      }
    });
  };

const observer = new IntersectionObserver(callback, options);

for(let i=0; i<boxes.length; i++){
    observer.observe(boxes[i])
}

let light = true

thesun.addEventListener("click", () => {
    if(light){
        document.querySelector("body").style.color = "white"
        document.querySelector(".thesun img").src = "img/moon.svg"
        document.querySelector("header").style.backgroundColor = "rgba(92,92,92,.15)"
        document.querySelector(".darkone").src = "img/darkone.svg"
        document.querySelector("#eusdHome").style.backgroundColor = "#343943"
        document.querySelector("#boxes").style.backgroundColor = "#232323"
        for(let i=0; i<boxes.length; i++){
            boxes[i].style.backgroundColor="#404040"
        }
        for(let i=0; i<arrows.length; i++){
            arrows[i].src = "img/whitearrow.svg"
        }
        document.querySelector("footer").style.backgroundColor="#343943"
        document.querySelector(".leftFooter").style.color="white"
        document.querySelector(".leftFooter>a:nth-child(1)").style.color="white"
        mobilemenu.style.backgroundColor = "black"
        light = false
    }
    else{
        document.querySelector("body").style.color = "black"
        document.querySelector(".thesun img").src = "img/sun.svg"
        document.querySelector("header").style.backgroundColor = "white"
        document.querySelector(".darkone").src = "img/darkone.svg"
        document.querySelector("#eusdHome").style.backgroundColor = "#f5f9ff"
        document.querySelector("#boxes").style.backgroundColor = "#c8daf3"
        for(let i=0; i<boxes.length; i++){
            boxes[i].style.backgroundColor="white"
        }
        for(let i=0; i<arrows.length; i++){
            arrows[i].src = "img/downarrow.svg"
        }
        document.querySelector("footer").style.backgroundColor="white"
        document.querySelector(".leftFooter").style.color="#737373"
        document.querySelector(".leftFooter>a:nth-child(1)").style.color="black"
        mobilemenu.style.backgroundColor = "white"
        light = true
    }
    
})