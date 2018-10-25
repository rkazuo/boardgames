class GameController {

    constructor() {      
        this._message = new Bind(
            new Message(),
            new MessageView($('#message')),
            'text'
        );
        this.loadGame();
    }

    loadGame() {
        let service = new GamesService();
        let gameId = new URL(window.location.href).searchParams.get("id");

        service.getById(gameId)
        .then(game => {
            $("#title").text(game.title);
            $("#img-url").attr("src",game.images);            
        })
        .catch( erro => this._mensagem.text = erro);
    }

    remove() {
        let service = new GamesService();
        let gameId = new URL(window.location.href).searchParams.get("id");
        service.delete(gameId)
        .then(() => {
            this._message.text = "Excluído com sucesso";
            window.location = "/";
        })
        .catch( erro => this._mensagem.text = erro);
    }

}