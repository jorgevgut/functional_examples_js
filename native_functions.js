var input = [1,2,3,4,5];

// Ex. map function
// Allows to "transform" or "map" an input into an output
// map takes a Function as a parameter.

var output = input.map((x) => x * 2);
var output2 = output.map((x,index) => {
  var json = {
	  "id":index,
          "value": x
  };
  return json;
});

console.log(input);
console.log(output);
console.log(output2);

// Ex. filter function
// Allows to filter a set of data, based on a predicate
// a predicate is a functions that retruns TRUE or FALSE

var output3 = output2.filter((x) => x.id > 1);
console.log("Filtered data:");
console.log(output3);
