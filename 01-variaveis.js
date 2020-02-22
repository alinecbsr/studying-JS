/*
## Variáveis  

Quando criadas fora de um bloco de códigos, ou função, possuem escopo global
Podendo ser acessada de qualquer parte do código */

// - var

var a = 1;
console.log(a);

// - let

let b = 2;
console.log(b);

// - Const

const c = 3;
console.log(c);

// Diferençã entre var e let que podem ter seus valores alterados e const que é uma constante

a = 4;
console.log(a);

b = 5;
console.log(b);

c = 6;
console.log(c); // este resulatado retornará um erro informando "Atribuição para variável constante."
