const user = {
    username : "Pratham",
    price : 999,
    welcomeMessage : function()
    {
        console.log(`${this.username}, welcome to the website...`);
        console.log(this);
        
    }

}
// user.welcomeMessage();
// user.username = "Mrudul";
// user.welcomeMessage();

// console.log(this);  // This console log indicates that global scope of this function in it is empty...

// function chai(){
//     let username = "Pratham"
//     console.log(this.username);
// }
// chai();

// const chai = function(){
//     let username = "Pratham"
//     console.log(this.username);
// }
// chai();

// const chai = () => {
//     let username = "Pratham"
//     console.log(this);
// }
// chai();

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(7,3));

const addTwo1 = (num1, num2) => (num1+num2);
console.log(addTwo1(7,3));

const addTwo2 = (num1, num2) => ({username : "Pratham"});
console.log(addTwo2(7,3));
