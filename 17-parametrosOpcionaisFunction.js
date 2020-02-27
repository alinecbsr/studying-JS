console.log(`
## Parâmetros opcionais

Parâmetros opcionais são parâmetros de funções ou objetos que já têm valores padrões pré-definidos
e que não precisam ser especificados ao invocar aquela função ou objeto.
`);

const multiplique = (n1 = 5, n2 = 3) => n1 * n2;

console.log(`\nSe chamar sem parâmetro nenhum, ficará 1 * 1: \n`);
console.log(multiplique());

console.log(
  `\nSe chamar com um parâmetro apenas, ele será equivalente ao primeiro parâmetro \n`
);

console.log(multiplique(3));

console.log(
  `\nSe chamar com dois parâmetros, ele executará o que foi definido posteriormente \n`
);

console.log(multiplique(3, 2));
