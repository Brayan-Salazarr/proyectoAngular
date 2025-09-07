import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Perfil } from '../perfil/perfil';

@Component({
  selector: 'app-experiencia',
  imports: [Nav,Footer,Perfil],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css'
})
export class Experiencia {
  protected readonly subTitulo = signal("Experiencia");
}
