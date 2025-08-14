import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from "../../../cards/card/card.component";

@Component({
  selector: 'app-inactive-cards',
  imports: [CardComponent],
  templateUrl: './Inactive-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InactiveCardsComponent {

}
