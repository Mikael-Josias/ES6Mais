const usuario = {
    nome: "Diego",
    idade: 23,
    endereco: {
        cidade: "Rio do Sul",
        estado: "sc"
    },
};

console.log(usuario);

//Desestruturação Abaixo

const {nome, idade, endereco: {cidade, estado}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);



function mostraNome({nome, idade, endereco: {cidade, estado}}){
    console.log(nome);
}