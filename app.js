var twitterAPI = require("node-twitter-api");
var twitter = new twitterAPI ({
	consumerKey:'SjiwMu7OIZ9JZeqFxBc62Imrm',
	consumerSecret: 'xX2nUApxeqBagZ4vjjDMSiCG6IBIiT9dc5IRgGikNTwKfq49L3',
	callback : 'http://localhost:8012/callback'
});
var express = require("express");
var app = express();
var requestToken;
var requestTokenSecret;
var oauth_verifier;
var oauth_token;

var routes = require("./routes");



app.get('/auth', function (req, res) { // route pour '/'
	console.log("/");	
	twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results){
	    if (error) {
	        console.log("Error getting OAuth request token : " , error);
	    } else {
	        console.log("requestToket :",requestToken); 
	        console.log("secret : ", requestTokenSecret);
	        requestToken = requestToken;
	        requestTokenSecret = requestTokenSecret;
	        var url = twitter.getAuthUrl(requestToken);
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
	routes.timeline(req,res,twitter);
});

app.post('/post', function(req, res){
	routes.post(req, res, twitter);
});

//Error 404 
app.use(function(request, response, next) {
	response.setHeader('Content-Type', 'text/json');     
	response.send(404, JSON.stringify( 'Page not found !') ); 
});

app.listen(8012);