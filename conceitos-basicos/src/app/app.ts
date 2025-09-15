import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component' 
import { Page } from './page/page'
import { Calculadora } from './calculadora/calculadora'
import { ListaCompras } from './lista-compras/lista-compras';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloworldComponent, Calculadora, ListaCompras],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}
