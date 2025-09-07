import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Header } from '../shared/components/header/header';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-comentarios',
  imports: [Nav,Header,Footer],
  templateUrl: './comentarios.html',
  styleUrl: './comentarios.css'
})
export class Comentarios {
  protected readonly boton = signal("Enviar");
}
