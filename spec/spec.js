
var code = require('../main.js');

describe('', function() {
  it('', function() {

  });
});

describe("Hello World", function() {
  it("says 'hello, world!' when ran", function() {
    expect(code.outputHelloWorld()).toEqual("Hello, world!");
  });
});

describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calculate(1)).toEqual(0.1);
    expect(code.calculate(10)).toEqual(1);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.calculate(15)).toEqual(1.35);
  });

  it('should tax 5% on the third $10', function(){
    expect(code.calculate(25)).toEqual(1.95);
  });

  it('should tax 3% on anything over $30', function(){
    expect(code.calculate(35)).toEqual(2.35);
  });
});

describe('Leap Year', function() {

  it('should return true if year is a leap year', function() {
    expect(code.leapYear(1600)).toEqual(true);
    expect(code.leapYear(1900)).toEqual(false);
  })
})

describe('To Uppercase', function() {

    it('should return an array of strings as all uppercase', function() {
      expect(code.changeToUpper(['red', 'green', 'blue'])).toEqual(['RED', 'GREEN', 'BLUE']);
    });

  });
