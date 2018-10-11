var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('Game');

	api.list = function(req, res) {

		model.find()
		.then(function(jogos) {
			res.json(jogos);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

	};

	api.searchById = function(req, res) {

		model.findById(req.params.id)
		.then(function(jogo) {
			if (!jogo) throw new Error('Foto não encontrada');
			res.json(jogo);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.removeById = function(req, res) {

		model.remove({'_id' : req.params.id})
		.then(function() {
			res.sendStatus(200);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

	};

	api.add = function(req, res) {
		model.create(req.body)
		.then(function(jogo) {
			console.log(jogo);
			res.json(jogo);
		}, function(error) {
			console.log('não conseguiu');
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.update = function(req, res) {

		model.findByIdAndUpdate(req.params.id, req.body)
		.then(function(jogo) {
			res.json(jogo);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		})
	};

	return api;
};

