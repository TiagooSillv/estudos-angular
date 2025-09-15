import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Consulta } from './consulta/consulta';
import { Cadastro } from './cadastro/cadastro';
import { Toolbar } from './toolbar/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Cadastro, Consulta, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crud-angular');
}
