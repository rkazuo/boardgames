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

}