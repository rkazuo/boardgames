class Game {
    
    constructor(id, title, images) {
        
		this._id = id;
		this._title = title;
		this._images = images;
		this._minPlayers = "";
		this._maxPlayers = "";
		this._minTime = "";
		this._maxTime = "";
		this._height = "";
		this._width = "";
		this._lenght = "";
		this._weight = "";

	}

    get id() {
        return this._id;
    }
    
    get title() {    
		return this._title;
	}
	set title(title) {
		this._title = title;
	}

	get images() {    
		return this._images;
	}
	set images(images) {
		this._images = images;
	}

	get json() {
        let game = {
            //todo
        };
        return game;
	}
	
}
