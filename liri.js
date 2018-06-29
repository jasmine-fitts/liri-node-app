
require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require('node-spofity-api');

var request = require("request");

var fs = require("fs");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


switch (action) {
    case "my-tweets":
      twitter();
      break;
    
    case "spotify-this-song":
      spotify();
      break;
    
    case "movie-this":
      movie();
      break;
    
    case "do-what-it-says":
      doIt();
      break;
    }

    function twitter() {
        client.get("statuses/user_timeline", params, function(err, tweets, response){
            if(!error && response.statusCode === 200) {
                
            }
        })
    }