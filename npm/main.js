
var moment = require('moment');
var unique = require('uniq');

var myDate = new Date();
var myFDate = moment(myDate).format('LL');

console.log(myFDate);

var myList = [1,2,3,2,1,1,2,3,4];
var uList = unique(myList);

console.log(uList);