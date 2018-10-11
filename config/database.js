module.exports = function(uri) {

	var mongoose = require('mongoose');

	mongoose.connect(uri);

	mongoose.connection.on('connected', function() {
		console.log('Conected to MongoDB')
	});

	mongoose.connection.on('error', function(error) {
		console.log('Connection Error: ' + error);
	});	

	mongoose.connection.on('disconnected', function() {
		console.log('Disconnected from MongoDB')
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Application terminated, connection closed')
			process.exit(0);
		});
		
	})
};


