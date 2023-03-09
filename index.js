const start = document.getElementById("start")
const pause = document.getElementById("pause")
const reset = document.getElementById("reset")
const cast = document.getElementById("cast")
const ul = document.getElementById("ul")

const show = document.getElementById("stopwatch")
let a = 0
let hr = 0;
let min = 0;
let sec = 0
let id

const running=()=>{
    a += 1
    if(a>99) sec += 1, a = 0
    if(sec>59) min += 1, sec = 0  
    if(min>59) hr = hr+1, min = 0  
    s = `Hr : ${hr} :: Min : ${min} :: Sec : ${sec} :: ${a}`
    show.innerHTML = s
}

start.addEventListener("click", ()=>{
        id = setInterval("running()",10) 
        start.disabled = true
})

pause.addEventListener("click", (e)=>{
    clearInterval(id)
    start.disabled = false
})
reset.addEventListener("click", ()=>{
    clearInterval(id)
    a = 0
    hr = 0
    min = 0
    sec = 0
    ul.innerHTML = ""
    s = `Hr : ${hr} :: Min : ${min} :: Sec : ${sec} :: ${a}`
    show.innerHTML = s
    start.disabled = false
})

cast.addEventListener("click",()=>{
    let add = document.createElement('li')
    add.innerHTML = s
    ul.appendChild(add)
    console.log(s);
})

