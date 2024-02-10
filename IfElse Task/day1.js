// 1.Check if a number is odd or even in JavaScript
// function Check(){
// let x=document.getElementById("input1")
// let y=document.getElementById("output")

// let input=x.value

// console.log(input);

// if(input%2==0)
// {
//     y.innerHTML="This number" +input+ "even"
// }
// else
// {
//     y.innerHTML=`This number ${input} odd`
// }
// }
// ------------------------------------------------------------
// 2.Check if input variable is a number or not

// function Check (){
   
// let input=document.getElementById("input1")
//  let x= input.value
 
// // console.log(typeof x);
// let output=document.getElementById("output")

// if(isNaN(x)){
//     output.innerHTML=`${x} is not a number`
// }
// else{
//     output.innerHTML=`${x} is a number`
// }
// }
// -------------------------------------------------------
// 3.Find the largest of two number
// function Check(){
// let x=document.getElementById("input1")
// let y=document.getElementById("input2")

// let input1=Number(x.value)
// let input2=Number(y.value)

// let output=document.getElementById("output")
// console.log(input1,input2);

// if(input1 <= input2)
// {
//     output.innerHTML=`${input2}is largest number `
// }
// else{
//     output.innerHTML=`${input1}is largest number `
// }
// }
// -------------------------------------------------------------------
// 4. Find the largest of three number

// function Check(){
//     let input1=document.getElementById("input1")
//     let input2=document.getElementById("input2")
//     let input3=document.getElementById("input3")

//     let x1=Number(input1.value)
//     let x2=Number(input2.value)
//     let x3=Number(input3.value)

//     console.log(x1,x2,x3);
//     let output=document.getElementById("output")

//     output.innerHTML=((x1 > x2) && (x1 > x3))? `${x1} is the largest number`:((x2 > x1) && (x2 > x3))?`${x2} is the largest number`:((x3 > x1) && (x3 > x2)) ?`${x3} is the largest number`:((x1 == x2) || (x1 == x3) )? `${x1} number is equal largest`: (x2 == x3)? `${x3} number is equal largest `:""
// }
// -------------------------------------------------------------
// 5. Check if a triangle is equilateral, scalene, or isosceles
// 	Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// 	Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// 	Else “Scalene triangle.” since values of all sides are unequal.

// function Check(){
//     let input1=document.getElementById("input1")
//     let input2=document.getElementById("input2")
//     let input3=document.getElementById("input3")

//     let side1=Number(input1.value)
//     let side2=Number(input2.value)
//     let side3=Number(input3.value)

//     let output=document.getElementById("output")

//     output.innerHTML=((side1 == side2) && (side1 == side3)) ? "Equilateral triangle":((side1 == side2) || (side1 == side3) || (side2 == side3)) ?"Isocles triangle":"Scalene triangle"
    
// }
// --------------------------------------------------------
// 6. Find the a number is present in given range
// 	Print “Between the range” if num is between start and end values
// 	Else Print “Outside the range” since num is outside start and end values.
 
//     let number=prompt("given number for 0-10 'between the range' else 'outside the range'","")

// console.log(number);

//     document.getElementById("output").innerHTML=(number<10)? `${number} is between the range`:`${number} is outside the range`

// ------------------------------------------------------
// 7. Perform arithmetic operations on two numbers
// 	Print result of num1+num2 if operation is “add”
// 	Print result of num1-num2 if operation is “subtract”
// 	Print result of num1*num2 if operation is “multiply”
// 	Print result of num1/num2 if operation is “divide”
// 	Print result of num1%num2 if operation is “modulus”
// 	Else print “Invalid operation”

// let num1=Number(prompt("Give first number",))
// let operation= (prompt("Give the operation","+"))
// let num2=Number(prompt("Give second number",))

// console.log(num1,num2,operation);

// let ans=((operation) == ("+"))? num1+num2:((operation) == ("-"))? num1-num2:((operation) == ("*"))? num1*num2:((operation) == ("/"))? num1/num2:((operation) == ("%"))? num1%num2:""
// console.log(ans);
// document.write(`value = ${ans}`)
// ---------------------------------------------------
// 8.Find check if a year is leap year or not
// 	If year is divisble by 4 and not divisble by 100 then print “leap year”.
// 	Or if year is divisible by 400 then print “leap year”.
// 	Else print “not a leap year”.

// let year=Number(prompt("Give the year",))
// let find;
// if (year%4==0){
//     find=`${year} is a leap year`
//     if((year%100==0))
//     {
//         if(year%400==0)
//         {
//         find=`${year} is a leap year`   
//         }
//         else{
//             find=`${year} not a leap year`
//         }
//     }
// }
// else{
//     find=`${year} not a leap year`
// }
// document.write(find)
// --------------------------------------------------
// 9. Find the grade for input marks
// 	Print “S grade” if marks is between 90 and 100.
// 	Print “A grade” if marks is between 80 and 90.
// 	Print “B grade” if marks is between 70 and 80.
// 	Print “C grade” if marks is between 60 and 70.
// 	Print “D grade” if marks is between 50 and 60.
// 	Print “E grade” if marks is between 40 and 50.
// 	Print “Student has failed” if marks is between 0 and 40.
// 	Else print “Invalid marks”.

// let mark=prompt("Enter the mark",)
// let value;
// switch (true) {
//     case ((mark>90 && mark<=100)):value=`S grade with ${mark} `
//     break;
//     case ((mark>80 && mark<=90)):value=`A grade with ${mark} `
//     break;
//      case ((mark>70 && mark<=80)):value=`B grade with ${mark} `
//     break;
//      case ((mark>60 && mark<=70)):value=`C grade with ${mark} `
//     break;
//      case ((mark>50 && mark<=60)):value=`D grade with ${mark} `
//     break;
//     case ((mark>40 && mark<=50)):value=`E grade with ${mark} `
//     break;
//     case ((mark>=0 && mark<=40)):value=`Student has failed with ${mark} `
//     default:value="Invalid Marks"
// }

// document.write(value)
// ---------------------------------------
// 10.Find number of days in a given month
// 	If month is outside the range of 1 and 12 print “Invalid month”.
// 	If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
// 	Else if month is equal to 4, 6, 9 or 11 print “30 days”.
// 	Else print “31 days”.

// let month=Number(prompt("Enter the Month Number",1))
// let year=Number(prompt("Enter the year",))

// console.log(month,year);
// let output;
// if(month<0 || month>12){
//     output="Invalid month"
// }
// else if(month == 2)
// {
//     if (year==0){
//     output="Please enter the year"}
//     else if(year%4 == 0)
//     {
//         output=`month ${month} = 29 days`
//         if((year%100==0))
//         {
//             if(year%400==0){
//             output=`month ${month} = 29 days`}
//             else
//             { output=`month ${month} = 28 days`}
//         }
//     }
//     else
//     {
//         output=`month ${month} = 28 days`
//     }
// }
// else if(month== (4,6,9,11)){
//     output=`month ${month} = 30 days`
// }
// else{
//     output=`month ${month} = 31 days` 
// }

// document.write(output)




