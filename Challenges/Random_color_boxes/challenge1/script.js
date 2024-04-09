let btun=document.createElement('button');
let inp=document.createElement('input');
btun.innerText="Click me";

inp.setAttribute('placeholder','username');
btun.setAttribute('id','btn');

document.querySelector('body').append(btun);
document.querySelector('body').append(inp);

let btn=document.querySelector('#btn');
btn.style.backgroundColor="blue";
btn.style.color="purple";

let para=document.createElement('p');
para.innerHTML="Apna College <b>Delta</b> Practice";

document.querySelector('body').prepend(para);