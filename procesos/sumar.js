process.on("message", (msg) => {
    var suma = msg.data.reduce((a,x) => a + x );
    process.send({result: suma});
});
