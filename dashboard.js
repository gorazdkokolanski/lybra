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


const screens = document.querySelectorAll(".screen")
const sidebarOptions = document.querySelectorAll(".clickable-side")

for (let i = 0; i < sidebarOptions.length; i++) {
    sidebarOptions[i].addEventListener("click", () => {
        for (let j = 0; j < sidebarOptions.length; j++) {
            sidebarOptions[j].classList.remove("selected-side")
            screens[j].style.display = "none"
        }
        screens[i].style.display = "block"
        sidebarOptions[i].classList.add("selected-side")
    })
}



const vaultBtns = document.querySelectorAll(".vaults .deposit-btn")

vaultBtns[0].addEventListener("click", () => {
    sidebarOptions[1].click()
    depositOptions[1].click()
})

vaultBtns[1].addEventListener("click", () => {
    sidebarOptions[1].click()
    depositOptions[2].click()
})

vaultBtns[2].addEventListener("click", () => {
    sidebarOptions[1].click()
    depositOptions[3].click()
})

vaultBtns[3].addEventListener("click", () => {
    sidebarOptions[1].click()
    depositOptions[4].click()
})




const depositOptions = document.querySelectorAll(".deposit .depositOptions>div")
const depositValuti = document.querySelectorAll(".deposit .deposit-valuta")
const depositDropdown = document.querySelector(".deposit .depositTop>div:nth-child(2)")
const depositImg = document.querySelector(".deposit .depositTop>div:nth-child(1) img")
const depositPool = document.querySelector(".deposit .pool")
const depositCap = document.querySelector(".deposit .cap")
const depositEpe = document.querySelectorAll(".deposit .epe")


depositOptions[0].addEventListener("click", () => {
    for (let i = 0; i < depositOptions.length; i++) {
        depositOptions[i].classList.remove("selected-option")
    }
    depositOptions[0].classList.add("selected-option")
    for (let i = 0; i < depositValuti.length; i++) {
        depositValuti[i].innerHTML = "ETH"
    }
    for (let i = 0; i < depositEpe.length; i++) {
        depositEpe[i].innerHTML = "eUSD"
    }
    depositDropdown.style.display = "flex"
    depositImg.src = "img/vault0.svg"
    depositPool.innerText = "ETH > Lido > Lybra Mint Pool"
    depositCap.innerText = "114.613M / 10B"
})

depositOptions[1].addEventListener("click", () => {
    for (let i = 0; i < depositOptions.length; i++) {
        depositOptions[i].classList.remove("selected-option")
    }
    depositOptions[1].classList.add("selected-option")

    for (let i = 0; i < depositValuti.length; i++) {
        depositValuti[i].innerHTML = "stETH"
    }
    for (let i = 0; i < depositEpe.length; i++) {
        depositEpe[i].innerHTML = "eUSD"
    }
    depositDropdown.style.display = "none"
    depositImg.src = "img/vault1.svg"
    depositPool.innerText = "Lybra Mint Pool"
    depositCap.innerText = "114.613M / 10B"
})

depositOptions[2].addEventListener("click", () => {
    for (let i = 0; i < depositOptions.length; i++) {
        depositOptions[i].classList.remove("selected-option")
    }
    depositOptions[2].classList.add("selected-option")

    for (let i = 0; i < depositValuti.length; i++) {
        depositValuti[i].innerText = "wstETH"
    }
    for (let i = 0; i < depositEpe.length; i++) {
        depositEpe[i].innerHTML = "peUSD"
    }
    depositDropdown.style.display = "none"
    depositImg.src = "img/vault2.svg"
    depositPool.innerText = "Lybra Mint Pool"
    depositCap.innerText = "31.178M / 10B"
})

