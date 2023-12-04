const headerExpansionDiv = document.querySelector(".v1expansion-div")
const headerExpansion = document.querySelector(".v1expansion")
const headerOptions = document.querySelectorAll(".v1expansion>div")

let headerOpened = false

headerExpansionDiv.addEventListener("click", ()=>{
    if(!headerOpened){
        headerExpansion.style.display = "flex"
        headerOpened=true
    }
    else{
        headerExpansion.style.display = "none"
        headerOpened=false
    }
})

for(let i=0; i<headerOptions.length; i++){
    headerOptions[i].addEventListener("click", ()=>{
        window.location.href = "v1.html"
    })
}

const mobileMenu = document.querySelector(".mobile-menu")
const burger = document.querySelector(".burger")
const burgerImg = document.querySelector(".burger img")
let mobileOpened = false

burger.addEventListener("click", ()=>{
    if(!mobileOpened){
        mobileMenu.style.display = "flex"
        mobileOpened = true
        burgerImg.src = "img/newx.svg"
    }
    else{
        mobileMenu.style.display = "none"
        mobileOpened = false
        burgerImg.src = "img/burgernew.svg"
    }
})

const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
const moonSvg = document.querySelectorAll(".moon svg path")
const sunSvg = document.querySelectorAll(".sun svg path")

moon.addEventListener("click", ()=>{
    document.querySelector("body").style.color = "white"
    document.querySelector("body").style.backgroundImage = `url("img/otherdark.png")`
    const arrows = document.querySelector(".v1expansion-div img")
    arrows.src = "img/whitearrow.svg"
    document.querySelector(".v1expansion-div").style.color = "white"
    const headers = document.querySelectorAll("header a")
    for(let i=0; i<headers.length; i++){
        headers[i].style.color = "white"
    }
    const boxes = document.querySelectorAll(".boostBox")
    for(let i=0; i<boxes.length; i++){
        boxes[i].style.background = "#262626"
        boxes[i].style.border = "1px solid #525252"
        boxes[i].style.boxShadow = "0 8px 32px #000"
        boxes[i].style.color = "white"
    }
    
    for(let i=0; i<sunSvg.length; i++){
        sunSvg[i].style.fill = "black"
    }
    sun.style.background = "transparent"
    for(let i=0; i<moonSvg.length; i++){
        moonSvg[i].style.fill = "white"
    }
    moon.style.background = "linear-gradient(92.86deg,#3f9ff5 -6.99%,#163172 84.71%)"
    document.querySelector("footer").style.background = "#121212"
    document.querySelector(".leftFooter>a:nth-child(1)").style.color = "white"
    document.querySelector(".otherLeft").style.color = "white"
    const hatris = document.querySelectorAll("h2")
    for(let i=0; i<hatris.length; i++){
        hatris[i].style.color = "#ffb467"
    }
    const ts = document.querySelectorAll(".thisthing")
    for(let i=0; i<ts.length; i++){
        ts[i].style.background = "transparent!important"
    }
})


sun.addEventListener("click", ()=>{
    document.querySelector("body").style.color = "black"
    document.querySelector("body").style.backgroundImage = `url("img/otherbg.png")`
    const arrows = document.querySelector(".v1expansion-div img")
    arrows.src = "img/downarrow.svg"
    document.querySelector(".v1expansion-div").style.color = "black"
    const headers = document.querySelectorAll("header a")
    for(let i=0; i<headers.length; i++){
        headers[i].style.color = "#737373"
    }
    const boxes = document.querySelectorAll(".boostBox")
    for(let i=0; i<boxes.length; i++){
        boxes[i].style.background = "white"
        boxes[i].style.border = "none"
        boxes[i].style.boxShadow = "0 8px 32px #dde0e7, 0 0 24px hsla(0,0%,68%,.25)"
        boxes[i].style.color = "black"
    }
    for(let i=0; i<moonSvg.length; i++){
        moonSvg[i].style.fill = "black"
    }
    moon.style.background = "transparent"
    for(let i=0; i<sunSvg.length; i++){
        sunSvg[i].style.fill = "white"
    }
    sun.style.background = "linear-gradient(92.86deg,#faea6a -6.99%,#f1a095 84.71%)"
    document.querySelector("footer").style.background = "white"
    document.querySelector(".leftFooter>a:nth-child(1)").style.color = "black"
    document.querySelector(".otherLeft").style.color = "#737373"
    const hatris = document.querySelectorAll("h2")
    for(let i=0; i<hatris.length; i++){
        hatris[i].style.color = "#163172"
    }
})