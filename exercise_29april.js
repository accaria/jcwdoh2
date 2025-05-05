//EXERCISE OBJECT

/*Create a function to calculate array of student data
The object has this following properties :
Name → String
Email → String
Age → Number
Score → Number
Parameters : array of student
Return values :
Object with this following properties :
Score
Highest
Lowest
Average
Age
Highest
Lowest
Average*/

const allStudentData = []


  

/*
Create a program to create transaction
Product Class
Properties
Name
Price
Transaction Class
Properties
Total
Product
All product data
Qty
Add to cart method → Add product to transaction
Show total method → Show total current transaction
Checkout method → Finalize transaction, return transaction data
*/

// Product Class

// CODE BUATAN SENDIRI, MASIH BANTUAN GOOGLE

class Product{
  constructor(name,price){
    this.name=name;
    this.price=price;
  }
  
}
class Transaction extends Product{
  total =0;
  product=[];
  constructor(total,product,name,price){
    super(name,price);
    this.total===total;
    this.product===product;
  }
  addtocart(productname,productqty){
    this.product.push({productname,productqty});
    this.total+=productname.price*productqty;    
  }
  showtotal(){
    
    console.log(`Total is ${this.total}`);
    return this.total;
  }
  checkout(){
    checkouttotal=this.total;
    checkoutproduct = this.product.map(item=>({
      name:item.product.name,
      price:item.product.price,
      productqty:item.product.productqty,
      subtotal:item.product.price*productqty
    }))

  }
}

//Product apel beli 4, harga 500 masing2, total 2000
//Product apel beli 4, harga 500 masing2, total 2000

const appleproduct = new Product('Apple',500);
const orangeproduct = new Product('Orange',400);

const PriceTotal = new Transaction();

PriceTotal.addtocart(appleproduct,4);
PriceTotal.addtocart(orangeproduct,3);

PriceTotal.showtotal();

const finalizetransaction = PriceTotal.checkout;
console.log(PriceTotal.product)
