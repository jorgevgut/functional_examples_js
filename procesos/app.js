var fork = require("child_process").fork;

var dataset = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
];

var result = 0;

dataset.forEach((piece) => {
    // Crear un proceso para delegar carga de trabajo (puede estar en otro core)
    var other_process = fork("sumar.js");
    other_process.send({data:piece});
    other_process.on("message", (msg) => {
        result += msg.result;
        console.log(result);
        other_process.disconnect();
    });
});


