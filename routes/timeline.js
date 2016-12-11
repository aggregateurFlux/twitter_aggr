var timeline =  function(req, res,twitter) {
	var accessToken = req.headers.access_token;
	var accessTokenSecret = req.headers.access_token_secret;
	twitter.getTimeline("home_timeline", {count:30}, accessToken, accessTokenSecret,
		function(error, data, response) {
			if (error) {
				console.log("FAILED : ", error);
				res.end("FAILED");
			} else {
				console.log("SUCCESS");
				res.setHeader("Content-Type","text/json");

				var result = [];

				for (var i = 0; i < data.length; i++) {
					result[i] = {
						id : data[i].id,
						createdAt : data[i].created_at,
						user : data[i].user,
						content : data[i].text
					}
				}
				res.end( JSON.stringify( result ) );
			}
		}
	);
};

module.exports = timeline;