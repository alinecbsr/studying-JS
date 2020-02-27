console.log(`
## Expressões regulares

Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string. 

Existem duas formas de criar uma expressão regular no JavaScript;

Declara-se a varíável, em sequência o igual ' = ' e coloca barra ' / ' o conteúdo da sua expressão regular neste caso '[A-Z]', 
barra ' / ', e algum modificador da sua expressão regular neste caso 'ig':

const letras = /[A-Z]/ig

`);

const letters = /[A-Z]/gi;

console.log(`Outra forma é utilizando a classe RegExp, neste caso entre os parênteses se passa duas strings,
uma sendo a expressão regular neste caso '[A-Z]', e a outra os modificadores, neste caso 'ig':

const regex2 = new RegExp('[A-Z]', 'ig')
\n`);

const newLetters = new RegExp("[A-Z]", "ig");

console.log(`\nAmbas retornam o mesmo resultado:\n`);

console.log(letters.exec("code"));
console.log(newLetters.exec("code"));

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log(`Os quatro principais métodos para trabalhar com expressões regulares no JavaScript são:

- exec
- test
- match
- replace `);

/*_ _ e.x.e.m.p.l.o _ _ */

console.log(`\n\n_ _ exec _ _

- retorna o primeiro resultado que satisfaz a sua expressão regular:
\n`);

console.log(letters.exec("code"));

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log(`\n\n_ _ test _ _

- retorna um resultado verdadeiro ou falso que diz se existe uma string que satisfaz aquela expressão:
\n`);

console.log(letters.test("code"));

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log(`\n\n_ _ match _ _

- retorna todas as strings que satisfazem a expressão regular:
\n`);

console.log("code13".match(letters));

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log(`\n\n_ _ replace _ _

- substitui os valores que satisfazem a expressão regular com um novo valor:
\n`);
console.log("code13".replace(letters, "-"));

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log(`\nMuito útil por exemplo para validação de entrada de usuário,
pode usar uma expessão regular para ver se o email é válido, ou o tipo de caracter desejado\n`);
