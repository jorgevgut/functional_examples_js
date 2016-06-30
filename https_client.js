/*
 * Cliente HTTPS generico compatible con Node.js
 * */
var https = require('https');

var https_client = function (url) {
    this.url = url;
    this.options = {
        host: url,
        headers: {
            'User-Agent': "Nodejs https client"
        }
    };
}

https_client.prototype.path = function (path) {
    var clone = Object.assign(new https_client(this.url), this);
    clone.options.path = path;
    return clone;
};

https_client.prototype.get = function (resource) {
    var p = resource || "";
    p = (p[0] === "?" || p[0] === '/' || p === "")? p : "/" + p;
    var body = "";
    var callback = function (res) {
        res.on('data', (c) => body += c);
        res.on('end', () => console.log(body));
    };

    var options = Object.assign({method: "GET"}, this.options);
    options.path = options.path += p;
    var req = https.request(options, callback);
    req.on('error', (err) => console.log(err.message));
    req.on('end', () => console.log("Request completed.."));
    req.end();
};

module.exports = https_client;
