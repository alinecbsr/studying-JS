console.log(`
## Funções

- Bloco de código que quando chamada ou executada realizará algum procedimento 
- É possível criar uma função de três maneiras:\n`);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

/*_ _ e.x.e.m.p.l.o.s _ _ */

console.log("\n1ª)  function test(p1, p2) {}\n");

console.log("\n' test ' - nome atribuido a função\n");
console.log(
  "' (p1, p2) ' - separado por vírgula os parâmetros que a função receberá\n"
);
console.log(
  "' { } ' - dentro destas chaves estará o bloco de código da função, o seu corpo,"
);
console.log("os procedimentos que serão executados tentro dessa função.\n");

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log("\n2ª)  const teste = function(p1, p2) {}\n");

console.log(
  "\n- Neste caso acima foi a tribuido a const teste, o valor de uma function. \n"
);
console.log("- A function recebe seus parâmetros e seu corpo.\n");

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log("\n3ª)  const testes = (p1, p2) => {}\n");

console.log("\n- Forma mais moderna de se escrever uma função\n");
console.log(
  "- Segue os princípios da função acima em que é atribuido a uma variável o falor de uma function\n"
);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

/*_ _ e.x.e.m.p.l.o _ _ */

console.log(
  "\n- Abaixo exemplo de função que retorna na tela os parâmetros atribuídos a ela:\n"
);

function nome(parametro) {
  console.log(parametro);
}

nome(" $ aqui temos o parâmetro a ser retornado\n");

/*_ _ e.x.e.m.p.l.o _ _ */

console.log(
  "\n- Abaixo exemplo de variável que recebe o valor de uma função que retorna na tela os parâmetros atribuídos a ela:\n"
);

const nome2 = function(parametro) {
  console.log(parametro);
};

nome2(" $ assim também temos o parâmetro a ser retornado\n");

/*_ _ e.x.e.m.p.l.o _ _ */

console.log(
  "\n- Abaixo exemplo de variável que recebe o valor de uma função que retorna na tela os parâmetros atribuídos a ela:\n"
);

const nome3 = parametro => {
  console.log(parametro);
};

nome3(" $ assim temos também o parâmetro a ser retornado");
