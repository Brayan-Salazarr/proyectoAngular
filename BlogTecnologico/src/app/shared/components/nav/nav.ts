import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../themeService';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleOscuro();
  }
}
