import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkthemeService {

  private darkTheme = 'dark-theme';

  toggleTheme(): void{
    document.body.classList.toggle(this.darkTheme);
  }

  setDarkTheme(isDark: boolean): void {
    if(isDark){
      document.body.classList.add(this.darkTheme);
    } else {
      document.body.classList.remove(this.darkTheme);
    }
  }

  isDarkTheme(): boolean {
    return document.body.classList.contains(this.darkTheme);
  }
}


