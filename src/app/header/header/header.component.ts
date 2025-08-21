import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DarkthemeService } from '../../services/darktheme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
toggleTheme() {
throw new Error('Method not implemented.');
}



}
