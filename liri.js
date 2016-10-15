// CREATE JSON PACKAGE AND SAVE NODE MODULES: TWITTER, SPOTIFY, REQUEST, OMDB


// VARIABLES
var keys = require('./keys.js');
var request = require('request');
var fs = require('fs');
var spotify = require('spotify');
var omdb = require('omdb');


// grab user commands from node
var command = process.argv[2];
var mediaName = "";

	for (var i = 3; i < process.argv.length; i++) {
		mediaName += "+" + process.argv[i];
	}

var Twitter = require('twitter'); 
var client = new Twitter(keys.twitterKeys); 
// console.log(keys.twitterKeys);
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


function spotifyThis() {
	// console.log("Spotify this song for me");
	if (mediaName == null) {
		mediaName = "The Sign";
	}

	spotify.search({ type: 'track', query: mediaName = "The Sign"}, function(err, data) {	    
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
		
	    console.log(data);
	    // console.log("Artist: " + data.tracks.items[0].artists[0].name);
	    // console.log("Name: " + );
	    // console.log("Link: " + );
	    // console.log("Album: " + );
	});

}

function movieThis() {
	// console.log("Find rotten tomatoes rating");
}

function doThis() {
	// console.log("Do what I say!!");
}
