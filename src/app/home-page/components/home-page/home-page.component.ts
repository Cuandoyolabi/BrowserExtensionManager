import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../../header/components/header/header.component";

@Component({
  selector: 'home-page',
  imports: [HeaderComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
