//REST
const usuario = {
    nome: "Diego",
    idade: 23,
    empresa: "RocketSeat",
}

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);


const arr = [1, 2, 3, 4, 5];

const {a, b, ...c} = arr;

console.log(a);
console.log(b);
console.log(c);

function soma (...params){
    return params.reduce((total, next) => (total + next));
}


//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome: "Mikael",
    idade: 18,
    empresa: "RocketSeat",
};

const usuario2 = {...usuario1, nome: "Diego", idade: 23};
