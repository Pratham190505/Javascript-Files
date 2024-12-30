
let a = prompt("What is your age?");
a = Number.parseInt(a);
console.log(a)
if(a<0)
{
    console.log("Invalid age");
}
else if(a<9)
{
    console.log("You can't drive");
}
else if(a<18 && a>=9)
{
    console.log("You can think of drive but you can't drive");
}
else{
    console.log("You can drive");
}
