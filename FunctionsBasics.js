// function addTwoNumbers(number1, number2)
// {
//     console.log(number1 + number2);
// }
// function addTwoNumbers(number1, number2)
// {
//     let result = number1 + number2;
//     return result;
// }
// const result = addTwoNumbers(2,3);
// console.log(result);

function loginUserMessage(username = "sam")         //this default username will get override if we pass the argument during execution of function
{
    if(username === undefined){
        console.log("Please enter the username");
        return;
    }
    return `${username} just logged in`;
}
//console.log(loginUserMessage("Pratham"));
console.log(loginUserMessage("Mrudul"));