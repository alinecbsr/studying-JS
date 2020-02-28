console.log(`
## Declarando propriedades e métodos estáticos

O método ' static ' não precisa da instância de uma classe para ser executado
Pode ser chamado diretamente sem a utilização de ' new '\n`);

class Pessoa {
  static teste() {
    console.log(this);
  }
}

Pessoa.teste();

console.log(
  `\nTivemos acima o retorno do contexto, o this no estado da classe\n`
);

console.log(
  `Caso a classe seja instanciada, e o método seja chamado ele não irá funcionar por ser estático
  Sendo assim um método estático não pode ser executado por uma instância de uma clase
  Usa-se assim o nome da classe, ponto e o método estático que quer acessar ( Pessoa.teste() )\n`
);

//Abaixo teremos um erro por que um método estático não pode ser executado por uma instância de uma clase\n`

var p = new Pessoa();
p.teste();
