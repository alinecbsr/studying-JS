console.log(`
## Criando e utilizando Classes

- Podem ser instanciadas em objetos

- Construtor: método que é executado um vez, assim que um novo objeto daquela classe é instanciado 
Esse método pode receber parâmetros e é bastante útil para atribuir características ao objeto`);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

/*_ _ e.x.e.m.p.l.o _ _ */

class Pessoa {
  constructor(nome, idade) {
    console.log("Criando um objeto do tipo pessoa");
    console.log(nome, idade);
  }
}

console.log(
  `\nPara instancear uma classe, usa-se ' new ' e onome da classe a ser instanciada:\n`
);

const p = new Pessoa("Aline", 29);
