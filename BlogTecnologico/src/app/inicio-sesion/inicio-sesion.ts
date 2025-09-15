import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  imports: [Nav,Footer, RouterModule],
  templateUrl: './inicio-sesion.html',
  styleUrl: './inicio-sesion.css'
})
export class InicioSesion {
protected readonly mostrarContra = signal(true);

toggleElemento() {
    this.mostrarContra.update(valor => !valor);
  }
}
