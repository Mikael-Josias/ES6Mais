class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Diego';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var minhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function(){
    minhaLista.add('NovoTodo');
}


//////////////////////////////////////////////////

class Matematica{
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));