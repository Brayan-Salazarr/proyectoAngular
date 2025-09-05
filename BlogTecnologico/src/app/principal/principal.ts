import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Header } from '../shared/components/header/header';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-principal',
  imports: [Nav,Header,Footer],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {

}
