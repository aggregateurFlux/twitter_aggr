var post = function(req, res, twitter) {
    var accessToken = req.headers.access_token;
    var content = req.headers.content;
    var accessTokenSecret = req.headers.access_token_secret;
    twitter.statuses("update", {
        status: content
    },
    accessToken,
    accessTokenSecret,
        function(error, data, response) {
            if (error) {
                console.log("FAILED: ", error);
            } else {
                console.log("SUCCESSFUL POST")
                var success = {
                  status : "200",
                  content : content,
                  message : "successfuly posted"  
                };
                res.setHeader("Content-Type","text/json")
                res.send(JSON.stringify(success)); 
            }
        }
    );
};

module.exports = post;