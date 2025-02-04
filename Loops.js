// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value ${i}`);
//     for(let j = 1; j<= 10; j++)
//     {
//         console.log(i + ' x ' + j + ' = ' + i*j);
//     }
// }

// const arr = ['iron-man', 'thor', 'captain'];
// console.log(arr.length);
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

//usecase of break statement
// for(let i = 1; i <= 20; i++)
// {
//     if(i == 5)
//     {
//         console.log("5 detected");
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }

//usecase of continue statement
for(let i = 1; i <= 20; i++)
    {
        if(i == 5)
        {
            console.log("5 detected");
            continue;
        }
        console.log(`Value of i is ${i}`);
    }
    