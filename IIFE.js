(function chai(){
    //named IIFE(Immediately invoked function expressions)
    console.log(`DB connected`);
    
})();   // semicolon is must bcoz it will allow other such function to execute

((name) => {
    //unnamed IIFE
    console.log(`DB connected two, ${name}`);
})('Pratham')

//This IIFE is used to remove the pollution created by variables of global scope...