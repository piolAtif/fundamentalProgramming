var assert = require('assert');
var arrayMethods = require('../../src/basic/arrayMethods');
var basic = require('../../src/assignments/basicFunctions.js');

var helpers = {};

helpers.identity=function(number){return number};
helpers.index=function(number,index){return index};
helpers.list=function(number, index, list){return list};
helpers.inc=function(number){return number+1};
helpers.hola = function(){return 'hola'};
helpers.multiplyWith3 = function(number){return number*3};
helpers.zero = function(){return 0;};
helpers.nothing = function(){};
helpers.trueValue = function(){return true};
helpers.falseValue = function(){return false};

helpers.isDivisibleBy3 = function(number){
	return number%3==0;
};

helpers.isGreaterThan3 = function(element){
	return element.length>3;
};

helpers.isGreaterThan4 = function(element){
	return (element[0]+element[1]) > 4;
};

helpers.min = function(first, second){
	return Math.min(first, second);
};

helpers.largestdiff = function(first, second){
	first.diff = Math.max(first.diff, Math.abs(second-first.value));
	first.value = second;
	return first;
};

helpers.sum = function(first, second){
	return first+second;
};

helpers.sumOfIndexes = function(first, second, index){
	return first+index;
};

helpers.flatten = function(first, second){
	return first.concat(second);
};

helpers.flattenBackward = function(first, second){
	return second.concat(first);
};

helpers.isUniqueNumber = function(number, index, list){
	return list.indexOf(number)== index;
};
helpers.sumWithOtherList = function(number, index){
	var secondList = [1,2,3,4];
	return number+secondList[index];
};

helpers.powOf = function(number){
	return Math.pow(number, number);
};


describe('myMap',function(){
	var myMap = arrayMethods.myMap;
	describe('Operation on single array',function(){
		it('should return same array',function(){
			assert.deepEqual([1,2,3], myMap([1,2,3], helpers.identity));
		});

		it('should return index of elements of an given array',function(){
			assert.deepEqual([0,1,2], myMap([1,2,3], helpers.index));
		});

		it('should return given array for each elements',function(){
			var expectedResult = [[1,2,3],[1,2,3],[1,2,3]];
			assert.deepEqual(expectedResult, myMap([1,2,3], helpers.list));
		});

		it('should return elements incremented by 1',function(){
			assert.deepEqual([2,3,4], myMap([1,2,3], helpers.inc));
		});

		it('should return hola word place of each element',function(){
			var expectedResult = ['hola','hola','hola'];
			assert.deepEqual(expectedResult, myMap([1,2,3],helpers.hola));
		});

		it('should return multiplication of each element with 3',function(){
			var expected = [3,6,9,12,15];
			var numbers = [1,2,3,4,5];
			assert.deepEqual(expected, myMap(numbers, helpers.multiplyWith3));
		});

		it('should return 0 place of each element for given array',function(){
			assert.deepEqual([0,0,0,0], myMap([1,2,3,4], helpers.zero));
		});

		it('should return undefined place on each element',function(){
			var expected = [undefined, undefined, undefined];
			assert.deepEqual(expected,myMap([1,2,3],helpers.nothing));
		});	

		it('should map to n^n',function(){
			var expected = [1,4,27,256];
			assert.deepEqual(expected, myMap([1,2,3,4], helpers.powOf))
		});
	});

	describe('Operation on two arrays',function(){
		it('should return sum of two arrays',function(){
			var list = [2,3,4,5];
			var expected = [3,5,7,9]; 
			assert.deepEqual(expected, myMap(list, helpers.sumWithOtherList))
		});
	});	
});

