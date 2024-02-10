// 1.write a javascript program to seperate all the details of users which contains userid == 3 in the following api [use fetch for getting data from api ]
// https://jsonplaceholder.typicode.com/users

// fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then((data)=>usersData(data))

// function usersData(data){
//     let users=data 
//     let user= users.filter(u=>u.id == 3)
//     console.log(user)
// }
// -----------------------------------------------------
// 2. Write a JavaScript function to get the current date

// function currentDate(){
//     let date=new Date()
//     let currentDate=date.getDate()
//     let currentMonth=date.getMonth()
//     console.log(currentDate+"/"+currentMonth);
// }
// currentDate()
// -------------------------------------------------------
// 3.Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

// let Fizz=[]
// let Buzz=[]
// let FizzBuzz=[]

// for(i=1;i<=100;i++){
//     if((i%3 == 0) && (i%5 == 0)){
//         FizzBuzz.push(i)
//     }
//     else if(i%3 == 0){
//         Fizz.push(i)
//     }
//     else if(i%5 == 0){
//         Buzz.push(i)
//     }
// }
// console.log("FizzBuzz numbers : "+FizzBuzz);
// console.log("Fizz numbers : "+Fizz);
// console.log("Buzz numbers : "+Buzz);
// -------------------------------------------------------
// 4. write a javascript program to print all the datas with their id and title in the following api in the format ==>      id: id from data  title: title from data
// https://jsonplaceholder.typicode.com/users

// fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then((data)=>userdata(data))
// let userdata=(data)=>{
//     // console.log(data);
//     data.map(user=>console.log(`id : ${user.id} , title : ${user.name}`))
// }
// ----------------------------------------------------
// 5. clone an array using object.assign ,  JSON.parse and JSON.stringify and spread operator

// // I) colne Array use Object.assign
// let arr=[1,2,3,4,5,6,7,8,9]
// let cloneArr=Object.assign([],arr)
// console.log(cloneArr);

// II)JSON.stringfy and JSON.parse
// let arr=["karthi",'raj','kumar','velu','rajesh']
// let cloneArr=JSON.parse(JSON.stringify(arr))
// console.log(cloneArr);

// III) spread operator
// let arr=[1,2,3,4,address={value:"true"}]
// let cloneArr=[...arr]
// console.log(cloneArr);
// ---------------------------------------------------
// 6.use filter method to seperate all even numbers in the array of numbers from 1 to 20

// let arr=[]
// for(i=1;i<=20;i++){
//     arr.push(i)
// }
// let evenNumber=arr.filter(n=>n%2 == 0)
// console.log(evenNumber);
// ---------------------------------------------------
// 7.use filter method to seperate all odd numbers in the array of numbers from 1 to 20

// let arr=[]
// for(i=0;i<=20;i++){
//     arr.push(i)
// }
// let oddnumber=arr.filter(n=> n%2 != 0)
// console.log(oddnumber);
// ---------------------------------------------------
// 8. write an javascript program to check whether the given number is present in array and return true if present and false if doesnt exist

// let number=Number(prompt("Enter the number",))
// let arr=[1,2,3,4,5,6,7,8,9]

// function check(number){
//     let present= arr.filter(n=>n==number)
//     if(present == number){
//         console.log("if number "+ number+" is present");
//     }
//     else {
//         console.log("if doesn't exist");
//     }
// }
// check(number)
// ----------------------------------------------------
// 9.use filter method to print all the numbers that are divisible by 2 in array of numbers from 1-20

// let arr=[]
// for(i=1;i<=20;i++){
//     arr.push(i)
// }
// let divNum=arr.filter(n=>n%2 == 0)

// console.log(divNum);
// ----------------------------------------------------
// 10. write a program for example of settimeout and setinterval

// setTimeout(task,1000)
// setTimeout(task,5000)

// let interval=setInterval(task,1000)

// function task(){  
//     let date=new Date()
//     let minute=date.toLocaleTimeString()
//     console.log(minute);
//  }
// function stopinterval(){
//         clearInterval(interval)
// }
