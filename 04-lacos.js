console.log(`
## Laços

- while
- do...while
- for
- for...in
- for...of

\n`);

console.log("_ _  while _ _\n");
console.log(
  "\n- Executa as instruções desde que uma condição especificada seja avaliada como verdadeira\n"
);
console.log(
  "\n- No exemplo abaixo, enquanto 'a' for menor que 10, o laço será percorrido\n"
);
console.log(
  "- O valor será impresso, acrescido de de +1 cada vez que for percorrido o laço\n"
);
console.log(
  "- Quando chegar em 10, o 10 não é menor que 10, então ele irá parar no 9\n"
);

/*_ _ e.x.e.m.p.l.o _ _ */

let a = 0;
while (a < 10) {
  console.log(`$  valor de a: ${a}`);
  a = a + 1;
}

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log("\n\n_ _  do...while  _ _\n");

console.log(
  "\n- Executa a instrução 'do' pelo menos uma vez antes de fazer a verificação se a expressão é true ou false:\n\n"
);

/*_ _ e.x.e.m.p.l.o _ _ */

let b = 0;
do {
  console.log(`$  valor de b: ${b}`);
  b = b + 1;
} while (b < 10);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log("\n\n_ _  for  _ _\n");
console.log(
  "\n- Uma instrução é repetida até que uma condição especificada seja falsa'\n"
);
console.log(
  "\n- Dentro dos parênteses de for, será escrito três blocos de códigos, separados por ';'\n"
);
console.log(
  "- o 1º bloco de código é executado antes do laço começar a ser percorrido\n"
);
console.log(
  "- o 2º bloco de código é a condição que será avaliada com true ou false\n"
);
console.log(
  "- o 3º bloco de código será executado cada vez que o laço der uma volta:\n\n"
);

/*_ _ e.x.e.m.p.l.o _ _ */

for (let c = 0; c < 10; c = c + 1) {
  console.log(`$  valor de c: ${c}`);
}

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log("\n\n_ _  for...in  _ _\n");
console.log(
  "\n- Percorre todas as propriedades de um objeto. Dentro do parêntese de 'for' declara-se um variavel  ';'\n"
);
console.log("- Essa variável receberá a iteração do laço':'\n\n");

/*_ _ e.x.e.m.p.l.o _ _ */

const pessoa = { nome: "Aline", idade: 29 };
for (let dado in pessoa) {
  console.log(`$  ${dado}`);
}

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log("\n\n_ _  for...of  _ _\n");
console.log("\n- Percorre todas os ítens de uma lista\n");

/*_ _ e.x.e.m.p.l.o _ _ */

const nomes = ["Alane", "Aline", "Ana Carolina", "Raphaela"];
for (let nome of nomes) {
  console.log(`$  ${nome}`);
}
