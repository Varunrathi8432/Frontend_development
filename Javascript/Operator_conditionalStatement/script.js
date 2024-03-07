// Practice Set
// Q1 Use logical operator where age lie between 10 and 20
let age = 15;
if(age>=10&&age<=20)
    console.log(`good age : ${age} for study`);
else
    console.log(`age : ${age} for enjoy`);

// Q2 use oF switch case
let math="+";
switch(math){
    case "+":console.log(2+3);
                break;
    case "-":console.log(3-2);
                break;
    default:console.log("Invalid");
}

// Q3 use ternary operator
console.log(age>18?"You can Drive":"You cannot Drive");