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

let light = true

thesun.addEventListener("click", () => {
    if(light){
        document.querySelector("body").style.color = "white"
        document.querySelector(".thesun img").src = "img/moon.svg"
        document.querySelector("header").style.backgroundColor = "rgba(92,92,92,.15)"
        document.querySelector("#peusdHome").style.backgroundColor = "#343943"
        document.querySelector("#table").style.backgroundColor = "#232323"
        for(let i=0; i<arrows.length; i++){
            arrows[i].src = "img/whitearrow.svg"
        }
        document.querySelector("footer").style.backgroundColor="#343943"
        document.querySelector(".leftFooter").style.color="white"
        document.querySelector(".leftFooter>a:nth-child(1)").style.color="white"
        mobilemenu.style.backgroundColor = "black"
        document.querySelector(".table").style.color = "white"
        document.querySelector(".table").style.backgroundColor = "black"
        const rowss = document.querySelectorAll(".row:nth-child(2n+3)")
        for(let i=0; i<rowss.length; i++){
            rowss[i].style.backgroundColor = "#525252"
            rowss[i].style.borderBottom = "2px solid white"
        }
        const rows = document.querySelector(".row")
        for(let i=0; i<rows.length; i++){
            rows[i].style.borderBottom = "2px solid white"
        }
        const rowdivs = document.querySelectorAll(".row>div:not(:last-child)")
        for(let i=0; i<rowdivs.length; i++){
            rowdivs[i].style.borderRight = "2px solid white"
        }
        light = false
    }
    else{
        document.querySelector("body").style.color = "black"
        document.querySelector(".thesun img").src = "img/sun.svg"
        document.querySelector("header").style.backgroundColor = "white"
        document.querySelector("#peusdHome").style.backgroundColor = "rgb(245, 255, 248)"
        document.querySelector("#table").style.backgroundColor = "#c8f3e1"
        for(let i=0; i<arrows.length; i++){
            arrows[i].src = "img/downarrow.svg"
        }
        document.querySelector("footer").style.backgroundColor="white"
        document.querySelector(".leftFooter").style.color="#737373"
        document.querySelector(".leftFooter>a:nth-child(1)").style.color="black"
        mobilemenu.style.backgroundColor = "white"
        document.querySelector(".table").style.color = "black"
        document.querySelector(".table").style.backgroundColor = "white"
        const rowss = document.querySelectorAll(".row:nth-child(2n+3)")
        for(let i=0; i<rowss.length; i++){
            rowss[i].style.backgroundColor = "#eafff6"
        }
        const rows = document.querySelector(".row")
        for(let i=0; i<rows.length; i++){
            rows[i].style.borderBottom = "2px solid black"
        }
        const rowdivs = document.querySelectorAll(".row>div:not(:last-child)")
        for(let i=0; i<rowdivs.length; i++){
            rowdivs[i].style.borderRight = "2px solid black"
        }
        light = true
    }
    
})