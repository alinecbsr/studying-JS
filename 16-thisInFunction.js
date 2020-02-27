console.log(`
## A palavra reservada 'this'

- O valor do this é constante e ele existe enquanto este contexto de execução existir.
- No browser, o this “padrão” referencia o objeto global window. 
- Toda função declarada no escopo global também vai possuir o objeto window como valor do this
- Retorna um objeto que depende do contexto onde é invocada.


- Ao ser chamada dentro de uma função normal, será retornado um objeto dependente do escopo daquela função. 

- Ao ser chamada dentro de uma arrow function, será retorna um objeto do escopo acima de onde a função está sendo executada.

`);
/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log(`O código abaixo deve ser executado no console no browser:\n`);

let pessoa = {
  nome: "Luís",
  thisComFuncao: function() {
    console.log(this);
    console.log(this !== window);
  },
  thisComArrowFunction: () => {
    console.log(this);
    console.log(this === window);
  }
};

pessoa.thisComFuncao();
pessoa.thisComArrowFunction();
