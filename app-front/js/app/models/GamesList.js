class GamesList {
    
    constructor() {
        
        this._games = [];
    }
    
    add(game) {
        
        this._games.push(game);
    }

    remove(id) {
        this._games = this._games.filter(n => n.id!=id);
    }
    
    get games() {
        
        return [].concat(this._games);
    }
}