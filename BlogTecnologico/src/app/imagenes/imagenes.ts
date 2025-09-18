import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Header } from '../shared/components/header/header';
import { Footer } from '../shared/components/footer/footer';

interface Imagen{
  img: String
}

@Component({
  selector: 'app-imagenes',
  imports: [Nav,Header,Footer],
  templateUrl: './imagenes.html',
  styleUrl: './imagenes.css'
})
export class Imagenes {
  protected readonly imagenes = signal<Imagen[]>([]);

  constructor(){
    this.cargarImagenes();
  }

  private cargarImagenes(): void{
    const listaImagenes: Imagen[]=[
      {
        img: 'assets/images/imagen1.png'
      },
      {
        img: 'assets/images/images 3.png'
      },
      {
        img: 'assets/images/images 4.png'
      },
      {
        img: 'assets/images/images 5.png'
      },
      {
        img: 'assets/images/images 6.png'
      }
    ];
    this.imagenes.set(listaImagenes);
  }

}
