console.log(`
## Object

- Object.keys
- Object.values
- Object.entries
- Operador spread
- Criando objetos com variáveis

`);

console.log(`Atribuindo um objeto a uma variável: \n`);

const pessoa = { nome: "Aline", idade: 29 };
console.log(pessoa);

console.log(
  `\n\n_ _ Método .keys _ _ retorna uma lista com as propriedades do objeto:\n`
);
console.log(Object.keys(pessoa));

console.log(
  `\n\n_ _ Método .values _ _ retorna uma lista com os valores das propriedades do objeto:\n`
);
console.log(Object.values(pessoa));

console.log(
  `\n\n_ _ Método .entries _ _ retorna uma lista em que cada item também é uma lista:\n`
);
console.log(Object.entries(pessoa));

console.log(
  `\n\n_ _ Operador spread _ _ faz uma cópia das propriedades do objeto

  Utilizando três pontos dentro do objeto seguido do objeto a ser copiado as propriedades:\n`
);

const pessoa2 = { ...pessoa };
console.log(pessoa2);

console.log(
  `\nOs objetos são diferentes, a cópia é apenas das propriedades:  \n`
);

console.log(pessoa !== pessoa2);
console.log(pessoa === pessoa2);

console.log(`\n\n_ _ Criando objetos com variáveis _ _ \n`);

const nome = "Aline";
const pessoa3 = { nome };
console.log(pessoa3);
