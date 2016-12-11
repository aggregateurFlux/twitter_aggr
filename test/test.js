var assert = require('assert');

describe('routes', function() {
	describe('index', function(){
		it('should return title and body', function() {
			//Expected
			var expected = JSON.stringify({
				title : "Test mocha",
				body : "Test unitaire mocha 01"
			});

			//Get
			var routes = require("../routes");

			var result = routes.index();

			assert.equal( result, expected);
		});
	});
	// TEST DE /AUTH NON IMPLEMENTE CAR NON-FONCTIONEL
});