depositOptions[3].addEventListener("click", () => {
    for (let i = 0; i < depositOptions.length; i++) {
        depositOptions[i].classList.remove("selected-option")
    }
    depositOptions[3].classList.add("selected-option")

    for (let i = 0; i < depositValuti.length; i++) {
        depositValuti[i].innerText = "WBETH"
    }
    for (let i = 0; i < depositEpe.length; i++) {
        depositEpe[i].innerHTML = "peUSD"
    }
    depositDropdown.style.display = "none"
    depositImg.src = "img/vault3.svg"
    depositPool.innerText = "Lybra Mint Pool"
    depositCap.innerText = "1.875M / 50M"
})

depositOptions[4].addEventListener("click", () => {
    for (let i = 0; i < depositOptions.length; i++) {
        depositOptions[i].classList.remove("selected-option")
    }
    depositOptions[4].classList.add("selected-option")

    for (let i = 0; i < depositValuti.length; i++) {
        depositValuti[i].innerText = "rETH"
    }
    for (let i = 0; i < depositEpe.length; i++) {
        depositEpe[i].innerHTML = "peUSD"
    }
    depositDropdown.style.display = "none"
    depositImg.src = "img/vault4.svg"
    depositPool.innerText = "Lybra Mint Pool"
    depositCap.innerText = "153,849.924 / 500M"
})

const firstDropdown = document.querySelector(".dropdown-div")
const selectedCurr = document.querySelector(".selected-currency")
let firstOpenedd = false
const firstOptions = document.querySelectorAll(".dropdown-option")
const firstExpansion = document.querySelector(".dropdown-div .dropdown-expansion")

firstDropdown.addEventListener("click", () => {
    console.log(firstOpenedd)
    if (!firstOpenedd) {
        firstExpansion.style.display = "flex"
        firstOpenedd = true
    }
    else {
        firstExpansion.style.display = "none"
        firstOpenedd = false
    }
})

for (let i = 0; i < firstOptions.length; i++) {
    firstOptions[i].addEventListener("click", () => {
        selectedCurr.innerHTML = firstOptions[i].innerHTML
        if (i == 0) {
            depositCap.innerText = "114.613M / 10B"
            for (let i = 0; i < depositEpe.length; i++) {
                depositEpe[i].innerHTML = "eUSD"
            }

        }
        else if (i == 1) {
            depositCap.innerText = "31.178M / 10B"
            for (let i = 0; i < depositEpe.length; i++) {
                depositEpe[i].innerHTML = "peUSD"
            }

        }
        else if (i == 2) {
            depositCap.innerText = "1.875M / 50M"
            for (let i = 0; i < depositEpe.length; i++) {
                depositEpe[i].innerHTML = "peUSD"
            }

        }
        else if (i == 3) {
            depositCap.innerText = "153,849.924 / 500M"
            for (let i = 0; i < depositEpe.length; i++) {
                depositEpe[i].innerHTML = "peUSD"
            }

        }
    })
}

const withdrawOptions = document.querySelectorAll(".withdraw .depositOptions>div")
const withdrawtValuti = document.querySelectorAll(".withdraw .deposit-valuta")
const withdrawImg = document.querySelector(".withdraw .depositTop>div:nth-child(1) img")

withdrawOptions[1].addEventListener("click", () => {
    for (let i = 0; i < withdrawOptions.length; i++) {
        withdrawOptions[i].classList.remove("selected-option")
    }
    withdrawOptions[1].classList.add("selected-option")

    for (let i = 0; i < withdrawtValuti.length; i++) {
        withdrawtValuti[i].innerHTML = "stETH"
    }
    withdrawImg.src = "img/vault1.svg"
})

withdrawOptions[2].addEventListener("click", () => {
    for (let i = 0; i < withdrawOptions.length; i++) {
        withdrawOptions[i].classList.remove("selected-option")
    }
    withdrawOptions[2].classList.add("selected-option")

    for (let i = 0; i < withdrawtValuti.length; i++) {
        withdrawtValuti[i].innerText = "wstETH"
    }
    withdrawImg.src = "img/vault2.svg"
})

