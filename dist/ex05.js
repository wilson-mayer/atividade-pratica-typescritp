"use strict";
// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”
function exibirUsuários(usuario) {
    const salarioOpcional = usuario.salario
        ? `R$ ${usuario.salario.toFixed(2)}`
        : "N/A";
    console.log(`${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, ${salarioOpcional}`);
}
const usuario1 = {
    nome: "Daphene",
    idade: 23,
    ocupacao: "analista de TI",
    salario: 1000,
};
const usuario2 = {
    nome: "Daphene",
    idade: 23,
    ocupacao: "analista de TI",
};
exibirUsuários(usuario1);
exibirUsuários(usuario2);
