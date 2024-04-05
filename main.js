
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let white = document.querySelector(".white")
let grey = document.querySelector(".grey")
let oq = document.querySelector(".oq")

btn1.onclick = () => {
oq.innerHTML = "space grey"
btn1.style.background = ("rgba(207, 231, 255, 1)")
btn1.style.color = ("rgba(121, 121, 121, 1)")
btn2.style.color = ("rgba(255, 255, 255, 1)")
btn2.style.background = ("rgba(0, 113, 227, 1)")
}
btn2.onclick = () => {
oq.innerHTML ="White"
btn2.style.background = ("rgba(207, 231, 255, 1)")
btn2.style.color = ("rgba(121, 121, 121, 1)")
btn1.style.color = ("rgba(255, 255, 255, 1)")
btn1.style.background = ("rgba(0, 113, 227, 1)")
}

let narx = document.querySelector(".narx")
let gb = document.querySelector(".gb")
let tb1 = document.querySelector(".tb1")
let tb2 = document.querySelector(".tb2")
let tb3 = document.querySelector(".tb3")

gb.onclick = () => {
narx.innerHTML = "$1,999"
gb.style.border = ("4px solid royalblue")
tb1.style.border = ("2px solid rgb(135, 255, 215)")
tb2.style.border =("2px solid rgb(135, 255, 215")
tb3.style.border = ("2px solid rgb(135, 255, 215)")
}
tb1.onclick = () => {
   narx.innerHTML = "$2,199"
   tb1.style.border = ("4px solid royalblue")
   gb.style.border = ("2px solid rgb(135, 255, 215)")
   tb2.style.border = ("2px solid rgb(135, 255, 215)")
   tb3.style.border = ("2px solid rgb(135, 255, 215)")
}
tb2.onclick = () => {
    narx.innerHTML = "$2,799"
    tb2.style.border = ("4px solid royalblue")

    tb1.style.border = ("2px solid rgb(135, 255, 215")
    tb3.style.border = ("2px solid rgb(135, 255, 215")
    gb.style.border = ("2px solid rgb(135, 255, 215)")
}      
tb3.onclick = () => {
    narx.innerHTML = "$3,999"
    tb3.style.border = ("4px solid royalblue")
    tb1.style.border = ("2px solid rgb(135, 255, 215)")
    gb.style.border = ("2px solid rgb(135, 255, 215)")
    tb2.style.border = ("2px solid rgb(135, 255, 215)")
}