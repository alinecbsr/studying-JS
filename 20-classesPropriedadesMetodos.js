console.log(`
## Declarando propriedades e métodos

- Propriedades: funcionam como variáveis que ficam atreladas a um objeto que faz parte daquela classe
Elas podem ser declaradas, dentro do construtor, fazendo: this.variavel = 10;

- Métodos: são como funções normais que ficam dentro do bloco da classe, mas não levam a palavra reservada function. 
Eles podem ser usados para manipular os parâmetros do objeto, além de executar instruções relevantes para aquela classe.\n`);

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  teste() {
    console.log(this);
  }
}

const p = new Pessoa("Aline", 29);
console.log(p);

console.log(
  `\nSe logar o método 'teste', neste caso, ele retornará o conteúdo de 'this' no contexto dessa classe:\n`
);

p.teste();

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

/*_ _ e.x.e.m.p.l.o _ _ */
console.log(`\nClasse chamada Retangulo que recebe dois
parâmetros no construtor (altura, largura).
Com um método chamado imprimeArea que, ao ser chamado,
vai imprimir na tela a área do retângulo\n`);

class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
  imprimeArea() {
    console.log(`\nÁrea do retângulo: `, this.altura * this.largura);
  }
}

const Retangular = new Retangulo(3, 4);
console.log(Retangular);
Retangular.imprimeArea();
