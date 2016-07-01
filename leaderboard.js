// console.log('What do I have next?');
PlayerList = new Mongo.Collection('players');
// PlayersList.insert({ name: "Naima", score: 100 });

// import { Template } from 'meteor/templating';

// Conditionals - Server VS CLient
if (Meteor.isClient) {
	// console.log('Hello Client');
	Template.leaderboard.helpers ({
		'player' : function () {
			return PlayerList.find( {}, { sort: { score: -1 } } );
		},

		'selectedClass' : function () {
			selectedPlayer = Session.get('selectedPlayer')
			if (this._id == selectedPlayer) {
				return "selected";
			}
		},

		'selectedPlayer' : function () {
			selectedPlayer = Session.get('selectedPlayer');
			return PlayerList.findOne({ _id : selectedPlayer });
		}
	});


	Template.leaderboard.events({
		'click .player': function () {
			Session.set('selectedPlayer', this._id );
		},

		'click .increment' : function () {
			selectedPlayer = Session.get('selectedPlayer');
			PlayerList.update( { _id : selectedPlayer }, { $inc : { score : 5 } } );
		},

		'click .decrement' : function () {
			selectedPlayer = Session.get('selectedPlayer');
			PlayerList.update( { _id : selectedPlayer }, { $inc : { score : -5 } } );
		}
	});
}

if (Meteor.isServer) {
	// console.log('Hello Server');
}

