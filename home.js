let container=document.querySelector("#container")
let button=document.createElement("button")
let button1=document.createElement("button")
button.textContent="CHOOSE GRID SIZE"
button.setAttribute("id","btn1")
document.body.appendChild(button)
button1.setAttribute("id","btn2")
document.body.appendChild(button1)
button1.textContent="Reset"


function grid(){
    let x=prompt("Give ME A SIZE FOR THE GRID MR.S OR MS.SIGMA (need to be lower then 100).")
    if(x>100){
        x=0
        alert("GIVE A NUMBER NUMBER THAN 100.")
    }else if(x===""||x===" "||x<1){
        x=0
        alert("GIVE ME A NUMBER BIGGER THAN ONE OR NOTHING.")
    }else if(isNaN(x)){
        x=0 
        alert("WORD ARE NOT ACCEPTABLE.")
    }
    container.innerHTML=""
    
    for(i=0;i<x*x;i++){    
        let row = document.createElement("div");
        row.classList.add("div1"); 
        container.appendChild(row);  
        
        }
        
}


button.addEventListener("click",grid)

button1.addEventListener("click",()=>{
    container.innerHTML=""
        
})


