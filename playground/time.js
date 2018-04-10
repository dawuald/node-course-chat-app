const moment = require('moment');
var timestamp = new Date().getTime();

var date = moment(timestamp);

console.log(date.format())