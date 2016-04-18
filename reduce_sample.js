var input = [5,2,9,10];
var input2 = [
    {id:1,value:5},
    {id:2,value:2},
    {id:3,value:9},
    {id:4,value:10}
    ];

var sum = input.reduce((prev,current, index) => {
    return prev + current;
});

var sum2 = input2.map((x) => x.value)
	.reduce((prev,current,index) => prev + current);

console.log("Sum of all values:" + sum);
console.log("Sum of all values(2):" + sum2);
