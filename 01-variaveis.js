console.log(" ## Variáveis \n");

console.log(
  "- Quando criadas fora de um bloco de códigos, ou função, possuem escopo global\n"
);
console.log("- Podendo ser acessada de qualquer parte do código\n");

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log("_ _ var _ _ \n");

/*_ _ e.x.e.m.p.l.o _ _ */

var a = 1;
console.log("$", a);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log("_ _ let _ _ \n");

/*_ _ e.x.e.m.p.l.o _ _ */

let b = 2;
console.log("$", b);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log("_ _ const _ _ \n");

/*_ _ e.x.e.m.p.l.o _ _ */

const c = 3;
console.log("$", c);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log(
  " \n - Diferençã entre var e let que podem ter seus valores alterados e const que é uma constante\n"
);

/*_ _ e.x.e.m.p.l.o _ _ */

a = 4;
console.log("\n$", a);

b = 5;
console.log("\n$", b);

console.log(
  "\n - o resulatado abaixo retornará um erro informando 'Atribuição para variável constante'\n"
);

//c = 6;
//console.log(c);
