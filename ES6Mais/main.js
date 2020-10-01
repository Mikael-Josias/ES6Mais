const a = 1;
// Não pode ter o valor reatribuido;


const usuario = {
    nome: "diego",
}
// Mas pode mutar a constante

usuario.nome = "Mikael"


// Let é usado como váriavel de escopo;
function teste(x){
    let y =2;

    if(x > 5){
        let = 4;
        console.log(x, y);
        
    }
}

console.log(teste(19));