withdrawOptions[3].addEventListener("click", () => {
    for (let i = 0; i < withdrawOptions.length; i++) {
        withdrawOptions[i].classList.remove("selected-option")
    }
    withdrawOptions[3].classList.add("selected-option")

    for (let i = 0; i < withdrawtValuti.length; i++) {
        withdrawtValuti[i].innerText = "WBETH"
    }
    withdrawImg.src = "img/vault3.svg"
})

withdrawOptions[4].addEventListener("click", () => {
    for (let i = 0; i < withdrawOptions.length; i++) {
        withdrawOptions[i].classList.remove("selected-option")
    }
    withdrawOptions[4].classList.add("selected-option")

    for (let i = 0; i < withdrawtValuti.length; i++) {
        withdrawtValuti[i].innerText = "rETH"
    }
    withdrawImg.src = "img/vault4.svg"
})





const repayOptions = document.querySelectorAll(".repay .depositOptions>div")
const repaytValuti = document.querySelectorAll(".repay .deposit-valuta")
const repayImg = document.querySelector(".repay .depositTop>div:nth-child(1) img")
const repayCrypt = document.querySelectorAll(".repay .crypt")

repayOptions[1].addEventListener("click", () => {
    for (let i = 0; i < withdrawOptions.length; i++) {
        repayOptions[i].classList.remove("selected-option")
    }
    repayOptions[1].classList.add("selected-option")

    for (let i = 0; i < repaytValuti.length; i++) {
        repaytValuti[i].innerHTML = "eUSD"
    }
    for (let i = 0; i < repayCrypt.length; i++) {
        repayCrypt[i].innerHTML = "stETH"
    }
    repayImg.src = "img/vault-1.svg"
})

repayOptions[2].addEventListener("click", () => {
    for (let i = 0; i < withdrawOptions.length; i++) {
        repayOptions[i].classList.remove("selected-option")
    }
    repayOptions[2].classList.add("selected-option")

    for (let i = 0; i < repaytValuti.length; i++) {
        repaytValuti[i].innerText = "peUSD"
    }
    for (let i = 0; i < repayCrypt.length; i++) {
        repayCrypt[i].innerHTML = "wstETH"
    }
    repayImg.src = "img/vault-2.svg"
})

repayOptions[3].addEventListener("click", () => {
    for (let i = 0; i < withdrawOptions.length; i++) {
        repayOptions[i].classList.remove("selected-option")
    }
    repayOptions[3].classList.add("selected-option")

    for (let i = 0; i < repaytValuti.length; i++) {
        repaytValuti[i].innerText = "peUSD"
    }
    for (let i = 0; i < repayCrypt.length; i++) {
        repayCrypt[i].innerHTML = "WBETH"
    }
    repayImg.src = "img/vault-2.svg"
})

repayOptions[4].addEventListener("click", () => {
    for (let i = 0; i < withdrawOptions.length; i++) {
        repayOptions[i].classList.remove("selected-option")
    }
    repayOptions[4].classList.add("selected-option")

    for (let i = 0; i < repaytValuti.length; i++) {
        repaytValuti[i].innerText = "peUSD"
    }
    for (let i = 0; i < repayCrypt.length; i++) {
        repayCrypt[i].innerHTML = "rETH"
    }
    repayImg.src = "img/vault-2.svg"
})




const redeemOptions = document.querySelectorAll(".redeem .depositOptions>div")
const redeemValuti = document.querySelectorAll(".redeem .deposit-valuta")
const redeemImg = document.querySelector(".redeem .depositTop>div:nth-child(1) img")
const redeemBox = document.querySelector(".theBox")
const redeemDesc = document.querySelector(".theDesc")
const redeemCurr = document.querySelector(".theCurr")

redeemOptions[1].addEventListener("click", () => {
    for (let i = 0; i < redeemOptions.length; i++) {
        redeemOptions[i].classList.remove("selected-option")
    }
    redeemOptions[1].classList.add("selected-option")

    for (let i = 0; i < redeemValuti.length; i++) {
        redeemValuti[i].innerHTML = "eUSD"
    }
    redeemImg.src = "img/vault-1.svg"
    redeemBox.style.display = "flex"
    redeemDesc.style.display = "block"
    redeemCurr.innerHTML = "stETH"
})

