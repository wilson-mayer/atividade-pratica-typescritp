// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

interface Carteira {
  saldo: number;
  entrada: number;
  saida: number;
}

const transacoes: Carteira = {
  saldo: 5,
  entrada: 3,
  saida: 1,
};

function fazerTransacao(transacoes: Carteira) {
  transacoes.saldo = transacoes.saldo + transacoes.entrada - transacoes.saida;

  if (transacoes.saldo < transacoes.saida) {
    console.log("Saldo insuficiente");
  } else {
    console.log(transacoes.saldo);
  }
}

fazerTransacao(transacoes);
