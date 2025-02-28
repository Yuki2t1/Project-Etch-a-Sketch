let container=document.querySelector("#divs_container")
let columns=document.querySelector("#columns")
let button1=document.getElementById("btn1")
container.setAttribute("id","container")
columns.setAttribute("id","columns")




function play_16x16(){
    let counter=0
    while (counter!=16){
        let br=document.createElement("br")    
        for(let i=0;i<16;i++){
            let div=document.createElement("div")
            div.addEventListener("mouseover",()=>{
                div.style.backgroundColor="gray"
            })
            div.classList.add("div");
            columns.appendChild(div) 
            }counter+=1
        
        columns.appendChild(br)

    }

}


function play_32x32(){
    let counter=0
    while (counter!=32){
        let br=document.createElement("br")    
        for(let i=0;i<32;i++){
            let div=document.createElement("div")
            div.addEventListener("mouseover",()=>{
                div.style.backgroundColor="gray"
            })
            div.classList.add("div");
            columns.appendChild(div)
            
            }counter+=1
        
        columns.appendChild(br)

    }

}

function play_64x64(){
    let counter=0
    while (counter!=64){
        let br=document.createElement("br")    
        for(let i=0;i<64;i++){
            let div=document.createElement("div")
            div.addEventListener("mouseover",()=>{
                div.style.backgroundColor="gray"
            })
            div.classList.add("div");
            columns.appendChild(div)
            
            }counter+=1
        
        columns.appendChild(br)

    }

}

function reset(){
    container.innerHTML=""
}