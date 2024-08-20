import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {PRODUTOS} from "../../shared/model/PRODUTOS";
import {Produto} from "../../shared/model/produto";
import {ProdutoService} from "../../shared/services/produto.service";
// import {ProdutoRestService} from "../../shared/services/produto-rest.service";

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.scss']
})
export class ListagemProdutoComponent {

  produtos: Produto[] = [];

  constructor(private roteador: Router, private produtosService: ProdutoService) {
    produtosService.listar().subscribe({
      next: produtosRetornados => this.produtos = produtosRetornados
    });
  }

  remover(produtoARemover: Produto) {
    // Lógica para remover um produto
    // this.produtosService.remover(produtoARemover);
    // this.produtos = this.produtos.filter(produto => produto.id !== produtoARemover.id);
    // this.roteador.navigate(['listagem-produtos']);
  }

  editar(produtoAEditar: Produto) {
    this.roteador.navigate(['edicao-produto', produtoAEditar.id]);
  }
}
