import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BlogTecnologico');

  protected readonly modoOscuro = signal(false);

   toggleOscuro() {
    this.modoOscuro.update(valor => !valor);
  }
}
