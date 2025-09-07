import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {
  protected readonly nombre = signal("Brayan Salazar Sánchez")
}
