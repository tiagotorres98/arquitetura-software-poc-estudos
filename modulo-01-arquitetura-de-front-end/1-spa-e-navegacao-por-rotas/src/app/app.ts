import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './view/template/header/header';

@Component({
  imports: [RouterOutlet, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('1-spa-e-navegacao-por-rotas');
}
