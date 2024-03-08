// Mind Grenade works when we use requitre in another file this whole file actions gets executed as done in app.js
const num1 = 15;
const num2 = 10;

const addValues = (a , b) => {
    console.log(`The Sum is: ${a + b}`);
}

addValues(num1 , num2);