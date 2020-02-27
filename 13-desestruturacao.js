console.log(`
## Desestruturação de objetos e arrays

`);

console.log("\n_ _ desestruturação de objetos _ _\n");
console.log(`\nVamos desestruturar o bjeto 'pessoa' e extrair a propriedade 'nome':\n
const pessoa = { nome: "Aline", idade: 29 }\n`);
console.log(
  `\n Utiliza uma variável (const, let ou var), abre e fecha chaves e põe todas as propriedades do objeto que deseja extrair 
  em sequência o igual ' = ' e coloca de qual objeto se quer extrair as propriedades, ao logar a propiedade virá seu conteúdo: \n`
);

/*_ _ e.x.e.m.p.l.o _ _ */

const pessoa = { nome: "Aline", idade: 29 };

const { nome } = pessoa;
console.log(nome);

console.log(
  `\n Atribuindo a uma nova variável a propiedade extraída na desestruturação do objeto \n`
);

/*_ _ e.x.e.m.p.l.o _ _ */

const pessoa2 = { nome: "Aline Rosa", idade: 29 };

const { nome: novoNome } = pessoa2;
console.log(novoNome);

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/
console.log("\n_ _ desestruturação de array _ _\n");
console.log(`\nVamos desestruturar o array 'letras' e extrair as duas primeiras posições para as variáveis 'um, dois':\n
const letras = ['a', 'b', 'c', 'd'];\n`);
console.log(
  `\n Declara-se as variáveis (const, let ou var), entre colchetes, que irão receber o conteúdo extraído do array  
em sequência o igual ' = ' e coloca de qual array se quer extrair as propriedades, ao logar a variável, 
virá seu conteúdo, considerando sua posição respectivamente a do array : \n`
);

/*_ _ e.x.e.m.p.l.o _ _ */

const letras = ["a", "b", "c", "d"];
const [zero, um] = letras;
console.log(zero);
console.log(um);
