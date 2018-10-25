class NewGameController {

    constructor() {      
        this._message = new Bind(
            new Message(),
            new MessageView($('#message')),
            'text'
        );
    }

    add(event) {
        event.preventDefault();
        let service = new GamesService();
        var game = {
            title:$("#title").val(),
            images:$("#image_url").val()
        }
        service.post(game)
        .then(res => {
            this._message.text = "salvo com sucesso";
            window.location = "/";
        })
        .catch( erro => this._message.text = erro);
    }

}