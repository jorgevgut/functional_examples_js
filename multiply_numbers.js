// How to multiply two numbers

// The obvious way
var obMultiply = function (x, y) {
    return x * y;
}

// A more "functional style"
var multiply = function (x) {
    return function (y) {
        return x * y;
    }
}

// Using arrow functions
var aObMultiply = (x, y) => x * y;
var aMultiply = (x) => ((y) => x * y);

console.log(obMultiply(3,9));
console.log(multiply(3)(9));

console.log(aObMultiply(3,9));
console.log(aMultiply(3)(9));
