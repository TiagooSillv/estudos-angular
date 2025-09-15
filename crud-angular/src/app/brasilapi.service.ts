import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado, Municipio } from './brasil.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrasilapiService {
  baseUrl :  string = 'https://brasilapi.com.br/api';
  constructor(private http : HttpClient){}

  listarUFs(): Observable<Estado[]>{
    const path = '/ibge/uf/v1'; 
    return this.http.get<Estado[]>(this.baseUrl + path);

  }
  listarMunicipios(uf : string): Observable<Municipio[]>{
    const path = '/ibge/municipios/v1/' + uf;
    return this.http.get<Municipio[]>(this.baseUrl + path);
  }

}