redeemOptions[2].addEventListener("click", () => {
    for (let i = 0; i < redeemOptions.length; i++) {
        redeemOptions[i].classList.remove("selected-option")
    }
    redeemOptions[2].classList.add("selected-option")

    for (let i = 0; i < redeemValuti.length; i++) {
        redeemValuti[i].innerText = "peUSD"
    }
    redeemImg.src = "img/vault-2.svg"
    redeemBox.style.display = "none"
    redeemDesc.style.display = "none"
    redeemCurr.innerHTML = "wstETH"
})

redeemOptions[3].addEventListener("click", () => {
    for (let i = 0; i < redeemOptions.length; i++) {
        redeemOptions[i].classList.remove("selected-option")
    }
    redeemOptions[3].classList.add("selected-option")

    for (let i = 0; i < redeemValuti.length; i++) {
        redeemValuti[i].innerText = "peUSD"
    }
    redeemImg.src = "img/vault-2.svg"
    redeemBox.style.display = "none"
    redeemDesc.style.display = "none"
    redeemCurr.innerText = "WBETH"
})

redeemOptions[4].addEventListener("click", () => {
    for (let i = 0; i < redeemOptions.length; i++) {
        redeemOptions[i].classList.remove("selected-option")
    }
    redeemOptions[4].classList.add("selected-option")

    for (let i = 0; i < redeemValuti.length; i++) {
        redeemValuti[i].innerText = "peUSD"
    }
    redeemImg.src = "img/vault-2.svg"
    redeemBox.style.display = "none"
    redeemDesc.style.display = "none"
    redeemCurr.innerText = "rETH"
})



const secondDropdown = document.querySelector(".boost-dropdown")
const secondSelectedCurr = document.querySelector(".sellec")
let secondOpened = false
const secondOptions = document.querySelectorAll(".boost-dropdown .dropdown-expansion div")
const secondExpansion = document.querySelector(".boost-dropdown .dropdown-expansion")

secondDropdown.addEventListener("click", () => {
    if (!secondOpened) {
        secondExpansion.style.display = "flex"
        secondOpened = true
    }
    else {
        secondExpansion.style.display = "none"
        secondOpened = false
    }
})

for (let i = 0; i < secondOptions.length; i++) {
    secondOptions[i].addEventListener("click", () => {
        secondSelectedCurr.innerHTML = secondOptions[i].innerHTML
    })
}

const firstOmniDropDownDivs = document.querySelectorAll(".leftOmniDropdownDiv")
const firstOmniExpansions = document.querySelectorAll(".leftExpansion")
const firstOmniImgs = document.querySelectorAll(".foi")
const firstOmniOptions = document.querySelectorAll(".leftExpansion>div")
const firstOmniTexts = document.querySelectorAll(".fotd")

let firstOpened = [false, false]

for (let i = 0; i < 2; i++) {
    firstOmniDropDownDivs[i].addEventListener("click", () => {
        if (!firstOpened[i]) {
            firstOmniExpansions[i].style.display = "flex"
            firstOpened[i] = true
        }
        else {
            firstOmniExpansions[i].style.display = "none"
            firstOpened[i] = false
        }
    })
}

firstOmniOptions[0].addEventListener("click", () => {
    firstOmniImgs[0].src = "img/vault-1.svg"
    firstOmniTexts[0].innerText = "eUSD"
})

firstOmniOptions[1].addEventListener("click", () => {
    firstOmniImgs[0].src = "img/vault-2.svg"
    firstOmniTexts[0].innerText = "peUSD"
})

firstOmniOptions[2].addEventListener("click", () => {
    firstOmniImgs[0].src = "img/logo.png"
    firstOmniTexts[0].innerText = "LBR"
})

