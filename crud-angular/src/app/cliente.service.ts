import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(){}

  salvar(cliente: Cliente){
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  static REPO_CLIENTES = "_CLIENTES";

  pesquisarClientes(nomeBusca : string): Cliente[]{
    const cliente : Cliente[] = this.obterStorage()
    if(!nomeBusca){
      return cliente;
    }
    return cliente.filter(cliente => cliente.nome?.indexOf(nomeBusca) !== -1);
  }

  private obterStorage(): Cliente[]{
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);

    if(repositorioClientes){
      const clientes : Cliente[] = JSON.parse(repositorioClientes)
      return clientes;
    }
    const clientes : Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }

  buscarClientePorId(id : string) : Cliente | undefined{
    const clientes = this.obterStorage();
    return clientes.find(clientes => clientes.id === id)
  }

  atualizar(cliente : Cliente){
    const storage = this.obterStorage();
    storage.forEach( c => {
      if(c.id === cliente.id){
        Object.assign(c, cliente);
        localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
      }
    })

  }
  deletar(cliente : Cliente){
    const storage = this.obterStorage();

    const novaLista = storage.filter( c => c.id !== cliente.id);
    

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(novaLista));

  }


}
