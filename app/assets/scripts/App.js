var $ = require('jquery');
var Person = require('./modules/Personnn');

alert("testing again");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();

$("h1").remove();