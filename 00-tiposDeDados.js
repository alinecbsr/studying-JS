console.log(`
## Tipos de Dados


### Primitivos

- boolean:  \n`);

console.log(typeof true);
console.log(typeof false);

console.log(`\n - number: \n`);

console.log(typeof 29);
console.log(typeof 1.5);
console.log(typeof 0xffff);

console.log(`\n - string \n`);

console.log(typeof "aspas simples");
console.log(typeof "aspas duplas");
console.log(typeof `backticks`);

console.log(
  `\n - null (tem valor atribuído, mas esse valor é vazio, é nada) \n`
);

console.log(typeof null);

console.log(`\n - undefined  (não há nenhuma atribuição de valor) \n`);

console.log(typeof undefined);

console.log(`\n - symbol  \n`);

console.log(typeof Symbol("symbol"));

console.log(`\n ### Outros
 
- object  \n`);

console.log(
  typeof {
    nome: "Luis"
  }
);
