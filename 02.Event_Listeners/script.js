let a = document.getElementById("btn");
let b = document.getElementById("btn2");
let c = document.getElementById("btttt");
let d = document.getElementById("btn3");
let bl = false
let bool = true
let bb = document.getElementsByTagName("body")
a.addEventListener("click" , ()=>{
    b.style.backgroundColor = "red";
    document.getElementById("pp").style.color = "white";
    document.getElementById("pp").style.backgroundColor = "black";

});
b.addEventListener("click" , ()=>{
    a.style.backgroundColor = "blue";
    document.getElementById("pp").innerHTML = "this is scam now!!"
});
if(bl === true){
    c.addEventListener("click" , function(){
        c.style.backgroundColor = "red";
    })
}
else{
    c.addEventListener("click" , function(){
        c.style.backgroundColor = "pink";
    })
}

d.addEventListener("click" , func);
function func(){
    if(bool){
        d.style.backgroundColor = "gray";
        bool = false
    }
    else{
        d.style.backgroundColor = "red";
        bool = true
    }
}
bb[0].addEventListener("click" , function(){
    bb[0].style.backgroundColor = "red"
})