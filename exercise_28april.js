/*Q1
Write a function to get the lowest, highest and average value in the array (with and without sort function).
Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/
function q1answer(arr){
    if (!arr || arr.length === 0) {
        return { min: undefined, max: undefined, average: undefined };
      }
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for (let i=0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        if (arr[i] > max){
            max = arr[i];
        }
        sum += arr[i];
    }
    const average = sum / arr.length;
    return {min,max,average};
}
const q1arr = [12, 5, 23, 18, 4, 45, 32];
const q1answer1 = q1answer(q1arr);
console.log(q1answer1.max);
console.log(q1answer1.min);
console.log(q1answer1.average.toFixed(4));


/*Q2
Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/

let arr1 = ["apple", "banana", "cherry", "date"];

let arr1answer = arr1.splice(3);

console.log (arr1answer);
console.log (arr1);

function q2answer(fruitname){
   console.log (arr1 + ', and ' + fruitname); 
}
q2answer('date');

/*DARI BRYAN

let arr1 = ["apple", "banana", "cherry", "date"];
function q2answer(arr1){
    let arr1answer = arr1.splice(3);
console.log (arr1answer);
console.log (arr1);
   console.log (arr1 + ', and ' + fruitname); 
}
q2answer(arr1);
*/

/*Q3
Write a function from a given array of numbers and return the second smallest number
Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/

function q3answer(q3arr){
   q3arr.sort((a , b) => a - b);
   return q3arr[1];
}
let q3numbers = [5, 3, 1, 7, 2, 6];
console.log(q3numbers.sort())
console.log(q3answer(q3numbers));

/*Q4 
Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/

function q4answer(arr1,arr2){
    if (arr1.length !== arr2.length){
        return console.log('Error, two arrays must be of same length');
    } 
    const q4result =[];
    for (let i = 0; i < arr1.length; i++ ){
        q4result.push(arr1[i] + arr2[i]);
    }
    return q4result;
}   
console.log(q4array = q4answer([1,2,3],[3,2,1]));
console.log(q4array);

/*Q5
Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]      
Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]
*/


function q5answer(array, value) {
    if (!array.includes(value)) {
      array.push(value);
    }
  }
  
  let q5array = [1, 2, 3,4];
  q5answer(q5array, 4);
  
  console.log(q5array); // Output: [1, 2, 3, 4]


/*Q6
Write a function from a given array of mixed data types and return the sum of all the number
Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
*/
const q6array = ["3", 1, "string", null, false, undefined, 2];
function q6answer(arr){
    let sum =0;
    for (let i=0; i< arr.length; i++){
        const element = arr[i];
        if (typeof element === 'number'){
            sum += element
        }
    }return sum;
}
console.log (q6answer(q6array));



/*Q7
Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. 
(if the maximum size of the given input is 5 than the array can only contain 5 elements). 
Example : 
 maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8                                                                                                                                                  
The function will return [5, 10, 24, 3, 6]
*/
function insertIntegers(arr, integers, maxLength) {
    if (!Array.isArray(arr)) {
      throw new Error("The first argument must be an array.");
    }
    if (!Array.isArray(integers)) {
      throw new Error("The second argument must be an array.");
    }
    if (typeof maxLength !== 'number' || maxLength <= 0) {
       throw new Error("The third argument must be a positive number.");
    }
  
    const availableSpace = maxLength - arr.length;
  
    if (availableSpace <= 0) {
      return arr; // Array is full
    }
  
    const integersToInsert = integers.slice(0, availableSpace);
  
    arr.push(...integersToInsert);
    return arr;
  }
  
  //Example Usage
  let myArray = [];
  const newIntegers = [5, 10, 24, 3, 6, 7, 8 ];
  const maxArrayLength = 5;
  
  myArray = insertIntegers(myArray, newIntegers, maxArrayLength);
  console.log(myArray); // Output: [1, 2, 3, 4, 5]
  

/*Q8
Write a function that will combine 2 given array into one array
Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]      
*/
function q8answer(){
    let arr1 = [1,2,3];
    let arr2 = [4,5,6];
    let arr3 = arr1.concat(arr2);
    return arr3;
}
console.log (q8answer());

/*Q9
Write a function to find duplicate values in an array
Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]  
*/
function q9answer(arr){
    const duplicates =[];
    const count = {};
    for (const item of arr){
        count [item] = (count[item]|| 0) +1;
        if (count[item]===2){
            duplicates.push(item);
        } 
    }
    return duplicates;
}
const q9array = [1, 2, 2, 2, 3, 3, 4, 5, 5];
const duplicatenumbers = q9answer(q9array);
console.log(duplicatenumbers);

/*Q10 <>
Write a function to find the difference in 2 given array
Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]      
*/
function q10answer(q10arr1,q10arr2){
    const arr1diff = q10arr1.filter(element => !q10arr2.includes(element));
    const arr2diff = q10arr2.filter(element => !q10arr1.includes(element));
    return arr1diff.concat(arr2diff); 
}
let q10arr3 = [1, 2, 3, 4, 5];
let q10arr4 = [3, 4, 5, 6, 7];
const q10difference = q10answer (q10arr3,q10arr4);
console.log(q10difference);

/*Q11
Based on the array below write a function that will return primitive data types only.                                             
let arr = [1, [], undefined, {}, "string", {}, []];
The function will return [1, undefined, “string”]
*/
function q11answer(arr){
    return arr.filter(item=>{
        const type = typeof item;
        return type === 'string' || type === 'number' || type === 'undefined';
    });
}
const q11array = [1, [], undefined, {}, "string", {}, []];
const q11primitive = q11answer(q11array);
console.log(q11primitive);


/*Q12 <>
Write a function from the below array of number that will return sum of duplicate values.                                    
let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
The function will return 40
*/
function sumDuplicates(arr) {
    const counts = {};
    let sum = 0;
  
    for (const num of arr) {
      counts[num] = (counts[num] || 0) + 1;
    }
  
    for (const num in counts) {
      if (counts[num] > 1) {
        sum += parseInt(num) * counts[num];
        
      }
    }
  
    return sum;
  }

const q12numbers = [10, 20, 40, 10, 50, 30, 10, 60, 10];
const duplicatesum = sumDuplicates(q12numbers);
console.log(duplicatesum);

/*Q13 <>
Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
*/
let randomresult;
function getrandom(min,max){
    min = Math.ceil(min);
    max = Math.ceil(max);
   randomresult = Math.floor(Math.random()*(max-min+1)) +min;
   return randomresult
   // 1 = rock , 2 = paper, 3 = scissors
}
console.log(getrandom(1,3));

function q13answer(rps){
    const playerchoice = [1,2,3 ]
   
}




