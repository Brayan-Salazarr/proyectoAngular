import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './shared/components/nav/nav';
import { ThemeService } from './themeService';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass,Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BlogTecnologico');

  constructor(public themeService: ThemeService) {}
}
