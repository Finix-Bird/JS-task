let Namelist=["Arya","Jeeva","Siva","Karthi","raj","Bala","saran","aarthi","Naren","Subash","Bala","Mano","Muthu","Raj","Anpu","Aisha","Kannan","Kamala","Karthick","Raja","Ramesh"]
let Names=Namelist.sort()
let input=document.getElementById("searchbox")


function checks(){
    find()
}
function find(){
    function check(){
        let checkbox=document.getElementById("checkbox")
    if(!checkbox.checked)
    {
        Notstart()
    }
    else{
        start()
    }
    } 
check()  
}

function Notstart(){
    console.log("no start with")
    let letter=input.value
    let Arr=[]
    console.log("enter letter : "+letter);
    for(let name in Names){
        let lowercase=Array.from(Names[name])
        for( let singleLetter in lowercase)
        {
            
            if(letter == lowercase[singleLetter]){
                // console.log(Names[name]);
            Arr.push(Names[name])
                break;
            }
        }
    }
    let ul=""
    console.log(Arr);
    Arr.map((name)=>{
        ul+=`<li><a href="" id="suggestuser"  onclick="selectname(this)">${name}</a></li>`
    })
    let suggestul=document.getElementById("suggestul")
    suggestul.innerHTML=ul
    console.log("suggest names : "+Arr);
}

function  start(){
    console.log("start with");
    let letter=input.value
    let Arr=[]
    console.log("enter letter : "+letter);
    for(let name in Names){
        let lowercase=Array.from(Names[name])
        for(let i=0;i<1;i++){
            if(letter == lowercase[i]){
                Arr.push(Names[name])
            }
        }
    }
    let ul=""
    Arr.map((name)=>{
        ul+=`<li><a href="" id="suggestuser" onclick="selectname(this)">${name}</a></li>`
    })
    let suggestul=document.getElementById("suggestul")
    suggestul.innerHTML=ul
    console.log("suggest names : "+Arr);
}

let selectname=(click)=>{
    input.value=click.innerHTML
    suggestul.innerHTML=""
    event. preventDefault()
}