// console.log('What do I have next?');
PlayerList = new Mongo.Collection('players');
// PlayersList.insert({ name: "Naima", score: 100 });

// import { Template } from 'meteor/templating';

// Conditionals - Server VS CLient
if (Meteor.isClient) {
	// console.log('Hello Client');
	Template.leaderboard.helpers ({
		'player' : function () {
			return PlayerList.find();
		}
	});


	Template.leaderboard.events({
		'click .player': function () {
			console.log(this);
		}
	});
}

if (Meteor.isServer) {
	// console.log('Hello Server');
}

