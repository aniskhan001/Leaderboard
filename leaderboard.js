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
			Session.set('selectedPlayer', 'the selected player name is ' + this.name );
			selectedPlayer = Session.get('selectedPlayer');
			console.log(selectedPlayer);
			// console.log(this.name)
		}
	});
}

if (Meteor.isServer) {
	// console.log('Hello Server');
}

