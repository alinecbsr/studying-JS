console.log(`
## Array: uma lista de valores de qualquer tipo \n`);

console.log(`Declaração: \n
const umArray = [1,2,3,4,5];`);

const umArray = [1, 2, 3, 4, 5];
console.log(``);
console.log(umArray);
console.log(`\nMétodos de Array:

- filter
- forEach
- map
- reduce
`);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log(`\n\n_ _ filter _ _ \n
Filtra um array baseado numa expressão matemática\n
Um array filter não filtra o próprio array, ele devolve um novo array filtrado sem modificar o original: \n`);

/*_ _ e.x.e.m.p.l.o _ _ */

const arrayFilter = umArray.filter(n => n < 3);
console.log(arrayFilter);

console.log(
  `\nFoi criado uma nova variável (arrayFilter), atribuido o array anterior (umArray) com o método filter`
);
console.log(
  `Então se passa um função onde quando essa função retornar verdadeira, irá incluir os ítens no novo array\n`
);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log(`\n\n_ _ forEach _ _ \n
Faz uma iteração sobre todos os elementos do array e te devolve como o parâmetro de uma função\n`);

/*_ _ e.x.e.m.p.l.o _ _ */

umArray.forEach(n => console.log(n));

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log(`\n\n_ _ map _ _ \n
Faz uma iteração sobre todos os elementos do array e te retorna um novo vetor\n`);

/*_ _ e.x.e.m.p.l.o _ _ */

const arrayMap = umArray.map(n => `Número ${n}`);
console.log(arrayMap);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log(`\n\n_ _ reduce _ _ \n
Reduz todos os valores do array para um único valor\n`);

/*_ _ e.x.e.m.p.l.o _ _ */

const arrayReduce = umArray.reduce((acumulador, valorAtual) => {
  console.log({ acumulador, valorAtual });
  return acumulador + valorAtual;
});

console.log(arrayReduce);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log(`\n\n_ _ Operador spread _ _ \n
Pode ser usado para formar novos vetores a partir de outros vetores\n`);

/*_ _ e.x.e.m.p.l.o _ _ */

const par = [2, 4];
const impar = [1, 3];
const resultado = [...par, ...impar];
console.log(resultado);
