import { Component, Input } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  /*
   * Declare a property that's an input value.
   * Input annotation declares that this property is to be provided by the parent component.
   * The parent component will set this property via:
   * <summary [stock]="stockData"></summary>
   */
  @Input() stock: any;

  // Used by the template NgClass directive to determine whether a CSS class should be applied.
  isNegative() {
    return (this.stock && this.stock.change < 0);
  }

  isPositive() {
    return (this.stock && this.stock.change > 0);
  }
}
