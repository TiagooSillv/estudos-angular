import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private http: HttpClient ){}  


  salvar(categoria: CategoriaService): Observable<Categoria>{
    return this.http.post<Categoria>('http://localhost:3000/categorias', categoria);
  }
  obterTodos(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:3000/categorias');
  }
}
