"use strict";
// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.
const produtos = [];
function cadastroProduto(produto) {
    produtos.push(produto);
    console.log(`Item ${produto.nome} cadastrado com sucesso!`);
}
function listaProduto() {
    produtos.forEach((produto) => {
        console.log(`ID: ${produto.id} Nome: ${produto.nome} Preço: ${produto.preco}`);
    });
}
function deletaProduto(id) {
    const produto = produtos.findIndex((produto) => produto.id === id);
    if (produto !== -1) {
        const produtoDeletado = produtos.slice(produto, 1);
        console.log(`Produto ${produtoDeletado[0].nome} excluido com sucesso!`);
    }
    else {
        console.log("Produto não encontrado.");
    }
}
cadastroProduto({ id: 1, nome: "tenis", preco: 50 });
listaProduto();
deletaProduto(1);
