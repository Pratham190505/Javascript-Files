//Stack (Primitive) and Heap(Non-primitive)
let myName = "Pratham";
let myOtherName = myName;
myOtherName = "Pamu";
console.log(myName);
console.log(myOtherName);
//Bcoz in case of stack a copy is provided to the variable not the original one.So the copy can be changed.
let userOne = {
    email:"pratham1@gmail.com",
    upi : "pratham@1" 
}
let userTwo = userOne;
userTwo.email = "mrudul@1gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
//In this case the object points directly to the values present in heap.No copy is formed, so changes takes place directly in the heap only.. 