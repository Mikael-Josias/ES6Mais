"use strict";

var usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    estado: "sc"
  }
};
console.log(usuario); //Desestruturação Abaixo

var nome = usuario.nome,
    idade = usuario.idade,
    _usuario$endereco = usuario.endereco,
    cidade = _usuario$endereco.cidade,
    estado = _usuario$endereco.estado;
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      _ref$endereco = _ref.endereco,
      cidade = _ref$endereco.cidade,
      estado = _ref$endereco.estado;
  console.log(nome);
}
