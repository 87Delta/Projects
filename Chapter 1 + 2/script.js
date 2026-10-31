alert("Hello, from Hello World.html!");
console.log(userInput.slice(0, 4)); // .slice takes the first index and the last index i.e. slice(0, 4) will take the first 4 characters of the string and return them.
alert(`There are ${60 * 60 * 24} seconds in a day.`); // string literal, allows for the use of variables and expressions inside a string. The ${} is used to insert the value of the expression inside the string.
//'' is used for strings, but `` is used for string literals. String literals are a way to create strings that can contain variables and expressions inside them.

console.log(10+20);

let userInput = prompt("Tell me something in 10 characters or less.");
let userNumber = prompt("Tell me a number.");

function lenthToNumber(){
    userInput = userInput.length;
    if (userInput > userNumber) {
        alert("Hmmm, your input is longer than your number. Wanna try again?");
    }
    else if (userInput < userNumber) {
        alert("Hmmm, your input is shorter than your number. Wanna try again?");
    }
    else {
        alert("Hmmm, your input is the same length as your number. Wanna try again?");
    }
};

function lengthCounter(){
    if (userInput.length >= 10) {
        alert("Your input is too long!");
    }
    else {
        console.log("Your input is acceptable.");
    }
};
//.length is a property of strings that returns the number of characters in the string.

function myFunction(){
    let x;
    x=20;
    console.log(x);
    const y=30;
    let randomVariable;
    console.log(randomVariable=x+y);
};

myFunction();
lengthCounter();
lenthToNumber();


// Functions are not taught in these two chapters of the book,
// but I wanted to include them because I remember them and wanted to see if I could still implement them correctly.
