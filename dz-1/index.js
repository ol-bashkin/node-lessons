const ansi = require("ansi");
const colors = require("colors");
const cursor = ansi(process.stdout);

console.log('HELLO, MY FRIEND!'.rainbow);
console.log('Who would imagine this?'.trap);
cursor.beep();