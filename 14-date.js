console.log(`
## Date

- Usado para trabalhar com datas no JavaScript. 
É possível criar uma data baseada no momento atual ou até fazer novas datas baseadas num tempo de seu interesse.

`);
const agora = new Date();
console.log(agora);
console.log("\ngetFullYear(): retorna o ano atual no formato AAAA:\n");
console.log(agora.getFullYear());
console.log(
  "\ngetMonth(): retorna o mês atual representado de 0 (Janeiro) a 11 (Dezembro):\n"
);
console.log(agora.getMonth());
console.log("\ngetDate(): retorna o dia atual:\n");
console.log(agora.getDate());
console.log("\ngetHours(): retorna a hora atual:\n");
console.log(agora.getHours());
console.log("\ngetMinutes(): retorna os minutos atuais:\n");
console.log(agora.getMinutes());
console.log("\ngetSeconds(): retorna os segundos atuais:\n");
console.log(agora.getSeconds());
console.log("\ngetMiliseconds(): retorna os milissegundos atuais:\n");
console.log(agora.getMilliseconds());
console.log(
  "\ngetTime(): retorna o epoch time (a quantidade de segundos passados desde a meia-noite do dia 1 de janeiro de 1970:\n"
);
console.log(agora.getTime());
console.log(
  "\nsetDate(): seleciona um novo dia para o objeto Date, o dia da semana da data em que esse método foi chamado:\n"
);
console.log(agora.getDay());

/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

console.log("\n");

console.log("\nInteragindo com uma data, adicionando dias a ela:\n");
const amanha = new Date();
amanha.setDate(agora.getDate() + 7);
console.log(amanha);

console.log("\nCriando variável com data de nasciemnto:\n");
const meuAniversario = new Date(1990, 3, 18);
console.log(meuAniversario);
