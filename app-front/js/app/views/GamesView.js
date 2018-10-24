class GamesView extends View {
    
    constructor(element) {
        super(element);
    }

    template(model) {
        return `
        <div class="row">
            ${model._games.map(n => `
            
                <div id="${n.id}" class="card col s6 m4 l3">
                    <div class="card-image">
                        <img src="${n.images}">                        
                        <a class="btn-floating halfway-fab waves-effect waves-light red" onclick="gamesController.remove('${n.id}')"><i class="material-icons">delete</i></a>
                    </div>
                    <div class="card-content">
                        <span class="card-title">${n.title}</span>
                        <p>2 a 4 jogadores</p>
                        <p>A partir de 12 anos</p>
                        <p>30 minutos de duração</p>
                    </div>
                </div>
                
            `).join('')}
          </div>
        `;
    }
}
