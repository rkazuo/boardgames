module.exports = function(uri) {

	var mongoose = require('mongoose');

	mongoose.connection.on('connecting', () => {
		console.log('Connecting to MongoDB...');
	});

	mongoose.connection.on('connected', () => {
		console.log('Conected to MongoDB');
	});

	mongoose.connection.on('error', error => {
		console.log('Connection Error: ' + error);
	});	

	mongoose.connection.on('disconnected', () => {
		console.log('Disconnected from MongoDB. Trying to reconnect...');
		setTimeout(() => mongoose.connect(uri, {server:{auto_reconnect:true}}), 3000);
	});

	process.on('SIGINT', () => {
		mongoose.connection.close(function() {
			console.log('Application terminated, connection closed')
			process.exit(0);
		});
	})

	mongoose.connect(uri, {server:{auto_reconnect:true}});
};


