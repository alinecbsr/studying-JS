/*
## Funções

Bloco de código que quando chamada ou executada realizará algum procedimento 
É possível criar uma função de três maneiras: */

function test(p1, p2) {}

/* 

test - nome atribuido a função

(p1, p2) - separado por vírgula os parâmetros que a função receberá

{ } - dentro destas chaves estará o bloco de código da função, o seu corpo, 
os procedimentos que serão executados tentro dessa função.

*/

const teste = function(p1, p2) {};

/* Neste caso acima foi a tribuido a const teste, o valor de uma function 
A function recebe seus parâmetros e seu corpo. */

const testes = (p1, p2) => {};

/* Forma mais moderna de se escrever uma função
Segue os princípios da função acima em que é atribuido a uma variável o falor de uma function */

/* Abaixo exemplo de função que retorna na tela os parâmetros atribuídos a ela  */

function nome(parametro) {
  console.log(parametro);
}

nome("aqui temos o parâmetro a ser retornado");

/* Abaixo exemplo de variável que recebe o valor de uma função que retorna na tela os parâmetros atribuídos a ela  */

const nome2 = function(parametro) {
  console.log(parametro);
};

nome2("assim também temos o parâmetro a ser retornado");

/* Abaixo exemplo de variável que recebe o valor de uma função que retorna na tela os parâmetros atribuídos a ela  */

const nome3 = parametro => {
  console.log(parametro);
};

nome3("assim temos também o parâmetro a ser retornado");
