//OBJECT

const car = {
    brand: 'BMW', //Properti ke 1, key nya itu brand, valuenya itu 'BMW'
    color: 'Metallic Silver',
    model: 'DD1',
    transmission: 'CVT', //Properti ke 4
    
    start(){
    return "mesin nyala"
 }
};
console.log(car.model);
console.log(car['transmission']);
console.log(car.start());

// ? = OPSIONAL, artinya bisa ada, bisa tidak

const user = {
    name: "Budi",
    adress: {
        kodepos:{
            kecamatan : "Tambora",
            kelurahan : 'Tambora'
        }
    },
};
user.name = 'John'
console.log(user.name);
console.log (user.adress?.kodepos?.kecamatan);

//MUTABLE DAN IMMUTABLE
//IMMUTABLE adalah semua data type primitif / primitive

//MUTABLE adalah semua non-primitif data type
let nama1 = "Budi";
let nama2 = nama1;
nama1 = "John";
console.log(nama1);
console.log(nama2);

const arr1 = [1,2,3,4,5]
const arr2 = arr1;
const arr3 = [...arr1];
arr3[4]= 8;
console.log(arr1);
console.log(arr2);
console.log(arr3);

//DESTRUCTURING ASSIGNMENT

const obj = {
    name: 'Budi',
    birthdate: '2025-01-01',
    gender: 'M',
    KTP: '-',
    NPWP: '-',
    Mobile: '-',
    Address: '-'
}

const {name,birthdate,gender,KTP,NPWP,Mobile,Address} =obj;

console.log(NPWP);

//CLASS 

const listUser = [
    {
        name: 'Budi',
        birthdate: '2025-01-01',
        gender: 'M',
        KTP: '-',
        NPWP: '-',
        Mobile: '-',
        Address: '-',
        Email: '-'
    },
    {
        name: 'John',
        birthdate: '2025-01-01',
        gender: 'M',
        KTP: '-',
        NPWP: '-',
        Mobile: '-',
        Address: '-',
        Email: '-'
    },
    {
        name: 'Ria',
        birthdate: '2025-01-01',
        gender: 'M',
        KTP: '-',
        NPWP: '-',
        Mobile: '-',
        Address: '-',
        Email: '-'
    },
    {
        name: 'Tamara',
        birthdate: '2025-01-01',
        gender: 'M',
        KTP: '-',
        NPWP: '-',
        Mobile: '-',
        Address: '-',
        Email: '-'
    }

];
class User{
    name;
    birthdate;
    gender;
    KTP;
    NPWP;
    Mobile;
    Address;
    Email;

    constructor(nameParam,birthdateParam,genderParam,ktpParam,npwpParam,mobileParam,addressParam,emailParam){
        this.name =nameParam;
        this.Email =emailParam;
        this.birthdate = birthdateParam;
        this.gender=genderParam;
        this.KTP=ktpParam;
        this.NPWP=npwpParam;
        this.Mobile=mobileParam;
        this.Address=addressParam; 
    }
}


const user1 = new User('Budi','2025-01-01','M','-','-','-','-','budi@gmail.com');
console.log(user1);
const user2 = new User();
console.log(user2);

// INHERITANCE

class Product {
    name;
    price;
   
    constructor(name,price){
        this.name =name;
        this.price = price;
        
    }
}
class Book extends Product{
    author;
    constructor(name,price,author){
        super(name,price)
        this.author=author;
    }
}
class Elektronik extends Product{
    brand;
    constructor(name,price,brand){
        super(name,price)
        this.brand=brand;
    }
}

const produk1 =new Elektronik('LG SMART TV', 5000,'LG');
console.log(produk1);

const produk2= new Book('Harry Potter',1000,'JK ROWLING');
console.log(produk2);

//Access modifier
/*
class User1{
    email;
    #password;
    constructor(email,password){
        this.email = email;
        this.#password = password;
    }
    #checkemail(){
        return this.email===email;
    }
    #checkpassword(){
        return this.#password===password;
    }
    getPassword(){
        return this.#password;
    }
   login(email,password){
    const emailValid = this.#checkemail(email);
    if(!emailValid) return "Email salah";
    const passValid = this.#checkpassword(password);
    return {email: this.email, password:this.#password}
   }
}
const userBudi = new User1('Budi@gmail.com','AWSD');
//console.log(userBudi.getPassword());
console.log(userBudi.login("Budi@gmail.com","AWSD"));*/


const dataone =[1,2,3];
const datatwo =[2,3,4];
const finaldata= Object.assign(dataone,datatwo);
console.log(finaldata)

class test{
    test1(){
        console.log("test1");
    }
    test2(){
        console.log("test2");
    }
}
const testuser = new test();
testuser.test2();




