var mongoose = require('mongoose');

var schema = mongoose.Schema({

	title: {
		type: String,
		required: true
	},
	authors: [String],
	ilustrators: [String],
	publishers: [String],
	mechanics: [String],
	description: String,
	components: String,
	cards_size: [{width: Number, height: Number, quantity: Number}],
	year: Number,
	players_min: Number,
	players_max: Number,
	time_min: Number,
	time_max: Number,
	width: Number,
	height: Number,
	length: Number,
	weight: Number,
	images: [String],
});

mongoose.model('Game', schema);


