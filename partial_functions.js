// To reuse code with partial funcs, first create functions
// that return other functions.

var addNumbers = (a) => {
    return (b) => {
        return a + b;
    }
};

// We can reuse code to create new functions

var substract10 = addNumbers(-10);

// subtract10 will be a function that substracts 10
var x = 100;
var x2 = substract10(x);

console.log(x);
console.log(x2);
