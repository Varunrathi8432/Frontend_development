// write smaple program oF Fro loop
for(let i=1;i<=5;i++){
    console.log(`5*${i}=${5*i}`);
}

let student={
    name : "Varun Rathi",
    "Phone No." : 6367649910,
    marks : 89
};

//write a program oF For-in loop
for(const key in student){
    console.log(key,student[key]);
}

// write a program oF For oF loop
for(const c of "Varun"){
    console.log(c);
}

// write program oF do while loop
let i=10;
do{
    console.log(i);
}while(i<5);

// ******** Functions *******

// Write a Function oF marks oF student 
function total(obj){
    let result=0;
    for(const key in obj){
        result+=obj[key];
    }
    return result;
}

let marks={
    varun:89,
    sandeep:84,
    govind:63
};

let sum=total(marks);
console.log(sum);

//Write a Function to check correct number
const prompt = require('prompt-sync')();

let num=Number(prompt("Enter a number : "));
function check(num1){
    while(true){
        if(num1==3)
            break;
        num1=prompt("Try again ");
    }
    console.log("Done!");
}
check(num);

console.log(`enter number is ${num} and Type is ${typeof(num)}`);