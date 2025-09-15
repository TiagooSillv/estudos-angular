import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss'
})
export class Consulta {
  nomeBusca : string = '';
  deletado : boolean = false;

  snack : MatSnackBar = inject(MatSnackBar);
  

  colunasTable : string[] = ['nome', 'cpf', 'dataNascimento', 'email', 'uf', 'municipio', 'acoes' ]

  constructor(
    private service : ClienteService,
    private route : Router

  
  ){}


  listaClientes : Cliente[] = [];

  ngOnInit(){
    this.listaClientes = this.service.pesquisarClientes('');
  }

  pesquisar(){
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca);
  }

  preparaEditar(id : string){
    this.route.navigate(['/cadastro'], {queryParams: {"id": id}});
  }
  preparaDeletar(cliente : Cliente){
    cliente.deletando = true;
    
  }
  deletar(cliente : Cliente){
    this.service.deletar(cliente);
    this.listaClientes = this.service.pesquisarClientes('');
    this.snack.open('Item deletado com sucesso!', 'OK')
    this.deletado = true;
    
    
  }



}
