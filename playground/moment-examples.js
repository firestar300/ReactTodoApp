var moment = require('moment');

console.log(moment().format());

// 1er janvier 1970 à 12h00 -> 0
// 1er janvier 1970 à 12h01 -> 60

var now = moment();

console.log('Current timestamp',  now.unix())

var timestamp = 1491070784;
var currentMoment = moment.unix(timestamp);

console.log('Current moment', currentMoment.format());

// 1er Janvier 2017 @ 12h00
console.log('Current moment', currentMoment.format('d MMMM YYYY @ HH[h]mm'));
