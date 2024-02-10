
Details=[{id:1,value:20},{id:2,value:50},{id:3,value:40},{id:4,value:10}]
let input=document.getElementById("input")
let tablerow=document.getElementById("tablerow")
let Totalvalue=document.getElementById("Totalvalue")
let ballset=document.getElementById("ballset")

function Addvalue(){
    Details.push({id:Details.length+1,value:Number(input.value)})
    view()
    input.value=""
}


function view(){
    let ball="";

    Details.map((val)=>{
    ball+=`<div id="ball"><div id="${val.id}" onclick="deleteitem(${val.id})">${val.id}</div></div>`
    })
    ballset.innerHTML=ball
    printvalue()
}
function printvalue(){
    let values=""
    let total=0

    Details.map((val)=>{
        values+=`<tr><td>${val.id}</td><td>${val.value}</td></tr>`
        total+=val.value
        })
    tablerow.innerHTML=values
    Totalvalue.innerHTML=total 
}
function deleteitem(id){
    let styles=document.getElementById(`${id}`).style
    delete Details[id-1]
    styles.backgroundColor="green"  
    printvalue()
}