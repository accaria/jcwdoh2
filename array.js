//ARRAY ADALAH KUMPULAN DATA YANG TIPENYA `S`AMA 

let string = "Hello";
console.log(string);

const listnama = ['Anugerah', 'Bryan', 'Adi','Yusuf'];
console.log(listnama);
console.log(listnama[0]);

for (let i = 0; i<listnama.length; i++){
    console.log(listnama[i]);
}

const listangka = [1,2,3,4];
console.log(listangka[0]);

const listarray = [[0,1],[3,4]];
console.log(listarray[1][1])

//BUILD IN METHOD ARRAY
console.log(listnama.join(", "));
console.log(listnama.length);
console.log(listnama.reverse());
console.log(listnama.filter((nama)=> nama!=="Yusuf"));
console.log(listnama.push("Mira"));
console.log(listnama);

//FOR OF LOOP
for (let nama of listnama){
    console.log(nama);
}

//FUNCTION

// FUNCTION DECLARATION

function pertambahan(a,b){
   return a+b;
   
}
console.log(pertambahan(3,9));
const satutambahtiga=(pertambahan(3,9));
console.log(satutambahtiga);

//FUNCTION EXPRESSION 

const pengurangan = function (a,b){
    return a - b;
}
const hasilpengurangan = pengurangan(3,2);
console.log(hasilpengurangan);

//ARROW FUNCTION
const perkalian = (a,b)=> {
    return a*b
}
console.log(perkalian(2,5));

//FUNCTION SCOPE

const _message = ("World");

//FUNCTION BISA AMBIL REFERENSI DARI LUAR FUNCTION, TAPI REFERENSI DALAM FUNCTION TIDAK BISA DIPAKAI DILUAR FUNCTION

function message(){
    const hello = "HELLO " + _message;
    return hello;
}

console.log(message());

function pembagian(a,b = 1) {
    console.log(a);
    console.log(b);
    return a / b;
}

console.log(pembagian(4));

//REST PARAMETER

function greet(a,b,...c){
    console.log(c);
    return a + b;
}
console.log(greet("Hello"," World","Welcome","To our place"));

function sum(...a){
    let sum =0;
    for (let angka of a){
        sum += angka;
        
    }
    return sum;
}
console.log(sum(41,69));

//NESTED FUNCTION
function welcomemessage(name){
    function hello(){
        return `Hello ${name}`
    }
    function content(){
        return "Welcome to Purwadhika"
    }
    return `${hello()} ${content()}`;
}

console.log(welcomemessage("Budi"));

//CLOSURE
function greet(name){
    const message = "Hello ";
    return function(){
        return message + name;
    }
}
const greetBudi = greet("Budi");
console.log(greetBudi());

//CURRYING
function sendMessage(message,sendername){
    return `${message},${sendername}`;

}
console.log(sendMessage("Hello","Budi"));

function transformSendMessage(message){
    return function(name){
        return `${message},${name}`;
    }
}
const Hellomessage = transformSendMessage("Hello");
console.log(Hellomessage("Budi"));

//RECURSIVE

function counttoTen(number){
    console.log(number);
    number++;
    if (number <= 10) counttoTen(number);
}
console.log(counttoTen(1));