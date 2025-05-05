//COMPARISON OPERATORS

//EQUAL TO == (CEK VALUE, TIDAK CEK TIPE DATA)
console.log(1=="1");

//STRICT EQUAL TO (MENGECEK VALUE DAN TIPE DATA)
console.log(1 === "1");

//NOT EQUAL (HANYA CEK VALUE, TIDAK CEK TIPE DATA)
console.log(1 != "2");

//STRICT NOT EQUAL (CEK VALUE DAN TIPE DATA)
console.log(1!==1);

//GREATER THAN 
console.log(3>2); console.log(1>1);

//LESS THAN
console.log(1<3); console.log(3<2);

//GREATER THAN OR EQUAL TO 
console.log(1>=1); console.log(1>=2);

//LESS THAN OR EQUAL TO
console.log(1<=1); console.log(3<=2)

//IF STATEMENT
const nilai =80;
if (nilai < 65){
    //BLOCK OF CODE
    console.log("nilai kurang");
}

if (nilai >=70){
    //BLOCK OF CODE
    console.log("nilai mencukupi");
}

//ELSE STATEMENT
if (nilai>=80){
    console.log("nilai cukup");
}
else{
console.log("nilai tidak cukup");
}

/*ELSE IF STATEMENT
|| OR STATEMENT
&& AND STATEMENT
*/

const umur = 25;
if (umur == 17){
    console.log("Bikin KTP");
}
else if (umur > 17){ 
    console.log("Sudah punya");
}
else {
    console.log("Tidak bisa buat");
}

//CHAINING CONDITION

const nilaia = "B";

if (nilaia==="A"){
    console.log("Nilai BAgus");
}
else if (nilaia==="B"){
    console.log("Nilai Oke");
}
else if(nilaia==="C"){
    console.log("Nilai cukup");
}
else{
    console.log("Nilai kurang");
}

//SWITCH CASE
const buah = "pir";

switch(buah){
    case "apel":
        console.log("Ini adalah apel");
        break;
    case "pir":
        console.log("Ini adalah pir");
        break;
    case "jeruk":
        console.log("Ini adalah jeruk");
        break;
    default:
        console.log("Ini adalah melon");
}


//TRUTHY AND FALSY VALUES 

//TRUTHY 
console.log(Boolean("[]"));
if ("[]"){
    console.log(true);
}

console.log(Boolean({}));
if ({}){
    console.log(true);
}

console.log(Boolean(" "));
if (" "){
    console.log(true);
}
console.log(Boolean(1));
if (1){
    console.log(true);
}

//FALSY
console.log(Boolean(""));
if (""){
    console.log(true);
}

console.log(Boolean(0));
if (0){
    console.log(true);
}

console.log(Boolean(null));
if (null){
    console.log(true);
}

console.log(Boolean(undefined));
if (undefined){
    console.log(true);
}

console.log(Boolean(NaN));
if (NaN){
    console.log(true);
}

// ! OPERATOR (NOT) *MEMBALIKAN HASILNYA, CTH : !TRUE JADI FALSE
const input = "";

if (input){
    console.log("input tidak boleh kosong");
}

//SHORT CIRCUITING
//&& OPERATOR (AND) *JIKA OPERAND PERTAMA TRUE, MAKA TAMPILKAN OPERAND KE DUA, JIKA OPERAND PERTAMA FALSE, TAMPILKAN OPERAND KEDUA
// || OPERATOR (OR)
let value ="";
console.log(Boolean(value));
console.log(value && 'Cek');

// || OPERATOR (OR) JIKA OPERAND PERTAMA TRUE, TAMPILKAN OPERAND PERTAMA, APABILA OPERAND PERTAMA SALAH, TAMPILKAN OPERAND KEDUA
console.log(value || "Cek kuadrat");

