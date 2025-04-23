/* WRITE CODE TO DISPLAY MULTIPLICATION TABLE OF A GIVEN INTEGER 
EXAMPLE: NUMBER 9
OUTPUT: 9X1, 9X2,.....9X10
*/

let numb= 9;
let message ="";
for (let i = 1; i<=numb+1; i++){
    console.log(`${numb} * ${i}`);
    message += `${numb} x ${i} \n`
}
console.log(message);

/*
Write a code to check whether a string is a palindrome or not
*/
let string ="madam";
let reversestring = string.split("").reverse().join("");
console.log(reversestring);
console.log(string == reversestring ? "palindrome" :"Bukan Palindrome"); 

/*
Write a code to convert centimeter to kilometer
Example: 100000 -> "1KM"
*/

let cm = 100000;
let km;
km = cm /100000;
console.log(`${cm} cm equals to ${km}km`);

/*
Write a code to format number as currency (IDR)
Example: 1000 -> Rp.1000,00
*/

let money = 1000;
let IDR = new Intl.NumberFormat('in-ID',{style: 'currency', currency: 'IDR'}).format(money);
console.log(IDR);


/*
Write code to remove the first occurence of a given "search string" from a string
example: string = "Hello world", search string = "ell" -> "Ho World"
*/
let word = "Hello World";
let search = word.replace("ell", "");
console.log(search);
console.log(word.length);

/*
Write code to find the largest of two given integers
example: num1 =42 , num2 = 27 -> 42
*/

let num1 = 42;
let num2 = 27;

if (num1 < num2){
    console.log(`${num2} is the largest interger`);
}
else{
    console.log(`${num1} is the largest integer`);
}

//or using array

let num3 = [42,27];
let largest =Math.max(...num3);
console.log(largest);

/*Write conditional statement to sort three numbers
example: num1 =42, num2 =27, num3 = 18 ->18,27,42
*/
let x = 42;
let y = 27;
let z = 18;
if (x<y && y<z){
    console.log(x,y,z);
}
else if(x<y && y>z){
    console.log(x,z,y);
}
else if(y>x && x<z){
    console.log(x,y,z);
}
else if(x>y && y>z){
    console.log(z,y,x);
}

/*
Write code that shows 1 if the input is a string, 2 if input is a number, 3 for others data type
Example: Hello -> 1
*/
function datatypecheck(data){
    if (typeof data == 'string'){
    console.log('1');}
    else if (typeof data == 'number'){
    console.log('2');
    }
    else{
    console.log('3');
    }
}
datatypecheck("Hello");


/*
Write a code to change every letter a into * from a string of input
example: 'An apple a day keeps the doctor away' -> '*n *pple * d*y keeps the doctor *w*y'
*/

let Sentence = "an apple a day keeps the doctor away";
let newSentence= Sentence.replace(/a/g ,"*");
console.log(newSentence);

