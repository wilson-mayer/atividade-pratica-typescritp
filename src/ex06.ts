// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

interface Diretor {
  nome: string;
  idade: number;
  salario?: number;
  nivelComissionamento: number;
}

function exibirDiretor(diretor: Diretor): void {
  const salarioOpcional = diretor.salario
    ? `R$ ${diretor.salario.toFixed(2)}`
    : "N/A";
  console.log(
    `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário R$ ${salarioOpcional}`
  );
}

const diretor1: Diretor = {
  nome: "Daphene",
  idade: 23,
  nivelComissionamento: 5,
  salario: 1000,
};

const diretor2: Diretor = {
  nome: "Daphene",
  idade: 23,
  nivelComissionamento: 5,
};

exibirDiretor(diretor1);

exibirDiretor(diretor2);
