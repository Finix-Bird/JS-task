let users=document.getElementById("users")
let Name=document.getElementById("Name")
let Age=document.getElementById("Age")
let Native=document.getElementById("Native")
let createconatiner=document.getElementById("createconatiner")

let Details=[
    {id:1,Name:"karthickkumar M",age:"20",Native:"tenkasi"},
    {id:2,Name:"kumar",age:"22",Native:"madurai"},
    {id:3,Name:"siva",age:"14",Native:"chennai"},
    {id:4,Name:"dev",age:"25",Native:"trichy"},
]

function viewed(){
    let view=""
    Details.map((user)=>{
        view+=`<tr><td>${user.Name}</td><td>${user.age}</td><td>${user.Native}</td><td id="feature"><button onclick="Edited(${user.id})">Edit</button><button onclick="deleted(${user.id})">Delete</button></td></tr>`
    })
    users.innerHTML=view
}
viewed()

function Adduser(){
    console.log(Name.value,Age.value,Native.value);
    Details.push({id:Details.length+1,Name:Name.value,age:Age.value,Native:Native.value})
    viewed()
    Name.value=""
    Age.value=""
    Native.value=""
    event.preventDefault()
}
function deleted(elem){
    delete Details[elem-1]
    viewed()
}

function Edited(id){
    let updateuser=Details.find(user=>user.id === id)
    createconatiner.innerHTML=`
            <form>
                <div id="updatebox" >
                    <label for="Name">Name:</label><br>
                    <input type="text" id="uptName" value="${updateuser.Name}" placeholder="Enter the Name"><br>
                </div>
               <div id="updatebox">
                    <label for="Age"></label>Age:<br>
                    <input type="text" id="uptAge" value="${updateuser.age}"  placeholder="Enter the age"><br>
               </div>
                <div id="updatebox">
                    <label for="Native"></label>Native:<br>
                    <input type="text" id="uptNative" value="${updateuser.Native}"  placeholder="Enter the Native"><br>
                </div>
                <div id="updatebox">
                    <button onclick="uptuser(${updateuser.id})">Update</button>
                </div>
            </form>
    `
}
function uptuser(id){
    let uptName=document.getElementById("uptName")
    let uptAge=document.getElementById("uptAge")
    let uptNative=document.getElementById("uptNative")
    let updateuser=Details.find(user=>user.id === id)
    if(updateuser){
        updateuser.Name=uptName.value
        updateuser.age=uptAge.value
        updateuser.Native=uptNative.value
    }
    viewed()
    event.preventDefault()
}
