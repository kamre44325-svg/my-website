const ul = document.getElementById("ul")
const lis = document.querySelectorAll("#ul li")
const section = document.getElementById("section")
const screens = document.querySelectorAll(".screen")
const cards = document.querySelectorAll(".card")
    if(window.localStorage.getItem("date")){
    lis.forEach(function(li){
        if(li.dataset.product === window.localStorage.getItem("date")){
    li.classList.add("active")
    screens.forEach((screen) => {
    screen.classList.remove("sactive")
    })
    let target = document.getElementById(window.localStorage.getItem("date"))
    target.classList.add("sactive")
    }
    })
    }
lis.forEach((li) => {
li.addEventListener("click", function(){
    lis.forEach((li) => {
        li.classList.remove("active")
    })
    li.classList.add("active")
    screens.forEach((screen) => {
    screen.classList.remove("sactive")
    })
    // console.log(li.dataset.product)
    localStorage.setItem("date", li.dataset.product )
    let target = document.getElementById(window.localStorage.getItem("date"))
    target.classList.add("sactive")
    })
})

cards.forEach((card) => {
card.addEventListener("click", function(){
    let pp = document.createElement("div")
    pp.classList.add("parent")
    let close = document.createElement("span")
    pp.appendChild(close)
    close.style.cssText = "background-color:red; color:white; padding:5px 10px; position: absolute; top:0px; right:0px; width:fit-content; border-top-right-radius: 10px; cursor:pointer;"
    close.classList.add("close")
    let ct = document.createTextNode("X")
    close.appendChild(ct)
    
    close.addEventListener("click", function(){
    close.parentElement.remove()
})
    document.querySelector(".sactive").appendChild(pp)
    const img = card.querySelector("img")
    let imgk = document.createElement("img")
    imgk.classList.add("imgk")
    imgk.src = img.src
    imgk.alt = img.alt
    pp.appendChild(imgk)
    
    let info = document.createElement("div")
    let hw = document.createElement("h2")
    let ht = document.createTextNode(imgk.alt)
    hw.appendChild(ht)
    info.appendChild(hw)
    pp.appendChild(info)
    info.classList.add("info")
    let fw = card.querySelector("div")
    let fp = document.createElement("div")
    fp.appendChild(document.createTextNode(fw.textContent))
    info.appendChild(fp)
    fp.classList.add("amr")
    let button = document.createElement("button")
    button.appendChild(document.createTextNode("Buy Now"))
    button.style.cssText = "color:white; background-color:black; width:fit-content; padding:10px; font-width:bold; font-size:15px; margin-top:30px; border:none; out-line:none; cursor:pointer;"
    info.appendChild(button)
})}
)

setTimeout(() => {
let Al = document.createElement("div")
Al.classList.add("Al")
document.body.appendChild(Al)
Al.style.cssText = "width:800px; height:400px; background-color:rgb(236, 245, 254); position: fixed; top:10px; left:50%; transform:translateX(-50%);"
    let tex = document.createTextNode("Offer on this Product 25%")
    let dex = document.createElement("div")
    dex.appendChild(tex)
    Al.appendChild(dex)
    dex.style.cssText = "width:100%; text-align: center;  font-size:30px; background:red; color:white;"
    let cl = document.createElement("span")
    Al.appendChild(cl)
    let Aimg = document.createElement("img")
    let Adiv = document.createElement("div")
    Adiv.appendChild(Aimg)
    Aimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvWJyEa_0tbrf0jNFKQfvUE2wsmuh-mPysNLEAvWieVJEGxiQMzfIzqi7&s=10" ;
    Al.appendChild(Adiv)
    Adiv.style.cssText = "text-align:center;"
    Aimg.style.cssText = "width:400px; height:300px; padding:10px; margin:20px auto; text-align:center;"
    cl.style.cssText = "background-color:red; color:white; padding: 8px 10px; position: absolute; top:0px; right:-35px; border-radius:50%; width:fit-content; cursor:pointer;"
    cl.classList.add("close")
    let cp = document.createTextNode("X")
    cl.appendChild(cp)
    cl.addEventListener("click", function(){
        cl.parentElement.remove()
    })
}, 3000)

cards.forEach((e) => {
e.setAttribute("title", "Click")
})

//end
function end(){
    const date = new Date().getFullYear()
    let small = document.createElement("p")
    small.classList.add("small")
    document.body.appendChild(small)
    small.textContent = ` @ ${date} - All Rights Reserved`;
}
end()