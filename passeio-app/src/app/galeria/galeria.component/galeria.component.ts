import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-galeria.component',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit {

  lugares : Lugar[] = [];
  lugaresFiltrados : Lugar[] = [];
  categoriasFiltro : Categoria[] = [];

  constructor(
      private lugarService : LugarService,
      private categoriaService : CategoriaService
    ){

  }
  ngOnInit(): void {
      this.categoriaService.obterTodos().subscribe(categorias => this.categoriasFiltro = categorias);

      this.lugarService.obterTodos().subscribe(lugaresResultado => this.lugares = lugaresResultado);
  }

  getTotalEstrelas(lugar : Lugar) : string{
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0) );
  }

}
