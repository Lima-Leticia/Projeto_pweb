import { Component } from '@angular/core';
import {Produto} from "../../shared/model/produto";
import {ActivatedRoute, Router} from "@angular/router";
import {ProdutoService} from "../../shared/services/produto.service";
import Swal from "sweetalert2";
import {MensagemSweetService} from "../../shared/services/mensagem-sweet.service";

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent {
  produto = new Produto('1', '', 0, '', 0);
  modoEdicao = false;

  constructor(private roteador: Router, private rotaAtual: ActivatedRoute,
              private produtoService: ProdutoService, private mensagemService: MensagemSweetService) {
    const idParaEdicao = rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      this.modoEdicao = true;
      const produtoAEditar = produtoService.listar().find(produto => produto.id == idParaEdicao);
      if (produtoAEditar) {
        this.produto = produtoAEditar;
      }
    }
  }

  inserir() {
    if (!this.modoEdicao) {
      try {
        this.produtoService.inserir(this.produto);
        this.roteador.navigate(['listagem-produto']);
        this.mensagemService.sucesso('Produto cadastrado com sucesso.');
      } catch (e: any){
        this.mensagemService.erro(e.message);
      }
    }
  }
}
