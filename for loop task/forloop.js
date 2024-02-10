// 1. Write a JS code to print numbers from 1 to 10
// for(let i=1; i<=10 ; i++){
//     console.log(i);
// }
// -------------------------------------------------------
// 2. Write a JS code to print a 2D array
// 		arr = [[1, 2],[3, 4],[5, 6]];
// 		Output: 1,2,3,4,5,6

// let arr = [[1, 2],[3, 4],[5, 6]];
// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);

//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }
// -------------------------------------------------------
// 3. Write a JS code to print Even numbers in given array

// for(let i=0;i<=50;i++){
//     if(i%2 == 0){
//         console.log(`${i} is a Even number`);
//     }
// }
// --------------------------------------------------------
// 4. Write a JS code to find the power of a number using for loop

// let number=Number(prompt("Enter the base number",))
// let pvalue=Number(prompt("Enter the power value",2))
// let value=1;
// for(let i=0; i<pvalue;i++){
//      value =value*number
// }
// console.log(value);
// --------------------------------------------------------
// 5. Write a JS code to print a pattern using for loop
// for (let i=1;i<=10;i++){
// let pattern=[];
//     for (let j=1;j<=i;j++){
//         // console.log(" *");
//         pattern+="*"
//     }
//     console.log(pattern);
// }
// --------------------------------------------------------
// 6. Write a JS code to find the no of digits in a number

// let number=prompt("Enter the number",)
// let separate=Array.from(number)
// console.log(`${separate.length} digits for this ${number} number`);
// ---------------------------------------------------------
// 7. Write a JS code to calculate the sum of digits in a number

// let number=prompt("Enter the number",)
// let digit=Array.from(number)
// let change=digit.map(Number)
// console.log(change);
// let value=0;
// for(let i=0;i<change.length;i++){
//     value += change[i]
//     console.log(change[i]);
// }
// console.log(value);
// --------------------------------------------------------
// 8. Write a JS code to find the largest number in an array

// let arr=[10,2,3,4,3454,6,7,8,9]
// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     for(let j=i+1;j<arr.length;j++){
//         // console.log(arr[i]);
//         // console.log(arr[j]);
//         if(arr[i]<arr[j]){
//            let t=arr[j];
//             arr[j]=arr[i];
//             arr[i]=t
//         }
//     }
// }
// console.log(arr[0]);
// ---------------------------------------------------------
// 9. Write a JS code to find product of two arrays
// 		arr1 = [3,45,23,78,34];
// 		arr2 = [4,2,34,4,12,1];
//           Output : [12, 90, 782, 312, 408, 1]

// let arr1 = [3,45,23,78,34];
// let arr2 = [4,2,34,4,12,1];
// let value=[]
// for(let i=0;i<arr1.length;i++)
// {
//     for(let j=0;j<arr2.length;j++){
//         if(i == j)
//         {
//             value.push(arr1[i]*arr2[j])
//         }
//     }
// }
// console.log(value);
// -----------------------------------------------------
// 10.Write a JS code to find duplicate values in a given array.

// let arr=[1,5,2,9,3,4,5,6,7,8,7,9]
// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     for (let j=i+1;j<arr.length;j++){
//         if(arr[i] == arr[j]){
//             console.log(i);
//             arr.splice(i,1)
//         }
//     }
// }
// // arr.splice(0,1)
// console.log(arr);
// -------------------------------------------------------
// 11.Display a Same Text Five Times

// for(let i=0;i<=4;i++){
//     console.log("I Will completed the for loop task");
// }
