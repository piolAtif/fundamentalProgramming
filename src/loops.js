var loops = {};
var exception = require('./exception.js');
var basic = require('./basicFunctions.js');

loops.factorialOf = function(number) {
	if(number==0)
		return 1;
	if(number<0)
		throw new exception.negativeNumberException();
	if(number == Infinity)
		return Infinity;
	return loops.factorialOf(number-1)*number;
};

var positiveFibonacciOf = function(number, current, next){
	var terms = [];
	var newTerm;

	for (var i = 0; i < number; i++) {
		terms.push(current);
		newTerm = next+current;
		current = next;
		next = newTerm;
	};
	return terms.join(" ");
}

var negativeFibonacciOf = function(number, current, next){
	var terms = [];
	var newTerm;

	for (var i = 0; i > number; i--) {
		terms.push(current);
		newTerm = next-current;
		next = current;
		current = newTerm;
	};
	return terms.join(" ");
}

loops.fibonacciOf = function(number){
	if(number>= 0)
		return positiveFibonacciOf(number,0,1);
	return negativeFibonacciOf(number,0,1);
};

loops.oddNumberSeries = function(range){
	return basic.squareOf(Math.floor(range/2))*Math.sign(range);
};

module.exports = loops;