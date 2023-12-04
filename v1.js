const boxOptions = document.querySelectorAll(".v1options>div")
const box = document.querySelector(".boxPart")
const leftSide = document.querySelector(".v1-3>div:nth-child(1)")

const spans = document.querySelectorAll(".spanns")
spans[0].addEventListener("click", ()=>{
    document.querySelector(".curr").innerText = "ETH"
    spans[1].classList.remove("selected-span-v1")
    spans[0].classList.add("selected-span-v1")
})

spans[1].addEventListener("click", ()=>{
    document.querySelector(".curr").innerText = "stETH"
    spans[0].classList.remove("selected-span-v1")
    spans[1].classList.add("selected-span-v1")
})

boxOptions[0].addEventListener("click", () => {
    for (let i = 0; i < boxOptions.length; i++) {
        boxOptions[i].classList.remove("selected-v1")
    }
    boxOptions[0].classList.add("selected-v1")
    box.innerHTML = `
    <div class="v1text">
                            <div>
                                Deposit <span class="selected-span-v1 spanns">ETH</span> / <span class="spanns">stETH</span>
                            </div>

                            <div style="color: #849fc3!important;">Available 0 <span class="curr">ETH</span></div>
                        </div>

                        <div class="v1input-div">
                            <input type="text" placeholder="0">
                            <div class="maxdiv v1maxdiv"><div>MAX</div></div>
                        </div>

                        <div class="v1text">
                            <div>
                                Mint eUSD</span>
                            </div>

                            <div style="color: #849fc3!important;">Max 0 eUSD</div>
                        </div>

                        <div class="v1input-div">
                            <input type="text" placeholder="0">
                            <div class="maxdiv v1maxdiv"><div>MAX</div></div>
                        </div>

                        <div class="v1casual theblack"">Transaction overview</div>

                        <div class="v1casual">
                            <div>Collateral Ratio</div>
                            <div>∞</div>
                        </div>

                        <div class="v1casual" style="text-align: left;">Liquidation at &lt; 150%</div>

                        <div class="v1casual">
                            <img height="15px" src="img/v1-gas.svg">
                            <div>$34.28</div>
                        </div>

                        <div class="v1-btn-div">
                            <div>Deposit</div>
                        </div>
    `

    leftSide.innerHTML = `
    <h3>Mint eUSD</h3>

                    <p>
                        To mint (borrow) eUSD, you are required to deposit a specific amount of collateral (ETH or stETH)
                        using the Lybra platform, or have a pre-existing balance of ETH or stETH within the Lybra
                        Protocol. You can then generate eUSD against your collateral up to a maximum collateral ratio of
                        170%.
                    </p>
    `

    const spans = document.querySelectorAll(".spanns")
spans[0].addEventListener("click", ()=>{
    document.querySelector(".curr").innerText = "ETH"
    spans[1].classList.remove("selected-span-v1")
    spans[0].classList.add("selected-span-v1")
})

spans[1].addEventListener("click", ()=>{
    document.querySelector(".curr").innerText = "stETH"
    spans[0].classList.remove("selected-span-v1")
    spans[1].classList.add("selected-span-v1")
})
})

boxOptions[1].addEventListener("click", () => {
    for (let i = 0; i < boxOptions.length; i++) {
        boxOptions[i].classList.remove("selected-v1")
    }
    boxOptions[1].classList.add("selected-v1")
    box.innerHTML = `

<div class="v1text">
    <div>
    Withdraw stETH
    </div>

    <div style="color: #849fc3!important;">Max 0 stETH</div>
</div>

<div class="v1input-div">
    <input type="text" placeholder="0 stETH">
    <div class="maxdiv v1maxdiv"><div>MAX</div></div>
</div>

<div class="v1casual theblack"">Transaction overview</div>

<div class="v1casual">
    <div>Collateral Ratio</div>
    <div>∞</div>
</div>

<div class="v1casual" style="text-align: left;">Liquidation at &lt; 150%</div>

<div class="v1casual">
    <img height="15px" src="img/v1-gas.svg">
    <div>$20.30</div>
</div>

<div class="v1-btn-div">
    <div>Withdraw</div>
</div>
    `

    leftSide.innerHTML = `
    <h3>Withdraw stETH</h3>

                    <p>
                    By withdrawing stETH collateral, you will get your deposited stETH back and reduce your exposure to price fluctuations. However, this also means that your collateral Ratio drops and you may face liquidation if the price of ETH falls below a certain threshold. You should always monitor your loan and keep a healthy collateral Ratio to avoid losing your funds.
                    </p>
    `
})

