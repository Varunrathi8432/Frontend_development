let inp=document.querySelector("input");
let btn=document.getElementById("task");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(event){
    let li=document.createElement("li");
    li.textContent=inp.value;
    let newbtn=document.createElement("button");
    newbtn.classList.add("delete");
    newbtn.innerText="delete";
    li.appendChild(newbtn);
    ul.appendChild(li);
    inp.value='';
});

ul.addEventListener("click",function(event){
    // console.dir(event.target);
    if(event.target.nodeName="BUTTON"){
        let li=event.target.parentElement;
        li.remove();
    }
})