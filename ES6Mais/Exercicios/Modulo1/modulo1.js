const usuarios = [  
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },  
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];


const mapUsu = usuarios.map(item => item.idade);

console.log(mapUsu);

const filterUsu = usuarios.filter(item => (item.empresa == 'Rocketseat' && item.idade > 18));

console.log(filterUsu);

const findUsu = usuarios.find(item => item.empresa === "Google");

console.log(findUsu);

const uniOpUsu = (usuarios.map(function(item){
    item.idade *= 2;
    return item;
})).filter(item => item.idade <= 50);

console.log(uniOpUsu);
