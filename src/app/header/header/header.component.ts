import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DarkthemeService } from '../../services/darktheme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  constructor(public darkthemeService: DarkthemeService){}

  toggleTheme(){
    this.darkthemeService.toggleTheme();
  }



}
