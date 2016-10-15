// CREATE JSON PACKAGE AND SAVE NODE MODULES: TWITTER, SPOTIFY, REQUEST, OMDB


// VARIABLES
var keys = require('./keys.js');
// console.log(keys.twitterKeys);

// // Includes the request package for grabbing data from OMDB 
var request = require('request');

// Includes the FS package for reading and writing packages 
var fs = require('fs');

// grab user commands from node
var command = process.argv[2];

var Twitter = require('twitter'); 
var client = new Twitter(keys.twitterKeys); 
var params = {screen_name: 'JessicaSung_'};


// switch function for liri commands
switch (command) {
	case "my-tweets":		
		grabTweets();
		break;
	case "spotify-this-song":
		spotifyThis();		
		break;
	case "movie-this":
		movieThis();
		break;
	case "do-what-it-says":
		doThis();
		break;
	default:
		console.log("Jessica, you forgot to add a liri command...again!");
}



function spotifyThis() {
	// console.log("Spotify this song for me");
}

function movieThis() {
	// console.log("Find rotten tomatoes rating");
}

function doThis() {
	// console.log("Do what I say!!");
}

function grabTweets() {
	// console.log("Go grab my tweets");
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    // console.log(tweets);
	    var tweetAmount = 0;

	    if(tweets.length < 20){
	    	tweetAmount = tweets.length;
	    } 
	    else {
	    	tweetAmount = 20;
	    }
	    for (var i = 0; i < tweetAmount ; i++) {
	    	console.log(tweets[i].text);
	    }	    
	  }
	});
}