boxOptions[2].addEventListener("click", () => {
    for (let i = 0; i < boxOptions.length; i++) {
        boxOptions[i].classList.remove("selected-v1")
    }
    boxOptions[2].classList.add("selected-v1")
    box.innerHTML = `

<div class="v1text">
    <div>
    Repay eUSD
    </div>

    <div style="color: #849fc3!important;">Balance 0 eUSD</div>
</div>

<div class="v1input-div">
    <input type="text" placeholder="0 eUSD">
    <div class="maxdiv v1maxdiv"><div>MAX</div></div>
</div>

<div class="v1casual theblack"">Transaction overview</div>

<div class="v1casual">
    <div>Collateral Ratio</div>
    <div>∞</div>
</div>

<div class="v1casual" style="text-align: left;">Liquidation at &lt; 150%</div>

<div class="v1casual">
    <img height="15px" src="img/v1-gas.svg">
    <div>$11.68</div>
</div>

<div class="v1-btn-div">
    <div>Repay</div>
</div>
    `

    leftSide.innerHTML = `
    <h3>Repay eUSD</h3>

                    <p>
                    If you have borrowed eUSD from Lybra Protocol, you may want to repay some of your debt to increase your collateral Ratio. Your funds will become more stable and safe by doing this. However, you won't be able to continue earning yield from this part of the eUSD once you pay it back.
                    </p>
    `
})

boxOptions[3].addEventListener("click", () => {
    for (let i = 0; i < boxOptions.length; i++) {
        boxOptions[i].classList.remove("selected-v1")
    }
    boxOptions[3].classList.add("selected-v1")
    box.innerHTML = `

<div class="v1text">
    <div>
    Redeem eUSD
    </div>

    <div style="color: #849fc3!important;">Balance 0 eUSD</div>
</div>

<div class="v1input-div">
    <input type="text" placeholder="0 eUSD">
    <div class="maxdiv v1maxdiv"><div>MAX</div></div>
    <div style="position:absolute; top:50%; right: 80px; transform:translateY(-50%); color:#3986c9;">Fee: 0</div>
</div>

<div class="v1-btn-div">
    <div>Redeem</div>
</div>
    `

    leftSide.innerHTML = `
    <h3>Redeem eUSD</h3>

                    <p>
                    At some point, you may consider exchanging your eUSD for stETH. The Lybra Protocol's Rigid Redemption Mechanism ensures a consistent 1:1 exchange rate between eUSD and stETH.
                    </p>
    `
})

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
        boxOptions[i].click()
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
    document.querySelector("body").style.backgroundImage = `url("img/darkb.png")`
    const arrows = document.querySelector(".v1expansion-div img")
    arrows.src = "img/whitearrow.svg"
    document.querySelector(".v1expansion-div").style.color = "white"
    const headers = document.querySelectorAll("header a")
    for(let i=0; i<headers.length; i++){
        headers[i].style.color = "white"
    }
    document.querySelector(".v1box").style.background = "#262626"
    document.querySelector(".v1box").style.border = "1px solid #525252"
    document.querySelector(".v1box").style.boxShadow = "0 8px 32px #000"
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
    document.querySelector(".theblack").style.color = "white"
    const inputs = document.querySelectorAll(".v1input-div input")
    for(let i=0; i<inputs.length; i++){
        inputs[i].style.background ="#262626"
        inputs[i].style.border ="1px solid rgba(132,159,195,.33)"
    }
    document.querySelector(".v1options").style.backgroundColor = "rgba(71,81,103,.25)"
})


sun.addEventListener("click", ()=>{
    document.querySelector("body").style.color = "black"
    document.querySelector("body").style.backgroundImage = `url("img/thebg.png")`
    const arrows = document.querySelector(".v1expansion-div img")
    arrows.src = "img/downarrow.svg"
    document.querySelector(".v1expansion-div").style.color = "black"
    const headers = document.querySelectorAll("header a")
    for(let i=0; i<headers.length; i++){
        headers[i].style.color = "#737373"
    }
    document.querySelector(".v1box").style.background = "white"
    document.querySelector(".v1box").style.border = "none"
    document.querySelector(".v1box").style.boxShadow = "0 8px 32px #dde0e7"
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
    document.querySelector(".theblack").style.color = "black"
    const inputs = document.querySelectorAll(".v1input-div input")
    for(let i=0; i<inputs.length; i++){
        inputs[i].style.background ="white"
        inputs[i].style.border ="1px solid rgba(132,159,195,.33)"
    }
    document.querySelector(".v1options").style.backgroundColor = "white"
})