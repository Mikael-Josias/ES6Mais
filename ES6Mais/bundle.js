"use strict";

var arr = [1, 2, 3, 4, 5, 6]; // Percorre todo o vetor item por item;

var newArr = arr.map(function (item, index) {
  return item * 2 + index;
});
console.log(newArr); // Soma todos os item do array

var redArr = arr.reduce(function (total, next) {
  return total + next;
});
console.log(redArr); // Filtra, e obrigatoriamente deve retornar true ou false;

var filterArr = arr.filter(function (item) {
  return item % 2 == 0;
});
console.log(filterArr); // Procura um item dentro do array;

var findArr = arr.find(function (item) {
  return item === 4;
});
console.log(findArr);
