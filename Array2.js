const indian_cricketers = ["Virat", "Rohit", "Bumrah"];
const australian_cricketers = ["Smith", "Head", "Cummins"];

// indian_cricketers.push(australian_cricketers);
// console.log(indian_cricketers);

// const all_cricketers = indian_cricketers.concat(australian_cricketers);
// console.log(all_cricketers);

// const all_cricketers = [...indian_cricketers, ...australian_cricketers];
// console.log(all_cricketers);

// const arr = [1,2,3,[4,5,6],7,[8,9,[1,2]]];
// const newarr = arr.flat(Infinity);
// console.log(newarr);

console.log(Array.isArray("Pratham"));
console.log(Array.from("Pratham"));
console.log(Array.from({name : "Pratham"}));  //Interesting case as we don't know whether we have to form array of key pairs or value pairs

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
