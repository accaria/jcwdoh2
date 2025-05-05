//STACK
class Stack{
    #maxSize;
    #container =[];
    constructor(maxSize=5){
        this.#maxSize=maxSize;
    }
    #isFull(){
        return this.#container.length >= this.#maxSize;
    }
    #isEmpty(){
        return this.#container.length ===0;
    }
    push(element){
        if (this.#isFull()) return "Full"
        this.#container.push(element); 
        //THIS CONTAINER PUSH TIDAK JALAN KARENA METHOD AKAN BERHENTI KETIKA SUDAH MENJALANKAN RETURN
    }
    pop(){
        if (this.#isEmpty()) return "Empty";
        this.#container.pop();
    }
    shift(){
        if (this.#isEmpty())return "Empty"
        this.#container.shift();
    }
    getContainer(){
        return this.#container;
    }
}
const newStack = new Stack();
newStack.push(1);
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.pop()
newStack.push(100);
newStack.pop()
newStack.push(100);
newStack.push(100);
newStack.shift();
console.log(newStack.getContainer())

//QUEUE

class Queue{
    #container =[];
    #maxSize;
    constructor(maxSize=5){
        this.#maxSize=maxSize;
    }
    #isFull(){
        return this.#container.length >= this.#maxSize;
    }
    #isEmpty(){
        return this.#container.length ===0;}
     push(element){
        if (this.#isFull()) return "Full"
         this.#container.push(element); }
    shift(){
        if (this.#isEmpty())return "Empty"
        this.#container.shift();
    }
    getContainer(){
        return this.#container;
    }

}
const newQueue = new Queue();

newQueue.push(1);
console.log(newQueue.getContainer());
newQueue.push(2);
console.log(newQueue.getContainer());
newQueue.push(3);
console.log(newQueue.getContainer());
newQueue.push(4);
console.log(newQueue.getContainer());
newQueue.shift();
console.log(newQueue.getContainer());

//SET

const arr=[1,2,3,4,5,5];
arr.push(6,6);
console.log(arr);
const newArr = new Set(arr);
newArr.add(7)
console.log(newArr);

const arr2= [...newArr];
console.log(arr2);
const arr3 = Array.from(newArr);
console.log(arr3);

//HASH TABLE / MAP

const newMap = new Map();
newMap.set("Name","David");
newMap.set("Age",22);
newMap.set([1,2],1)
for (let[key,value]of newMap){
    console.log(key);
    console.log(value);
}

const obj={
    name: "David",
    age: 23
};
const newMap2=new Map(Object.entries(obj));
newMap2.set("name","Budi");
for (let [key,value]of newMap2){
    if (key==="TTL"){
        console.log(key);
        console.log(value);
    }
}
const newObj=Object.fromEntries(newMap2);
console.log(newObj)

//LINKED LIST 

const linkedList={
    head:{
        value:"A",
        next:{
            value:"B",
            next:{
                value:"C",
                next:null
            }
        }
    }
};

console.log(linkedList.head.next.next);

class Node{
    value;
    next;
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    head;
    size;
    constructor(){
        this.head=null;
        this.size=0;
    }
    add(value){
        let node=new Node(value);

        let current; 

        if(this.head===null) {
            this.head=node;}
        else{
            current = this.head
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
}
const newLinkedList = new LinkedList();
newLinkedList.add("A");
newLinkedList.add("B");
newLinkedList.add("C");
console.log(newLinkedList);