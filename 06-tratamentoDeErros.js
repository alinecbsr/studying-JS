console.log(`\n
##Tratamento de erros 

  Se um erro é lançado sem ser tratado, a engine para a execução do seu código e o programa fica travado. 
  Para que isso não ocorra, é necessário tratar o erro. Para isso, são utilizados três operadores:

_ _ try _ _ um bloco onde o código é executado até que ocorra um erro. 
Caso haja um erro, a execução do bloco try e o erro é redirecionado ao bloco catch.

_ _ catch _ _  um bloco que é executado ao receber um erro do bloco try. 
Caso não ocorra erro, o catch não é executado.

_ _ finally _ _ um bloco final que sempre é executado, independente de um erro ter sido lançado ou não.\n`);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

/*_ _ e.x.e.m.p.l.o _ _ */

const gerarErro = () => {
  throw new Error("Ops, algo deu errado");
};

const erroComTratamento = () => {
  try {
    gerarErro();
  } catch (error) {
    console.log(`$  Um erro aconteceu: ${error.message} `);
  } finally {
    console.log(`$  'finally' é executado sempre (com ou sem erro)`);
  }
};

erroComTratamento();
console.log("$  depois do erro com tratamento");

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

/*_ _ e.x.e.m.p.l.o _ _ */

console.log(
  "\n\nSem o tratamento de erro a mensagem de erro será executada apenas no console"
);
console.log(
  "Para mostrar o erro ao usuário de forma amigável é necessário tratá-lo"
);
console.log(
  "Descomente a chamada da função sem tratamento de erro para verificar o console:"
);

const erroSemTratamento = () => {
  gerarErro();
};

//erroSemTratamento();

console.log(
  "\nO que estver abaixo de um erro não será executado, por isso é necessário tratá-los"
);
