import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../../header/header/header.component";
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CardComponent } from "../../../cards/card/card.component";

@Component({
  selector: 'home-page',
  imports: [HeaderComponent, RouterLink, RouterLinkActive, RouterModule, CardComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
