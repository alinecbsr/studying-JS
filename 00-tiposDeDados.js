/* 
## Tipos de Dados


### Primitivos */

// - boolean

console.log(typeof true);
console.log(typeof false);

// - number

console.log(typeof 29);
console.log(typeof 1.5);
console.log(typeof 0xffff);

// - string

console.log(typeof "aspas simples");
console.log(typeof "aspas duplas");
console.log(typeof `backticks`);

// - null (tem valor atribuído, mas esse valor é vazio, é nada)

console.log(typeof null);

// - undefined  (não há nenhuma atribuição de valor)

console.log(typeof undefined);

// - symbol

console.log(typeof Symbol("symbol"));

// ### Outros

// - object

console.log(
  typeof {
    nome: "Luis"
  }
);
