var data = require("../data_friends.json");

exports.addFriend = function(request, response) {   
	// Your code goes here
	data.profiles.push({
		"myUsername": request.query.name, 
		"myPwd": "****",
		"myTextArea": 1,
		"myEmail": request.query.description,
		"myBio": "Hello world! I'm new here!",
		"myFriends": [],
		"newProfile": true,
		"viewAlt": true, // A/B testing only
		'currentUser': false
	});
	console.log(data.friends);
	response.render("profile", data.profiles[0]);
}