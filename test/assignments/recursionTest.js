var assert = require('assert');
var recursion = require('../../src/assignments/recursion.js');

describe('Greatest common divisor',function(){
	it('should return 1 for given two numbers 1 and 2',function(){
		assert.equal(1, recursion.gcdOf(1,2));
	});

	it('should return 2 for given two numbers 4 and 2',function(){
		assert.equal(2, recursion.gcdOf(4,2));
	});

	it('should return 2 for given two numbers 8 and 38',function(){
		assert.equal(2, recursion.gcdOf(8, 38));
	});

	it('should return 3 for given two numbers 6 and -15',function(){
		assert.equal(-3, recursion.gcdOf(6, -15));
	});

	it('should return NaN for given two numbers undefined and 2',function(){
		assert.ok(isNaN(recursion.gcdOf(undefined, 2)));
	});
});


describe('Fibonacci',function(){
	var errorMsg = /out of range/;
	it('should return 0 for given term 1',function(){
		assert.deepEqual([0], recursion.fibo(1));
	});

	it('should return 01 for given terms 2',function(){
		assert.deepEqual([0,1], recursion.fibo(2));
	});

	it('should return 011 for given terms 3',function(){
		assert.deepEqual([0,1,1], recursion.fibo(3));
	});

	it('should return 0112 for given terms 4',function(){
		assert.deepEqual([0,1,1,2], recursion.fibo(4));
	});	

	it('should return 011235 for given terms 6',function(){
		var expected = [0,1,1,2,3,5];
		assert.deepEqual(expected, recursion.fibo(6));
	});

	it('should return out of range for given negative terms',function(){
		assert.throws(function(){recursion.fibo(-1)},errorMsg);
	});

	it('should return out of range for given terms non integer',function(){
		assert.throws(function(){recursion.fibo(Infinity)},errorMsg);
		assert.throws(function(){recursion.fibo(undefined)},errorMsg);
		assert.throws(function(){recursion.fibo('s')},errorMsg);
	});

	it('should return out of range for given terms zero',function(){
		assert.throws(function(){recursion.fibo(0)}, errorMsg);
	});
});