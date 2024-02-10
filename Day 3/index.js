// 1)Program to find if the given two strings are anagram or not.
// let word1= "Heart"
// let word2= "Earth"

// let Flowname=word1.toLowerCase();
// let Llowname=word2.toLowerCase();

// let Singleword1=Array.from(Flowname)
// let Singleword2=Array.from(Llowname)

// let orderword1=Singleword1.sort().join("");   
// let orderword2=Singleword2.sort().join("");
// console.log(orderword1,orderword2);

// if(orderword1 == orderword2)
// {
//     console.log(word1+" & "+word2+ " words are anagrom");
// }
// -------------------------------------------------
// 2)Program to remove duplicates from an array without the inbuilt setmethod(logical method)

// let arr=[1,5,2,3,2,4,5,4,6,7,8,9,7] 

// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i] == arr[j]){
//             // console.log(arr[j]);
//             arr.splice(j,1)
//         }
//     }
// }
// console.log(arr);
// --------------------------------------------------
// 3)Program to find factorial of a number with recursion

// let number=Number(prompt("Enter the positive number",))
// let value=1
// if(number >= 0){
//     factorial (number)
// console.log(`No.${number} factorial value is ${value}`);
// }
// else{
//     console.log("Enter the possitive value");
// }
// function factorial(number){
//     if (number == 0){
//        return value=value*1
//     }
//     else {
//         factorial(number-1)
//        return value=value*number
//     }
// }
// -----------------------------------------------
// 4)Program to find GCD(greatest common divisor)of two numbers with recursion

// let num1=Number(prompt("Enter number 1"),)
// let num2=Number(prompt("Enter number 2"),)
// let ans;
// function gcd(num1,num2){
//     if( !num2){
//         return ans=num1;
//     }
    
//     return ans=gcd(num2,num1%num2)
// }
// gcd(num1,num2)
// console.log(ans);
// -----------------------------------------------
// 5)Program to print the fibonaci sequence for given number.

// let num=Number(prompt("Give the fibonaci series length",))
// let num1=0
// let num2=1
// let nextnumber;
// let fibonaci=[]
// for(let i=1;i<=num;i++){
//     fibonaci.push(num1)
//     nextnumber=num1+num2
//     num1=num2
//     num2=nextnumber
// }
// console.log(fibonaci);
// -----------------------------------------------
// 6)Program to generate passcal traingle from given rows

// let rows=5
// pascal(rows)
// function pascal(n){
//     for(i=1;i<=n;i++){
//         let col=1
//         for(j=1;j<=i;j++){
//             document.write(col+"");
//             col=(col*(i-j))/j
//         }
//     document.write("<br>")
//     }
// }
// --------------------------------------------------------
// 7)Program to sort an elements of array using bubbles sort algorithm

// let arr=[2,6,13,5,22,44,99,3,7,57,24]

// for(i=0;i<arr.length;i++){
//     for(j=1;j<(arr.length-i)-1;j++)
//     {
//         if(arr[j]>arr[j+1]){
//             let empty=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=empty
//         }
//     }
//     console.log(arr);
// }
// console.log(arr);
// ---------------------------------------------------------
// 8)Write a JavaScript for loop that will iterate from 0 to (num of your choice).For each iteration,it will check if the current number is odd or
// even,and display a message to the screen.

// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"

// for(let i=0;i<=100;i++){
//     if(i%2 == 0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is a odd`);
//     }
// }
// -----------------------------------------------------------
// 9)write an JavaScript program to find grades for the given marks as input:for marks>90 A,for marks>80 B,marks>70 C ,marks>60 D,marks>50 E 
// ,marks<50 will be fail

// let marks=Number(prompt("Enter the marks",))

// switch(true){
//     case (marks<=100 && marks>90):console.log(`A grade with ${marks} mark`);
//     break
//     case (marks>80):console.log(`B grade with ${marks} mark`);
//     break
//     case (marks>70):console.log(`C grade with ${marks} mark`);
//     break
//     case (marks>60):console.log(`D gread with ${marks} mark`);
//     break
//     case (marks>50):console.log(`E grade with ${marks} mark`);
//     break
//     case (marks<=50 && marks>0):console.log(`fail with ${marks}`);
//     break
//     default :console.log("Please enter the correct marks");
// }
// ------------------------------------------------------------
// 10)write a program to inform the user is eligible to vote or not for input given by user as age.

// let age=Number(prompt("Enter user age",))

// let ans=(age>=18)?"Eligible for vote":`User not elgible waiting vote for ${18-age}`
// console.log(ans);






