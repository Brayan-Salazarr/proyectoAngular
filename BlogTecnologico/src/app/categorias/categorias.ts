import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Header } from '../shared/components/header/header';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-categorias',
  imports: [Nav,Header,Footer],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias {

}