describe('myFilter',function(){
	var myFilter = arrayMethods.myFilter;

	describe('filter single array', function() {
		var list = [1,2,3,4];
	    it('should return same elements for true condition', function() {
	        assert.deepEqual([1,2,3,4], myFilter(list, helpers.trueValue));
	    });

	    it('should return an empty array for false condition', function() {
	        assert.deepEqual([], myFilter(list, helpers.falseValue));
	    });

	    it('should filter all of the even elemets', function() {
	        assert.deepEqual([2, 4,], myFilter(list, basic.isEven));
	    });

	    it('should filter all of the odd elements', function() {
	        assert.deepEqual([1, 3], myFilter(list, basic.isOdd));
	    });

	    it('should return an empty array for undefined elements', function() {
	    	var list = [undefined, undefined, undefined];
	        assert.deepEqual([], myFilter(list, helpers.identity));
	    });

	    it('should return an empty array for falsy elements', function() {
	    	var list = [0, undefined, NaN];
	        assert.deepEqual([], myFilter(list, helpers.identity));
	    });

	    it('should filter all of the truthy elements', function() {
	    	var list = [0, 1, undefined, 2, NaN];
	        assert.deepEqual([1, 2], myFilter(list, helpers.identity));
	    });

	    it('should filter all of the elements divisible by three', function() {
	        assert.deepEqual([3], myFilter(list, helpers.isDivisibleBy3));
	    });

	    it('should filter all of the truthy index of elements', function() {
	        assert.deepEqual([2, 3, 4], myFilter(list, helpers.index));
	    });

	    it('should return an array of unique elements',function(){
	    	 var list = [1,2,3,3,4];
	    	assert.deepEqual([1,2,3,4],myFilter(list, helpers.isUniqueNumber));
	    })
	});

	describe('filter array of arrays',function(){
		it('should filter elements whos length is greater than 3',function(){
			var expected = [[1,2,3,4],[2,3,4,5]];
			var list = [[1,2,3,4],[1,2,3],[2,3,4,5]];
			assert.deepEqual(expected, myFilter(list, helpers.isGreaterThan3));
		});

		it('should filter elements whos sum is greater than 4',function(){
			var list = [[1,2],[7,5],[1,3],[2,3]];
			var expected = [[7,5],[2,3]];
			assert.deepEqual(expected, myFilter(list, helpers.isGreaterThan4));
		})
	});
});

describe('myReduce',function(){
	var myReduce = arrayMethods.myReduce;
	var list = [1,2,3,4];
	
	it('should return sum of the elements',function(){
		assert.equal(10,myReduce(list, helpers.sum));
	});

	it('should return sum of the index of elements',function(){
		assert.equal(6, myReduce(list, helpers.sumOfIndexes,0));
	});

	it('should return flattened array of elements',function(){
		var list = [[1,2],[3,4]];
		assert.deepEqual([1,2,3,4], myReduce(list, helpers.flatten,[]));
	});

	it('should return flatten array backward of elements',function(){
		var list = [[2,1],[4,3]];
		assert.deepEqual([4,3,2,1], myReduce(list, helpers.flattenBackward));
	});

	it('should return min element from given array',function(){
		assert.equal(1, myReduce(list, helpers.min));
	});

	it('should return largest diff between consecutive elements',function(){
		var init = {value:0, diff:0};
		var randomList = [2,10,100,0];

		assert.equal(1, myReduce(list, helpers.largestdiff,init).diff);
		assert.equal(100, myReduce(randomList, helpers.largestdiff,init).diff);
	});
});

describe('myForEach', function(){
	var myForEach = arrayMethods.myForEach;
	var list = [1,2,3,4];

	var makeForEach=function(total) {
		return function(d,i,list) {
			total.value+=d;
		};
	};

	var addingWith = function(addingList){
		return function(d, i, list){
			addingList[i] += d;
		};
	};

	var areSameElements = function(equalTo,result){
		result.value=true;		
		return function(element, index, list){
			if(equalTo[index] != element)
				result.value = false;
		}
	}

	it('should return undefined for given array',function(){
		assert.equal(undefined, myForEach(list, helpers.identity));
	});

	it('should set value of total as sum of the elements',function(){
		var total={value:0};
		myForEach(list, makeForEach(total));
		assert.equal(10,total.value);
	});

	it('should add elements of an array with another array',function(){
		var firstList= [1,2,3];
		var secondList = [5,4,3];
		myForEach(firstList, addingWith(secondList));
		assert.deepEqual([6,6,6],secondList);
	});

	it('should set true value for isSameElement condition',function(){
		var list = [1,2,3];
		var equalTo =[1,2,3];
		var result={}; 
		myForEach(list, areSameElements(equalTo,result));
		assert.ok(result.value);
	});

	it('should set false value for different elements',function(){
		var list = [1,2,3];
		var equalTo = [1,9,3];
		var result = {};
		myForEach(list, areSameElements(equalTo, result));
		assert.ok(!result.value);
	})	
});
