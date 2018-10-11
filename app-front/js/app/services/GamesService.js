class GamesService {

    get() {
        let http = new HttpService();
        return http.get('/v1/games')
        .then(games => {
            return games.map(game => new Game(game._id, game.title, game.images));
        })
        .catch(error => {
            console.log(error);
            throw new Error("Fail to get games.");
        });
    }

    getById(id) {
        let http = new HttpService();
        return http.get(`/v1/games/${id}`)
        .then(games => {
            return games.map(game => new Game(game._id, game.title, game.images));
        })
        .catch(error => {
            console.log(error);
            throw new Error("Fail to get game.");
        });
    }

    post(game) {
        let http = new HttpService();
        return http.post('/v1/games',game)
        .then(game => {
            return new Game(game._id, game.title, game.images);
        })
        .catch(error => {
            console.log(error);
            throw new Error("Falha no post.");
        })

    }

    delete(id) {
        let http = new HttpService();
        return http.delete(`/v1/games/${id}`)
        .then(res => {
            return res;
        })
        .catch(error => {
            console.log(error);
            throw new Error("Fail to get game.");
        });
    }

}