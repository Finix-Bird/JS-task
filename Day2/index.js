// 1)Program to remove duplicates(repeated)from an array

// let arr=[1,2,4,5,2,6,7,8,4,7,8,9,]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] == arr[j]){
//             arr.splice(j,1)
//         }
//     }
// }
// console.log(arr);
// ---------------------------------------------------------
// 2)Write a JavaScript program to display the current day and time.

// let currentDate=new Date()
// let day=currentDate.getDate()
// let month=currentDate.getMonth()+1
// let year=currentDate.getFullYear()
// let hour=currentDate.getHours()
// let minute=currentDate.getMinutes()
// console.log(`Today date = ${day}/${month}/${year}`);
// console.log(`Current Time = ${hour}:${minute}`);
// -------------------------------------------------------
// 3)Write a JavaScript program to calculate multiplication and division of two numbers

// let num1=Number(prompt("Enter the first value",))
// let num2=Number(prompt("Enter the second value",))

// let multiValue;
// function multiplication(num1,num2){
//     multiValue=num1*num2
// }
// let divitValue
// function divisionvalue(num1,num2){
//     divitValue=num1/num2
// }
// multiplication(num1,num2)
// divisionvalue(num1,num2)
// console.log("Multiple Value = "+multiValue);
// console.log("Division Value = "+divitValue);
// -----------------------------------------------------------
// 4)Write a JavaScript program to get the website URL(loading page).

// let currentURL=document.URL
// console.log("The Website URL :"+currentURL);
// -----------------------------------------------------------
// 5)Write a JavaScript program to get the difference between a given number and 13, 
// if the number is greater than 13 return double the absolute difference.

// let number=Number(prompt("Give the Number"))   
// let difference;
// if(number >= 13){
//     difference=2*(number-13)
// }
// else{
//     difference=13-number
// }
// console.log(`${number} and 13 diffference value = ${difference}`);
// --------------------------------------------------------
// 6)Write a JavaScript Program to compute the sum of thetwo given integers
//          If the two values are same,then returns triple their sum.

// let num1=Number(prompt("Enter first value",))
// let num2=Number(prompt("Enter the second value",))
// let ans;
// if(num1 == num2){
//     ans=3*(num1+num2)
// }
// else{
//     ans=num1+num2
// }
// console.log("Answer ="+ans);
// --------------------------------------------------------
// 7)compare two arrays and form a third array with value which are same in the two arrays.

// let arr1=[1,2,3,4,5,6,7,8,9,]
// let arr2=[1,3,5,6,9,10]
// let commonarr=[]

// for(i=0;i<arr1.length;i++){
//     for(j=0;j<arr2.length;j++){
//         // console.log(arr1[i]);
//         // console.log(arr2[j]);
//         if(arr1[i] == arr2[j]){
//             commonarr.push(arr1[i])
//         }
//     }
// }
// console.log(commonarr);
// -------------------------------------------------------
// 8)Form an array with number which are divisible by 6 not by 9 from 1 to 150

// let newarr=[]
// for(i=0;i<=150;i++){
//     if((i%6 == 0) && (i%9 != 0)){
//         newarr.push(i)
//     }
// }
// console.log(newarr);
// ----------------------------------------------------
// 9)Write a JavaScript program to remove a character at the specified position
//          of a given string and return the new string.

// let name = prompt("Enter the word",)
// let Lowname=name.toLowerCase()
// let namearr=Array.from(Lowname)
// let position=Number(prompt("Enter the position",))-1
// namearr.splice(position,1)
// let newWord=namearr.join('')

// console.log("given string : "+name);
// console.log("New string : "+newWord);
// ----------------------------------------------------
// 10)Write a JavaScript program to create a new string from a given string changing the position of first and last characters.
//  The string length must be greater than or equal to 1

// let word= prompt("Enter the string",)
// let Fletter=prompt("Put the first position replace letter",)
// let Lletter=prompt("Put the last position replace letter",)
// let Sinword=Array.from(word)
// if(Sinword.length >= 1){
//     Sinword.splice(0,1,Fletter)
//     Sinword.splice(Sinword.length-1,1,Lletter)
// }
// let newWord=Sinword.join("")
// console.log("Given string : "+word);
// console.log("New string : "+newWord);
// ----------------------------------------------------
