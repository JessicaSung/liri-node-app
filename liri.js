// CREATE JSON PACKAGE AND SAVE NODE MODULES: TWITTER, SPOTIFY, REQUEST, OMDB


// VARIABLES
var keys = require('./keys.js');
console.log(keys.twitterKeys);

// // Includes the request package for grabbing data from OMDB 
var request = require('request');

// Includes the FS package for reading and writing packages 
var fs = require('fs');


// grab user commands from node
var command = process.argv[2];

var Twitter = require('twitter'); 
var client = new Twitter(keys.twitterKeys); 
var params = {screen_name: 'nodejs'};




switch (command) {
	case "my-tweets":		
		grabTweets();
		break;
	case "spotify-this-song":
		console.log("Spotify this song for me");
		break;
	case "movie-this":
		console.log("Find rotten tomatoes rating");
		break;
	case "do-what-it-says":
		console.log("Do what I say!!");
		break;
	default:
		console.log("Invalid command");
}



function grabTweets() {
	console.log("Go grab my tweets");
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    console.log(tweets);
	  }
	});
}












// // Running the readFile module that's inside of fs.
// // Stores the read information into the variable "data"
// fs.readFile("random.txt", "utf8", function(err,data){
// 	var params = {screen_name: 'nodejs'};

// 	client.get('statuses/user_timeline', params, function(error, tweets, response) {
// 	  if (!error) {
// 	    console.log(tweets);
// 	  }
// 	});

// }



// consumer_key: keys.twitterKeys.consumer_key,
// consumer_secret: keys.twitterKeys.consumer_secret,
// access_token_key: keys.twitterKeys.access_token_key,
// access_token_secret: keys.twitterKeys.access_token_secret