var index = function (req, res) {
	var obj = {
		title : "Test mocha",
		body : "Test unitaire mocha 01"
	};
	return JSON.stringify(obj);
};

module.exports = {
	timeline : require('./timeline'),
	post : require('./post'),
	index : index
};