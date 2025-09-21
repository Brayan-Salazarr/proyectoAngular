import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public  darkMode = false;

 toggleOscuro(): void {
    this.darkMode = !this.darkMode;
  }
}