firstOmniOptions[3].addEventListener("click", () => {
    firstOmniImgs[1].src = "img/vault-1.svg"
    firstOmniTexts[1].innerText = "eUSD"
})

firstOmniOptions[4].addEventListener("click", () => {
    firstOmniImgs[1].src = "img/vault-2.svg"
    firstOmniTexts[1].innerText = "peUSD"
})

firstOmniOptions[5].addEventListener("click", () => {
    firstOmniImgs[1].src = "img/logo.png"
    firstOmniTexts[1].innerText = "LBR"
})

const secondOmniDropDownDivs = document.querySelectorAll(".rightOmniDropdownDiv")
const secondOmniExpansions = document.querySelectorAll(".rightExpansion")
const secondOmniImgs = document.querySelectorAll(".rightOmniDropdownDiv>div>img")
const secondOmniTexts = document.querySelectorAll(".soi")
const secondOmniOptions = document.querySelectorAll(".rightExpansion>div")

let secondOpenedd = [false, false]

for (let i = 0; i < 2; i++) {
    secondOmniDropDownDivs[i].addEventListener("click", () => {
        if (!secondOpenedd[i]) {
            secondOmniExpansions[i].style.display = "flex"
            secondOpenedd[i] = true
        }
        else {
            secondOmniExpansions[i].style.display = "none"
            secondOpenedd[i] = false
        }
    })
}

secondOmniOptions[0].addEventListener("click", () => {
    secondOmniImgs[0].src = "img/vault0.svg"
    secondOmniTexts[0].innerText = "ETH"
})

secondOmniOptions[1].addEventListener("click", () => {
    secondOmniImgs[0].src = "img/arb.svg"
    secondOmniTexts[0].innerText = "ARB"
})

secondOmniOptions[2].addEventListener("click", () => {
    secondOmniImgs[1].src = "img/vault0.svg"
    secondOmniTexts[1].innerText = "ETH"
})

secondOmniOptions[3].addEventListener("click", () => {
    secondOmniImgs[1].src = "img/arb.svg"
    secondOmniTexts[1].innerText = "ARB"
})

const mobileDash = document.querySelector("#iddto")
let mobileNewOpened = false
const mobileSidebar = document.querySelector(".sidebarr")

mobileDash.addEventListener("click", () => {
    if (!mobileNewOpened) {
        mobileSidebar.style.display = "flex"
        mobileNewOpened = true
    }
    else {
        mobileSidebar.style.display = "none"
        mobileNewOpened = false
    }
})

const mobileOptions = document.querySelectorAll(".mobileScreens")

for (let i = 0; i < mobileOptions.length; i++) {
    mobileOptions[i].addEventListener("click", () => {
        sidebarOptions[i].click()
        mobilemenu.style.display = "none"
        mobileOpened = false
        document.querySelector(".burger img").src = "img/burger.svg"
    })
}

const boostSwitch = document.querySelector(".boost label input")
const boostEs = document.querySelector(".boost .es")

boostSwitch.addEventListener("input", ()=>{
    if(boostSwitch.checked){
        boostEs.innerText = "esLBR"
    }
    else{
        boostEs.innerText = "LBR"
    }
})

const bountySwitch = document.querySelector(".bounty label input")
const bountyEs = document.querySelector(".bounty .es")

bountySwitch.addEventListener("input", ()=>{
    if(bountySwitch.checked){
        bountyEs.innerText = "eUSD"
    }
    else{
        bountyEs.innerText = "LBR"
    }
})

