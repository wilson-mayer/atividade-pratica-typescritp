// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

interface User {
  nome: string;
  idade: number;
  ocupacao: string;
  salario?: number;
}

interface Diretor {
  nome: string;
  idade: number;
  salario?: number;
  nivelComissionamento: number;
}

type UsuarioOuDiretor = User | Diretor;

function exibirUsuarioOuDiretor(usuarioOuDiretor: UsuarioOuDiretor): void {
  if ("ocupacao" in usuarioOuDiretor) {
    const salarioOpcional = usuarioOuDiretor.salario
      ? `R$ ${usuarioOuDiretor.salario.toFixed(2)}`
      : "N/A";
    console.log(
      `${usuarioOuDiretor.nome}, ${usuarioOuDiretor.idade} anos, ${usuarioOuDiretor.ocupacao}, salário R$ ${salarioOpcional}`
    );
  } else {
    const salarioOpcional = usuarioOuDiretor.salario
      ? `R$ ${usuarioOuDiretor.salario.toFixed(2)}`
      : "N/A";
    console.log(
      `Diretor(a) ${usuarioOuDiretor.nome}, ${usuarioOuDiretor.idade} anos, comissão nível ${usuarioOuDiretor.nivelComissionamento}, salário R$ ${salarioOpcional}`
    );
  }
}

const cadastroUsuario1: UsuarioOuDiretor = {
  nome: "Daphene",
  idade: 23,
  ocupacao: "analista de TI",
  salario: 1000,
};

const cadastroUsuario2: UsuarioOuDiretor = {
  nome: "Daphene",
  idade: 23,
  nivelComissionamento: 5,
  salario: 1000,
};

exibirUsuarioOuDiretor(cadastroUsuario1);
exibirUsuarioOuDiretor(cadastroUsuario2);
