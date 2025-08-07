import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../../header/components/header/header.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'home-page',
  imports: [HeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