thesun.addEventListener("click", () => {
    if (light) {
        document.querySelector("body").style.color = "white"
        document.querySelector(".thesun img").src = "img/moon.svg"
        document.querySelector(".thesun").style.backgroundColor = "rgba(48,48,48,.88)"
        document.querySelector(".thesun").style.boxShadow = "2px 2px 0 #737373"
        document.querySelector(".thesun").style.border = "1px solid #737373"
        document.querySelector("header").style.backgroundColor = "rgba(48,48,48,.88)"
        for (let i = 0; i < arrows.length; i++) {
            arrows[i].src = "img/whitearrow.svg"
        }
        document.querySelector("footer").style.backgroundColor = "#343943"
        document.querySelector("#dashboard").style.backgroundColor = "#232323"
        for (let i = 0; i < sidebarOptions.length; i++) {
            sidebarOptions[i].style.color = "white"
        }
        document.querySelector(".omniBox").style.backgroundColor = "#404040"
        document.querySelector(".omniBox").style.color = "white"
        const boxess = document.querySelectorAll(".vaultBox")
        for (let i = 0; i < boxess.length; i++) {
            boxess[i].style.backgroundColor = "#404040"
            boxess[i].querySelector(".vaultMid").style.color = "white"
            boxess[i].querySelector(".vaultTop").style.color = "white"
        }
        const boxes = document.querySelectorAll(".depositBox")
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = "#404040"
            boxes[i].style.color = "white"
            boxes[i].querySelector("input").style.backgroundColor = "#737373"
        }
        const descss = document.querySelectorAll(".description")
        for (let i = 0; i < descss.length; i++) {
            descss[i].style.color = "white"
            descss[i].style.backgroundColor = "#404040"
        }
        const optionss = document.querySelectorAll(".anOption")
        for (let i = 0; i < optionss.length; i++) {
            optionss[i].style.color = "#a3d3ff"
            optionss[i].style.backgroundColor = "#404040"
        }
        const infoBoxes1 = document.querySelectorAll(".infoBox1")
        const otherss = document.querySelectorAll(".infoBox1>div>div:nth-child(1)")
        for (let i = 0; i < infoBoxes1.length; i++) {
            infoBoxes1[i].style.color = "white"
            infoBoxes1[i].style.backgroundColor = "#404040"
        }
        for (let i = 0; i < otherss.length; i++) {
            otherss[i].style.color = "white"
        }
        const infoBoxes2 = document.querySelectorAll(".infoBox2")
        for (let i = 0; i < infoBoxes2.length; i++) {
            infoBoxes2[i].style.color = "white"
            infoBoxes2[i].style.backgroundColor = "#404040"
        }
        firstOmniDropDownDivs[0].style.backgroundColor = "#737373"
        firstOmniDropDownDivs[1].style.backgroundColor = "#737373"
        secondOmniDropDownDivs[0].style.backgroundColor = "#737373"
        secondOmniDropDownDivs[1].style.backgroundColor = "#737373"
        document.querySelector(".omniInputDiv input").style.backgroundColor = "#737373"
        document.querySelector(".sidebar").style.color = "white"
        document.querySelector(".leftFooter").style.color = "white"
        document.querySelector(".leftFooter>a:nth-child(1)").style.color = "white"
        const boostBoxes = document.querySelectorAll(".boostBox")
        for (let i = 0; i < boostBoxes.length; i++) {
            boostBoxes[i].style.backgroundColor = "#404040"
            boostBoxes[i].style.color = "white"
        }
        const bountys = document.querySelectorAll(".bountyBox1")
        for(let i=0; i<bountys.length; i++){
            bountys[i].style.backgroundColor ="rgb(64, 64, 64)"
        }
        const switches = document.querySelectorAll(".switch-container")
        for(let i=0; i<switches.length; i++){
            switches[i].style.backgroundColor="#737373"
        }
        const svgs = document.querySelectorAll(".clickable-side svg")
        for(let i=0; i<svgs.length; i++){
            svgs[i].style.filter = "drop-shadow(30px 0 #FFF)"
            svgs[i].style.transform = "translateX(-30px)"
        }
        mobilemenu.style.backgroundColor = "black"
        light = false
    }


    else {
        document.querySelector("#dashboard").style.backgroundColor = "#ecf4ff"
        for (let i = 0; i < sidebarOptions.length; i++) {
            sidebarOptions[i].style.color = "black"
        }
        document.querySelector(".omniBox").style.backgroundColor = "white"
        document.querySelector(".omniBox").style.color = "black"
        const boxess = document.querySelectorAll(".vaultBox")
        for (let i = 0; i < boxess.length; i++) {
            boxess[i].style.backgroundColor = "white"
            boxess[i].querySelector(".vaultMid").style.color = "black"
            boxess[i].querySelector(".vaultTop").style.color = "black"
        }
        const boxes = document.querySelectorAll(".depositBox")
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = "white"
            boxes[i].style.color = "black"
            boxes[i].querySelector("input").style.backgroundColor = "white"
        }
        const descss = document.querySelectorAll(".description")
        for (let i = 0; i < descss.length; i++) {
            descss[i].style.color = "black"
            descss[i].style.backgroundColor = "white"
        }
        const optionss = document.querySelectorAll(".anOption")
        for (let i = 0; i < optionss.length; i++) {
            optionss[i].style.color = "black"
            optionss[i].style.backgroundColor = "white"
        }
        const infoBoxes1 = document.querySelectorAll(".infoBox1")
        const otherss = document.querySelectorAll(".infoBox1>div>div:nth-child(1)")
        for (let i = 0; i < infoBoxes1.length; i++) {
            infoBoxes1[i].style.color = "black"
            infoBoxes1[i].style.backgroundColor = "white"
        }
        for (let i = 0; i < otherss.length; i++) {
            otherss[i].style.color = "black"
        }
        const infoBoxes2 = document.querySelectorAll(".infoBox2")
        for (let i = 0; i < infoBoxes2.length; i++) {
            infoBoxes2[i].style.color = "black"
            infoBoxes2[i].style.backgroundColor = "white"
        }
        firstOmniDropDownDivs[0].style.backgroundColor = "white"
        firstOmniDropDownDivs[1].style.backgroundColor = "white"
        secondOmniDropDownDivs[0].style.backgroundColor = "white"
        secondOmniDropDownDivs[1].style.backgroundColor = "white"
        document.querySelector(".omniInputDiv input").style.backgroundColor = "white"
        document.querySelector(".sidebar").style.color = "black"
        document.querySelector(".leftFooter").style.color = "black"
        document.querySelector(".leftFooter>a:nth-child(1)").style.color = "black"
        const boostBoxes = document.querySelectorAll(".boostBox")
        for (let i = 0; i < boostBoxes.length; i++) {
            boostBoxes[i].style.backgroundColor = "white"
            boostBoxes[i].style.color = "black"
        }
        const bountys = document.querySelectorAll(".bountyBox1")
        for(let i=0; i<bountys.length; i++){
            bountys[i].style.backgroundColor ="white"
        }
        const switches = document.querySelectorAll(".switch-container")
        for(let i=0; i<switches.length; i++){
            switches[i].style.backgroundColor="white"
        }
        document.querySelector("body").style.color = "black"
        document.querySelector(".thesun img").src = "img/sun.svg"
        document.querySelector(".thesun").style.backgroundColor = "white"
        document.querySelector(".thesun").style.boxShadow = "2px 2px 0 black"
        document.querySelector(".thesun").style.border = "1px solid black"
        document.querySelector("header").style.backgroundColor = "#ecf4ff"
        for (let i = 0; i < arrows.length; i++) {
            arrows[i].src = "img/downarrow.svg"
        }
        document.querySelector("footer").style.backgroundColor = "#98c5fa"
        document.querySelector(".leftFooter").style.color = "white"
        document.querySelector(".leftFooter>a:nth-child(1)").style.color = "white"
        const svgs = document.querySelectorAll(".clickable-side svg")
        for(let i=0; i<svgs.length; i++){
            svgs[i].style.filter = "none"
            svgs[i].style.transform = "translateX(-0px)"
        }
        mobilemenu.style.backgroundColor = "white"
        light = true
    }

})