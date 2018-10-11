class GamesController {

    constructor() {
        this._gamesList = new Bind(
            new GamesList(),
            new GamesView($('#jogos-view')),
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

    add() {
        let service = new GamesService();
        var game = {
            title:$("#txt-titulo").val(),
            images:$("#txt-imagem").val()
        }
        service.post(game)
        .then(res => {
            this._message.text = "salvo com sucesso";
            this._gamesList.add(res);
        })
        .catch( erro => this._mensagem.texto = erro);
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

}