// COMMAND UNTUK MENJALANKAN QUOKKA
// (CTRL + K) + Q

// CONSOLE INI MENGACU PADA TERMINAL
// LOG DIPAKE UNTUK MENAMPILKAN INFO ATAU MESSAGE
console.log("Hello world"); 
console.log("Check");

//VARIABLE
//SEBUAH STORAGE UNTUK MENAMPUNG DATA

//PENAMAAN VARIABLE
// 1.HANYA BOLEH MENGANDUNG KARAKTER, ANGKA, ATAU SIMBOL $ DAN _
// 2. KARAKTER PERTAMA TIDAK BOLEH SEBUAH ANGKA
// 3. VARIABLE ITU CASE SENSITIVE


// DEKLARASI VAIRABLE DENGAN CONST
// CONST ADALAH VARIABLE YG VALUENYA TIDAK BISA DIUBAH
const nama = "Budi";
const umur = 27;
console.log (nama);
console.log ("Nama saya", nama , ", umur saya" , umur , "tahun" )

// VARIABEL DGN LET
// LET DIPAKAI APABILA VALUENYA AKAN DIUBAH UBAH
let alamat = "Jalan jalanan";
console.log(alamat);

alamat = "Jalan kedua";
console.log(alamat);

// VARIABEL DGN VAR
var binatang = "Kucing";
console.log(binatang);

//TIPE DATA
// STRING atau TEXT
const _string = '1';
console.log(_string);
// NUMBER 
const _number = 1;
console.log(_number* 2);

//TYPE OF, MEMBERITAHU TIPE DATA VARIABEL

console.log(typeof _string);
//BOOLEAN, VALUE DARI TRUE OR FALSE
let _bool = false;

//DATE 
const _date = new Date();
console.log(_date);

//NULL
const _null = null;
console.log(_null);

//UNDEFINED
const _undefined = undefined;
console.log(_undefined);

//CONCAT ATAU PENGGABUNGAN STRING
const deskripsi = "Hello " + nama + " umur kamu " + umur;
console.log(deskripsi);
//TEMPLATE LITERAL
const _deskripsi = `Hello, ${nama} , umur kamu ${umur}`
console.log(_deskripsi);
console.log(typeof _deskripsi)

//BUILD IN METHOD

//STRING BUILD IN METHOD
console.log(_deskripsi.toUpperCase());
console.log("Hi world".toLowerCase());
console.log("AIUEO".replace("A","69"))
console.log(" CEKPASSWORD ".trim())

//NUMBER BUILD IN METHOD
const _angka = "5.69";
console.log(_angka.toString());
console.log(_angka.toLocaleString("in-ID", {style:'currency', currency:'IDR'}));

//GLOBAL BUILD IN METHOD
console.log(parseInt(_angka));
console.log(parseFloat(_angka));

//DATE BUILD IN METHOD
let _tanggal = new Date();
console.log(_tanggal.getMonth()+1);
console.log(_tanggal.getFullYear());
console.log(_tanggal.toLocaleString("in-ID", {timeZone: 'ASIA/Jakarta'}));

//MATH OPERATION
console.log(5+69); console.log(5-4); console.log(5*4); console.log(5/4); console.log(5%4); console.log(5**4);

//MODIFY IN PLACE
let x = 5;
x *= 10;
console.log(x);
let pesan = "Hello";
pesan += " world";
console.log(pesan);

//INCREMENT & DECREMENT
let y = 5;
y++;
console.log(y);
y--;
console.log(y);

//POSTFIX, MAKSUDNYA OPERATOR (++) ADA DI SEBELAH KANAN
console.log(y);
console.log(y++);
console.log(y);

//PREFIX , KEBALIKAN DARI POSTFIX
console.log(--y);

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


function currencyprint(amount,currencyCode='USD',locale ='USD'){
     const amountinUSD = amount;
     return amountinUSD.toLocaleString(locale,{
          style:'currency',
          currency:currencyCode
     });
}
console.log(currencyprint(100));
