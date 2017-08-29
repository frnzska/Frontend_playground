import { map } from 'lodash';
var template = require("./list_template.hbs");

let numbers = map([1,2,3,4,5], n => n*n);

console.log(template({numbers}));
