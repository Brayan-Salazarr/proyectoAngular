import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [Nav,Footer, RouterModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  protected readonly mostrarContra = signal(true);
  protected readonly mostrarContra2 = signal(true);

 toggleElemento() {
    this.mostrarContra.update(valor => !valor);
  }

  toggleElemento2() {
    this.mostrarContra2.update(valor => !valor);
  }
}
