class App {
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
    
        this.registerHandles();
    }

    registerHandles(){
        this.formEl.onsubmit = event => this.addRepositories(event);
    }

    addRepositories(event){
        event.preventDefault();

        this.repositories.push({
            name: 'Rocketseat.com.br',
            description: 'Tire a sua idéia do papel, e dê vida a sua startup',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rockeseat/rockeseat.com.br',
        });

        console.log(this.repositories);
    }
}

new App();