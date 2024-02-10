// 1. Write a program for example of async await

// let usetimeout= setTimeout(timeout,2000)
// function timeout(){
//     console.log("promise work");
// }
// async function example(){
//     console.log("Start")
//     let value = await usetimeout
//         console.log("end")
// }
// example()
// -----------------------------------------------
// 2. write a program for example of promises in javascript

// function task(){
//     return new Promise((resolve, reject)=>{
//         let completetask= false
//         if(completetask){
//             resolve("Task completed")
//         }
//         else{
//             reject("Task Incomplete")
//         }
//     })
// }
// task()
// .then((msg)=>{console.log(msg)})
// .catch((err)=>{console.log(err);})
// -----------------------------------------------
// 3. write a program for example of localstorage for storing and getting a value

// let employee={
//     Fname:"karthick",
//     Lname:"kumar",
//     equcation:{
//         SSLC:90,
//         HSC:70,
//     }
// }
// localStorage.setItem("employee",JSON.stringify(employee))
// let value=JSON.parse(localStorage.employee)
// let details=JSON.parse(localStorage.getItem("employee"))
// console.log(value,details)
// -----------------------------------------------
//  4. write a program for example of sessionstorage  for storing and getting a value 

// let employee={
//         Fname:"karthick",
//         Lname:"kumar",
//         equcation:{
//             SSLC:90,
//             HSC:70,
//         }
//     }

// sessionStorage.setItem("employee",JSON.stringify(employee))
// let person=JSON.parse(sessionStorage.employee)
// console.log(person);
// -----------------------------------------------
// 5. difference between localstorage and session storage 

// -------------------------------------------------------------------
// 6.  Let array1 = [1,2,3,4,5,6] and let us assign array2=array1  . If we change the values of array2 will array1 changed? Find out!

// let array1=[1,2,3,4,5,6]
// let array2=array1
// array2.push(7)
// array2.shift()
// console.log("Array1 = "+array1,"Array2 = "+array2);
// -----------------------------------------------
// 7. write a program to explain what is deep copy and shallow copy 

// let object1={
//     name:"DefaultName",
//     address:{
//         city:"DefaultAddress"}
// }

// // 2 type of SHALLOW COPY
// // I)spread operators
// // let object2={...object1}            //object1 nexted level value address city changed

// // II)object.assign 
// // let object2=Object.assign({},object1)   //object1 nected level value address city changed

// // DEEP copy
// // let object2=JSON.parse(JSON.stringify(object1))   //only object2 values change

// object2.name="Name changed"
// object2.address.city="Address changed"
// console.log(object1.address,object2.address);
// console.log("Object 1 : ",object1)
// console.log("Object 2 : ",object2);
// --------------------------------------------------------------------
// 8.write a program for example of for, for in , for of and for each in javascript

// let arr=[1,2,3,4,5,6,7,8]
// arr[8]=9;
// arr["Name"]="Enter name"
// console.log(arr);

// let newArr=[]
// I) for example
// for(let i=0;i<arr.length;i++){
//     newArr.push(i)
// }

// II) for of example
// for(let index of arr){
//     newArr.push(index)
// }

// III) for in example 
// for (let index in arr){
//     newArr.push(arr[index])
// }

// IV) for each example
// arr.forEach(i=>newArr.push(i))
// console.log(newArr);
// ------------------------------------------------------------------
// 9. using switch case write a program to right to vote based on age of person eg: if age above 18 can vote or below 18 cannot vote 

// let age=Number(prompt("Enter the User age",))

// switch(true){
//     case(age >= 18):(console.log("This person eligible for vote"))
//     break;
//     case(age  < 18):console.log("This person cannot eligible, waiting for "+(18-age)+ " years")
//     break;
//     default:console.log("Enter the default age");
// }
// ------------------------------------------------------------------
// 10.  Write a program to calculate area of traingle for values provided by user with default paramters to the function (Google what is default paramters to function)

// let bhase=Number(prompt("Enter the bhase value",))
// let height=Number(prompt("Enter the height value",))

// let trainglearea=(bhase * height)/2

// console.log("Given Bhase value : "+bhase);
// console.log("Given Height value : "+height);
// console.log("Area of triangle value : " +trainglearea);