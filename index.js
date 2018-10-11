var http = require('http');
var app = require('./config/express');
require('./config/database')(process.env.MONGODB_URI || 'mongodb://localhost/boardgames');

var port = process.env.PORT || 3000;
http.createServer(app)
.listen(port, function() {
	console.log('Server started...');
});
