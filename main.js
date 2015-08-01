
exports.outputHelloWorld = function() {
  return "Hello, world!";
};

exports.calculate = function(total) {
if (total <= 10)
  return .1 * total;
else if (total <=20)
  return 1 + (total-10)*.07;
else if (total <=30)
  return 1.7 + (total-20)*.05;
else
  return 2.2 + (total-30)*.03;
};

exports.leapYear = function(year) {
  if (year % 100 === 0 && year % 400 !== 0 )
    return false;
  else if (year % 4 === 0)
    return true;
}

exports.changeToUpper = function(list) {
  var uppers = list.map(function(x) { return x.toUpperCase(); });
  return uppers;
}
