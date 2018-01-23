var moment = require('moment');

var createdAt = 123;
var date = moment(createdAt);

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm a'));