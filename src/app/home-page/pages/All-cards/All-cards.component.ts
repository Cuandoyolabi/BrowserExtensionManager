import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from "../../../cards/card/card.component";

@Component({
  selector: 'app-all-cards',
  imports: [CardComponent],
  templateUrl: './All-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllCardsComponent { }
