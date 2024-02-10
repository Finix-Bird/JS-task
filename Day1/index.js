// 1)Program to Swap Two Numbers

// let x=20;
// let y=14;
// let z=x;
//     x=y;
//     y=z;
//     console.log(` x=${x}, y=${y}`);
// ---------------------------------------------
// 2)Program to Find Largest of Three Numbers

// let x1=Number(prompt("Enter the first Number",));
// let x2=Number(prompt("Enter the second Number",));
// let x3=Number(prompt("Enter the third Number",));
// if((x1 >= x2) && (x1 >= x3)){
//     console.log(`the largest value is ${x1}`);
// }
// else if((x2 >= x3) && (x2 >= x1)){
//     console.log(`the largest value is ${x2}`);
// }
// else if((x3 >= x1) && (x3 >= x2)){
//     console.log(`the largest value is ${x3}`);
// }
// else{
//     console.log("Enter Numbers only");
// }
// -----------------------------------------------
// 3)Program to Display Even Numbers From 1 to 100

// for(let i=1;i<=100;i++){
//     if(i%2 == 0){
//         console.log(`${i} is a even number`);
//     }
// }
// -----------------------------------------------
// 4)Program to check the string is palindrome or not
// let word="Mom"
// let word=prompt("Enter the palindrome word",)
// let arr=word.toLowerCase();
// let separate=Array.from(arr)
// // console.log(separate);
// let ans;
// for(let i=0;i<separate.length;i++){
//     // console.log(separate[i]);
//     // console.log(separate[(separate.length-1)-i]);
//     if(separate[i] == separate[(separate.length-1)-i])
//     {
//         ans=""+word+" is a palindrome word"
//     }
//     else
//     {
//         ans=""+word+" is not a palindrome word"
//     }
// }
// console.log(ans);
// -----------------------------------------------
// 5)Program to print the elements of an array in reverse order

// let arr=[1,2,3,4,5,6,7,8,9,11,12]
// for(let i=0;i<arr.length/2;i++){
//     // console.log(arr[i]);
//     // console.log(arr[(arr.length-i)-1);
//     let empty=arr[i]
//     arr[i]=arr[(arr.length-i)-1]
//     arr[(arr.length-1)-i]=empty
// }
// console.log(arr);
// *****************(or)***************
// let empty=[]
// for(let i=arr.length;i>=1;i--){
//     empty.push(arr[i-1]);
// }
// console.log(empty);
// ----------------------------------------------
// 6)Program to print the elements of an array present on even position

// let arr=[1,2,3,4,5,6,7,8,9,10]
// for(let i=1;i<arr.length;i=i+2){
//     console.log(arr[i]);
// }
// ----------------------------------------------
// 7)Program to Print Odd and Even Numbers from an array and find sum of all odd numbers and even numbers
// let EvenSum=0;
// let EvenNumber=[]
// let oddSum=0;
// let OddNumber=[]
// for(let i=1;i<=10;i++){
//     if(i%2 == 0){
//      EvenSum+=i 
//      EvenNumber.push(i)
//     }
//     else
//     {
//         oddSum+=i
//      OddNumber.push(i)
//     }
// }
// console.log("Even Numbers ="+EvenNumber);
// console.log(`Sum of Even number = ${EvenSum}`);
// console.log("Odd Numbers ="+OddNumber);
// console.log(`Sum of Odd number = ${oddSum}`);
// -----------------------------------------------
// 8) program to find all primenumbers between 1 to 100 and their sum

// let PrimeSum=0;
// for(let i=1;i<=100;i++){
//     let prime=true
//     for(let j=2;j<=i;j++){
//         if((i%j ==  0) && (j != i))
//         {
//             prime=false
//         }
//     }
//     if( prime == true){
//         console.log(`${i} is a prime number`);
//         PrimeSum+=i
//     }
// }
// console.log(PrimeSum);
// -----------------------------------------------
// 9)Program to sort the elements of an array in ascending order

// let arr=[5,4,2,3,1,7,6,8,9]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//      if(arr[i] > arr[j]){
//     let empty=arr[i]
//     arr[i]=arr[j]
//     arr[j]=empty
//     }
//     }
// }
// console.log(arr);
// ------------------------------------------------
// 10) Explain what a callback function is and provide a simple example
// let ans;
// function Sum(num1,num2){
//     ans=num1+num2
// }
// Sum(5,5)
// console.log(ans);