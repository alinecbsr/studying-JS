console.log(`
## Condicionais

- if / else 
- operador ternário 
- switch  

\n`);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log("\n_ _  if / else _ _\n");
console.log("- O if e else, é usado para condições simples.\n");
console.log(
  "- Dentro dos parêsetes do 'if' deverá conter uma expressão que sera avaliada como verdadeira ou falsa \n"
);
console.log(
  "- Se verdadeira o primeiro bloco logo após o 'if' será executado: \n"
);

/*_ _ e.x.e.m.p.l.o _ _ */

const simOuNao = true;
if (simOuNao) {
  console.log("$ sim \n");
} else {
  console.log("$ não");
}

console.log("- Se falsa o segundo bloco logo após o 'else' será executado: \n");

const naoOuSim = false;
if (naoOuSim) {
  console.log("$ sim");
} else {
  console.log("$ não \n");
}

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log("\n\n_ _ operador ternário _ _\n");
console.log(
  "- O operador ternário é muito parecido com o if e else, mas permite escrever condições de forma mais simples e direta.\n"
);

console.log(
  "- Temos o valor a ser avaliado se verdadeiro, sendo retornará valor contido após '?' e antes dos ':' e se falso o posterior: \n"
);

/*_ _ e.x.e.m.p.l.o _ _ */

console.log(simOuNao ? "$ sim \n" : "$ não \n");

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log("\n\n_ _ switch _ _\n");
console.log(
  "- O switch é usado para condições complicadas, onde há a presença de várias casos independentes\n"
);
console.log(
  "- Será avaliado se algum caso contén o mesmo valor da expressão\n"
);
console.log(
  "- Caso o valor contido em 'letra' seja um dos condicionados em 'case' executará o bloco de código e 'break' \n"
);
console.log(
  "- Caso não tenha um desses valores, seguirá para a segunda sequência de 'case' e executará o bloco de código e 'break' \n"
);
console.log(
  "- Se não se aplicar a nenhum executará o 'default (trocar o valor de 'letra' para verificar o resultado):' \n"
);

/*_ _ e.x.e.m.p.l.o _ _ */

const letra = "a";
switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(`\n$ ${letra} é uma vogal`);
    break;
  case "b":
  case "c":
  case "d":
  case "f":
  case "g":
  case "h":
  case "j":
  case "k":
  case "l":
  case "m":
  case "n":
  case "p":
  case "q":
  case "r":
  case "s":
  case "t":
  case "v":
  case "w":
  case "x":
  case "y":
  case "z":
    console.log(`\n$ ${letra} é uma consoante`);
    break;
  default:
    console.log(`\n$ ${letra} não é nem vogal  nem consoante`);
    break;
}
