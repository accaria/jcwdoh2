import {perkalian,pembagian,greet} from "./calculator.js";
import messages from "./message.js";
function pertambahan(a){
    console.log(a);
}
pertambahan(1);

function message(){
    return "Hello";
}

function tampilkan(cb){
    console.log(cb);
}
tampilkan(message());

function pengurangan(a,b,cb){
    cb(a-b);
}
function display(a){
    console.log(a);
}
const hasil = pengurangan(5,2,display);

console.log(pembagian(5,5));
console.log(messages.halo());

//ASYNCHRONOUS LANJUT KE TASK BERIKUT WALAU SEBELUMNYA BELUM SELESAI & SYNCHRONOUS TUNGGU TASK SEBELUMNYA SELESAI BARU LANJUT KE TASK BERIKUT

//SYNCHRONOUS 
console.log(1);
console.log(2);
console.log(3);

//ASYNCHRONOUS 
console.log(4);
setTimeout(()=>console.log(5),3000);
console.log(6)

// PROMISE, bisa PENDING, FULFILLED, REJECTED
const examplepromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const bool = true;
        if (bool){
            resolve("success");
        }else{
            reject("error");
        }
    },2000)
});
examplepromise.then((res)=>console.log(res)).catch((err)=>console.log(err)).finally(()=>console.log("finally"));
//console.log(examplepromise);
console.log(10);

//ASYNC AWAIT
async function exampleAsyncawait(){
    try{
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const parse = await res.json();
        console.log(parse.message);
    }catch(err){
        console.log(err);
    }
}
console.log(exampleAsyncawait());