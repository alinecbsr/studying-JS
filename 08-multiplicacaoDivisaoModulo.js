console.log(`
## Multiplicação, divisão e módulo

`);

console.log(2 * 3);
console.log(10 / 5);
console.log(15 % 3);

console.log(
  "\n\nAbaixo função que tem um parâmetro que é um número, e o resultado dela é "
);
console.log(
  "se o resto da divisão por dois é igual a zero. Forma útil de testar se um número é par: \n"
);

const numeroPar = n => n % 2 === 0;
console.log(numeroPar(2));
console.log(numeroPar(3));
console.log(numeroPar(4));
