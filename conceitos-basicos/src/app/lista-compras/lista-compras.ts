import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule,CommonModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss'
})
export class ListaCompras {
  item : string = '';
  lista : ItemLista[] = [

  ]

  limparLista(){
    this.lista = [];
  }


  adicionarItem() {
    let itemLista : ItemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;

    this.lista.push(itemLista);


    this.item = '';

  }

  riscarItem(item: ItemLista){
    item.status = !item.status; 
  }

}
