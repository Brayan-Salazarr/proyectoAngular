import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Header } from '../shared/components/header/header';
import { Footer } from '../shared/components/footer/footer';
import { ImgmMovi } from '../shared/components/imgm-movi/imgm-movi';

@Component({
  selector: 'app-principal',
  imports: [Nav,Header,Footer,ImgmMovi],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {

}
