import {Injectable} from '@angular/core';
import {Produto} from "../model/produto";
import {PRODUTOS} from "../model/PRODUTOS";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    produtos = PRODUTOS;

    constructor() {
    }

    inserir(produto: Produto) {
        this.produtos.push(produto);
    }

    listar() {
        return this.produtos;
    }

    remover(produtoARemover: Produto) {
        this.produtos = this.produtos.filter(produto => produto.id !== produtoARemover.id);
    }



}