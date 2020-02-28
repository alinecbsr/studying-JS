console.log(`
## Parâmetros rest

- São usados para indicar um número indefinido de parâmetros que podem ser utilizados ao chamar um método. 
- São declarados introduzindo um três pontos (…) antes do nome do parâmetro.
`);

const comRest = (a, b, ...extraArgs) => {
  console.log(extraArgs);
};

comRest("a", "b", "c", "d", "e");

console.log(`\nO parâmetro extraArgs será retornado como um array 
Conterá todos os paâmetros da função contidos após o parâmetro rest ' ... ' \n`);
