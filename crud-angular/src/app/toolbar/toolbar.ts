import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import {RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatIcon, RouterLink,RouterOutlet],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {

}
