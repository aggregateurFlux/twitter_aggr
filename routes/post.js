var post = function(req, res, twitter) {
    var accessToken = req.headers.access_token;
    var content = req.headers.content;
    var accessTokenSecret = req.headers.access_token_secret;

    console.log("accessToken : ", accessToken);
    console.log("accessTokenSecret :", accessTokenSecret);
    console.log("content :", content );


    twitter.statuses("update", {
        status: content
    },
    accessToken,
    accessTokenSecret,
        function(error, data, response) {
            if (error) {
                console.log("FAILED: ", error);
            } else {
                res.setHeader("Content-Type","text/html")
                console.log("SUCCESSFUL POST")
                res.end(content); 
            }
        }
    );
};

module.exports = post;