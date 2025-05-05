//LOOP STATEMENT

const tampilkan = 0;
const kondisi = false;

//FOR LOOP
for (let a = 1; a <= tampilkan; a++){
    console.log("Hello world");
}

//WHILE LOOPING BREAK
let x = 1;
while (kondisi==true){
    console.log(x);
    console.log("Print");
    if (x===tampilkan){
        break;
    }
    x++;
}
//WHILE LOOPING CONDITIONAL
x= 1;
while(x<=tampilkan){
    console.log(x);
    console.log("hi world");
    x++;
}

//DO WHILE, PALING TIDAK KODE AKAN EKSEKUSI SATU KALI

x =1;
do {
    console.log(x);
    console.log("Hello World");
    x++;
}while(x<=tampilkan);