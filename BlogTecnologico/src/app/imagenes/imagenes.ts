import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Header } from '../shared/components/header/header';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-imagenes',
  imports: [Nav,Header,Footer],
  templateUrl: './imagenes.html',
  styleUrl: './imagenes.css'
})
export class Imagenes {

}
