import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListagemProdutoComponent} from "./listagem-produto/listagem-produto.component";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "../material/material.module";

import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [ListagemProdutoComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SweetAlert2Module,
    HttpClientModule
  ],
  exports: [ListagemProdutoComponent]
})
export class ProdutoModule { }