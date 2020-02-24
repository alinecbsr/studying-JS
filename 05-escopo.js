console.log(`\nO escopo é o contexto onde certas variáveis e expressões estão
acessíveis dentro de uma área do código. Há três tipos de escopo
no JavaScript:

- Escopo global: acessível em todas as partes do código no arquivo JS.

- Escopo de função: é acessível apenas dentro da função onde aquela variável foi declarada.

- Escopo de bloco: é acessível apenas dentro do bloco onde aquela variável foi declarada.

\n`);

console.log(
  " \n - Será exibido o valor atribuído a variável com escopo global e a variável com escopo de função \n"
);

/*_ _ e.x.e.m.p.l.o _ _ */

const variavelGlobal = 1;

const teste = () => {
  console.log(variavelGlobal);
  const variavelDeFuncao = 2;
  console.log(variavelDeFuncao);
};

teste();

console.log(
  " \n - Se a variável com escopo de função for chamada fora de seu escopo retornará um erro "
);

console.log(
  "informando 'variavelDeFuncao não está definido' (descomentar código e executar)\n"
);

//console.log(variavelDeFuncao);

console.log(" \n - O mesmo de aplica para escopo de bloco: ");

{
  console.log(variavelGlobal);
  const variavelDeBloco = 3;
  console.log(variavelDeBloco);
}

console.log(
  " \n - Se a variável com escopo de bloco for chamada fora de seu escopo retornará um erro "
);

console.log(
  "informando 'variavelDeBloco não está definido' (descomentar código e executar)\n"
);

//console.log(variavelDeBloco);
