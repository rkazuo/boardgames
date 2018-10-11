class GamesView extends View {
    
    constructor(element) {
        super(element);
    }


    template(model) {
        return `
            <ul class="collection">
                ${model._games.map(n => `

                    <li id="${n.id}" class="collection-item avatar">
                        <img src="${n.images}" alt="" class="circle">
                        <span class="title">${n.title}</span>
                        <p>First Line <br>
                        Second Line
                        </p>
                        <a href="#" class="waves-effect waves-light btn" onclick="gamesController.remove('${n.id}')">Remover</a>
                    </li>
                    
                `).join('')}
            </ul>
        `;
    }
}
