## _Revisando JavaScript_

**Para facilitar a execução do código no console, utilzar o nodemon no terminal: -**

`$ nodemon`**+ nome do arquivo a ser executado-**

**Exemplo:-**

`$ nodemon 00-tiposDeDados.js`

Todo comentário do código está escrito para ser visualizado no terminal como string
por meio do 'console.log()'

Importante ressaltar que todo '**\n-**' visto no código deve ser ignorado
('**\n-**' é utilizado para quebra de linha dentro de uma string )

Para facilitar a visualização de resultado de bloco de código no terminal,
na maior parte terá a string '**\$-**' para identificação na frente do resultado.

**Exemplo:-**

```sh
const letra = "a";
switch (letra) {
case "a":
console.log(`\n$ ${letra} é uma vogal`);
```

**Retornará no terminal:-**

`$ a é uma vogal`
