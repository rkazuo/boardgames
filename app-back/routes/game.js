module.exports = function(app) {
	
	var api = app.api.game;

	app.route('/v1/games')
		.get(api.list)
		.post(api.add);

	app.route('/v1/games/:id')
		.get(api.searchById)
		.delete(api.removeById)
		.put(api.update);
};