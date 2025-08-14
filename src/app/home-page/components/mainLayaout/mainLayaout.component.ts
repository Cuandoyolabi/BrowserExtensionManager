import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../../header/header/header.component";
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-main-layaout',
  imports: [HeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './mainLayaout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayaoutComponent { }
