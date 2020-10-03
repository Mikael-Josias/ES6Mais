const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x, y);


function soma(...params){
    return params.reduce((total, next) => (total + next))
}

console.log(soma(1,2,3,4,5,6));
//
//
const usuario = {  
    nome: 'Diego',  
    idade: 23,  
    endereco: {    
        cidade: 'Rio do Sul',    
        uf: 'SC',    
        pais: 'Brasil',  
    }
};

var usuario2 = {...usuario, nome: 'Gabriel'};

var usuario3 = {...usuario, endereco: {cidade: 'Lontras'}};

console.log(usuario2);
console.log(usuario3);