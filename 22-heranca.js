console.log(`
## Herança

- Conceito de orientação a objetos que permite a uma classe herdar as propriedades e métodos de outra classe
- A palavra-chave extends indica que uma classe é estendida, ou seja, herda, os métodos e propriedades de outra classe. 
- Para acessar o construtor ou características da classe mãe, pode ser usada a palavra reservada super.`);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

/*_ _ e.x.e.m.p.l.o _ _ */

class Pessoa {
  constructor(tipo) {
    this.tipo = tipo;
  }
  getTipo() {
    return this.tipo;
  }
}

console.log(`\n- O método ' super 'permite acessar o contrutor da classe pai 
- ' super ' chama o construtor da classe que está sendo herdada (após o extends)\n`);

class Usuario extends Pessoa {
  constructor() {
    super("usuário");
  }
}

class Administrador extends Pessoa {
  constructor() {
    super("admin");
  }
}

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

/*_ _ e.x.e.m.p.l.o _ _ */

console.log(`Vamos criar abaixo um novo usuário, sem configurar nenhum tipo nessa criação
Mas quando chamar o método ' getTipo ' irá retornar o usuário, pois essa classe recebeu o parâmetro do tipo:\n`);

var u = new Usuario();
console.log(u.getTipo());

console.log(`\nO mesmo para administrador:\n`);

var a = new Administrador();
console.log(a.getTipo());

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

/*_ _ e.x.e.m.p.l.o _ _ */

console.log(`\nClasse chamada Quadrado que herda de Retangulo. 
A classe quadrado deve receber um só parâmetro no construtor (tamanho) e deve imprimir a área corretamente:\n`);

class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  imprimeArea() {
    console.log(this.altura * this.largura);
  }
}

class Quadrado extends Retangulo {
  constructor(tamanho) {
    super(tamanho, tamanho);
  }
}
new Quadrado(4).imprimeArea();
