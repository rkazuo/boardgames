class IndexController {

    constructor() {
        this._gamesList = new Bind(
            new GamesList(),
            new GamesView($('#games-view')),
            'add','remove'
        );       
        this._message = new Bind(
            new Message(),
            new MessageView($('#mensagemView')),
            'text'
        );
        this.loadGames();
    }

    loadGames() {
        let service = new GamesService();
        service.get()
        .then(games => {
            games.forEach(game => this._gamesList.add(game));
            this._message.text = "importado com sucesso!";
        })
        .catch( erro => this._mensagem.text = erro);
    }

    remove(id) {
        let service = new GamesService();
        service.delete(id)
        .then(res => {
            this._gamesList.remove(id);
            this._message.text = res;
        })
        .catch( erro => this._mensagem.text = erro);
    }

    filter() {
        let games = $(".game");
        let value = $("#filter").val();

        if (value.length > 0) {
            for (let i = 0; i < games.length; i++) {
                let game = games[i];
                let title = $(game).find(".card-title").text();
                let regex = new RegExp(value, "i");
                if (!regex.test(title)) {
                    game.classList.add("hide");
                } else {
                    game.classList.remove("hide");
                }
            }
        } else {
            for (let i = 0; i < games.length; i++) {
                let game = games[i];
                game.classList.remove("hide");
            }
        }
    }

}