#!/usr/bin/env node 

var fs = require('fs');
var file = "hello.txt";
var out = "A startup is a business built to grow rapidly.\n";

fs.writeFileSync(file, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + file);
