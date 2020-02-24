console.log(`
## Comparação de valores

- igualdade
- diferença
- maior / menor
`);

console.log("_ _ igualdade _ _ \n");
console.log(
  "Utilizando 'dois iguais' == o JS irá ignorar a tipagem ao comparar:\n"
);
console.log(3 == "3");

console.log(
  "\n Utilizando 'três iguais' === o JS irá verificar a tipagem e diferenciar:\n"
);
console.log(3 === "3");

console.log("\n O JS é case sensitive, idependente de tipagem:\n");

console.log("a" == "A");
console.log("a" === "A");

console.log("\n_ _ diferença _ _\n");
console.log(3 != "3");
console.log(3 !== "3");
console.log("a" !== "A");

console.log("\n_ _ maior _ _\n");
console.log(3 > 1);
console.log(3 > 4);
console.log(3 > 3);
console.log(3 >= 3);

console.log("\n_ _ menor _ _\n");
console.log(3 < 1);
console.log(3 < 4);
console.log(3 < 3);
console.log(3 <= 3);

console.log(
  "\n Exemplo de como utilizar comparação de valores em condicionais:\n"
);

const numeroMaximoDeAlunos = 5;
const numeroDeAlunos = 6;
if (numeroDeAlunos > numeroMaximoDeAlunos) {
  console.log("Número máximo de alunos extrapolado");
} else {
  console.log("Número de alunos está OK");
}
