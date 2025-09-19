import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-imgm-movi',
  imports: [],
  templateUrl: './imgm-movi.html',
  styleUrl: './imgm-movi.css'
})
export class ImgmMovi {
   protected readonly imagen = signal<'imagen1' | 'imagen2' | 'imagen3' | 'imagen4' | 'imagen5'>('imagen1');
  
  cambiarImagen() {
    if (this.imagen() == 'imagen1') {
      this.imagen.set('imagen2');
    } else if (this.imagen() == 'imagen2') {
      this.imagen.set('imagen3');
    } else if (this.imagen() == 'imagen3'){
      this.imagen.set('imagen4');
    }else if (this.imagen() == 'imagen4'){
      this.imagen.set('imagen5');
    }else{
      this.imagen.set('imagen1');
    }
  }
}
