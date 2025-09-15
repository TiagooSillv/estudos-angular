import { Component, inject, Inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSnackBar } from "@angular/material/snack-bar";
import { BrasilapiService } from '../brasilapi.service';
import { Estado, Municipio } from '../brasil.models';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { __asyncValues } from 'tslib';

@Component({
  selector: 'app-cadastro',
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatIcon,
    MatButtonModule,
    NgxMaskDirective,
    MatSelectModule
],
  providers : [
    provideNgxMask()
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro  {
  atualizando : boolean = false;
  private sneack : MatSnackBar = inject(MatSnackBar);

  cliente : Cliente = Cliente.newCliente();
  estados: Estado[] = [];
  municipios : Municipio[] = [];
  
  constructor(
    private service : ClienteService,
    private brasilApi : BrasilapiService,
    private route : ActivatedRoute,
    private router : Router
  ){}

  
  ngOnInit(): void {
    this.route.queryParamMap.subscribe( (query : any) => {
      const params = query['params'];
      const id = params['id'];
      if(id){
        let clienteEcontrado = this.service.buscarClientePorId(id);
        if(clienteEcontrado){
          this.atualizando = true;
          this.cliente = clienteEcontrado;
          if(this.cliente.uf){
            const event = {value : this.cliente.uf}
            this.carregarMunicipios(event as MatSelectChange);
          }
        }
        this.atualizando = true;
        this.cliente = this.service.buscarClientePorId(id) || Cliente.newCliente(); 
      }
    })
    this.carregarUf();
  }
  salvar(){
    if (!this.atualizando){
      this.service.salvar(this.cliente);
      this.cliente = Cliente.newCliente();
      this.mostrarMensagem('Salvo com sucesso')
    }else{
      this.service.atualizar(this.cliente);
      this.mostrarMensagem("Atualizado com sucesso")
      this.router.navigate(['/consulta']);
    }
    
  }
  carregarUf(){
    // Observavel
    this.brasilApi.listarUFs().subscribe({
      next: (listaEstados => this.estados = listaEstados),
      error: erro => console.log("Ocorreu um erro", erro),
    });
    
  }
  carregarMunicipios(event : MatSelectChange){
    const ufSelecionada = event.value;
    this.brasilApi.listarMunicipios(ufSelecionada).subscribe({
      next : listaMunicipios => this.municipios = listaMunicipios,
      error : erro => console.log("Ocorreu um erro", erro)
    })
  }
  
  mostrarMensagem(mensagem : string){
    this.sneack.open(mensagem, 'OK')
  }

}
