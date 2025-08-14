import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from "../../../cards/card/card.component";

@Component({
  selector: 'app-active-cards',
  imports: [CardComponent],
  templateUrl: './Active-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveCardsComponent { }
