let Array=[]
let input=document.getElementById("input-value")
let para=document.getElementById("list")

function display(num){
    input.value+=num
}

function calculate(){
    try{
        Array.push(input.value)
        input.value=eval(input.value)
    }
    catch{
        input.value="Error"
    }
}

function clears(){
    input.value=""
}

function del(){
    input.value=input.value.slice(0,-1)
}

function historybtn(){
    console.log(Array);
    let data=""
    Array.map((arr)=>{data+=`<li>${arr} = ${eval(arr)}</li>`})
    para.innerHTML=data
}