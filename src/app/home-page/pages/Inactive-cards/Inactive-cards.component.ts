import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-inactive-cards',
  imports: [],
  templateUrl: './Inactive-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InactiveCardsComponent { }
