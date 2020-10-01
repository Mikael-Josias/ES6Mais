const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);

console.log(newArr);

// São a mesma coisa;
function teste(){

}

const teste = () => {

}
// mas o const não é recomendado;

const teste2 = () => ({ nome: 'Diego' });