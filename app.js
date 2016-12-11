var twitterAPI = require("node-twitter-api");
var twitter = new twitterAPI ({
	consumerKey:'fRQaPhfZlTLECNCOH3js7QOWm',
	consumerSecret: 'AfNh4HPfBfXCp1BBWteG4D9FDQAOkuP8dPQxp3MXA117gf7DqU',
	callback : 'http://localhost:8080/callback'
});
var express = require("express");
var app = express();
var requestToken;
var requestTokenSecret;
var oauth_verifier;

var routes = require("./routes");



app.get('/auth', function (req, res) { // route pour '/'
	console.log("/");	
	twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results){
	    if (error) {
	        console.log("Error getting OAuth request token : " , error);
	    } else {
	        //store token and tokenSecret somewhere, you'll need them later; redirect user
	        console.log("requestToket :",requestToken); 
	        console.log("secret : ", requestTokenSecret);
	        requestToken = requestToken;
	        requestTokenSecret = requestTokenSecret;
	        var url = "https://twitter.com/oauth/authenticate?oauth_token="+requestToken;
	        // var url = twitter.getAuthUrl(requestToken);
	        console.log("URL : ",url);
	        res.redirect(url);

	    };
	});
});

app.get('/callback', function(req, res) {
	console.log("/callback");
	oauth_verifier = req.query.oauth_verifier;
	console.log("oauth_verifier : ", oauth_verifier);
	var oauth_token = req.query.oauth_token;
	console.log("oauth_token    : ", oauth_token);

	twitter.getAccessToken(requestToken, requestTokenSecret, oauth_verifier, function(error, accessToken, accessTokenSecret, results) {
			    if (error) {
			        console.log("Obtention access token : FAILED, error : " , error);
			    } else {
			        // Enregistrer le token recupéré 
			        console.log("accessToken : ", accessToken);
			    }
			});
});

app.get('/timeline', function(req,res) {
	console.log("routes.timeline : ", routes.timeline);
	routes.timeline(req,res,twitter);
});

app.post('/post', function(req, res){
	console.log("routes.post : ", routes.post);
	routes.post(req, res, twitter);
});

//Error 404 
app.use(function(request, response, next) {
	response.setHeader('Content-Type', 'text/json');     
	response.send(404, JSON.stringify( 'Page not found !') ); 
	});
app.listen(8080);