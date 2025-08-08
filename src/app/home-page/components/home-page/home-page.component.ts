import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../../header/components/header/header.component";
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'home-page',
  imports: [HeaderComponent, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
