let container=document.querySelector("#container")
let button=document.createElement("button")
let button1=document.createElement("button")

button.textContent="CHOOSE GRID SIZE"
button.setAttribute("id","btn1")
document.body.appendChild(button)

button1.setAttribute("id","btn2")
document.body.appendChild(button1)
button1.textContent="Reset"


button.addEventListener("click",()=>{
    let x=prompt("choose the x size of the grid:"+" ")
    let y=prompt("choose the y size of the grid:"+" ")
    if(x >100 || y>100){
        alert("choose a value lower than 100"+" ")
        x=null
        y=null
    }
    
    for(i=0;i<x*y;i++){
        const div=document.createElement("div")
        div.classList.add("div1") 
        container.appendChild(div)
        
}
})
button1.addEventListener("click",()=>{
    container.remove()
        
})


