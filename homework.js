//2025 April 21

//LATIHAN CODING

/*Write a code to find area of rectangle.
Example : length = 5, width = 3
Output : 15

BREAKDOWN
Length stored in variable = L
Width stored in variable = W
Area of rectangle value result stored in variable = AR
To find area of rectangle, Length * Width, therefore
A = L * W
*/
// WRITTEN IN CODE
let L = 5;
let W = 3;
let AR = L*W;
console.log(`Value of Area is ${AR}`);

/*Write a code to perimeter area of rectangle.
Example : length = 5, width = 3
Output : 15

BREAKDOWN
Length stored in variable = L1
Width stored in variable = W1
Perimeter of rectangle value result stored in variable = P
To find perimeter of rectangle, 2(Length + Width), therefore
P = 2(L1 * W1)
*/
// WRITTEN IN CODE

let L1 = 5;
let W1 = 3;
let PR = 2*(L1+W1);
console.log(`Value of perimeter is ${PR}`);

/*Write a code to find diameter, circumference and area of a circle.
Example : radius = 5
Output : diameter = 10, circumference = 31.4159, area = 78.539

BREAKDOWN
Radius of circle stored in variable = Cr
Value of π stored in variable = phi
Value of Diameter stored in = DR
Value of Circumference stored in variable = Ce
Value of area stored in variable = AC
To find diameter of circle, diameter = 2*radius
For circumference,  circumference = 2 *phi*radius 
For area,  area = phi*radius^2 , therefore

DR = 2*Cr
CE = 2*phi*Cr
AC = phi*Cr^2
Then, display value of diameter and circumference to their respective digit number
WRITTEN IN CODE BELOW  
*/

let Cr = 5;
let phi = Math.PI;
let DR = 2*Cr;
let CE = 2*phi*Cr;
let CEfixed = CE.toFixed(4);
let AC = phi*Cr**2;
let ACfixed = AC.toFixed(3);

console.log(`Value of area is ${DR}, value of diameter is ${CEfixed},
     and value of circumference is ${ACfixed}`);

/*Write a code to find angles of triangle if two angles are given
Example : a = 80, b = 65
Output : 35

BREAKDOWN
angle 1 stored in variable = a1
angle 2 stored in variable = a2
3rd angle of triangle value result stored in variable = a3
To find 3rd angle, 180 - (1st angle + 2nd angle) , therefore
a3 = 180 - (a1+a2)
*/
// WRITTEN IN CODE

let a1 = 80;
let a2 = 65;
let a3 = 180 - (a1+a2);
console.log(`Value of 3rd angle is ${a3} `);

/*
Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days). 
Example : 400 days → 1 year, 1 month, 5 days
Example: 366 days → 1 year, 0 month, 1 day
BREAKDOWN
Store value for total days in = TD
Store value for remaining days in = RD
Store value for Year in = Y
Store value for Months in = M
Store value for Days in = D
First, to find out how many years have passed in 400 days
To do so, divide Total Days to 365, and then round down the number
Meaning, 400 / 365: 1.095890410958904 = 1 year
Y = TD / 365 = 1.095890410958904, then round down number to 1

For Months, first find the remainder of days by doing
400 % 365 = 35 days
then,  divide it by 30, then round down the number
35/30 = 1.166666666666667 , rounding down the number, it becomes 1

For days, since we know the value of remainder of days is 35, we can find the remaining days after counting months by doing
35 % 30 = 5 days
*/

const TD = 400;

const Y = Math.floor(TD/365);
console.log(Y);
const RD = Math.floor(TD%365);
console.log(RD);
const M = Math.floor(RD/30);
console.log(M);
const D = Math.floor(RD%30);
console.log(D);
console.log(`400 days equals  ${Y} year ${M} month ${D} days`)

/*
Write a code to get difference between dates in days.
Example : date1 = 2022-01-20, date2 = 2022-01-22
Output : 2

BREAKDOWN
Store value of First date in Date1
Store value of Second date in Date2
Store value of difference in Milliseconds in MSDifference
Store value of difference in Days in DDifference

Use 1970-01-01 as the base for when time starts counting aka 00 hours, 00 minutes, 00 seconds, 00 milliseconds
This is used due to year of 1970 is the start of Unix epoch
First find out how many milliseconds have passed since 1970-01-01 until 2022-01-20, which is 1642636800000 ms
Then, find out how many milliseconds have passed since 1970-01-01 until 2022-01-22, which is 1642809600000 ms
Then, do the subtraction on both milliseconds
Then, convert the milliseconds, which is now 172800000 ms, to days
172800000 / (1000 ms * 60 seconds * 60 mins * 24 hours)
Which results in 2, 2 days 
*/

const Date1 = new Date('2022-01-20');
const Date2 = new Date('2022-01-22');

const DateShow1 = Date1.getTime()
const DateShow2 = Date2.getTime()
console.log(DateShow1);
console.log(DateShow2);
const MSDifference = Date2.getTime() - Date1.getTime();
console.log(MSDifference);
const DDifference = MSDifference / (1000 * 60 * 60 * 24)
console.log(DDifference);
console.log(`The difference is ${DDifference} days`);



//2025 April 22

/* Write a code to check whether the number is odd or even
Example: 25 → odd number, 2 → even number
*/
let number = 25;
console.log(number);

if (number%2 == 0){
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}
console.log(number%2==0 ? "Angka Genap" : "Angka Ganjil");

let number1 = 2;
if (number1%2 == 0){
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}

/*
Write a code to check whether the number is prime number or not
Example: 7 → 7 is a prime number
Example: 6 → 6 is not a prime number
*/

function checkprime(pn){
    if (pn < 2){
        return `${pn} is not a prime number`
    }
    for (let i = 2; i < pn; i++){
        if(pn%i == 0){
            return `${pn} is not a prime number`
        }
    }return `${pn} is a prime number`
}
console.log(checkprime(7));

/*
Write a code to find the sum of the numbers 1 to N
Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
Example: 3 → 1 + 2 + 3 = 6
*/
let Nnumber =5;
let result = (Nnumber*(Nnumber+1))/2;
console.log(result);

/*
Write a code to find factorial of a number
Example: 4! → 4 x 3 x 2 x 1 = 24
Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
*/

function factresult(n){
    let a =1;
    for (let i =1; i<=n; i++){
        a *=i;
        console.log(a);
        console.log(i);
        
    }
    return a;
}
console.log(factresult(6));

/*
Write a code to print the first N fibonacci numbers
Example: 15 → 610
*/
function fibonaccinum(fn){
    let num1=0;
    let num2=1;
    let fiboresult;
    if (fn == 1){
        return num1;
    } else if (fn == 2){
        return num2;
    }else{
        for (let i =2; i<=fn; i++){
            fiboresult = num1+num2;
            num1=num2;
            num2=fiboresult;
            console.log(num2);
        }
        return num2;
    }

    }
console.log(fibonaccinum(15));
